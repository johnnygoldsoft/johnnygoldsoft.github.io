import { motion } from "framer-motion";
import { services } from "@/lib/portfolio-data";
import { ArrowRight } from "lucide-react";

/**
 * Services Section - What I Offer
 * Features:
 * - Service cards with hover animations
 * - Icon animations on hover
 * - Staggered entrance animations
 * - Call-to-action buttons
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">
            Mes Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Je propose une gamme complète de services pour transformer vos idées en réalité
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-6 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                whileHover={{ gap: 8 }}
              >
                En savoir plus
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity as any }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
