import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/about": { fr: "/a-propos", en: "/about" },
    "/projects": { fr: "/projets", en: "/projects" },
    "/projects/[slug]": { fr: "/projets/[slug]", en: "/projects/[slug]" },
    "/skills": { fr: "/competences", en: "/skills" },
    "/experience": { fr: "/experience", en: "/experience" },
    "/services": { fr: "/services", en: "/services" },
    "/testimonials": { fr: "/temoignages", en: "/testimonials" },
    "/contact": { fr: "/contact", en: "/contact" },
    "/blog": { fr: "/blog", en: "/blog" },
    "/blog/[slug]": { fr: "/blog/[slug]", en: "/blog/[slug]" },
    "/shop": { fr: "/boutique", en: "/shop" },
    "/shop/[category]": { fr: "/boutique/[category]", en: "/shop/[category]" },
    "/shop/[category]/[id]": { fr: "/boutique/[category]/[id]", en: "/shop/[category]/[id]" },
  },
});

export const SITE_NAME = "Jean Claude SASSOU";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://johnnygoldsoft.dev";
