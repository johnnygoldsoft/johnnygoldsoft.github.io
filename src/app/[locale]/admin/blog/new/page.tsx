"use client";
// import React from "react";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/client";
import { TiptapEditor } from "@/features/blog/components/TiptapEditor";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { slugify } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewArticlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title_fr: "",
    title_en: "",
    slug: "",
    content_fr: "",
    content_en: "",
    excerpt_fr: "",
    excerpt_en: "",
    tags: "",
    published: false,
  });
  const { locale } = use(params);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const tags = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const { error } = await supabase
      .from("articles")
      .insert({ ...form, tags, slug: form.slug || slugify(form.title_fr) });
    if (!error) router.push(`/${locale}/admin/blog`);
    setLoading(false);
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href={`/${locale}/admin/blog`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Nouvel article</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Titre (FR) *</label>
            <Input
              value={form.title_fr}
              onChange={(e) =>
                setForm({
                  ...form,
                  title_fr: e.target.value,
                  slug: slugify(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Title (EN) *</label>
            <Input
              value={form.title_en}
              onChange={(e) => setForm({ ...form, title_en: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Slug (URL)</label>
            <Input
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tags (virgule)</label>
            <Input
              placeholder="React, Next.js, Togo"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Contenu FR *</label>
          <TiptapEditor
            content={form.content_fr}
            onChange={(html) => setForm({ ...form, content_fr: html })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Content EN *</label>
          <TiptapEditor
            content={form.content_en}
            onChange={(html) => setForm({ ...form, content_en: html })}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Extrait FR</label>
            <Textarea
              rows={2}
              value={form.excerpt_fr}
              onChange={(e) => setForm({ ...form, excerpt_fr: e.target.value })}
              maxLength={300}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Excerpt EN</label>
            <Textarea
              rows={2}
              value={form.excerpt_en}
              onChange={(e) => setForm({ ...form, excerpt_en: e.target.value })}
              maxLength={300}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="published" className="text-sm font-medium">
            Publier maintenant
          </label>
        </div>
        <div className="flex gap-3 justify-end">
          <Link href={`/${locale}/admin/blog`}>
            <Button variant="outline" type="button">
              Annuler
            </Button>
          </Link>
          <Button type="submit" disabled={loading}>
            {loading ? "Enregistrement..." : "Créer l'article"}
          </Button>
        </div>
      </form>
    </div>
  );
}
