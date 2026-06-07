import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

const locales = ["fr", "en"];
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://johnnygoldsoft.dev";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Jean Claude SASSOU — Web & Mobile Developer | Togo"
    : "Jean Claude SASSOU — Développeur Web & Mobile | Togo";
  const description = isEn
    ? "Freelance Web & Mobile Developer based in Lomé, Togo. Expert in WordPress, React, Next.js, Flutter. Available for projects in Togo, Benin, France, USA, Canada."
    : "Développeur Web & Mobile freelance basé à Lomé, Togo. Expert WordPress, React, Next.js, Flutter. Disponible pour projets au Togo, Bénin, France, USA, Canada.";
  const keywords = isEn
    ? ["web developer Togo","mobile developer Lome","WordPress developer","React developer West Africa","Flutter developer","freelance developer Togo","Next.js developer"]
    : ["développeur web Togo","développeur mobile Lomé","WordPress Togo","développeur React","Flutter développeur","freelance Togo","Next.js","création site web Togo"];

  return {
    title, description, keywords,
    authors: [{ name: "Jean Claude SASSOU", url: BASE_URL }],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: { "fr": `${BASE_URL}/fr`, "en": `${BASE_URL}/en` },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      url: `${BASE_URL}/${locale}`,
      siteName: "Jean Claude SASSOU",
      title, description,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
    other: {
      "geo.region": "TG", "geo.placename": "Lomé",
      "geo.position": "6.1725;1.2314", "ICBM": "6.1725, 1.2314",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean Claude SASSOU",
    url: `${BASE_URL}/${locale}`,
    jobTitle: locale === "en" ? "Web & Mobile Developer" : "Développeur Web & Mobile",
    address: { "@type": "PostalAddress", addressLocality: "Lomé", addressCountry: "TG" },
    areaServed: ["TG","BJ","FR","US","CA"],
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar locale={locale} />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
