import { getCollection } from 'astro:content';

const siteUrl = 'https://www.nselib.com';

const xmlEscape = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

export async function GET() {
	const scripts = await getCollection('scripts');
	const urls = [
		{
			loc: `${siteUrl}/`,
			changefreq: 'daily',
			priority: '1.0'
		},
		...scripts.map((script) => ({
			loc: `${siteUrl}/scripts/${script.id}/`,
			changefreq: 'weekly',
			priority: '0.8'
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(entry) => `  <url>
    <loc>${xmlEscape(entry.loc)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
