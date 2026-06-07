"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { formatDate } from "@/shared/lib/utils";

export default function AdminBlogPage({ params }: { params: { locale: string } }) {
  const [articles, setArticles] = useState<any[]>([]);
  const supabase = createClient();
  const { locale } = React.use(params);

  async function load() {
    const { data } = await supabase.from("articles").select("id, title_fr, title_en, slug, published, published_at, tags")
      .order("created_at", { ascending: false });
    setArticles(data || []);
  }

  useEffect(() => { load(); }, []);

  async function togglePublished(id: string, current: boolean) {
    await supabase.from("articles").update({ published: !current, ...((!current) ? { published_at: new Date().toISOString() } : {}) }).eq("id", id);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cet article ?")) return;
    await supabase.from("articles").delete().eq("id", id);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Link href={`/${locale}/admin/blog/new`}>
          <Button className="gap-2"><Plus className="h-4 w-4" /> Nouvel article</Button>
        </Link>
      </div>
      <div className="bg-card border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Titre</th>
              <th className="text-left px-4 py-3 font-medium">Tags</th>
              <th className="text-left px-4 py-3 font-medium">Statut</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {articles.map(article => (
              <tr key={article.id} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="font-medium">{article.title_fr}</div>
                  <div className="text-xs text-muted-foreground">{article.slug}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {article.tags?.slice(0, 2).map((t: string) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={article.published ? "default" : "secondary"}>{article.published ? "Publié" : "Brouillon"}</Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => togglePublished(article.id, article.published)} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                      {article.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <Link href={`/${locale}/admin/blog/${article.id}`}><button className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground"><Pencil className="h-4 w-4" /></button></Link>
                    <button onClick={() => handleDelete(article.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!articles.length && (
          <div className="text-center py-12 text-muted-foreground">
            Aucun article. <Link href={`/${locale}/admin/blog/new`} className="text-primary underline">Créez le premier</Link>
          </div>
        )}
      </div>
    </div>
  );
}
