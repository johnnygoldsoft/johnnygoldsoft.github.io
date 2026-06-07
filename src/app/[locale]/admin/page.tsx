import { createClient } from "@/shared/lib/supabase/server";
import Link from "next/link";
import { FolderKanban, Zap, Clock, Settings, Star, ShoppingBag, FileText, MessageSquare, TrendingUp, Users, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const QUICK_LINKS = [
  { label: "Nouveau projet",   href: "/projects/new",    icon: FolderKanban },
  { label: "Nouvel article",   href: "/blog/new",        icon: FileText },
  { label: "Nouveau service",  href: "/services",        icon: Settings },
  { label: "Voir les devis",   href: "/quotes",          icon: MessageSquare },
];

export default async function AdminDashboard({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();

  const [
    { count: projCount },
    { count: artCount },
    { count: quoteNew },
    { count: testimCount },
  ] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }).eq("published", true),
    supabase.from("articles").select("*", { count: "exact", head: true }).eq("published", true),
    supabase.from("quote_requests").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("testimonials").select("*", { count: "exact", head: true }).eq("visible", true),
  ]);

  const stats = [
    { label: "Projets publiés",  value: projCount ?? 0,   icon: FolderKanban, color: "text-blue-500" },
    { label: "Articles publiés", value: artCount ?? 0,    icon: FileText,     color: "text-purple-500" },
    { label: "Devis en attente", value: quoteNew ?? 0,    icon: MessageSquare,color: "text-amber-500", alert: (quoteNew ?? 0) > 0 },
    { label: "Témoignages",      value: testimCount ?? 0, icon: Star,         color: "text-green-500" },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="text-sm text-muted-foreground mt-1">Bienvenue dans votre espace d'administration.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className={stat.alert ? "border-amber-200 dark:border-amber-800" : ""}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.alert ? "text-amber-500" : "text-foreground"}`}>
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`h-4 w-4 ${stat.color} mt-1`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Actions rapides</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 space-y-1">
            {QUICK_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.href} href={`/${locale}/admin${link.href}`}
                  className="flex items-center gap-3 px-3 py-2 rounded text-sm hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Liens utiles</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 space-y-1">
            {[
              { label: "Voir le site public",    href: `/${locale}`,                    icon: Eye },
              { label: "Supabase Dashboard",     href: "https://supabase.com/dashboard", icon: TrendingUp, ext: true },
              { label: "Vercel Dashboard",       href: "https://vercel.com/dashboard",   icon: Users, ext: true },
              { label: "Google Analytics",       href: "https://analytics.google.com",   icon: TrendingUp, ext: true },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target={link.ext ? "_blank" : undefined}
                  rel={link.ext ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-3 py-2 rounded text-sm hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
