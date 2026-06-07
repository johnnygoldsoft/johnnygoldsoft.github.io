"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

const NAV = [
  { key: "projects",      href: "/projets" },
  { key: "skills",        href: "/competences" },
  { key: "experience",    href: "/experience" },
  { key: "services",      href: "/services" },
  { key: "blog",          href: "/blog" },
  { key: "shop",          href: "/boutique" },
  { key: "contact",       href: "/contact" },
];

export function Navbar({ locale }: { locale: string }) {
  const t        = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const prefix = `/${locale}`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href: string) => pathname.startsWith(`${prefix}${href}`);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-200",
      scrolled
        ? "bg-card/95 backdrop-blur-md border-b border-border shadow-xs"
        : "bg-transparent"
    )}>
      <nav className="container flex items-center justify-between h-14">
        {/* Logo */}
        <Link href={`${prefix}/`} className="flex items-center gap-2 font-semibold text-sm text-foreground hover:text-primary transition-colors">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
            <Code2 className="w-4 h-4 text-primary-foreground" />
          </div>
          SASSOU<span className="text-primary">.</span>dev
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV.map((link) => (
            <Link key={link.key} href={`${prefix}${link.href}`}
              className={cn(
                "px-3 py-1.5 rounded text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary bg-[hsl(var(--primary-subtle))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}>
              {t(link.key)}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme" className="h-8 w-8">
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark"
                ? <motion.span key="sun"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><Sun className="h-4 w-4" /></motion.span>
                : <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Moon className="h-4 w-4" /></motion.span>
              }
            </AnimatePresence>
          </Button>

          <Link href={locale === "fr" ? "/en" : "/fr"}>
            <Button variant="outline" size="sm" className="h-8 text-xs px-2.5">
              {locale === "fr" ? "EN" : "FR"}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8" onClick={() => setOpen(!open)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border bg-card">
            <div className="container py-3 flex flex-col gap-0.5">
              {NAV.map((link) => (
                <Link key={link.key} href={`${prefix}${link.href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-primary bg-[hsl(var(--primary-subtle))]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}>
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
