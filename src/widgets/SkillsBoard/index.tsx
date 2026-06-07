"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Reveal } from "@/shared/ui/motion";

interface SkillsBoardProps { skills: any[]; locale: string; }

const CAT_COLORS: Record<string, string> = {
  dev:     "bg-blue-500",
  design:  "bg-purple-500",
  mobile:  "bg-green-500",
  network: "bg-red-500",
  tools:   "bg-amber-500",
  soft:    "bg-teal-500",
};

export function SkillsBoard({ skills, locale }: SkillsBoardProps) {
  const t = useTranslations("skills");
  const categories = Array.from(new Set(skills.map((s: any) => s.category)));

  return (
    <section className="py-20">
      <div className="container">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Stack</p>
          <h2 className="text-foreground mb-3">{t("title")}</h2>
          <p className="text-muted-foreground max-w-lg">{t("subtitle")}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 0.07}>
              <div className="border border-border rounded-lg bg-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${CAT_COLORS[cat] ?? "bg-primary"}`} />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t(`categories.${cat}`)}
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {skills.filter(s => s.category === cat).map((skill, si) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: si * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
