import { getProducts, getCategories } from "@/features/shop/queries";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Reveal, StaggerList, StaggerItem } from "@/shared/ui/motion";
import { ExternalLink, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const [products, categories] = await Promise.all([getProducts(locale), getCategories(locale)]);

  return (
    <div className="container py-20">
      <Reveal className="mb-10">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Boutique</p>
        <h1 className="text-foreground mb-3">Ressources & Produits</h1>
        <p className="text-muted-foreground max-w-lg">Templates, outils et ressources numériques pour vos projets.</p>
      </Reveal>

      {categories.length > 0 && (
        <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/${locale}/boutique/${cat.slug}`}>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted transition-colors px-3 py-1">{cat.name}</Badge>
            </Link>
          ))}
        </Reveal>
      )}

      {products.length === 0 ? (
        <div className="border border-border rounded-lg bg-card p-12 text-center text-muted-foreground">
          <ShoppingBag className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Aucun produit disponible pour le moment.</p>
        </div>
      ) : (
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                {product.image_url && (
                  <div className="relative h-40 bg-muted overflow-hidden">
                    <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                  </div>
                )}
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
                  {product.price_info && (
                    <p className="text-sm font-semibold text-primary">{product.price_info}</p>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <a href={product.buy_url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full gap-2" size="sm">
                      <ExternalLink className="h-3.5 w-3.5" /> Acheter
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      )}
    </div>
  );
}
