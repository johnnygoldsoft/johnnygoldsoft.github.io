"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { motion } from "framer-motion";
import { Plus, Trash2, Pencil, Calendar, Building2 } from "lucide-react";

const TYPES = ["cdi","cdd","freelance","volunteer","internship"];
const TYPE_LABELS: Record<string, string> = { cdi:"CDI", cdd:"CDD", freelance:"Freelance", volunteer:"Bénévolat", internship:"Stage" };
const TYPE_COLORS: Record<string, string> = { cdi:"bg-green-100 text-green-700", cdd:"bg-blue-100 text-blue-700", freelance:"bg-purple-100 text-purple-700", volunteer:"bg-orange-100 text-orange-700", internship:"bg-gray-100 text-gray-700" };

export default function AdminExperiencesPage({ params }: { params: { locale: string } }) {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ role_fr: "", role_en: "", company: "", location: "", start_date: "", end_date: "", description_fr: "", description_en: "", logo_url: "", type: "freelance" });
  const supabase = createClient();

  async function load() {
    const { data } = await supabase.from("experiences").select("*").order("start_date", { ascending: false });
    setExperiences(data || []);
  }
  useEffect(() => { load(); }, []);

  async function handleSave() {
    if (!form.role_fr || !form.company || !form.start_date) return;
    if (editing) {
      await supabase.from("experiences").update(form).eq("id", editing);
    } else {
      await supabase.from("experiences").insert(form);
    }
    resetForm(); load();
  }

  function resetForm() {
    setForm({ role_fr: "", role_en: "", company: "", location: "", start_date: "", end_date: "", description_fr: "", description_en: "", logo_url: "", type: "freelance" });
    setShowForm(false); setEditing(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette expérience ?")) return;
    await supabase.from("experiences").delete().eq("id", id);
    load();
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Expériences professionnelles</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">
          <Plus className="h-4 w-4" /> Nouvelle
        </button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-2xl p-6 mb-6 space-y-4">
          <h2 className="font-semibold">{editing ? "Modifier" : "Nouvelle expérience"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Poste (FR) *</label><Input value={form.role_fr} onChange={e => setForm({...form, role_fr: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Role (EN)</label><Input value={form.role_en} onChange={e => setForm({...form, role_en: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Entreprise *</label><Input value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Lieu</label><Input value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="Lomé, Togo" /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Date début * (YYYY-MM)</label><Input value={form.start_date} onChange={e => setForm({...form, start_date: e.target.value})} placeholder="2023-01" /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Date fin (vide = présent)</label><Input value={form.end_date} onChange={e => setForm({...form, end_date: e.target.value})} placeholder="2024-06" /></div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">Type</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                {TYPES.map(t => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
              </select>
            </div>
            <div className="space-y-1"><label className="text-xs text-muted-foreground">URL Logo (optionnel)</label><Input type="url" value={form.logo_url} onChange={e => setForm({...form, logo_url: e.target.value})} /></div>
            <div className="space-y-1 md:col-span-2"><label className="text-xs text-muted-foreground">Description (FR)</label><Textarea rows={3} value={form.description_fr} onChange={e => setForm({...form, description_fr: e.target.value})} /></div>
            <div className="space-y-1 md:col-span-2"><label className="text-xs text-muted-foreground">Description (EN)</label><Textarea rows={3} value={form.description_en} onChange={e => setForm({...form, description_en: e.target.value})} /></div>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button onClick={resetForm} className="px-4 py-2 rounded-xl border text-sm hover:bg-muted">Annuler</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold">Enregistrer</button>
          </div>
        </div>
      )}

      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-4">
          {experiences.map((exp) => (
            <motion.div key={exp.id} layout className="relative">
              <div className="absolute -left-[22px] top-4 w-4 h-4 rounded-full border-2 border-primary bg-background" />
              <div className="bg-card border rounded-2xl p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{exp.role_fr}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TYPE_COLORS[exp.type] || ""}`}>{TYPE_LABELS[exp.type]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Building2 className="h-3.5 w-3.5" /> {exp.company}
                      {exp.location && <span>· {exp.location}</span>}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.start_date} → {exp.end_date || "Présent"}</span>
                    </div>
                    {exp.description_fr && <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{exp.description_fr}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => { setForm({ role_fr: exp.role_fr, role_en: exp.role_en||"", company: exp.company, location: exp.location||"", start_date: exp.start_date, end_date: exp.end_date||"", description_fr: exp.description_fr||"", description_en: exp.description_en||"", logo_url: exp.logo_url||"", type: exp.type }); setEditing(exp.id); setShowForm(true); }}
                      className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(exp.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {!experiences.length && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Aucune expérience. <button onClick={() => setShowForm(true)} className="text-primary underline">Ajouter la première</button></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
