"use client";

import React from "react";
import { useState, useEffect } from "react";
import { upsertSkill, deleteSkill } from "@/features/portfolio/actions";
import { createClient } from "@/shared/lib/supabase/client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Badge } from "@/shared/ui/badge";
import { Plus, Trash2, Pencil, Check, X } from "lucide-react";

const CATEGORIES = ["dev", "design", "mobile", "network", "tools", "soft"];
const CAT_LABELS: Record<string, string> = {
  dev: "Développement", design: "Design", mobile: "Mobile",
  network: "Réseau & Sécurité", tools: "Outils", soft: "Savoir-être"
};

export default function AdminSkillsPage({ params }: { params: { locale: string } }) {
  const [skills, setSkills] = useState<any[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name_fr: "", name_en: "", category: "dev", level: 80, visible: true });
  const { locale } = React.use(params);

  async function loadSkills() {
    const supabase = createClient();
    const { data } = await supabase.from("skills").select("*").order("category").order("order_index");
    setSkills(data || []);
  }

  useEffect(() => { loadSkills(); }, []);

  async function handleSave(id?: string) {
    await upsertSkill({ ...form, order_index: 0 }, id);
    setForm({ name_fr: "", name_en: "", category: "dev", level: 80, visible: true });
    setShowForm(false);
    setEditing(null);
    loadSkills();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette compétence ?")) return;
    await deleteSkill(id);
    loadSkills();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Compétences</h1>
        <Button className="gap-2" onClick={() => setShowForm(true)}><Plus className="h-4 w-4" /> Nouvelle</Button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-xl p-6 mb-6 space-y-4">
          <h2 className="font-semibold">{editing ? "Modifier" : "Nouvelle compétence"}</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nom FR *" value={form.name_fr} onChange={e => setForm({ ...form, name_fr: e.target.value })} />
            <Input placeholder="Name EN *" value={form.name_en} onChange={e => setForm({ ...form, name_en: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {CATEGORIES.map(c => <option key={c} value={c}>{CAT_LABELS[c]}</option>)}
            </select>
            <div className="flex items-center gap-3">
              <Input type="number" min="0" max="100" value={form.level}
                onChange={e => setForm({ ...form, level: parseInt(e.target.value) })} />
              <span className="text-sm text-muted-foreground w-10">{form.level}%</span>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => { setShowForm(false); setEditing(null); }}>Annuler</Button>
            <Button onClick={() => handleSave(editing || undefined)}>Enregistrer</Button>
          </div>
        </div>
      )}

      {CATEGORIES.map(cat => {
        const catSkills = skills.filter(s => s.category === cat);
        if (!catSkills.length) return null;
        return (
          <div key={cat} className="mb-8">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">{CAT_LABELS[cat]}</h2>
            <div className="bg-card border rounded-xl overflow-hidden">
              {catSkills.map(skill => (
                <div key={skill.id} className="flex items-center justify-between px-4 py-3 border-b last:border-0 hover:bg-muted/30">
                  <div className="flex-1">
                    <span className="font-medium text-sm">{skill.name_fr}</span>
                    <span className="text-muted-foreground text-xs ml-2">/ {skill.name_en}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                    </div>
                    <button onClick={() => { setForm({ name_fr: skill.name_fr, name_en: skill.name_en, category: skill.category, level: skill.level, visible: skill.visible }); setEditing(skill.id); setShowForm(true); }}
                      className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(skill.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
