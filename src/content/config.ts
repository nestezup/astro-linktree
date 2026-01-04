import { defineCollection, z } from 'astro:content';

const wikiCollection = defineCollection({
    type: 'content', // v2.5+ 'content' | 'data'
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'wiki': wikiCollection,
};
