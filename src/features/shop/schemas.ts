import { z } from "zod";

export const categorySchema = z.object({
  name_fr: z.string().min(1).max(100),
  name_en: z.string().min(1).max(100),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  cover_url: z.string().url().optional().or(z.literal("")),
});

export const productSchema = z.object({
  name_fr: z.string().min(1).max(200),
  name_en: z.string().min(1).max(200),
  description_fr: z.string().min(1).max(2000),
  description_en: z.string().min(1).max(2000),
  price_info: z.string().max(100).optional(),
  buy_url: z.string().url("URL d'achat invalide"),
  image_url: z.string().url().optional().or(z.literal("")),
  category_id: z.string().uuid("Catégorie invalide"),
  published: z.boolean().default(false),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email("Email invalide"),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
  service: z.string().optional(),
});

export type CategoryInput = z.infer<typeof categorySchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
