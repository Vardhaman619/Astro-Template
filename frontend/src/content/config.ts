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
    cta: z.object({
      enable: z.boolean().default(false),
      heading: z.string().optional().default("Make an Appointment Today"),
      buttons: z.array(z.object({
        text: z.string(),
        link: z.string(),
        type: z.enum(["primary", "secondary"]),
        icon: z.string()
      })).optional().default([{ text: "Call Now", link: "/", type: "primary", icon: "lucide:phone" }, { text: "Get Quote", link: "/", type: "primary", icon: "lucide:mail" }])
    }).optional()
  })
});

const services = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: image(),
    order: z.number(),
    featured: z.boolean().default(false),
    serviceName: z.string(),
    process: z.array(z.string()),
    benefits: z.array(z.string()),
    whyChooseUs: z.array(z.string()),
  })
});

export const collections = {
  blog,
  services
};