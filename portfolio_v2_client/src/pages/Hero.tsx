import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profileInfo } from "@/lib/portfolio-data";

/**
 * Hero Section - Premium Minimalist Design
 * Features:
 * - Animated gradient background
 * - Staggered text animations
 * - Morphing geometric shapes
 * - Smooth CTA buttons with hover effects
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/hero-bg-NPLBDdumUx2VrcZAjELmUS.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity as any,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 rounded-3xl bg-gradient-to-bl from-accent/10 to-primary/10 blur-3xl"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity as any,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="container max-w-4xl mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity as any,
          }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-5xl md:text-6xl font-bold display-font bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                JC
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          <span className="text-lg md:text-xl font-medium text-foreground/80">
            Salut ! Je suis
          </span>
          <motion.span
            animate={{ rotate: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity as any }}
            className="inline-block text-2xl md:text-3xl"
          >
            👋
          </motion.span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold display-font mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {profileInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6"
          variants={itemVariants}
        >
          {profileInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          {profileInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              Me contacter
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity as any }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </div>
          </motion.a>

          <motion.a
            href={profileInfo.cvUrl}
            download
            className="group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              Télécharger CV
              <Download size={20} className="group-hover:animate-bounce" />
            </div>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity as any }}
        >
          <div className="text-foreground/40 text-sm">Scroll pour explorer</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
