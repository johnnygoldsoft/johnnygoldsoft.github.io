"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { signOut } from "@/features/auth/actions";
import { cn } from "@/shared/lib/utils";
import {
  Code2, LayoutDashboard, FolderKanban, Zap, Clock, User,
  Settings, Star, ShoppingBag, FileText, MessageSquare,
  LogOut, ChevronRight, Menu, X, Tag,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Portfolio",
    items: [
      { label: "Dashboard",     href: "",                icon: LayoutDashboard },
      { label: "Projets",       href: "/projects",       icon: FolderKanban },
      { label: "Compétences",   href: "/skills",         icon: Zap },
      { label: "Expériences",   href: "/experiences",    icon: Clock },
      { label: "À propos",      href: "/about",          icon: User },
    ],
  },
  {
    label: "Business",
    items: [
      { label: "Services",      href: "/services",       icon: Settings },
      { label: "Devis",         href: "/quotes",         icon: MessageSquare },
      { label: "Témoignages",   href: "/testimonials",   icon: Star },
    ],
  },
  {
    label: "Boutique",
    items: [
      { label: "Produits",      href: "/shop/products",  icon: ShoppingBag },
      { label: "Catégories",   href: "/shop/categories", icon: Tag },
    ],
  },
  {
    label: "Contenu",
    items: [
      { label: "Articles",      href: "/blog",           icon: FileText },
    ],
  },
];

interface AdminSidebarProps { locale: string; userEmail?: string; }

export function AdminSidebar({ locale, userEmail }: AdminSidebarProps) {
  const pathname = usePathname();
  const base = `/${locale}/admin`;
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    const full = `${base}${href}`;
    if (href === "") return pathname === base || pathname === `${base}/`;
    return pathname.startsWith(full);
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border flex-shrink-0">
        <div className="w-7 h-7 rounded bg-[hsl(var(--sidebar-active))] flex items-center justify-center">
          <Code2 className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-muted-foreground truncate">SASSOU.dev</p>
          <p className="text-[10px] text-muted-foreground">Admin</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-5 ">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-semibold uppercase tracking-widest  px-2 mb-1.5">
              {group.label}
            </p>
            <div className="space-y-0.5 ">
              {group.items.map(({ label, href, icon: Icon }) => (
                <Link key={href} href={`${base}${href}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn("sidebar-item ", isActive(href) && "active ")}>
                  <Icon />
                  <span className="flex-1 text-sm ">{label}</span>
                  {isActive(href) && <ChevronRight className="h-3 w-3 opacity-50 " />}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-3 flex-shrink-0">
        {userEmail && (
          <div className="px-2 py-1.5 mb-2">
            <p className="text-xs text-muted-foreground font-medium truncate">{userEmail}</p>
            <p className="text-[10px] text-muted-foreground">Administrateur</p>
          </div>
        )}
        <form action={signOut}>
          <button type="submit" className="sidebar-item w-full  hover:text-red-400">
            <LogOut />
            <span>Déconnexion</span>
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 bg-[hsl(var(240 40% 10%))] border-r border-[hsl(var(--sidebar-border))] h-screen sticky top-0 ">
        <SidebarContent />
      </aside>

      {/* Mobile toggle */}
      <button onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-3.5 left-4 z-50 w-8 h-8 rounded border border-border bg-card flex items-center justify-center shadow-sm">
        <Menu className="h-4 w-4" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)} />
            <motion.aside initial={{ x: -256 }} animate={{ x: 0 }} exit={{ x: -256 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-56 bg-[hsl(var(--sidebar-bg))] border-r border-[hsl(var(--sidebar-border))]">
              <button onClick={() => setMobileOpen(false)}
                className="absolute top-3.5 right-3 w-7 h-7 rounded flex items-center justify-center text-[hsl(var(--sidebar-muted))] hover:text-[hsl(var(--text-sm))]">
                <X className="h-4 w-4" />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
