import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        lang: z.enum(['en', 'it']),
        tags: z.array(z.string()),
        image: z.string().optional(), // Percorso immagine (es: "/images/proj1.png")
        link: z.string().url().optional(), // Link al sito live
        github: z.string().url().optional(), // Link alla repo
        featured: z.boolean().default(false),
        pubDate: z.date(),
    }),
});

export const collections = {
    'projects': projectsCollection,
};