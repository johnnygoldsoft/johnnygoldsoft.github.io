import { getProjects } from "@/features/portfolio/queries";
import { ProjectsGrid } from "@/widgets/ProjectsGrid";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const projects = await getProjects(locale);
  return <ProjectsGrid projects={projects} locale={locale} />;
}
