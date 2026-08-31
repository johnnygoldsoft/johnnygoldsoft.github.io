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
    <div className="relative border-l-2 border-cyan-200 dark:border-cyan-900/60 ml-4 sm:ml-8 space-y-10 py-4">
      {experiences.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-6 sm:pl-8 group"
        >
          {/* Timeline Node Bullet */}
          <div className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-500 bg-white shadow-md dark:bg-slate-900 dark:border-cyan-400 group-hover:scale-110 transition-transform">
            {item.type === "work" ? (
              <IconBriefcase className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
            ) : item.type === "cert" ? (
              <IconShield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <IconGraduationCap className="h-4 w-4 text-purple-600 dark:purple-400" />
            )}
          </div>

          {/* Timeline Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-cyan-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-cyan-700">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase">
                {item.period}
              </span>
              <Badge
                variant={
                  item.type === "work"
                    ? "default"
                    : item.type === "cert"
                    ? "success"
                    : "purple"
                }
              >
                {item.type === "work"
                  ? "Expérience"
                  : item.type === "cert"
                  ? "Certification"
                  : "Formation"}
              </Badge>
            </div>

            <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
              {item.role}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.company}
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
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
