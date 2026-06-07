import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://johnnygoldsoft.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const routes = ["/", "/a-propos", "/projets", "/competences", "/experience", "/services", "/temoignages", "/blog", "/boutique", "/contact"];
  const enRoutes = ["/", "/about", "/projects", "/skills", "/experience", "/services", "/testimonials", "/blog", "/shop", "/contact"];

  const pages: MetadataRoute.Sitemap = [];
  locales.forEach((locale, i) => {
    const routeList = i === 0 ? routes : enRoutes;
    routeList.forEach((route) => {
      pages.push({
        url: `${BASE_URL}/${locale}${route === "/" ? "" : route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.8,
      });
    });
  });
  return pages;
}
