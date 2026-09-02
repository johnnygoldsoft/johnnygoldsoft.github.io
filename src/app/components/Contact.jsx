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
          badge="Contact"
          title="Donnons Vie à Votre Projet"
          description="Échangeons sur vos ambitions, votre calendrier et vos besoins techniques."
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-5">
            <SpotlightCard className="p-5 sm:p-6 rounded-2xl border border-stone-200/90 dark:border-amber-500/15 bg-white/95 dark:bg-[#171412]/95 shadow-sm space-y-4">
              <div>
                <Badge variant="default" className="text-[10px] font-bold px-2 py-0.5">Disponibilité Immédiate</Badge>
                <h3 className="mt-2 text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                  Échangeons Directement
                </h3>
                <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Réponse personnelle sous 24h avec chiffrage clair et faisabilité technique.
                </p>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Canal prioritaire</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    Réponse rapide
                  </span>
                </div>
                <a
                  href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20mon%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <IconWhatsapp className="w-3.5 h-3.5" />
                  <span>Discussion sur WhatsApp</span>
                </a>
              </div>

              {/* 1-Click Copy Email Box */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 font-bold shadow-xs">
                    <IconMail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Email
                    </p>
                    <p className="text-xs font-bold text-stone-900 dark:text-stone-100 break-all">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg border border-amber-400/50 dark:border-amber-600/50 bg-white dark:bg-stone-850 text-[11px] font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-stone-800 flex items-center gap-1 transition-colors cursor-pointer shadow-xs shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <IconCheck className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-3 h-3" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Details & Location */}
              <div className="space-y-2 pt-1 text-[11px] text-stone-500 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Lomé, Togo (GMT+0) • Remote monde entier</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconShield className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Devis clair, sans engagement &amp; confidentiel</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2">
                <a
                  href="https://github.com/johnnygoldsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-xs font-semibold hover:border-amber-500/40 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <IconGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jean-claude-sassou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-xs font-semibold hover:border-amber-500/40 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <IconLinkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-5 sm:p-6 rounded-2xl border border-stone-200/90 dark:border-amber-500/15 bg-white/95 dark:bg-[#171412]/95 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                {/* Project Type Selector Chips */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                    Type de projet ou besoin
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-bold shadow-xs"
                            : "bg-stone-100 dark:bg-stone-850 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-200/60 dark:border-stone-750"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-1"
                    >
                      Votre Nom <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Alexandre Martin"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-850/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-850"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-1"
                    >
                      Votre Email <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: alexandre@entreprise.com"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-850/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-850"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-1"
                  >
                    Votre Message <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement vos attentes ou votre calendrier..."
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-850/50 dark:text-white dark:focus:border-amber-400 dark:focus:bg-stone-850"
                  />
                </div>

                {/* Submit Action & Result Banner */}
                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button
                    type="submit"
                    size="md"
                    variant="default"
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="w-full sm:w-auto shadow-md shadow-amber-600/20 font-bold text-xs sm:text-sm"
                  >
                    <span>Envoyer ma demande</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
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
