import { createClient } from "@/shared/lib/supabase/server";

export async function getCategories(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase.from("categories").select("*").order("name_fr");
  return (data || []).map((c: any) => ({ ...c, name: locale === "en" ? c.name_en : c.name_fr }));
}

export async function getProducts(locale: string = "fr", categorySlug?: string) {
  const supabase = await createClient();
  let query = supabase.from("products").select("*, categories(slug, name_fr, name_en)").eq("published", true);
  if (categorySlug) {
    const { data: cat } = await supabase.from("categories").select("id").eq("slug", categorySlug).single();
    if (cat) query = query.eq("category_id", cat.id);
  }
  const { data } = await query;
  return (data || []).map((p: any) => ({
    ...p, name: locale === "en" ? p.name_en : p.name_fr, description: locale === "en" ? p.description_en : p.description_fr,
  }));
}
