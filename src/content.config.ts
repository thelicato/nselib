import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const scripts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/scripts' }),
	schema: z.object({
		title: z.string(),
		source: z.enum(['official', 'unofficial']),
		category: z.string(),
		shortDescription: z.string(),
		risk: z.enum(['safe', 'informational', 'intrusive']),
		tags: z.array(z.string()).default([]),
		protocols: z.array(z.string()).default([]),
		ports: z.array(z.string()).default([]),
		usage: z.string(),
		outputPreview: z.array(z.string()).default([]),
		author: z.string(),
		lastReviewed: z.string()
	})
});

export const collections = {
	scripts
};
