"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  IconMail,
  IconCopy,
  IconCheck,
  IconMapPin,
  IconClock,
  IconArrowRight,
  IconGithub,
  IconLinkedin,
  IconWhatsapp,
  IconShield,
} from "@/components/ui/Icons";

export default function Contact({ prefilledData }) {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Application Mobile (Flutter)",
    "Plateforme Web / SaaS (Next.js)",
    "UI/UX Design (Figma)",
    "Backend & APIs (Laravel/Node)",
    "Graphisme & Impression Tout Support",
    "Installation Réseau & Systèmes",
    "Maintenance & Support Technique",
    "Recrutement / Opportunité CDI",
  ];

  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Watch for prefilled data from the Project Estimator
  useEffect(() => {
    if (prefilledData) {
      if (prefilledData.type) {
        // match type or set
        const matched = projectTypes.find((t) =>
          t.toLowerCase().includes(prefilledData.type.toLowerCase().slice(0, 5))
        );
        if (matched) setSelectedType(matched);
      }
      if (prefilledData.message) {
        setFormData((prev) => ({
          ...prev,
          message: prefilledData.message,
        }));
      }
    }
  }, [prefilledData]);

  const emailAddress = "johnnygoldsoft@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Envoi sécurisé en cours...");
    setIsSuccess(false);

    const payload = {
      ...formData,
      subject: `[Demande Projet] ${selectedType} - ${formData.name}`,
      project_type: selectedType,
      access_key: "4546d7f8-1d19-4129-9bbb-5206edf0b7d3",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("Message transmis avec succès ! Je vous répondrai personnellement sous 24h.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSuccess(false);
        setResult("Une erreur est survenue lors de l'envoi. Contactez-moi directement sur WhatsApp ou par email.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResult("Erreur de connexion. Veuillez réessayer ou m'envoyer un email directement.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          badge="Contact & Démarrage"
          title="Donnons Vie à Votre Projet"
          description="Une idée d'application, un besoin de refonte ou une opportunité de collaboration ? Échangeons dès aujourd'hui."
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-stone-200/90 dark:border-amber-500/15 bg-white/95 dark:bg-[#171412]/95 shadow-sm space-y-6">
              <div>
                <Badge variant="default">Disponibilité Immédiate</Badge>
                <h3 className="mt-3 text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                  Échangeons Directement
                </h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Je réponds personnellement sous 24 heures pour évaluer la faisabilité, le calendrier et le chiffrage de votre projet.
                </p>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Canal le plus rapide</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    Réponse immédiate
                  </span>
                </div>
                <a
                  href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20mon%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <IconWhatsapp className="w-4 h-4" />
                  <span>Démarrer une discussion sur WhatsApp</span>
                </a>
              </div>

              {/* 1-Click Copy Email Box */}
              <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 font-bold shadow-xs">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      Email professionnel
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 break-all">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-xl border border-amber-400/50 dark:border-amber-600/50 bg-white dark:bg-stone-800 text-xs font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Details & Timezone */}
              <div className="space-y-3 pt-1 text-xs text-stone-600 dark:text-stone-300">
                <div className="flex items-center gap-3">
                  <IconMapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Basé à Lomé, Togo (GMT / UTC+0) • Ouvert international</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconClock className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Délai moyen de réponse : <strong>Moins de 24 heures</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <IconShield className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Devis gratuit, clair et sans engagement</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3">
                <a
                  href="https://github.com/johnnygoldsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-bold hover:border-amber-500/40 text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jean-claude-sassou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-bold hover:border-amber-500/40 text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <IconLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-stone-200/90 dark:border-amber-500/15 bg-white/95 dark:bg-[#171412]/95 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Project Type Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3">
                    Type de projet ou besoin
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-bold shadow-xs"
                            : "bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                    >
                      Votre Nom &amp; Prénom <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Alexandre Martin"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-800/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-800 dark:focus:ring-amber-900/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                    >
                      Votre Email Professionnel <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: alexandre@entreprise.com"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-800/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-800 dark:focus:ring-amber-900/30"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Description de votre besoin <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre idée, les fonctionnalités clés souhaitées ou votre calendrier..."
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-800/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-800 dark:focus:ring-amber-900/30"
                  />
                </div>

                {/* Submit Action & Result Banner */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    variant="default"
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="w-full sm:w-auto shadow-lg shadow-amber-600/20 font-bold"
                  >
                    <span>Envoyer ma demande de devis</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Button>

                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs font-bold p-3 rounded-xl flex items-center gap-2 ${
                        isSuccess
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                          : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800"
                      }`}
                    >
                      {isSuccess ? (
                        <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <span className="shrink-0 font-bold">⚠️</span>
                      )}
                      <span>{result}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
