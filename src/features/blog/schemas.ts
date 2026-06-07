import { z } from "zod";

export const articleSchema = z.object({
  title_fr: z.string().min(1).max(200),
  title_en: z.string().min(1).max(200),
  slug: z.string().min(1).max(200).regex(/^[a-z0-9-]+$/),
  content_fr: z.string().min(1),
  content_en: z.string().min(1),
  excerpt_fr: z.string().max(300).optional(),
  excerpt_en: z.string().max(300).optional(),
  cover_url: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
});

export type ArticleInput = z.infer<typeof articleSchema>;
