"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { IconWhatsapp } from "@/components/ui/Icons";

export function FaqSection() {
  const faqs = [
    {
      id: "item-1",
      question: "Quels sont vos délais habituels de livraison ?",
      answer:
        "Entre 1 et 3 semaines pour un design UI/UX ou un site vitrine, et 3 à 8 semaines pour une application mobile (Flutter) ou SaaS (Next.js/Laravel). Le calendrier précis est fixé dès le devis initial.",
    },
    {
      id: "item-2",
      question: "Comment se déroule la collaboration à distance avec l'international ?",
      answer:
        "Basé à Lomé (GMT / UTC+0), je suis parfaitement aligné avec l'Europe, l'Afrique et les Amériques. Échanges continus via WhatsApp, Google Meet ou Slack avec démos intermédiaires régulières.",
    },
    {
      id: "item-3",
      question: "Qui est propriétaire du code source et des créations ?",
      answer:
        "Vous êtes propriétaire à 100% du code source, des maquettes Figma et des bases de données dès la livraison finale, sans aucun verrouillage propriétaire.",
    },
    {
      id: "item-4",
      question: "Assurez-vous un support après la mise en ligne ?",
      answer:
        "Oui. Chaque projet inclut automatiquement 30 jours de garantie et de support technique offerts pour corriger d'éventuels ajustements en toute sérénité.",
    },
    {
      id: "item-5",
      question: "Quelles sont les modalités de paiement acceptées ?",
      answer:
        "Acompte au démarrage (30-40%), paiements par jalons validés, et solde à la livraison finale. Règlements acceptés par virement bancaire, Wise, PayPal ou transfert sécurisé.",
    },
  ];

  return (
    <section id="faq" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
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

        {/* Shadcn UI Accordion */}
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Direct WhatsApp Callout Card */}
        <Card className="mt-8 border-amber-500/25 bg-amber-500/10 dark:bg-amber-500/15">
          <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
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
            >
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs shrink-0"
              >
                <IconWhatsapp className="w-3.5 h-3.5" />
                <span>WhatsApp direct</span>
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
