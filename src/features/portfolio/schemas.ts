import { z } from "zod";

export const projectSchema = z.object({
  title_fr: z.string().min(1, "Titre requis").max(100),
  title_en: z.string().min(1, "Title required").max(100),
  description_fr: z.string().min(1).max(2000),
  description_en: z.string().min(1).max(2000),
  tech_stack: z.array(z.string()).min(1, "Au moins une technologie"),
  image_url: z.string().url().optional().or(z.literal("")),
  github_url: z.string().url().optional().or(z.literal("")),
  live_url: z.string().url().optional().or(z.literal("")),
  order_index: z.number().int().default(0),
  published: z.boolean().default(false),
});

export const skillSchema = z.object({
  name_fr: z.string().min(1).max(50),
  name_en: z.string().min(1).max(50),
  category: z.enum(["dev", "design", "mobile", "network", "tools", "soft"]),
  level: z.number().int().min(0).max(100),
  icon_url: z.string().url().optional().or(z.literal("")),
  order_index: z.number().int().default(0),
  visible: z.boolean().default(true),
});

export const experienceSchema = z.object({
  role_fr: z.string().min(1).max(100),
  role_en: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  location: z.string().max(100).optional(),
  start_date: z.string().regex(/^\d{4}-\d{2}$/, "Format YYYY-MM"),
  end_date: z.string().regex(/^\d{4}-\d{2}$/).optional().or(z.literal("")),
  description_fr: z.string().max(2000).optional(),
  description_en: z.string().max(2000).optional(),
  logo_url: z.string().url().optional().or(z.literal("")),
  type: z.enum(["cdi", "cdd", "freelance", "volunteer", "internship"]),
});

export const aboutSchema = z.object({
  bio_short_fr: z.string().min(1).max(300),
  bio_short_en: z.string().min(1).max(300),
  bio_long_fr: z.string().min(1).max(3000),
  bio_long_en: z.string().min(1).max(3000),
  photo_url: z.string().url().optional().or(z.literal("")),
  cv_url: z.string().url().optional().or(z.literal("")),
  social_links: z.object({
    github: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal("")),
    whatsapp: z.string().optional(),
  }).optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type SkillInput = z.infer<typeof skillSchema>;
export type ExperienceInput = z.infer<typeof experienceSchema>;
export type AboutInput = z.infer<typeof aboutSchema>;
