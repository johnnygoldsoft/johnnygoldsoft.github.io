"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";

interface HeroProps {
  about: any;
  locale: string;
}

export function HeroSection({ about, locale }: HeroProps) {
  const t = useTranslations("hero");
  const prefix = `/${locale}`;

  const stack = [
    "React / Next.js",
    "Flutter",
    "WordPress",
    "Laravel",
    "Cybersec Pentest",
  ];

  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center pt-14">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              Lomé, Togo — Disponible en freelance
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <p className="text-sm font-medium text-primary mb-2">
                {t("greeting")}
              </p>
              <h1 className="text-foreground">
                Jean Claude <span className="text-primary">SASSOU</span>
              </h1>
              <p className="text-xl text-muted-foreground font-normal mt-2">
                {t("title")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground leading-relaxed max-w-lg"
            >
              {about?.bio_short || t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="font-mono text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <Link href={`${prefix}/projets`}>
                <Button size="lg" className="gap-2">
                  Voir mes projets <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={`${prefix}/contact`}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" /> Contact
                </Button>
              </Link>
              {about?.cv_url && (
                <a href={about.cv_url} download>
                  <Button variant="ghost" size="lg" className="gap-2">
                    <Download className="h-4 w-4" /> CV
                  </Button>
                </a>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 pt-2 border-t border-border"
            >
              {[
                {
                  val: "5+",
                  label: locale === "fr" ? "ans d'exp." : "yrs exp.",
                },
                { val: "20+", label: locale === "fr" ? "projets" : "projects" },
                {
                  val: "3",
                  label: locale === "fr" ? "pays clients" : "countries",
                },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-foreground">{s.val}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Cadre décoratif */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                {about?.photo_url ? (
                  <Image
                    src={about.photo_url}
                    alt="Jean Claude SASSOU"
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-[hsl(var(--primary-subtle))] flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">JCS</span>
                  </div>
                )}
              </div>
              {/* Badge disponible */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-lg px-3 py-1.5 shadow-md">
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Disponible
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
