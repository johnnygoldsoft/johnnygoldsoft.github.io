"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/shared/ui/card";
import { Reveal, StaggerList, StaggerItem } from "@/shared/ui/motion";

const SERVICE_ICONS = ["💻","📱","⚛️","📢","🎨","🔒","📊","🚀"];

interface ServicesGridProps { services: any[]; locale: string; }

export function ServicesGrid({ services, locale }: ServicesGridProps) {
  const t = useTranslations("services");
  if (!services.length) return null;

  return (
    <section className="py-20 section-alt">
      <div className="container">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-foreground mb-3">{t("title")}</h2>
          <p className="text-muted-foreground max-w-lg">{t("subtitle")}</p>
        </Reveal>

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 space-y-3">
                    <div className="w-9 h-9 rounded border border-border bg-muted flex items-center justify-center text-lg">
                      {service.icon_url
                        ? <img src={service.icon_url} alt="" className="w-5 h-5" />
                        : SERVICE_ICONS[i % SERVICE_ICONS.length]
                      }
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    {service.price_info && (
                      <p className="text-xs font-semibold text-primary">{service.price_info}</p>
                    )}
                    <Link href={`/${locale}/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2.5 transition-all">
                      {t("cta")} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
