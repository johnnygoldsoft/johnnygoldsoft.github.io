import { Outfit } from "next/font/google";
import Loader from "./components/Loader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Jean-Claude Sassou — Ingénieur Full-Stack & Développeur Mobile",
  description:
    "Portfolio de Jean-Claude Sassou. Ingénieur logiciel spécialisé dans les applications mobiles réactives (Flutter) et les plateformes web modernes (Next.js 15, Laravel, UI/UX). Disponible pour projets freelance et opportunités CDI.",
  keywords: [
    "Jean-Claude Sassou",
    "johnnygoldsoft",
    "Ingénieur Logiciel",
    "Développeur Full-Stack",
    "Développeur Flutter",
    "Développeur Next.js",
    "Développeur React",
    "UI/UX Designer",
    "Lomé Togo",
    "Portfolio Développeur",
  ],
  authors: [{ name: "Jean-Claude Sassou", url: "https://johnnygoldsoft.github.io" }],
  creator: "Jean-Claude Sassou",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://johnnygoldsoft.github.io",
    title: "Jean-Claude Sassou — Ingénieur Full-Stack & Mobile",
    description:
      "Conception et développement d'applications mobiles Flutter et de plateformes web Next.js prêtes pour le marché.",
    siteName: "Jean-Claude Sassou Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claude Sassou — Ingénieur Full-Stack & Mobile",
    description:
      "Conception et développement d'applications mobiles Flutter et de plateformes web Next.js prêtes pour le marché.",
    creator: "@johnnygoldsoft",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased selection:bg-blue-600 selection:text-white bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 min-h-screen overflow-x-hidden`}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
