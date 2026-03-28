"use client";

import { serviceData } from "../../../assets/assets";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionTitle } from "@/components/common/SectionTitle";

/**
 * Services Component - Services proposés
 * Inspiré par shadcn/ui - Design système cohérent
 */
export default function Services() {
  return (
    <section className="w-full px-4 py-16 sm:px-8 scroll-mt-20" id="services">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <SectionTitle
          subtitle="Ce que je propose"
          title="Mes Services"
          description="Je propose une gamme complète de services pour transformer vos idées en réalité. Du développement web et mobile à l'optimisation système, je suis là pour vous accompagner."
        />

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {serviceData.map(({ icon, title, description }, index) => (
            <ServiceCard
              key={index}
              icon={icon}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Design Philosophy (shadcn/ui inspired):
 * - Reusable ServiceCard component
 * - Consistent spacing and typography
 * - Smooth animations with stagger effect
 * - Responsive grid layout
 * - Dark mode support
 * - Accessible component structure
 */
