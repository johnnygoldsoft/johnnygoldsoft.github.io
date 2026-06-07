"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { motion } from "framer-motion";
import { Plus, Trash2, Pencil, ArrowUp, ArrowDown, Eye, EyeOff } from "lucide-react";

export default function AdminServicesPage({ params }: { params: { locale: string } }) {
  const [services, setServices] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title_fr: "", title_en: "", description_fr: "", description_en: "", price_info: "", icon_url: "", order_index: 0, active: true });
  const supabase = createClient();

  async function load() {
    const { data } = await supabase.from("services").select("*").order("order_index");
    setServices(data || []);
  }
  useEffect(() => { load(); }, []);

  async function handleSave() {
    if (!form.title_fr || !form.description_fr) return;
    if (editing) {
      await supabase.from("services").update(form).eq("id", editing);
    } else {
      await supabase.from("services").insert({ ...form, order_index: services.length });
    }
    setForm({ title_fr: "", title_en: "", description_fr: "", description_en: "", price_info: "", icon_url: "", order_index: 0, active: true });
    setShowForm(false); setEditing(null); load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce service ?")) return;
    await supabase.from("services").delete().eq("id", id);
    load();
  }

  async function toggleActive(id: string, active: boolean) {
    await supabase.from("services").update({ active: !active }).eq("id", id);
    load();
  }

  async function moveOrder(id: string, dir: number) {
    const idx = services.findIndex(s => s.id === id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= services.length) return;
    await Promise.all([
      supabase.from("services").update({ order_index: services[swapIdx].order_index }).eq("id", services[idx].id),
      supabase.from("services").update({ order_index: services[idx].order_index }).eq("id", services[swapIdx].id),
    ]);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Services & Prestations</h1>
        <button onClick={() => { setForm({ title_fr: "", title_en: "", description_fr: "", description_en: "", price_info: "", icon_url: "", order_index: 0, active: true }); setEditing(null); setShowForm(true); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">
          <Plus className="h-4 w-4" /> Nouveau service
        </button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-2xl p-6 mb-6 space-y-4">
          <h2 className="font-semibold">{editing ? "Modifier" : "Nouveau service"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Titre (FR) *</label><Input value={form.title_fr} onChange={e => setForm({...form, title_fr: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Title (EN)</label><Input value={form.title_en} onChange={e => setForm({...form, title_en: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Description (FR) *</label><Textarea rows={3} value={form.description_fr} onChange={e => setForm({...form, description_fr: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Description (EN)</label><Textarea rows={3} value={form.description_en} onChange={e => setForm({...form, description_en: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Tarif indicatif</label><Input placeholder="À partir de 150 000 FCFA" value={form.price_info} onChange={e => setForm({...form, price_info: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">URL Icône (optionnel)</label><Input type="url" value={form.icon_url} onChange={e => setForm({...form, icon_url: e.target.value})} /></div>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button onClick={() => { setShowForm(false); setEditing(null); }} className="px-4 py-2 rounded-xl border border-border text-sm hover:bg-muted">Annuler</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">Enregistrer</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {services.map((service, i) => (
          <motion.div key={service.id} layout
            className={`flex items-start gap-4 p-5 rounded-2xl border bg-card transition-all ${!service.active ? "opacity-50" : ""}`}>
            <div className="flex flex-col gap-1">
              <button onClick={() => moveOrder(service.id, -1)} disabled={i === 0} className="p-1 rounded hover:bg-muted disabled:opacity-20 transition-colors"><ArrowUp className="h-3.5 w-3.5" /></button>
              <button onClick={() => moveOrder(service.id, 1)} disabled={i === services.length - 1} className="p-1 rounded hover:bg-muted disabled:opacity-20 transition-colors"><ArrowDown className="h-3.5 w-3.5" /></button>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{service.title_fr}</div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{service.description_fr}</div>
              {service.price_info && <div className="text-xs font-medium text-gold mt-1">{service.price_info}</div>}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={() => toggleActive(service.id, service.active)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                {service.active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
              <button onClick={() => { setForm({ title_fr: service.title_fr, title_en: service.title_en || "", description_fr: service.description_fr, description_en: service.description_en || "", price_info: service.price_info || "", icon_url: service.icon_url || "", order_index: service.order_index, active: service.active }); setEditing(service.id); setShowForm(true); }}
                className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"><Pencil className="h-4 w-4" /></button>
              <button onClick={() => handleDelete(service.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="h-4 w-4" /></button>
            </div>
          </motion.div>
        ))}
        {!services.length && (
          <div className="text-center py-16 text-muted-foreground">
            <p>Aucun service. <button onClick={() => setShowForm(true)} className="text-primary underline">Créer le premier</button></p>
          </div>
        )}
      </div>
    </div>
  );
}
