import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const LIST_URL = 'https://nmap.org/nsedoc/scripts';
const PAGE_BASE_URL = 'https://nmap.org/nsedoc/scripts/';
const OUTPUT_DIR = path.resolve('src/content/scripts/official');
const SOURCE_OUTPUT_DIR = path.resolve('src/data/script-source/official');
const CONCURRENCY = 8;
const execFileAsync = promisify(execFile);

const decodeHtml = (value) =>
	value
		.replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
		.replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&mdash;/g, '—')
		.replace(/&ndash;/g, '–')
		.replace(/&hellip;/g, '...');

const stripTags = (value) =>
	decodeHtml(
		value
			.replace(/<br\s*\/?>/gi, '\n')
			.replace(/<\/p>/gi, '\n\n')
			.replace(/<[^>]+>/g, ' ')
	)
		.replace(/[ \t]+\n/g, '\n')
		.replace(/\n{3,}/g, '\n\n')
		.replace(/[ \t]{2,}/g, ' ')
		.trim();

const escapeYamlString = (value) => JSON.stringify(value);

const titleCase = (value) =>
	value
		.split(/[-_\s]+/g)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');

const deriveRisk = (categories) => {
	const intrusiveCategories = new Set(['brute', 'dos', 'exploit', 'fuzzer', 'intrusive']);

	if (categories.includes('safe')) {
		return 'safe';
	}

	if (categories.some((category) => intrusiveCategories.has(category))) {
		return 'intrusive';
	}

	return 'informational';
};

const extractFirstMatch = (html, regex) => {
	const match = html.match(regex);
	return match?.[1]?.trim() ?? '';
};

const extractCategories = (html) => {
	const block = extractFirstMatch(html, /Categories:\s*([\s\S]*?)<br>/i);
	return [...block.matchAll(/>([^<]+)<\/a>/g)].map((match) => match[1].trim().toLowerCase());
};

const extractParagraphs = (html) =>
	[...html.matchAll(/<p>([\s\S]*?)<\/p>/gi)]
		.map((match) => stripTags(match[1]))
		.filter(Boolean);

const extractSummaryParagraphs = (html) => {
	const block = extractFirstMatch(
		html,
		/<h2 id="summary">Script Summary<\/h2>([\s\S]*?)(?=<h2 id="script-args"|<h2 id="usage"|<h2 id="output"|<h3>|<\/div>\s*<\/div>)/i
	);

	return extractParagraphs(block);
};

const extractPreBlock = (html, id) => {
	const block = extractFirstMatch(
		html,
		new RegExp(`<h2 id="${id}">[\\s\\S]*?<pre>([\\s\\S]*?)<\\/pre>`, 'i')
	);

	return decodeHtml(block).replace(/\r/g, '').trim();
};

const parseListEntries = (html) => {
	const entries = [];
	const regex =
		/<dt><a href="\.\.\/scripts\/([^"]+)\.html">([^<]+)<\/a>\s*<dd>([\s\S]*?)(?=<dt><a href="\.\.\/scripts\/|<\/dl>)/gi;

	for (const match of html.matchAll(regex)) {
		entries.push({
			slug: match[1].trim(),
			title: match[2].trim(),
			description: stripTags(match[3])
		});
	}

	return entries;
};

const toMarkdownFile = (entry) => {
	const lines = [
		'---',
		`title: ${escapeYamlString(entry.title)}`,
		'source: official',
		`category: ${escapeYamlString(entry.category)}`
	];

	if (entry.categories.length > 0) {
		lines.push('categories:');
		for (const category of entry.categories) {
			lines.push(`  - ${escapeYamlString(category)}`);
		}
	} else {
		lines.push('categories: []');
	}

	lines.push(`shortDescription: ${escapeYamlString(entry.shortDescription)}`);
	lines.push(`risk: ${entry.risk}`);

	if (entry.tags.length > 0) {
		lines.push('tags:');
		for (const tag of entry.tags) {
			lines.push(`  - ${escapeYamlString(tag)}`);
		}
	} else {
		lines.push('tags: []');
	}

	if (entry.scriptTypes.length > 0) {
		lines.push('scriptTypes:');
		for (const scriptType of entry.scriptTypes) {
			lines.push(`  - ${escapeYamlString(scriptType)}`);
		}
	} else {
		lines.push('scriptTypes: []');
	}

	lines.push('protocols: []');
	lines.push('ports: []');
	lines.push(`usage: ${escapeYamlString(entry.usage)}`);

	if (entry.outputPreview.length > 0) {
		lines.push('outputPreview:');
		for (const line of entry.outputPreview) {
			lines.push(`  - ${escapeYamlString(line)}`);
		}
	} else {
		lines.push('outputPreview: []');
	}

	lines.push(`author: ${escapeYamlString(entry.author)}`);
	lines.push('reference:');
	lines.push(`  label: ${escapeYamlString(entry.reference.label)}`);
	lines.push(`  url: ${escapeYamlString(entry.reference.url)}`);
	lines.push(`documentationUrl: ${escapeYamlString(entry.documentationUrl)}`);
	lines.push('---');
	lines.push('');
	lines.push(...entry.bodyParagraphs);
	lines.push('');

	return `${lines.join('\n')}`;
};

