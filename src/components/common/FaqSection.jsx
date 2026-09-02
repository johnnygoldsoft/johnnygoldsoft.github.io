"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { IconHelpCircle, IconChevronDown, IconSparkles } from "@/components/ui/Icons";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quels sont vos délais habituels de livraison ?",
      answer:
        "Tout dépend de l'envergure du projet. Un site vitrine ou un design UI/UX prend généralement 1 à 3 semaines. Une application mobile complète (Flutter) ou une plateforme SaaS (Next.js/Laravel) nécessite entre 3 et 8 semaines. Dès la phase de devis, nous fixons un rétroplanning précis et engageant.",
    },
    {
      question: "Comment se déroule la collaboration à distance avec l'international ?",
      answer:
        "Basé à Lomé (Togo, fuseau GMT / UTC+0), je suis parfaitement synchronisé avec les horaires d'Europe, d'Afrique et des Amériques. Nous communiquons par WhatsApp, Google Meet, Slack ou email avec des points d'avancement hebdomadaires et des démos interactives en direct.",
    },
    {
      question: "Qui est propriétaire du code source et des créations ?",
      answer:
        "Vous êtes propriétaire à 100% du code source, des maquettes Figma, des assets graphiques et des bases de données dès le règlement final. Il n'y a aucun système de verrouillage propriétaire ('vendor lock-in'). Tout vous est intégralement transféré avec documentation d'exploitation.",
    },
    {
      question: "Assurez-vous un support après la mise en ligne ?",
      answer:
        "Oui, absolument ! Chaque projet livré inclut automatiquement une période de garantie de 30 jours offerte (correction des bugs mineurs, ajustements et assistance technique). Au-delà, je propose des forfaits mensuels de maintenance préventive et d'évolution.",
    },
    {
      question: "Quelles sont les modalités et moyens de paiement acceptés ?",
      answer:
        "La règle standard est un acompte au démarrage (généralement 30% à 40%), des paiements par jalons validés, et le solde à la livraison finale. Les règlements s'effectuent par virement bancaire international, Wise, PayPal ou transfert d'argent sécurisé.",
    },
  ];

  return (
    <section id="faq" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-3">
            Questions Fréquentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tout Ce Que Vous Devez Savoir
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Des réponses claires et directes aux questions courantes avant de démarrer notre collaboration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-500"
                    }`}
                  >
                    <IconChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Vous avez une question spécifique sur votre projet ?
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Échangeons directement par message pour obtenir un retour immédiat.
            </p>
          </div>
          <a
            href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20j%27aimerais%20vous%20poser%20une%20question%20sur%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            <span>Poser une question sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
