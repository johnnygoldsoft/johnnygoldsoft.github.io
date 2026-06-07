"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { createAdminClient } from "@/shared/lib/supabase/server";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Badge } from "@/shared/ui/badge";
import { Plus, Trash2, Pencil, Star } from "lucide-react";

export default function AdminTestimonialsPage({ params }: { params: { locale: string } }) {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ client_name: "", role: "", company: "", quote_fr: "", quote_en: "", rating: 5, visible: true });

  const supabase = createClient();

  async function load() {
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    setTestimonials(data || []);
  }

  useEffect(() => { load(); }, []);

  async function handleSave() {
    if (editing) {
      await supabase.from("testimonials").update(form).eq("id", editing);
    } else {
      await supabase.from("testimonials").insert(form);
    }
    setForm({ client_name: "", role: "", company: "", quote_fr: "", quote_en: "", rating: 5, visible: true });
    setShowForm(false); setEditing(null); load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce témoignage ?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Témoignages</h1>
        <Button className="gap-2" onClick={() => setShowForm(true)}><Plus className="h-4 w-4" /> Nouveau</Button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-xl p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Nom client *" value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} />
            <Input placeholder="Poste / Rôle" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
            <Input placeholder="Entreprise" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Citation (FR) *</label>
              <Textarea rows={3} value={form.quote_fr} onChange={e => setForm({ ...form, quote_fr: e.target.value })} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Quote (EN) *</label>
              <Textarea rows={3} value={form.quote_en} onChange={e => setForm({ ...form, quote_en: e.target.value })} /></div>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Note :</label>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setForm({ ...form, rating: n })} className={`text-xl ${n <= form.rating ? "text-yellow-400" : "text-muted"}`}>★</button>
            ))}
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => { setShowForm(false); setEditing(null); }}>Annuler</Button>
            <Button onClick={handleSave}>Enregistrer</Button>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {testimonials.map(t => (
          <div key={t.id} className="bg-card border rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">{t.client_name}</span>
                {t.company && <span className="text-xs text-muted-foreground">· {t.company}</span>}
                <div className="flex gap-0.5 ml-2">{Array.from({length: t.rating}).map((_,i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}</div>
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.quote_fr}"</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => { setForm({ client_name: t.client_name, role: t.role||"", company: t.company||"", quote_fr: t.quote_fr, quote_en: t.quote_en, rating: t.rating, visible: t.visible }); setEditing(t.id); setShowForm(true); }}
                className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground"><Pencil className="h-4 w-4" /></button>
              <button onClick={() => handleDelete(t.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
