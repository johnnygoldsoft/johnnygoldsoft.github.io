"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { IconBriefcase, IconGraduationCap, IconShield, IconSparkles } from "@/components/ui/Icons";

export function ExperienceTimeline() {
  const experiences = [
    {
      period: "Juin 2024 — Présent",
      role: "Technicien Maintenance Réseau & Système",
      company: "Everest SARL • Freelance",
      description:
        "Mise en place de systèmes de gestion sur les réseaux de la structure et déploiement des interconnexions entre les différents sites de la localité.",
      skills: ["Réseaux", "Interconnexion de sites", "Maintenance", "Systèmes"],
      type: "work",
    },
    {
      period: "Septembre 2020 — Présent",
      role: "Développeur & Administrateur Web - IT Spécialiste",
      company: "Centre de Développement Jéhovah Jireh • Bénévolat",
      description:
        "Création, administration et mises à jour du site web de l'association. Interventions complètes sur la maintenance informatique, les réseaux et la communication digitale.",
      skills: ["Développement Web", "Administration IT", "Maintenance Réseau", "CMS"],
      type: "work",
    },
    {
      period: "Avril 2022 — Mars 2024",
      role: "Développeur & Administrateur Web - IT Spécialiste",
      company: "Jireh Solux & Nautical Corporation • Freelance",
      description:
        "Conception, administration et suivi technique des sites web d'entreprise, support informatique et maintenance des infrastructures réseau.",
      skills: ["Web Design", "WordPress / Elementor", "Maintenance", "Réseau"],
      type: "work",
    },
    {
      period: "2024",
      role: "Certifications Professionnelles & Cybersécurité",
      company: "Cisco Networking Academy • LinkedIn Learning • Microsoft",
      description:
        "Certifications obtenues en Notions de base en réseau, Introduction à la Cybersécurité, Hacker Éthique (Cisco), Développement Web Front-End (React, UI/UX), Flutter Mobile (LinkedIn) et Fondamentaux de la sécurité IA (Microsoft).",
      skills: ["Cisco Cybersécurité", "Hacker Éthique", "React JS", "Flutter", "Sécurité IA"],
      type: "cert",
    },
    {
      period: "2022 — Présent",
      role: "3ème Année en Licence DA (Développement d'Applications)",
      company: "HEST (Haute École des Sciences et Technologies)",
      description:
        "Cursus supérieur en ingénierie logicielle, algorithmique avancée, programmation web/mobile et architectures de bases de données.",
      skills: ["Génie Logiciel", "Algorithmique", "Bases de données", "Applications"],
      type: "education",
    },
    {
      period: "2020 — 2021",
      role: "Formation Modulaire Maintenance & Réseau",
      company: "IFCC (Institut de Formation Centrale Communication)",
      description:
        "Formation pratique en câblage réseau, maintenance matérielle/logicielle et administration systèmes.",
      skills: ["Câblage", "Diagnostic matériel", "Réseaux locaux", "Systèmes"],
      type: "education",
    },
  ];

  return (
    <div className="relative border-l-2 border-stone-200 dark:border-amber-500/25 ml-4 sm:ml-8 space-y-8 py-2">
      {experiences.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.07 }}
          className="relative pl-6 sm:pl-8 group"
        >
          {/* Timeline Node Bullet */}
          <div className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-500/60 bg-white shadow-sm dark:bg-[#171412] dark:border-amber-500/60 group-hover:scale-110 transition-transform">
            {item.type === "work" ? (
              <IconBriefcase className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            ) : item.type === "cert" ? (
              <IconShield className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <IconGraduationCap className="h-3.5 w-3.5 text-yellow-600 dark:text-yellow-400" />
            )}
          </div>

          {/* Timeline Card */}
          <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-4 sm:p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-amber-500/35 dark:border-amber-500/15 dark:bg-[#171412]/95 dark:hover:border-amber-500/35">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-mono">
                {item.period}
              </span>
              <Badge
                variant={
                  item.type === "work"
                    ? "default"
                    : item.type === "cert"
                    ? "success"
                    : "warning"
                }
                className="text-[10px] font-bold px-2 py-0.5"
              >
                {item.type === "work"
                  ? "Expérience"
                  : item.type === "cert"
                  ? "Certification"
                  : "Formation"}
              </Badge>
            </div>

            <h3 className="mt-1.5 text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
              {item.role}
            </h3>
            <p className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              {item.company}
            </p>

            <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1">
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-md bg-stone-100 dark:bg-stone-850 px-2 py-0.5 text-[10px] font-semibold text-stone-600 dark:text-stone-300 border border-stone-200/40 dark:border-stone-750"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
