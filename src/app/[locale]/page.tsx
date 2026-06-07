import { HeroSection } from "@/widgets/HeroSection";
import { ProjectsGrid } from "@/widgets/ProjectsGrid";
import { SkillsBoard } from "@/widgets/SkillsBoard";
import { ServicesGrid } from "@/widgets/ServicesGrid";
import { TestimonialsCarousel } from "@/widgets/TestimonialsCarousel";
import {
  getProjects, getSkills, getServices,
  getTestimonials, getAbout,
} from "@/features/portfolio/queries";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const [projects, skills, services, testimonials, about] = await Promise.all([
    getProjects(locale),
    getSkills(locale),
    getServices(locale),
    getTestimonials(locale),
    getAbout(locale),
  ]);

  return (
    <>
      <HeroSection about={about} locale={locale} />
      <ProjectsGrid projects={projects.slice(0, 6)} locale={locale} preview />
      <SkillsBoard skills={skills} locale={locale} />
      <ServicesGrid services={services} locale={locale} />
      <TestimonialsCarousel testimonials={testimonials} locale={locale} />
    </>
  );
}
