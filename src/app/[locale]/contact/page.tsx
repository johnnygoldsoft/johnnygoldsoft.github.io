"use client";

import { useTranslations } from "next-intl";
import { useState, use } from "react";
import { motion } from "framer-motion";
import { contactSchema } from "@/features/shop/schemas";
import { sendContactEmail } from "@/features/shop/actions";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("contact");
  const { locale } = use(params);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      return;
    }
    const result = await sendContactEmail(parsed.data);
    setStatus(result.success ? "success" : "error");
  }

  const f =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="container py-20 max-w-4xl">
      <Reveal className="mb-12">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
          Contact
        </p>
        <h1 className="text-foreground mb-3">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Infos de gauche */}
        <Reveal delay={0.1} className="md:col-span-2 space-y-5">
          <div className="border border-border rounded-lg bg-card p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center flex-shrink-0">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Lomé, Togo</p>
                <p className="text-xs text-muted-foreground">
                  UTC+0 ·{" "}
                  {locale === "fr" ? "Afrique de l'Ouest" : "West Africa"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center flex-shrink-0">
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <div>
                <a
                  href="mailto:contact@johnnygoldsoft.dev"
                  className="text-sm font-medium text-primary hover:underline break-all"
                >
                  contact@johnnygoldsoft.dev
                </a>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t("reply_delay")}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg bg-card p-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t("availability")}
            </div>
          </div>
        </Reveal>

        {/* Formulaire de droite */}
        <Reveal delay={0.15} className="md:col-span-3">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-green-200 dark:border-green-800 rounded-lg dark:bg-green-950/30 p-8 text-center space-y-3"
            >
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
              <h2 className="font-semibold">{t("success_title")}</h2>
              <p className="text-sm text-muted-foreground">
                {t("success_message")}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setStatus("idle");
                  setForm({
                    name: "",
                    email: "",
                    subject: "",
                    service: "",
                    message: "",
                  });
                }}
              >
                {t("new_message")}
              </Button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border rounded-lg bg-card p-6 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    {t("name")} *
                  </label>
                  <Input
                    value={form.name}
                    onChange={f("name")}
                    required
                    minLength={2}
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    {t("email")} *
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={f("email")}
                    required
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  {t("subject")} *
                </label>
                <Input value={form.subject} onChange={f("subject")} required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  {t("service")}
                </label>
                <Input
                  value={form.service}
                  onChange={f("service")}
                  placeholder="WordPress, Flutter, React…"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  {t("message")} *
                </label>
                <Textarea
                  value={form.message}
                  onChange={f("message")}
                  required
                  rows={5}
                  minLength={10}
                  maxLength={2000}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded px-3 py-2">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  {t("error_message")}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full gap-2 hover:bg-foreground"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? t("sending") : t("send")}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
