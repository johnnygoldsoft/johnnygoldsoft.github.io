"use client";
import React from "react";
import { useState, useEffect, use } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { motion } from "framer-motion";
import { Plus, Trash2, Pencil, ExternalLink, Eye, EyeOff } from "lucide-react";

export default function AdminProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({
    name_fr: "",
    name_en: "",
    description_fr: "",
    description_en: "",
    price_info: "",
    buy_url: "",
    image_url: "",
    category_id: "",
    published: false,
  });
  const supabase = createClient();
  // const locale = params.locale;
  const { locale } = use(params);

  async function load() {
    const [{ data: prods }, { data: cats }] = await Promise.all([
      supabase
        .from("products")
        .select("*, categories(name_fr)")
        .order("created_at", { ascending: false }),
      supabase.from("categories").select("*").order("name_fr"),
    ]);
    setProducts(prods || []);
    setCategories(cats || []);
  }
  useEffect(() => {
    load();
  }, []);

  async function handleSave() {
    if (!form.name_fr || !form.buy_url) {
      alert("Nom FR et URL d'achat requis");
      return;
    }
    if (editing) {
      await supabase.from("products").update(form).eq("id", editing);
    } else {
      await supabase.from("products").insert(form);
    }
    reset();
    load();
  }

  function reset() {
    setForm({
      name_fr: "",
      name_en: "",
      description_fr: "",
      description_en: "",
      price_info: "",
      buy_url: "",
      image_url: "",
      category_id: "",
      published: false,
    });
    setShowForm(false);
    setEditing(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce produit ?")) return;
    await supabase.from("products").delete().eq("id", id);
    load();
  }

  async function togglePublished(id: string, val: boolean) {
    await supabase.from("products").update({ published: !val }).eq("id", id);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Produits boutique</h1>
        <div className="flex gap-2">
          <a
            href={`/${locale}/admin/shop/categories`}
            className="px-4 py-2 rounded-xl border border-border text-sm hover:bg-muted transition-colors"
          >
            Catégories
          </a>
          <button
            onClick={() => {
              reset();
              setShowForm(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold"
          >
            <Plus className="h-4 w-4" /> Nouveau
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-card border rounded-2xl p-6 mb-6 space-y-4">
          <h2 className="font-semibold">
            {editing ? "Modifier" : "Nouveau produit"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">
                Nom (FR) *
              </label>
              <Input
                value={form.name_fr}
                onChange={(e) => setForm({ ...form, name_fr: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Name (EN)</label>
              <Input
                value={form.name_en}
                onChange={(e) => setForm({ ...form, name_en: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">
                Description (FR)
              </label>
              <Textarea
                rows={3}
                value={form.description_fr}
                onChange={(e) =>
                  setForm({ ...form, description_fr: e.target.value })
                }
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">
                Description (EN)
              </label>
              <Textarea
                rows={3}
                value={form.description_en}
                onChange={(e) =>
                  setForm({ ...form, description_en: e.target.value })
                }
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">
                URL d'achat * (lien externe)
              </label>
              <Input
                type="url"
                value={form.buy_url}
                onChange={(e) => setForm({ ...form, buy_url: e.target.value })}
                placeholder="https://gumroad.com/..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">
                Prix / Tarif
              </label>
              <Input
                value={form.price_info}
                onChange={(e) =>
                  setForm({ ...form, price_info: e.target.value })
                }
                placeholder="25 000 FCFA"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">URL Image</label>
              <Input
                type="url"
                value={form.image_url}
                onChange={(e) =>
                  setForm({ ...form, image_url: e.target.value })
                }
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Catégorie</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                value={form.category_id}
                onChange={(e) =>
                  setForm({ ...form, category_id: e.target.value })
                }
              >
                <option value="">Sans catégorie</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name_fr}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="pub"
              checked={form.published}
              onChange={(e) =>
                setForm({ ...form, published: e.target.checked })
              }
              className="w-4 h-4"
            />
            <label htmlFor="pub" className="text-sm">
              Publier immédiatement
            </label>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl border text-sm hover:bg-muted"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold"
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}

      <div className="bg-card border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Produit</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                Catégorie
              </th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                Prix
              </th>
              <th className="text-left px-4 py-3 font-medium">Statut</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-muted/20">
                <td className="px-4 py-3">
                  <div className="font-medium">{p.name_fr}</div>
                  {p.name_en && (
                    <div className="text-xs text-muted-foreground">
                      {p.name_en}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-muted-foreground text-xs">
                  {p.categories?.name_fr || "—"}
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-xs font-medium text-gold">
                  {p.price_info || "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${p.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                  >
                    {p.published ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <a
                      href={p.buy_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => togglePublished(p.id, p.published)}
                      className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
                    >
                      {p.published ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setForm({
                          name_fr: p.name_fr,
                          name_en: p.name_en || "",
                          description_fr: p.description_fr || "",
                          description_en: p.description_en || "",
                          price_info: p.price_info || "",
                          buy_url: p.buy_url,
                          image_url: p.image_url || "",
                          category_id: p.category_id || "",
                          published: p.published,
                        });
                        setEditing(p.id);
                        setShowForm(true);
                      }}
                      className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!products.length && (
          <div className="text-center py-12 text-muted-foreground">
            Aucun produit.{" "}
            <button
              onClick={() => setShowForm(true)}
              className="text-primary underline"
            >
              Créer le premier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
