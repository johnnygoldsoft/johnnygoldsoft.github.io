import { motion } from "framer-motion";
import { skills, tools } from "@/lib/portfolio-data";

/**
 * About Section - Skills & Experience
 * Features:
 * - Scroll-triggered animations
 * - Skill cards with stagger effect
 * - Tool badges with hover effects
 * - Minimalist layout with generous spacing
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

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background via-background to-secondary/30">
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
            À Propos de Moi
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Développeur passionné avec expertise en web et mobile, spécialisé dans la création de solutions numériques innovantes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {skill.category}
              </h3>
              <div className="space-y-3">
                {skill.items.map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Outils & Technologies</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0, 102, 255, 0.15)" }}
              >
                <span className="text-sm font-medium">
                  {tool.icon} {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
