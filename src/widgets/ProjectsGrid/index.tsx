"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Reveal, StaggerList, StaggerItem } from "@/shared/ui/motion";

interface ProjectsGridProps { projects: any[]; locale: string; preview?: boolean; }

export function ProjectsGrid({ projects, locale, preview }: ProjectsGridProps) {
  const t = useTranslations("projects");
  const prefix = `/${locale}`;

  const allTechs = ["Tous", ...Array.from(new Set(projects.flatMap((p) => p.tech_stack || [])))].slice(0, 7);
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.tech_stack?.includes(filter));

  return (
    <section className="py-20 section-alt">
      <div className="container">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-foreground mb-3">{t("title")}</h2>
          <p className="text-muted-foreground max-w-lg">{t("subtitle")}</p>
        </Reveal>

        {!preview && (
          <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-8">
            {allTechs.map((tech) => (
              <button key={tech} onClick={() => setFilter(tech)}
                className={`px-3 py-1.5 rounded text-sm font-medium border transition-colors ${
                  filter === tech
                    ? "border-primary bg-[hsl(var(--primary-subtle))] text-primary"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-border-strong"
                }`}>
                {tech}
              </button>
            ))}
          </Reveal>
        )}

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div layout className="group">
                  <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="relative h-44 bg-muted overflow-hidden">
                      {project.image_url ? (
                        <Image src={project.image_url} alt={project.title} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[hsl(var(--primary-subtle))]">
                          <span className="text-4xl font-bold text-primary/30">{project.title?.charAt(0)}</span>
                        </div>
                      )}
                      {/* Overlay actions */}
                      <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        {project.github_url && (
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors"
                            onClick={e => e.stopPropagation()}>
                            <Code2 className="h-3.5 w-3.5" /> Code
                          </a>
                        )}
                        {project.live_url && (
                          <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-medium hover:bg-[hsl(var(--primary-hover))] transition-colors"
                            onClick={e => e.stopPropagation()}>
                            <ExternalLink className="h-3.5 w-3.5" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-2.5">
                      <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech_stack?.slice(0, 3).map((tech: string) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-mono">{tech}</Badge>
                        ))}
                        {project.tech_stack?.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{project.tech_stack.length - 3}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerList>

        {preview && (
          <Reveal delay={0.2} className="mt-8">
            <Link href={`${prefix}/projets`}>
              <Button variant="outline" className="gap-2">
                Voir tous les projets <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
