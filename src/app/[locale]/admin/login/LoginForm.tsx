"use client";
import { useState } from "react";
import { signIn } from "@/features/auth/actions";
import { Mail, Lock, AlertCircle } from "lucide-react";

export function LoginForm({ locale }: { locale: string }) {
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn(new FormData(e.currentTarget));
    if (result?.error) { setError(result.error); setLoading(false); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-[hsl(var(--sidebar-fg))]">Adresse email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--sidebar-muted))]" />
          <input name="email" type="email" required autoComplete="email" autoFocus
            placeholder="admin@exemple.com"
            className="w-full h-9 pl-9 pr-3 rounded border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))] text-sm placeholder:text-[hsl(var(--sidebar-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--sidebar-active))] transition-colors" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-[hsl(var(--sidebar-fg))]">Mot de passe</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--sidebar-muted))]" />
          <input name="password" type="password" required autoComplete="current-password" minLength={8}
            placeholder="••••••••"
            className="w-full h-9 pl-9 pr-3 rounded border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))] text-sm placeholder:text-[hsl(var(--sidebar-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--sidebar-active))] transition-colors" />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {error}
        </div>
      )}

      <button type="submit" disabled={loading}
        className="w-full h-9 rounded bg-[hsl(var(--sidebar-active))] text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity">
        {loading ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
}
