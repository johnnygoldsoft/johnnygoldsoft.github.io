"use server";
import { createAdminClient } from "@/shared/lib/supabase/server";
import { createClient } from "@/shared/lib/supabase/server";
import { projectSchema, skillSchema, experienceSchema, aboutSchema } from "./schemas";
import { revalidatePath } from "next/cache";

async function checkAuth() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("Non autorisé");
  return session;
}

// PROJECTS
export async function createProject(formData: unknown) {
  await checkAuth();
  const parsed = projectSchema.safeParse(formData);
  if (!parsed.success) return { error: parsed.error.flatten() };
  const supabase = await createAdminClient();
  const { error } = await supabase.from("projects").insert(parsed.data);
  if (error) return { error: error.message };
  revalidatePath("/[locale]/projects", "page");
  return { success: true };
}

export async function updateProject(id: string, formData: unknown) {
  await checkAuth();
  const parsed = projectSchema.safeParse(formData);
  if (!parsed.success) return { error: parsed.error.flatten() };
  const supabase = await createAdminClient();
  const { error } = await supabase.from("projects").update(parsed.data).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/[locale]/projects", "page");
  return { success: true };
}

export async function deleteProject(id: string) {
  await checkAuth();
  const supabase = await createAdminClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/[locale]/projects", "page");
  return { success: true };
}

export async function toggleProjectPublished(id: string, published: boolean) {
  await checkAuth();
  const supabase = await createAdminClient();
  await supabase.from("projects").update({ published }).eq("id", id);
  revalidatePath("/[locale]/projects", "page");
}

// SKILLS
export async function upsertSkill(formData: unknown, id?: string) {
  await checkAuth();
  const parsed = skillSchema.safeParse(formData);
  if (!parsed.success) return { error: parsed.error.flatten() };
  const supabase = await createAdminClient();
  if (id) {
    await supabase.from("skills").update(parsed.data).eq("id", id);
  } else {
    await supabase.from("skills").insert(parsed.data);
  }
  revalidatePath("/[locale]/skills", "page");
  return { success: true };
}

export async function deleteSkill(id: string) {
  await checkAuth();
  const supabase = await createAdminClient();
  await supabase.from("skills").delete().eq("id", id);
  revalidatePath("/[locale]/skills", "page");
}

// EXPERIENCES
export async function upsertExperience(formData: unknown, id?: string) {
  await checkAuth();
  const parsed = experienceSchema.safeParse(formData);
  if (!parsed.success) return { error: parsed.error.flatten() };
  const supabase = await createAdminClient();
  if (id) {
    await supabase.from("experiences").update(parsed.data).eq("id", id);
  } else {
    await supabase.from("experiences").insert(parsed.data);
  }
  revalidatePath("/[locale]/experience", "page");
  return { success: true };
}

// ABOUT
export async function updateAbout(formData: unknown) {
  await checkAuth();
  const parsed = aboutSchema.safeParse(formData);
  if (!parsed.success) return { error: parsed.error.flatten() };
  const supabase = await createAdminClient();
  await supabase.from("about").upsert({ id: 1, ...parsed.data });
  revalidatePath("/[locale]/about", "page");
  return { success: true };
}
