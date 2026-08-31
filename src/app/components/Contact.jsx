"use client";

import React, { useState } from "react";
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
} from "@/components/ui/Icons";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Application Mobile (Flutter)",
    "Plateforme Web (Next.js/React)",
    "Affiches, Flyers & Impression",
    "Installation Réseau & Systèmes",
    "Design UI/UX (Figma)",
    "Backend & APIs (Laravel/Node)",
    "Maintenance & Support",
    "Recrutement / CDI",
  ];

  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    setResult("Transmission sécurisée en cours...");
    setIsSuccess(false);

    const payload = {
      ...formData,
      subject: `[Contact Studio] ${selectedType}`,
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
        setResult("Message transmis avec succès ! Je vous répondrai sous 24h.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSuccess(false);
        setResult("Une erreur est survenue lors de l'envoi. Écrivez-moi directement par email.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResult("Erreur réseau. Veuillez réessayer ou m'envoyer un email directement.");
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
          badge="Mission Control"
          title="Démarrons Votre Prochaine Aventure"
          description="Un projet d'application, une idée novatrice ou une opportunité d'embauche ? Échangeons dès aujourd'hui !"
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Hub */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div>
                <Badge variant="default">Disponibilité Immédiate</Badge>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                  Échangeons directement
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Je réponds personnellement à chaque message pour évaluer la faisabilité et le calendrier de vos projets.
                </p>
              </div>

              {/* 1-Click Copy Email Box */}
              <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/80 dark:border-cyan-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xs">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email professionnel
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white break-all">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-xl border border-cyan-300 dark:border-cyan-700 bg-white dark:bg-slate-800 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
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

              {/* Stats & Response Guarantee */}
              <div className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <IconMapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Basé à Lomé, Togo (GMT / UTC+0)</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconClock className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Délai moyen de réponse : <strong>Moins de 24 heures</strong></span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <a
                  href="https://github.com/johnnygoldsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jean-claude-sassou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:border-blue-400 dark:hover:border-cyan-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <IconLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Mission Control Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Project Type Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Type de projet ou besoin
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-sm"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
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
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Votre Nom <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean Dupont"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-900/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Votre Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: jean@entreprise.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-900/40"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Votre Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Présentez brièvement vos besoins, votre calendrier ou vos objectifs..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-800 dark:focus:ring-cyan-900/40"
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
                    className="w-full sm:w-auto shadow-lg shadow-cyan-500/20"
                  >
                    <span>Envoyer la demande</span>
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
