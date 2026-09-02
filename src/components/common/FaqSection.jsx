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
        "Entre 1 et 3 semaines pour un design UI/UX ou un site vitrine, et 3 à 8 semaines pour une application mobile (Flutter) ou SaaS (Next.js/Laravel). Le calendrier précis est fixé dès le devis initial.",
    },
    {
      question: "Comment se déroule la collaboration à distance avec l'international ?",
      answer:
        "Basé à Lomé (GMT / UTC+0), je suis parfaitement aligné avec l'Europe, l'Afrique et les Amériques. Échanges continus via WhatsApp, Google Meet ou Slack avec démos intermédiaires régulières.",
    },
    {
      question: "Qui est propriétaire du code source et des créations ?",
      answer:
        "Vous êtes propriétaire à 100% du code source, des maquettes Figma et des bases de données dès la livraison finale, sans aucun verrouillage propriétaire.",
    },
    {
      question: "Assurez-vous un support après la mise en ligne ?",
      answer:
        "Oui. Chaque projet inclut automatiquement 30 jours de garantie et de support technique offerts pour corriger d'éventuels ajustements en toute sérénité.",
    },
    {
      question: "Quelles sont les modalités de paiement acceptées ?",
      answer:
        "Acompte au démarrage (30-40%), paiements par jalons validés, et solde à la livraison finale. Règlements acceptés par virement bancaire, Wise, PayPal ou transfert sécurisé.",
    },
  ];

  return (
    <section id="faq" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="default" className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 py-1 mb-2.5">
            FAQ
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            Questions Fréquentes
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
            Réponses directes et sans détour aux questions récurrentes.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-stone-200/90 bg-white/95 dark:border-amber-500/15 dark:bg-[#171412]/95 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                    {faq.question}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-600 dark:text-amber-400 border-amber-500/30" : "text-stone-400"
                    }`}
                  >
                    <IconChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80 pt-3">
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
        <div className="mt-8 p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="text-left">
            <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
              Une question spécifique à votre projet ?
            </p>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
              Échange direct pour une réponse sous quelques heures.
            </p>
          </div>
          <a
            href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20j%27aimerais%20vous%20poser%20une%20question%20sur%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow-xs"
          >
            <span>WhatsApp direct</span>
          </a>
        </div>
      </div>
    </section>
  );
}
