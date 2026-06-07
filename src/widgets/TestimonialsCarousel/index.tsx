"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/motion";

interface Props { testimonials: any[]; locale: string; }

export function TestimonialsCarousel({ testimonials, locale }: Props) {
  const t = useTranslations("testimonials");
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  if (!testimonials.length) return null;

  function go(d: number) {
    setDir(d);
    setCur(c => (c + d + testimonials.length) % testimonials.length);
  }

  const item = testimonials[cur];
  const variants: Record<string, any> = {
    enter:  (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit:   (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Clients</p>
          <h2 className="text-foreground mb-3">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <div className="relative border border-border rounded-lg bg-card shadow-sm overflow-hidden">
          <Quote className="absolute top-5 right-5 h-8 w-8 text-border" />

          <div className="p-8 md:p-10 min-h-[220px]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div key={cur} custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base text-foreground leading-relaxed mb-6 max-w-2xl italic">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  {item.photo_url
                    ? <img src={item.photo_url} alt={item.client_name} className="w-10 h-10 rounded-full object-cover border border-border" />
                    : <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary-subtle))] flex items-center justify-center text-sm font-bold text-primary">{item.client_name?.charAt(0)}</div>
                  }
                  <div>
                    <p className="text-sm font-semibold">{item.client_name}</p>
                    {(item.role || item.company) && (
                      <p className="text-xs text-muted-foreground">{item.role}{item.role && item.company ? " · " : ""}{item.company}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {testimonials.length > 1 && (
            <div className="flex items-center justify-between px-8 pb-5 pt-0 border-t border-border">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === cur ? "bg-primary" : "bg-border"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => go(-1)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => go(1)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
