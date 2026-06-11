"use client";

import { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/client";
import { TiptapEditor } from "@/features/blog/components/TiptapEditor";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { slugify } from "@/shared/lib/utils";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = use(params);
  const router = useRouter();
  const supabase = createClient();
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

  useEffect(() => {
    supabase
      .from("articles")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        if (data)
          setForm({
            title_fr: data.title_fr || "",
            title_en: data.title_en || "",
            slug: data.slug || "",
            content_fr: data.content_fr || "",
            content_en: data.content_en || "",
            excerpt_fr: data.excerpt_fr || "",
            excerpt_en: data.excerpt_en || "",
            tags: (data.tags || []).join(", "),
            published: data.published || false,
          });
      });
  }, [id]);

  async function handleSave() {
    setLoading(true);
    const tags = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    await supabase
      .from("articles")
      .update({
        ...form,
        tags,
        ...(form.published ? { published_at: new Date().toISOString() } : {}),
      })
      .eq("id", id);
    setLoading(false);
    router.push(`/${locale}/admin/blog`);
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}/admin/blog`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Modifier l'article</h1>
        </div>
        <Button onClick={handleSave} disabled={loading} className="gap-2">
          <Save className="h-4 w-4" />
          {loading ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Titre (FR) *
            </label>
            <Input
              value={form.title_fr}
              onChange={(e) =>
                setForm({
                  ...form,
                  title_fr: e.target.value,
                  slug: slugify(e.target.value),
                })
              }
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Title (EN)
            </label>
            <Input
              value={form.title_en}
              onChange={(e) => setForm({ ...form, title_en: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Slug
            </label>
            <Input
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Tags (virgule)
            </label>
            <Input
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Contenu FR *
          </label>
          <TiptapEditor
            content={form.content_fr}
            onChange={(html) => setForm({ ...form, content_fr: html })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Content EN
          </label>
          <TiptapEditor
            content={form.content_en}
            onChange={(html) => setForm({ ...form, content_en: html })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Extrait FR
            </label>
            <Textarea
              rows={2}
              value={form.excerpt_fr}
              onChange={(e) => setForm({ ...form, excerpt_fr: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Excerpt EN
            </label>
            <Textarea
              rows={2}
              value={form.excerpt_en}
              onChange={(e) => setForm({ ...form, excerpt_en: e.target.value })}
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
            Publier
          </label>
        </div>
      </div>
    </div>
  );
}
