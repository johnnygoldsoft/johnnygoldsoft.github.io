import { createClient } from "@/shared/lib/supabase/server";
import { redirect } from "next/navigation";
import { LoginForm } from "./LoginForm";
import { Code2, Shield } from "lucide-react";

export default async function AdminLoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (session) redirect(`/${locale}/admin`);

  return (
    <div className="min-h-screen bg-[hsl(var(--sidebar-bg))] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--sidebar-active))] flex items-center justify-center mx-auto mb-4">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-[hsl(var(--sidebar-fg))]">Administration</h1>
          <p className="text-sm text-[hsl(var(--sidebar-muted))] mt-1">SASSOU.dev</p>
        </div>

        {/* Card formulaire */}
        <div className="bg-[hsl(var(--sidebar-hover))] border border-[hsl(var(--sidebar-border))] rounded-xl p-6">
          <LoginForm locale={locale} />
        </div>

        {/* Sécurité badge */}
        <div className="flex items-center justify-center gap-1.5 mt-5 text-[hsl(var(--sidebar-muted))] text-xs">
          <Shield className="h-3 w-3" />
          Accès sécurisé — Supabase Auth
        </div>
      </div>
    </div>
  );
}
