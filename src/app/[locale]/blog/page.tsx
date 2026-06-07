import { getArticles } from "@/features/blog/queries";
import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Reveal, StaggerList, StaggerItem } from "@/shared/ui/motion";
import { formatDate } from "@/shared/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = await getArticles(locale);

  return (
    <div className="container py-20">
      <Reveal className="mb-10">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Blog</p>
        <h1 className="text-foreground mb-3">Articles & Réflexions</h1>
        <p className="text-muted-foreground max-w-lg">Partage de connaissances sur le développement web, mobile et les nouvelles technologies.</p>
      </Reveal>

      {articles.length === 0 ? (
        <div className="border border-border rounded-lg bg-card p-12 text-center text-muted-foreground">
          <p className="text-sm">Aucun article publié pour le moment.</p>
        </div>
      ) : (
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <Link href={`/${locale}/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow group overflow-hidden">
                  {article.cover_url && (
                    <div className="relative h-40 bg-muted overflow-hidden">
                      <Image src={article.cover_url} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <CardContent className="p-4 space-y-2.5">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags?.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    {article.excerpt && (
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{article.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between pt-1">
                      {article.published_at && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {formatDate(article.published_at, locale)}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-primary font-medium">
                        Lire <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      )}
    </div>
  );
}
