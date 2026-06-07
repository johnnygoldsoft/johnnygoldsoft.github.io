import { createClient } from "@/shared/lib/supabase/server";

export async function getArticles(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("id, title_fr, title_en, slug, excerpt_fr, excerpt_en, cover_url, tags, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return (data || []).map((a: any) => ({
    ...a,
    title: locale === "en" ? a.title_en : a.title_fr,
    excerpt: locale === "en" ? a.excerpt_en : a.excerpt_fr,
  }));
}

export async function getArticleBySlug(slug: string, locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase.from("articles").select("*").eq("slug", slug).eq("published", true).single();
  if (!data) return null;
  return {
    ...data,
    title: locale === "en" ? data.title_en : data.title_fr,
    content: locale === "en" ? data.content_en : data.content_fr,
  };
}
