import { createAdminClient } from "@/shared/lib/supabase/server";
import { deleteProject, toggleProjectPublished } from "@/features/portfolio/actions";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

export default async function AdminProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createAdminClient();
  const { data: projects } = await supabase.from("projects").select("*").order("order_index");

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Projets</h1>
        <Link href={`/${locale}/admin/projects/new`}>
          <Button className="gap-2"><Plus className="h-4 w-4" /> Nouveau projet</Button>
        </Link>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Titre</th>
              <th className="text-left px-4 py-3 font-medium">Technologies</th>
              <th className="text-left px-4 py-3 font-medium">Statut</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {(projects || []).map((project) => (
              <tr key={project.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium">{project.title_fr}</div>
                  <div className="text-xs text-muted-foreground">{project.title_en}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech_stack?.slice(0, 3).map((t: string) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                    {project.tech_stack?.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{project.tech_stack.length - 3}</Badge>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={project.published ? "default" : "secondary"}>
                    {project.published ? "Publié" : "Brouillon"}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {/* Formulaire de publication corrigé : Plus de onClick, utilisation du comportement natif du bouton submit */}
                    <form action={async () => { "use server"; await toggleProjectPublished(project.id, !project.published); }}>
                      <button type="submit" className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                        {project.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </form>

                    <Link href={`/${locale}/admin/projects/${project.id}`}>
                      <button className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                        <Pencil className="h-4 w-4" />
                      </button>
                    </Link>

                    {/* Formulaire de suppression : Le confirm() à l'intérieur du onClick requiert normalement du côté client. 
                        Pour éviter de casser le composant serveur, on gère la soumission via onSubmit sur le formulaire standard. */}
                    <form 
                      action={async () => { "use server"; await deleteProject(project.id); }}
                    >
                      <button type="submit" className="p-1.5 rounded hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {(!projects || projects.length === 0) && (
          <div className="text-center py-16 text-muted-foreground">
            <p>Aucun projet. <Link href={`/${locale}/admin/projects/new`} className="text-primary underline">Créez votre premier projet</Link></p>
          </div>
        )}
      </div>
    </div>
  );
}