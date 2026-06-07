import { z } from "zod";

export const serviceSchema = z.object({
  title_fr: z.string().min(1).max(100),
  title_en: z.string().min(1).max(100),
  description_fr: z.string().min(1).max(1000),
  description_en: z.string().min(1).max(1000),
  price_info: z.string().max(100).optional(),
  icon_url: z.string().url().optional().or(z.literal("")),
  order_index: z.number().int().default(0),
  active: z.boolean().default(true),
});

export type ServiceInput = z.infer<typeof serviceSchema>;
