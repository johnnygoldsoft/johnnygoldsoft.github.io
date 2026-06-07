"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Input } from "@/shared/ui/input";
import { slugify } from "@/shared/lib/utils";
import { Plus, Trash2, Pencil } from "lucide-react";

export default function AdminCategoriesPage({ params }: { params: { locale: string } }) {
  const [categories, setCategories] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ name_fr: "", name_en: "", slug: "", cover_url: "" });
  const supabase = createClient();

  async function load() {
    const { data } = await supabase.from("categories").select("*").order("name_fr");
    setCategories(data || []);
  }
  useEffect(() => { load(); }, []);

  async function handleSave() {
    if (!form.name_fr || !form.slug) return;
    if (editing) {
      await supabase.from("categories").update(form).eq("id", editing);
    } else {
      await supabase.from("categories").insert(form);
    }
    setForm({ name_fr: "", name_en: "", slug: "", cover_url: "" }); setShowForm(false); setEditing(null); load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette catégorie ?")) return;
    await supabase.from("categories").delete().eq("id", id);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Catégories boutique</h1>
        <button onClick={() => { setShowForm(true); setEditing(null); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">
          <Plus className="h-4 w-4" /> Nouvelle
        </button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-2xl p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Nom (FR) *</label><Input value={form.name_fr} onChange={e => setForm({...form, name_fr: e.target.value, slug: slugify(e.target.value)})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Name (EN)</label><Input value={form.name_en} onChange={e => setForm({...form, name_en: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Slug *</label><Input value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Image URL</label><Input type="url" value={form.cover_url} onChange={e => setForm({...form, cover_url: e.target.value})} /></div>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => { setShowForm(false); setEditing(null); }} className="px-4 py-2 rounded-xl border text-sm hover:bg-muted">Annuler</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">Enregistrer</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {categories.map(cat => (
          <div key={cat.id} className="flex items-center justify-between p-4 bg-card border rounded-xl hover:border-primary/20">
            <div>
              <span className="font-medium text-sm">{cat.name_fr}</span>
              {cat.name_en && <span className="text-muted-foreground text-xs ml-2">/ {cat.name_en}</span>}
              <div className="text-xs text-muted-foreground font-mono mt-0.5">{cat.slug}</div>
            </div>
            <div className="flex gap-1.5">
              <button onClick={() => { setForm({ name_fr: cat.name_fr, name_en: cat.name_en||"", slug: cat.slug, cover_url: cat.cover_url||"" }); setEditing(cat.id); setShowForm(true); }}
                className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"><Pencil className="h-4 w-4" /></button>
              <button onClick={() => handleDelete(cat.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
        {!categories.length && <div className="text-center py-12 text-muted-foreground">Aucune catégorie.</div>}
      </div>
    </div>
  );
}
