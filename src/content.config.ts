import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const scripts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/scripts' }),
	schema: z.object({
		title: z.string(),
		source: z.enum(['official', 'unofficial']),
		category: z.string(),
		categories: z.array(z.string()).default([]),
		shortDescription: z.string(),
		risk: z.enum(['safe', 'informational', 'intrusive']),
		tags: z.array(z.string()).default([]),
		scriptTypes: z.array(z.string()).default([]),
		protocols: z.array(z.string()).default([]),
		ports: z.array(z.string()).default([]),
		usage: z.string().default(''),
		outputPreview: z.array(z.string()).default([]),
		author: z.string().default('Unknown'),
		reference: z
			.object({
				label: z.string(),
				url: z.string().url()
			})
			.optional(),
		documentationUrl: z.string().url().optional()
	})
});

export const collections = {
	scripts
};
