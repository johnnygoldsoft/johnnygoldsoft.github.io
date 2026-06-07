import Link from "next/link";
import { Code2, Mail, MapPin, ExternalLink } from "lucide-react";
import { Separator } from "@/shared/ui/separator";

const FOOTER_LINKS = {
  portfolio: [
    { label: "Projets",     href: "/projets" },
    { label: "Compétences", href: "/competences" },
    { label: "Expérience",  href: "/experience" },
    { label: "À propos",    href: "/a-propos" },
  ],
  services: [
    { label: "Services",    href: "/services" },
    { label: "Boutique",    href: "/boutique" },
    { label: "Blog",        href: "/blog" },
    { label: "Contact",     href: "/contact" },
  ],
};

export function Footer({ locale }: { locale: string }) {
  const prefix = `/${locale}`;
  const year   = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Link href={`${prefix}/`} className="flex items-center gap-2 font-semibold text-sm w-fit">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              SASSOU<span className="text-primary">.</span>dev
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Développeur Web & Mobile freelance basé à Lomé, Togo. Disponible pour projets en Afrique, Europe et Amérique du Nord.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" /> Lomé, Togo — UTC+0
            </div>
            <a href="mailto:contact@johnnygoldsoft.dev"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit">
              <Mail className="h-3.5 w-3.5" /> contact@johnnygoldsoft.dev
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Portfolio</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.portfolio.map(link => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map(link => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Jean Claude SASSOU. Tous droits réservés.</p>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors">
            Hébergé sur Vercel <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
