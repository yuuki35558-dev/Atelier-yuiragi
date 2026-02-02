import { defineCollection, z } from 'astro:content';

export const collections = {
  characters: defineCollection({
    schema: z.object({
      title: z.string(),
      age: z.number(),
      role: z.string(),
      category: z.string(), // ★追加
      order: z.number().optional(),
      image: z.string().optional(),
    }),
  }),
};
