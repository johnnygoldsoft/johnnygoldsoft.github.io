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

export default function Services() {
  const servicesList = [
    {
      icon: IconCode,
      iconColor: "from-blue-500/15 to-cyan-500/15 text-blue-600 dark:text-cyan-400 border-blue-500/20",
      title: "Développement Web Moderne",
      description:
        "Conception de plateformes SaaS, portails d'entreprise et sites vitrines haute performance propulsés par Next.js 15, React 19 et Tailwind CSS v4.",
      features: [
        "Architecture Next.js 15 (SSR/SSG & App Router)",
        "Design adaptatif mobile, tablette & desktop",
        "Performance Core Web Vitals & référencement SEO",
      ],
    },
    {
      icon: IconSmartphone,
      iconColor: "from-cyan-500/15 to-sky-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/20",
      title: "Applications Mobiles (Flutter)",
      description:
        "Création d'applications mobiles cross-platform pour iOS et Android avec une expérience utilisateur fluide, réactive et connectée au cloud.",
      features: [
        "Codebase unique iOS & Android (Flutter 3.x)",
        "Intégration Firebase, push notifications & APIs REST",
        "Architecture propre (Bloc / Provider) & offline first",
      ],
    },
    {
      icon: IconBrush,
      iconColor: "from-purple-500/15 to-violet-500/15 text-purple-600 dark:text-purple-400 border-purple-500/20",
      title: "Graphisme & Impression sur Supports",
      description:
        "Création visuelle percutante et production d'affiches, flyers publicitaires, autocollants, étiquettes de packaging et impressions personnalisées sur tous types de supports.",
      features: [
        "Affiches événementielles, posters & flyers promotionnels",
        "Autocollants, stickers & étiquettes de produits",
        "Impression sur tous supports (bâches, textiles, roll-ups, goodies)",
      ],
    },
    {
      icon: IconPalette,
      iconColor: "from-pink-500/15 to-rose-500/15 text-pink-600 dark:text-pink-400 border-pink-500/20",
      title: "UI/UX Design & Prototypage",
      description:
        "Conception d'interfaces centrées sur l'utilisateur, wireframes interactifs et design systems sous Figma pour maximiser l'engagement.",
      features: [
        "Prototypage interactif avancé sur Figma",
        "Création de Design Systems & kits UI réutilisables",
        "Recherche utilisateur & ergonomie de navigation",
      ],
    },
    {
      icon: IconServer,
      iconColor: "from-emerald-500/15 to-teal-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      title: "Architectures Backend & APIs",
      description:
        "Développement de serveurs fiables, sécurisés et évolutifs en Laravel et Node.js avec bases de données relationnelles et NoSQL.",
      features: [
        "Frameworks Laravel (PHP 8+) & Node.js",
        "Bases MySQL, PostgreSQL, MongoDB & Redis",
        "Authentification sécurisée JWT/OAuth & APIs RESTful",
      ],
    },
    {
      icon: IconNetwork,
      iconColor: "from-amber-500/15 to-orange-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
      title: "Installation Réseau & Systèmes",
      description:
        "Déploiement d'infrastructures réseaux d'entreprise, configuration de serveurs Linux/Windows, routeurs, switchs et liaisons sécurisées.",
      features: [
        "Câblage réseau, baie de brassage & Wi-Fi d'entreprise",
        "Configuration routeurs, switchs managés & VPN",
        "Administration de serveurs Linux (Ubuntu, Debian)",
      ],
    },
    {
      icon: IconWrench,
      iconColor: "from-blue-600/15 to-indigo-600/15 text-blue-600 dark:text-blue-400 border-blue-600/20",
      title: "Maintenance & Infogérance",
      description:
        "Support technique continu, audits de performance, résolution de bugs, sauvegardes automatiques et sécurisation de vos outils digitaux.",
      features: [
        "Audit technique de code & de sécurité",
        "Mises à jour régulières & surveillance préventive",
        "Dépannage réactif & assistance informatique",
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
          badge="Expertises & Offres"
          title="Mes Solutions & Prestations"
          description="Des solutions complètes et sur mesure pour concrétiser vos ambitions digitales : du développement logiciel à l'infrastructure réseau et au design visuel."
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
