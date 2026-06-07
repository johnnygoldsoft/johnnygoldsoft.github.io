import { getExperiences } from "@/features/portfolio/queries";
import { Reveal } from "@/shared/ui/motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const TYPE_LABELS: Record<string, string> = {
  cdi:"CDI", cdd:"CDD", freelance:"Freelance", volunteer:"Bénévolat", internship:"Stage"
};
const TYPE_COLORS: Record<string, string> = {
  cdi:"badge-success", cdd:"badge-primary", freelance:"badge-teal",
  volunteer:"badge-warning", internship:"badge-muted"
};

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const experiences = await getExperiences(locale);

  return (
    <div className="container py-20 max-w-3xl">
      <Reveal className="mb-12">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Parcours</p>
        <h1 className="text-foreground mb-3">Expérience professionnelle</h1>
        <p className="text-muted-foreground">Mon parcours et mes missions freelance.</p>
      </Reveal>

      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.07}>
              <div className="flex gap-6">
                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-card flex items-center justify-center z-10 relative">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
                {/* Card */}
                <div className="flex-1 border border-border rounded-lg bg-card p-4 hover:shadow-sm transition-shadow mb-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded inline-flex items-center ${TYPE_COLORS[exp.type] ?? "badge-muted"}`}>
                      {TYPE_LABELS[exp.type] ?? exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.start_date} — {exp.end_date || "Présent"}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    )}
                  </div>
                  {exp.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
