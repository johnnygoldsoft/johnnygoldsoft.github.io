import { getServices } from "@/features/portfolio/queries";
import { ServicesGrid } from "@/widgets/ServicesGrid";
import { QuoteModal } from "@/features/services/components/QuoteModal";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const services = await getServices(locale);
  return (
    <div className="py-6">
      <ServicesGrid services={services} locale={locale} />
      <QuoteModal services={services} locale={locale} />
    </div>
  );
}
