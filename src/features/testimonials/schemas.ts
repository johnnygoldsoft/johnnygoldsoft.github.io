import { z } from "zod";

export const testimonialSchema = z.object({
  client_name: z.string().min(1).max(100),
  role: z.string().max(100).optional(),
  company: z.string().max(100).optional(),
  logo_url: z.string().url().optional().or(z.literal("")),
  photo_url: z.string().url().optional().or(z.literal("")),
  quote_fr: z.string().min(10).max(500),
  quote_en: z.string().min(10).max(500),
  rating: z.number().int().min(1).max(5).default(5),
  visible: z.boolean().default(true),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;
