"use client";

import React, { useState } from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { BentoGrid } from "@/components/common/BentoGrid";
import { ExperienceTimeline } from "@/components/common/ExperienceTimeline";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20" id="about">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          badge="Profil"
          title="Parcours & Philosophie"
          description="Ingénieur logiciel & designer, alliant rigueur technique et ergonomie centrée sur l'humain."
        />

        {/* Tab Switcher using shadcn/ui Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="overview">
                Vue d'Ensemble
              </TabsTrigger>
              <TabsTrigger value="timeline">
                Expériences &amp; Diplômes
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Dynamic Tab Content */}
          <TabsContent value="overview">
            <BentoGrid />
          </TabsContent>

          <TabsContent value="timeline">
            <div className="max-w-3xl mx-auto">
              <ExperienceTimeline />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
