import { getSkills } from "@/features/portfolio/queries";
import { SkillsBoard } from "@/widgets/SkillsBoard";

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const skills = await getSkills(locale);
  return (
    <div className="py-20">
      <SkillsBoard skills={skills} locale={locale} />
    </div>
  );
}
