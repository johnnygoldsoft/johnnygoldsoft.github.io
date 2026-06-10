"use client";

import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@/shared/lib/supabase/client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { updateAbout } from "@/features/portfolio/actions";
import {
  Save,
  GitBranch as GitHubIcon,
  Link as LinkedInIcon,
  AtSign as TwitterIcon,
  MessageCircle,
  Globe,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function AdminAboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const [form, setForm] = useState({
    bio_short_fr: "",
    bio_short_en: "",
    bio_long_fr: "",
    bio_long_en: "",
    photo_url: "",
    cv_url: "",
    social_links: {
      github: "",
      linkedin: "",
      twitter: "",
      whatsapp: "",
      website: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const { locale } = await params;
  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("about")
      .select("*")
      .single()
      .then(({ data }) => {
        if (data)
          setForm({
            bio_short_fr: data.bio_short_fr || "",
            bio_short_en: data.bio_short_en || "",
            bio_long_fr: data.bio_long_fr || "",
            bio_long_en: data.bio_long_en || "",
            photo_url: data.photo_url || "",
            cv_url: data.cv_url || "",
            social_links: {
              github: "",
              linkedin: "",
              twitter: "",
              whatsapp: "",
              website: "",
              ...(data.social_links || {}),
            },
          });
      });
  }, []);

  async function handleSave() {
    setLoading(true);
    await updateAbout(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    setLoading(false);
  }

  const socialFields = [
    {
      key: "github",
      label: "GitHub",
      icon: <GitHubIcon className="h-4 w-4" />,
      placeholder: "https://github.com/username",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: <LinkedInIcon className="h-4 w-4" />,
      placeholder: "https://linkedin.com/in/username",
    },
    {
      key: "twitter",
      label: "TwitterIcon / X",
      icon: <TwitterIcon className="h-4 w-4" />,
      placeholder: "https://twitter.com/username",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: <MessageCircle className="h-4 w-4" />,
      placeholder: "+228 XX XX XX XX",
    },
    {
      key: "website",
      label: "Site web perso",
      icon: <Globe className="h-4 w-4" />,
      placeholder: "https://...",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}/admin`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">À propos & Réseaux sociaux</h1>
        </div>
        <Button onClick={handleSave} disabled={loading} className="gap-2">
          <Save className="h-4 w-4" />
          {saved
            ? "✓ Enregistré !"
            : loading
              ? "Enregistrement..."
              : "Enregistrer"}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Bio */}
        <div className="bg-card border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
            Biographie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Bio courte (FR)</label>
              <Textarea
                rows={3}
                value={form.bio_short_fr}
                onChange={(e) =>
                  setForm({ ...form, bio_short_fr: e.target.value })
                }
                maxLength={300}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Short bio (EN)</label>
              <Textarea
                rows={3}
                value={form.bio_short_en}
                onChange={(e) =>
                  setForm({ ...form, bio_short_en: e.target.value })
                }
                maxLength={300}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Bio longue (FR)</label>
              <Textarea
                rows={5}
                value={form.bio_long_fr}
                onChange={(e) =>
                  setForm({ ...form, bio_long_fr: e.target.value })
                }
                maxLength={3000}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Long bio (EN)</label>
              <Textarea
                rows={5}
                value={form.bio_long_en}
                onChange={(e) =>
                  setForm({ ...form, bio_long_en: e.target.value })
                }
                maxLength={3000}
              />
            </div>
          </div>
        </div>

        {/* URLs */}
        <div className="bg-card border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
            Fichiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">URL Photo de profil</label>
              <Input
                type="url"
                value={form.photo_url}
                onChange={(e) =>
                  setForm({ ...form, photo_url: e.target.value })
                }
                placeholder="https://..."
              />
              {form.photo_url && (
                <img
                  src={form.photo_url}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover mt-2"
                />
              )}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">URL CV PDF</label>
              <Input
                type="url"
                value={form.cv_url}
                onChange={(e) => setForm({ ...form, cv_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="bg-card border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
            Réseaux sociaux & Liens
          </h2>
          <p className="text-xs text-muted-foreground">
            Ces liens s'affichent dans le footer, la page contact et la section
            À propos...
          </p>
          <div className="space-y-3">
            {socialFields.map((field) => (
              <div key={field.key} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl border border-border flex items-center justify-center flex-shrink-0 text-muted-foreground">
                  {field.icon}
                </div>
                <div className="flex-1">
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    {field.label}
                  </label>
                  <Input
                    type={field.key === "whatsapp" ? "tel" : "url"}
                    value={
                      form.social_links[
                        field.key as keyof typeof form.social_links
                      ] || ""
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        social_links: {
                          ...form.social_links,
                          [field.key]: e.target.value,
                        },
                      })
                    }
                    placeholder={field.placeholder}
                    className="text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
