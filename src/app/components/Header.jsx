"use client";

import Image from "next/image";
import { assets } from "../../../assets/assets";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

/**
 * Header Component - Section d'accueil
 * Inspiré par shadcn/ui - Design minimaliste et accessible
 */
export default function Header() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-950">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400 opacity-20 blur-3xl mix-blend-multiply" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-purple-400 opacity-20 blur-3xl mix-blend-multiply" />
      </div>

      <div className="mx-auto flex h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 sm:px-8 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg ring-4 ring-blue-200 dark:border-blue-400 dark:ring-blue-900">
            <Image
              src={assets.profile_pic}
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
            Bienvenue ! Je suis
          </span>
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image
              src={assets.hand_icon}
              alt="Wave"
              className="h-6 w-6"
            />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2"
        >
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl lg:text-7xl">
            Jean Claude SASSOU
          </h1>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl">
            Web & Mobile Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            IT Specialist & Digital Solutions Architect
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
        >
          Développeur Web et Mobile passionné, spécialisé dans la création de solutions numériques innovantes. Mon expertise couvre le développement d'applications performantes, l'architecture système et la gestion des infrastructures informatiques complexes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            className="gap-2"
          >
            <a href="#contact">
              Me contacter
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <a href="/jeanclaudesas_cv_finale.pdf" download>
              Télécharger CV
              <Image
                src={assets.download_icon}
                alt="Download"
                className="h-4 w-4"
              />
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Design Philosophy (shadcn/ui inspired):
 * - Clean, minimal design with generous whitespace
 * - Accessible focus states and keyboard navigation
 * - Smooth animations with spring physics
 * - Responsive design (mobile-first)
 * - Dark mode support
 * - Semantic HTML and ARIA labels
 */
