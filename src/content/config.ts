import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Global Tax', 'SAP 전환', 'Tax Compliance', 'AX']),
    author: z.string().default('도상 컨설팅팀'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readMin: z.number().default(8),
  }),
});

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.enum(['DAS', 'RDS', 'DBS']),
    name: z.string(),
    tagline: z.string(),
    status: z.enum(['Available', 'In Development', 'Pilot']),
    platform: z.string(),
    deployment: z.string(),
    timeToValue: z.string(),
  }),
});

export const collections = { insights, solutions };
