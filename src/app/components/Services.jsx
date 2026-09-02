"use client";

import React from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ServiceCard } from "@/components/common/ServiceCard";
import {
  IconCode,
  IconSmartphone,
  IconBrush,
  IconPalette,
  IconServer,
  IconNetwork,
  IconWrench,
} from "@/components/ui/Icons";

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      icon: IconSmartphone,
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/50",
      title: "Applications Mobiles (Flutter)",
      description:
        "Création d'applications mobiles cross-platform pour iOS et Android avec une expérience utilisateur fluide, réactive et connectée au cloud.",
      features: [
        "Codebase unique iOS & Android (Flutter 3.x)",
        "Intégration Firebase, push notifications & APIs REST",
        "Publication sur App Store & Google Play",
      ],
    },
    {
      icon: IconCode,
      iconColor: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-900/50",
      title: "Développement Web & SaaS",
      description:
        "Conception de plateformes web réactives, portails d'entreprise et sites vitrines propulsés par Next.js 15, React 19 et Tailwind CSS v4.",
      features: [
        "Architecture Next.js 15 App Router (SSR/SSG)",
        "Design adaptatif mobile, tablette & grand écran",
        "Performance Core Web Vitals & référencement SEO",
      ],
    },
    {
      icon: IconServer,
      iconColor: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-900/50",
      title: "Architectures Backend & APIs",
      description:
        "Développement d'APIs fiables, sécurisées et évolutives en Laravel (PHP) et Node.js avec bases de données relationnelles et NoSQL.",
      features: [
        "Framework Laravel 12 & Node.js avec JWT/OAuth",
        "Bases MySQL, PostgreSQL, MongoDB & Redis",
        "Documentation Swagger/Postman & webhooks",
      ],
    },
    {
      icon: IconPalette,
      iconColor: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 border-pink-200 dark:border-pink-900/50",
      title: "UI/UX Design & Prototypage",
      description:
        "Conception d'interfaces centrées sur l'utilisateur, wireframes interactifs et design systems complets sous Figma avant intégration.",
      features: [
        "Prototypage interactif haute fidélité sur Figma",
        "Design Systems & kits UI cohérents",
        "Optimisation des taux de conversion UX",
      ],
    },
    {
      icon: IconBrush,
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900/50",
      title: "Graphisme & Impression Tout Support",
      description:
        "Création visuelle percutante et production d'affiches, flyers, autocollants, étiquettes packaging et supports grand format.",
      features: [
        "Affiches événementielles, flyers & roll-ups",
        "Stickers, autocollants & étiquettes produits",
        "Fichiers haute définition prêts pour l'impression (CMJN 300dpi)",
      ],
    },
    {
      icon: IconNetwork,
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/50",
      title: "Installation Réseau & Systèmes",
      description:
        "Déploiement d'infrastructures réseaux d'entreprise, configuration de serveurs Linux/Windows, routeurs, switchs managés et sécurité.",
      features: [
        "Câblage réseau, baie de brassage & Wi-Fi pro",
        "Configuration switchs managés, routeurs & VPN",
        "Maintenance préventive & assistance informatique",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          badge="Expertises & Solutions"
          title="Mes Solutions Clé en Main"
          description="Des prestations complètes et sur mesure pour concrétiser vos ambitions digitales : du développement logiciel à l'infrastructure réseau et au design visuel."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              iconColor={service.iconColor}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
