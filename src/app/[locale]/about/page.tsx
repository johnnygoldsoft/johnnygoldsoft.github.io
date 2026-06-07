import { getAbout, getSkills } from "@/features/portfolio/queries";
import { Reveal } from "@/shared/ui/motion";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Download, MapPin, Globe, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const [about, skills] = await Promise.all([getAbout(locale), getSkills(locale)]);
  const social = about?.social_links || {};

  const SOCIAL = [
    { key: "github",   label: "GitHub",    href: social.github },
    { key: "linkedin", label: "LinkedIn",  href: social.linkedin },
    { key: "whatsapp", label: "WhatsApp",  href: social.whatsapp ? `https://wa.me/${social.whatsapp.replace(/\D/g,"")}` : "" },
    { key: "website",  label: "Site web",  href: social.website },
  ].filter(s => s.href);

  return (
    <div className="container py-20 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Reveal className="md:col-span-1 space-y-5">
          <div className="w-40 h-40 rounded-xl overflow-hidden border border-border bg-muted mx-auto md:mx-0">
            {about?.photo_url ? (
              <Image src={about.photo_url} alt="Jean Claude SASSOU" width={160} height={160} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[hsl(var(--primary-subtle))]">
                <span className="text-3xl font-bold text-primary">JCS</span>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-bold text-base">Jean Claude SASSOU</h2>
            <p className="text-sm text-muted-foreground">Développeur Web & Mobile</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" /> Lomé, Togo
            </div>
          </div>
          {SOCIAL.length > 0 && (
            <div className="space-y-2">
              {SOCIAL.map(s => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" /> {s.label}
                </a>
              ))}
            </div>
          )}
          {about?.cv_url && (
            <a href={about.cv_url} download>
              <Button variant="outline" size="sm" className="gap-2 w-full">
                <Download className="h-3.5 w-3.5" /> Télécharger CV
              </Button>
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2 space-y-8">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">À propos</p>
            <h1 className="text-2xl font-bold mb-4">Qui suis-je ?</h1>
            <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
              {about?.bio_long
                ? about.bio_long.split('\n').filter(Boolean).map((p: string, i: number) => <p key={i}>{p}</p>)
                : <p>Développeur Web & Mobile passionné basé à Lomé, Togo.</p>
              }
            </div>
          </div>
          {skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => <Badge key={s.id} variant="secondary" className="font-mono text-xs">{s.name}</Badge>)}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
