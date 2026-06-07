import { createClient } from "@/shared/lib/supabase/server";

export async function getProjects(locale: string = "fr") {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("order_index");
  if (error) return [];
  return data.map((p: any) => ({
    ...p,
    title: locale === "en" ? p.title_en : p.title_fr,
    description: locale === "en" ? p.description_en : p.description_fr,
  }));
}

export async function getProjectBySlug(slug: string, locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (!data) return null;
  return {
    ...data,
    title: locale === "en" ? data.title_en : data.title_fr,
    description: locale === "en" ? data.description_en : data.description_fr,
  };
}

export async function getSkills(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("skills")
    .select("*")
    .eq("visible", true)
    .order("order_index");
  return (data || []).map((s: any) => ({
    ...s,
    name: locale === "en" ? s.name_en : s.name_fr,
  }));
}

export async function getExperiences(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("experiences")
    .select("*")
    .order("start_date", { ascending: false });
  return (data || []).map((e: any) => ({
    ...e,
    role: locale === "en" ? e.role_en : e.role_fr,
    description: locale === "en" ? e.description_en : e.description_fr,
  }));
}

export async function getAbout(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase.from("about").select("*").single();
  if (!data) return null;
  return {
    ...data,
    bio_short: locale === "en" ? data.bio_short_en : data.bio_short_fr,
    bio_long: locale === "en" ? data.bio_long_en : data.bio_long_fr,
  };
}

export async function getServices(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("active", true)
    .order("order_index");
  return (data || []).map((s: any) => ({
    ...s,
    title: locale === "en" ? s.title_en : s.title_fr,
    description: locale === "en" ? s.description_en : s.description_fr,
  }));
}

export async function getTestimonials(locale: string = "fr") {
  const supabase = await createClient();
  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .eq("visible", true);
  return (data || []).map((t: any) => ({
    ...t,
    quote: locale === "en" ? t.quote_en : t.quote_fr,
  }));
}
