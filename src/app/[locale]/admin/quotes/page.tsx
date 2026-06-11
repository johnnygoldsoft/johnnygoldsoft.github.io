"use client";
// import React from "react";
import { useState, useEffect, use } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
} from "lucide-react";
import { formatDate } from "@/shared/lib/utils";

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  new: {
    label: "Nouveau",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  read: {
    label: "Lu",
    color: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
  replied: {
    label: "Répondu",
    color: "bg-green-500/10 text-green-600 border-green-200",
  },
  closed: {
    label: "Fermé",
    color: "bg-gray-500/10 text-gray-500 border-gray-200",
  },
};

export default function AdminQuotesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const supabase = createClient();
  const { locale } = use(params);

  async function load() {
    const { data } = await supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });
    setQuotes(data || []);
  }

  async function updateStatus(id: string, status: string) {
    await supabase.from("quote_requests").update({ status }).eq("id", id);
    load();
    if (selected?.id === id) setSelected((s: any) => ({ ...s, status }));
  }

  useEffect(() => {
    load();
  }, []);

  const newCount = quotes.filter((q) => q.status === "new").length;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          Demandes de devis
          {newCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-xs font-bold">
              {newCount} nouveau{newCount > 1 ? "x" : ""}
            </span>
          )}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {quotes.length} demande{quotes.length > 1 ? "s" : ""} au total
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          {quotes.map((q) => {
            const sc = STATUS_CONFIG[q.status] || STATUS_CONFIG.new;
            return (
              <motion.div
                key={q.id}
                whileHover={{ x: 2 }}
                onClick={() => {
                  setSelected(q);
                  if (q.status === "new") updateStatus(q.id, "read");
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${selected?.id === q.id ? "border-primary shadow-glow bg-primary/5" : "border-border hover:border-primary/30 bg-card"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{q.name}</span>
                      {q.status === "new" && (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {q.service_name || "Service non précisé"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDate(q.created_at)}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-medium flex-shrink-0 ${sc.color}`}
                  >
                    {sc.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
          {!quotes.length && (
            <div className="text-center py-16 text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>Aucune demande de devis pour l'instant.</p>
            </div>
          )}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border border-border rounded-2xl p-6 space-y-5 h-fit sticky top-24"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-bold text-lg">{selected.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {selected.service_name || "Service non précisé"}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground text-xs"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`mailto:${selected.email}`}
                  className="text-primary hover:underline"
                >
                  {selected.email}
                </a>
              </div>
              {selected.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{selected.phone}</span>
                </div>
              )}
              {selected.budget && (
                <p className="text-sm">
                  <span className="text-muted-foreground">Budget : </span>
                  <span className="font-medium">{selected.budget}</span>
                </p>
              )}
            </div>
            <div className="bg-muted/40 rounded-xl p-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Message
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {selected.message}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Statut
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
                  <button
                    key={key}
                    onClick={() => updateStatus(selected.id, key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${selected.status === key ? conf.color : "border-border hover:border-primary/30"}`}
                  >
                    {conf.label}
                  </button>
                ))}
              </div>
            </div>
            <a
              href={`mailto:${selected.email}?subject=Re: Devis — ${selected.service_name || "Portfolio"}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Répondre par email
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
