import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://johnnygoldsoft.dev"),
  title: { default: "Jean Claude SASSOU — Développeur Web & Mobile", template: "%s | Jean Claude SASSOU" },
  description: "Portfolio de Jean Claude SASSOU, développeur web & mobile basé à Lomé, Togo.",
  keywords: ["développeur web", "mobile", "Flutter", "React", "WordPress", "Togo"],
  authors: [{ name: "Jean Claude SASSOU" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Jean Claude SASSOU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
