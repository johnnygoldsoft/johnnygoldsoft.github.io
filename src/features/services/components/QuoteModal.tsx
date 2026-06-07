"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { submitQuoteRequest } from "@/features/services/actions";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { X, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps { services: any[]; locale: string; }

export function QuoteModal({ services, locale }: QuoteModalProps) {
  const params = useSearchParams();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const preService = params.get("service") || "";
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_name: preService, service_id: "", message: "", budget: "" });

  useEffect(() => { if (preService) setOpen(true); }, [preService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const service = services.find(s => s.title === form.service_name);
    const result = await submitQuoteRequest({ ...form, service_id: service?.id });
    setStatus(result.success ? "success" : "error");
  }

  const budgets = ["< 100 000 FCFA", "100 000 – 300 000 FCFA", "300 000 – 600 000 FCFA", "> 600 000 FCFA", "À discuter"];

  return (
    <>
      {/* Bouton flottant global */}
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
        onClick={() => setOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-glow flex items-center gap-2">
        <Send className="h-4 w-4" />
        {locale === "fr" ? "Demander un devis" : "Get a quote"}
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-lg bg-card border border-border rounded-2xl shadow-premium overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                <div>
                  <h2 className="font-bold text-lg">
                    {locale === "fr" ? "Demande de devis" : "Quote request"}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {locale === "fr" ? "Je vous réponds sous 24h" : "I'll reply within 24h"}
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  className="p-10 text-center space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="font-bold text-xl">{locale === "fr" ? "Demande envoyée !" : "Request sent!"}</h3>
                  <p className="text-muted-foreground text-sm">{locale === "fr" ? "Je vous contacte sous 24h." : "I'll contact you within 24h."}</p>
                  <button onClick={() => { setOpen(false); setStatus("idle"); }}
                    className="px-6 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                    {locale === "fr" ? "Fermer" : "Close"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">{locale === "fr" ? "Nom *" : "Name *"}</label>
                      <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Email *</label>
                      <Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">{locale === "fr" ? "Téléphone" : "Phone"}</label>
                      <Input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+228..." />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Service</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                        value={form.service_name} onChange={e => setForm({...form, service_name: e.target.value})}>
                        <option value="">{locale === "fr" ? "Choisir..." : "Choose..."}</option>
                        {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map(b => (
                        <button key={b} type="button" onClick={() => setForm({...form, budget: b})}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${form.budget === b ? "bg-gradient-primary text-white border-transparent" : "border-border hover:border-primary/40"}`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">{locale === "fr" ? "Message *" : "Message *"}</label>
                    <Textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} required rows={4}
                      placeholder={locale === "fr" ? "Décrivez votre projet..." : "Describe your project..."} minLength={10} />
                  </div>
                  {status === "error" && (
                    <p className="text-destructive text-xs">{locale === "fr" ? "Erreur, veuillez réessayer." : "Error, please try again."}</p>
                  )}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {status === "loading" ? (locale === "fr" ? "Envoi..." : "Sending...") : (locale === "fr" ? "Envoyer la demande" : "Send request")}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
