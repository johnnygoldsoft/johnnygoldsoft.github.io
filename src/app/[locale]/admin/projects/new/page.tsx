"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation"; // 1. Ajout de useParams
import { createProject } from "@/features/portfolio/actions";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() { // 2. Plus besoin de typer params ici
  const router = useRouter();
  const params = useParams(); // 3. Récupération dynamique et fiable du locale
  const locale = params?.locale as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(""); // Réinitialise l'erreur au début de la soumission

    const fd = new FormData(e.currentTarget);
    
    // Nettoyage des chaînes optionnelles (transforme "" en null)
    const github = fd.get("github_url") as string;
    const live = fd.get("live_url") as string;

    const data = {
      title_fr: fd.get("title_fr") as string,
      title_en: fd.get("title_en") as string,
      description_fr: fd.get("description_fr") as string,
      description_en: fd.get("description_en") as string,
      tech_stack: (fd.get("tech_stack") as string)
        .split(",")
        .map(s => s.trim())
        .filter(Boolean),
      github_url: github.trim() === "" ? null : github,
      live_url: live.trim() === "" ? null : live,
      order_index: parseInt(fd.get("order_index") as string) || 0,
      published: fd.get("published") === "on",
    };

    const result = await createProject(data);
    if (result?.error) { 
      setError("Erreur lors de la création du projet. Vérifiez les champs."); 
      setLoading(false); 
      return; 
    }
    
    router.push(`/${locale}/admin/projects`);
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href={`/${locale}/admin/projects`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Nouveau projet</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Titre (FR) *</label>
            <Input name="title_fr" required maxLength={100} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Title (EN) *</label>
            <Input name="title_en" required maxLength={100} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Description (FR) *</label>
            <Textarea name="description_fr" required rows={4} maxLength={2000} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description (EN) *</label>
            <Textarea name="description_en" required rows={4} maxLength={2000} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Technologies (séparées par virgule) *</label>
          <Input name="tech_stack" placeholder="React, TypeScript, Supabase" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub URL</label>
            <Input name="github_url" type="url" placeholder="https://github.com/..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Live URL</label>
            <Input name="live_url" type="url" placeholder="https://..." />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Ordre d'affichage</label>
            <Input name="order_index" type="number" defaultValue="0" />
          </div>
          <div className="flex items-center gap-3 pt-7">
            <input type="checkbox" name="published" id="published" className="w-4 h-4" />
            <label htmlFor="published" className="text-sm font-medium">Publier immédiatement</label>
          </div>
        </div>
        
        {error && <p className="text-destructive text-sm font-medium">{error}</p>}
        
        <div className="flex gap-3 justify-end pt-2">
          <Link href={`/${locale}/admin/projects`}>
            <Button variant="outline" type="button">Annuler</Button>
          </Link>
          <Button type="submit" disabled={loading}>
            {loading ? "Enregistrement..." : "Créer le projet"}
          </Button>
        </div>
      </form>
    </div>
  );
}