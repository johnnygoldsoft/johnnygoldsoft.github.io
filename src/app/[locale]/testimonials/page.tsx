import { getTestimonials } from "@/features/portfolio/queries";
import { TestimonialsCarousel } from "@/widgets/TestimonialsCarousel";

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const testimonials = await getTestimonials(locale);
  return (
    <div className="py-6">
      <TestimonialsCarousel testimonials={testimonials} locale={locale} />
    </div>
  );
}