const fetchText = async (url) => {
	const { stdout } = await execFileAsync('curl', [
		'-L',
		'--silent',
		'--show-error',
		'--max-time',
		'20',
		url
	]);

	return stdout;
};

const listHtml = await fetchText(LIST_URL);
const listEntries = parseListEntries(listHtml);

if (listEntries.length === 0) {
	throw new Error('No official NSE scripts were parsed from the list page.');
}

await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
await fs.mkdir(OUTPUT_DIR, { recursive: true });
await fs.rm(SOURCE_OUTPUT_DIR, { recursive: true, force: true });
await fs.mkdir(SOURCE_OUTPUT_DIR, { recursive: true });

let completed = 0;
const workerCount = Math.min(CONCURRENCY, listEntries.length);

const queue = Array.from({ length: workerCount }, async (_, workerIndex) => {
	for (let index = workerIndex; index < listEntries.length; index += workerCount) {
		const listEntry = listEntries[index];
		const documentationUrl = `${PAGE_BASE_URL}${listEntry.slug}.html`;
		const pageHtml = await fetchText(documentationUrl);
		const categories = extractCategories(pageHtml);
		const summaryParagraphs = extractSummaryParagraphs(pageHtml);
		const usage = extractPreBlock(pageHtml, 'usage');
		const outputPreview = extractPreBlock(pageHtml, 'output')
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean)
			.slice(0, 6);
		const downloadUrl =
			extractFirstMatch(pageHtml, /Download:\s*<a href="([^"]+)"/i) ||
			`https://svn.nmap.org/nmap/scripts/${listEntry.slug}.nse`;
		const scriptContent = await fetchText(downloadUrl);
		const scriptTypes = stripTags(
			extractFirstMatch(pageHtml, /Script types<\/a>:\s*([\s\S]*?)<br>/i)
		)
			.split(',')
			.map((value) => value.trim().toLowerCase())
			.filter(Boolean);

		const shortDescription = summaryParagraphs[0] || listEntry.description || listEntry.title;
		const bodyParagraphs = summaryParagraphs.length > 0 ? summaryParagraphs : [listEntry.description];
		const firstCategory = categories[0] ?? 'info';
		const entry = {
			title: listEntry.title,
			category: titleCase(firstCategory),
			categories,
			shortDescription,
			risk: deriveRisk(categories),
			tags: [...new Set([...categories, ...scriptTypes])],
			scriptTypes,
			usage,
			outputPreview,
			author: 'Nmap Project',
			reference: {
				label: 'View Official Script Source',
				url: downloadUrl
			},
			documentationUrl,
			bodyParagraphs
		};

		const filePath = path.join(OUTPUT_DIR, `${listEntry.slug}.md`);
		const sourceFilePath = path.join(SOURCE_OUTPUT_DIR, `${listEntry.slug}.nse`);
		await fs.writeFile(filePath, toMarkdownFile(entry), 'utf8');
		await fs.writeFile(sourceFilePath, scriptContent, 'utf8');

		completed += 1;
		if (completed % 50 === 0 || completed === listEntries.length) {
			console.log(`Imported ${completed}/${listEntries.length} official scripts`);
		}
	}
});

await Promise.all(queue);
console.log(`Official script import complete: ${listEntries.length} scripts written to ${OUTPUT_DIR}`);
