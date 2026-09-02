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
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
      title: "Applications Mobiles (Flutter)",
      description: "Applications iOS & Android cross-platform fluides, réactives et connectées au cloud.",
      features: ["Flutter 3.x", "iOS & Android", "Firebase & REST"],
    },
    {
      icon: IconCode,
      iconColor: "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
      title: "Développement Web & SaaS",
      description: "Plateformes web modernes, portails SaaS et interfaces vitrines haute performance.",
      features: ["Next.js 15", "React 19 & Tailwind", "SEO & Vitals"],
    },
    {
      icon: IconServer,
      iconColor: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25",
      title: "Architectures Backend & APIs",
      description: "APIs robustes, sécurisées et scalables avec bases de données optimisées.",
      features: ["Laravel 12", "Node.js & JWT", "MySQL & MongoDB"],
    },
    {
      icon: IconPalette,
      iconColor: "text-amber-500 dark:text-amber-300 bg-amber-500/15 border-amber-400/30",
      title: "UI/UX Design & Prototypage",
      description: "Interfaces utilisateur intuitives, wireframes et design systems complets sous Figma.",
      features: ["Figma interactif", "Design Systems", "Conversion UX"],
    },
    {
      icon: IconBrush,
      iconColor: "text-stone-800 dark:text-stone-200 bg-stone-500/10 border-stone-400/25",
      title: "Graphisme & Impression Print",
      description: "Création visuelle percutante et production de supports prêts pour l'impression haute définition.",
      features: ["Affiches & Roll-ups", "Flyers & Stickers", "CMJN 300dpi"],
    },
    {
      icon: IconNetwork,
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
      title: "Installation Réseau & Systèmes",
      description: "Infrastructures réseaux d'entreprise, switchs managés, routeurs sécurisés et assistance.",
      features: ["Câblage & Baies", "Switchs & Wi-Fi Pro", "Maintenance"],
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
          badge="Solutions"
          title="Prestations Clé en Main"
          description="Solutions sur mesure : du développement logiciel à l'infrastructure réseau et au design visuel."
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
