import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    image: image(),
    category: z.string(),
    featured: z.boolean().default(false),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    readTimeInMinutes: z.number(),
    imageCaption: z.string().optional(),
  })
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string(),
    order: z.number(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  blog,
  services
};