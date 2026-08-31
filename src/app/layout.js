import { Outfit } from "next/font/google";
import Loader from "./components/Loader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Jean-Claude Sassou — Développeur Full-Stack & Concepteur UI/UX",
  description:
    "Portfolio de Jean-Claude Sassou. Développeur d'applications web & mobiles modernes (Next.js, React, Flutter, Laravel, UI/UX). Disponible pour projets freelance et opportunités.",
  keywords: [
    "Jean-Claude Sassou",
    "johnnygoldsoft",
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
    title: "Jean-Claude Sassou — Développeur Full-Stack & Mobile",
    description:
      "Conception et développement d'applications web modernes et mobiles performantes.",
    siteName: "Jean-Claude Sassou Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claude Sassou — Développeur Full-Stack & Mobile",
    description:
      "Conception et développement d'applications web modernes et mobiles performantes.",
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
        className={`${outfit.className} antialiased selection:bg-blue-500 selection:text-white bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 min-h-screen overflow-x-hidden`}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
