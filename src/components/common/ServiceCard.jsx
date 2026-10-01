"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconSparkles, IconArrowRight } from "@/components/ui/Icons";

export function ServiceCard({
  icon: IconComponent,
  iconColor = "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
  title,
  description,
  features = [],
  index = 0,
  onSelectService,
}) {
  const handleRequestQuote = () => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById("estimator") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col justify-between hover:shadow-lg hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
        <div>
          <CardHeader className="p-5 sm:p-6 pb-2">
            {/* Vector Icon */}
            <div
              className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border p-2 shadow-xs transition-transform duration-300 group-hover:scale-105 ${iconColor}`}
            >
              {typeof IconComponent === "function" ? (
                <IconComponent className="h-5 w-5" />
              ) : IconComponent && typeof IconComponent === "object" ? (
                <Image
                  src={IconComponent}
                  alt={title}
                  className="h-5 w-5 object-contain"
                />
              ) : (
                <IconSparkles className="h-5 w-5" />
              )}
            </div>

            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </CardHeader>
        </div>

        <CardFooter className="p-5 sm:p-6 pt-0 flex flex-col items-stretch gap-3 border-t border-stone-100 dark:border-stone-850 mt-4 pt-3.5">
          {/* Feature Badges */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {features.map((feature, fIdx) => (
                <Badge
                  key={fIdx}
                  variant="secondary"
                  className="text-[10px] px-2 py-0.2 font-medium"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          )}

          {/* Quick CTA button */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleRequestQuote}
            className="w-full text-xs font-semibold justify-between border-stone-200 dark:border-stone-750 hover:border-amber-500/40 hover:text-amber-600 dark:hover:text-amber-400"
          >
            <span>Demander un devis</span>
            <IconArrowRight className="w-3 h-3" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
