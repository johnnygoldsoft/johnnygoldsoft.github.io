"use client";

import { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/client";
import { updateProject } from "@/features/portfolio/actions";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EditProjectPage({
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
    description_fr: "",
    description_en: "",
    tech_stack: "",
    github_url: "",
    live_url: "",
    image_url: "",
    order_index: 0,
    published: false,
  });

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        if (data)
          setForm({
            title_fr: data.title_fr || "",
            title_en: data.title_en || "",
            description_fr: data.description_fr || "",
            description_en: data.description_en || "",
            tech_stack: (data.tech_stack || []).join(", "),
            github_url: data.github_url || "",
            live_url: data.live_url || "",
            image_url: data.image_url || "",
            order_index: data.order_index || 0,
            published: data.published || false,
          });
      });
  }, [id]);

  async function handleSave() {
    setLoading(true);
    const data = {
      ...form,
      tech_stack: form.tech_stack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    await updateProject(id, data);
    setLoading(false);
    router.push(`/${locale}/admin/projects`);
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}/admin/projects`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Modifier le projet</h1>
        </div>
        <Button onClick={handleSave} disabled={loading} className="gap-2">
          <Save className="h-4 w-4" />
          {loading ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </div>

      <div className="space-y-5 border border-border rounded-xl bg-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Titre (FR) *
            </label>
            <Input
              value={form.title_fr}
              onChange={(e) => setForm({ ...form, title_fr: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Title (EN) *
            </label>
            <Input
              value={form.title_en}
              onChange={(e) => setForm({ ...form, title_en: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Description (FR) *
            </label>
            <Textarea
              rows={3}
              value={form.description_fr}
              onChange={(e) =>
                setForm({ ...form, description_fr: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Description (EN) *
            </label>
            <Textarea
              rows={3}
              value={form.description_en}
              onChange={(e) =>
                setForm({ ...form, description_en: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Technologies (virgule)
          </label>
          <Input
            value={form.tech_stack}
            onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
            placeholder="React, TypeScript, Supabase"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              GitHub URL
            </label>
            <Input
              type="url"
              value={form.github_url}
              onChange={(e) => setForm({ ...form, github_url: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Live URL
            </label>
            <Input
              type="url"
              value={form.live_url}
              onChange={(e) => setForm({ ...form, live_url: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Image URL
            </label>
            <Input
              type="url"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Ordre
            </label>
            <Input
              type="number"
              value={form.order_index}
              onChange={(e) =>
                setForm({ ...form, order_index: parseInt(e.target.value) || 0 })
              }
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="pub"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="pub" className="text-sm font-medium">
            Publié
          </label>
        </div>
      </div>
    </div>
  );
}
