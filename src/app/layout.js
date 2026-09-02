import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Loader from "./components/Loader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Jean-Claude Sassou (Johnny Gold) — Ingénieur Full-Stack & Mobile",
  description:
    "Portfolio de Jean-Claude Sassou (JohnnyGoldSoft). Ingénieur logiciel d'élite spécialisé dans les applications mobiles réactives (Flutter) et les plateformes web modernes (Next.js 15, Laravel, UI/UX). Disponible pour projets freelance et opportunités CDI.",
  keywords: [
    "Jean-Claude Sassou",
    "Johnny Gold",
    "JohnnyGoldSoft",
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
    title: "Jean-Claude Sassou (Johnny Gold) — Ingénieur Full-Stack & Mobile",
    description:
      "Conception et développement d'applications mobiles Flutter et de plateformes web Next.js prêtes pour le marché.",
    siteName: "Jean-Claude Sassou Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claude Sassou (Johnny Gold) — Ingénieur Full-Stack & Mobile",
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
        className={`${plusJakarta.className} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-amber-500 selection:text-stone-950 bg-[#FAF8F5] text-stone-900 dark:bg-[#0C0A09] dark:text-stone-100 min-h-screen overflow-x-hidden`}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}

