import { getArticleBySlug } from "@/features/blog/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale);
  if (!article) return {};
  return { title: article.title, description: article.excerpt || article.title };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale);
  if (!article) notFound();

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour au blog
      </Link>
      {article.cover_url && (
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-premium">
          <Image src={article.cover_url} alt={article.title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags?.map((tag: string) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
      {article.published_at && (
        <p className="text-sm text-muted-foreground mb-8">{formatDate(article.published_at, locale)}</p>
      )}
      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}
