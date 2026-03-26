// Portfolio Data for Jean Claude SASSOU

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "UI/UX Design" | "Web Design" | "Mobile App";
  image: string;
  link?: string;
  technologies?: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tool {
  name: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Frontend Festijet",
    description: "Modern UI/UX design for Festijet platform",
    category: "UI/UX Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["React", "Figma", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Frontend EBD",
    description: "Enterprise dashboard interface design",
    category: "UI/UX Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["Vue.js", "Figma", "Bootstrap"],
  },
  {
    id: "3",
    title: "Frontend AIPJeunes",
    description: "Youth engagement platform interface",
    category: "UI/UX Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "4",
    title: "Site web CDEJ",
    description: "Community development center website",
    category: "Web Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "5",
    title: "Site web Sproca",
    description: "Corporate website with CMS integration",
    category: "Web Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["WordPress", "PHP", "MySQL"],
  },
  {
    id: "6",
    title: "Evalcit UI",
    description: "Evaluation platform user interface",
    category: "UI/UX Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["Figma", "React", "Material UI"],
  },
  {
    id: "7",
    title: "Feedplate App",
    description: "Mobile food delivery application",
    category: "Mobile App",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: "8",
    title: "Newsly App",
    description: "News aggregation and reading platform",
    category: "Mobile App",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["React Native", "Redux", "Firebase"],
  },
  {
    id: "9",
    title: "Socialy App",
    description: "Social networking mobile application",
    category: "Mobile App",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031041644/7ER3uZHJjv6Bgz8SAoZCVQ/projects-showcase-bg-3usUHiqB4uRVeNAaWgEnZh.webp",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
];

export const services: Service[] = [
  {
    id: "1",
    icon: "🌐",
    title: "Web Design",
    description: "Creation of modern and responsive websites tailored to your needs",
  },
  {
    id: "2",
    icon: "📱",
    title: "Mobile App Development",
    description: "High-performance and reactive mobile applications for iOS and Android",
  },
  {
    id: "3",
    icon: "🎨",
    title: "UI/UX Design",
    description: "Intuitive and attractive interface design for optimal user experience",
  },
  {
    id: "4",
    icon: "✨",
    title: "Graphics Design",
    description: "Creative graphic design to strengthen your visual identity",
  },
  {
    id: "5",
    icon: "🔧",
    title: "Network & Systems",
    description: "Configuration and management of IT networks and systems",
  },
  {
    id: "6",
    icon: "🛠️",
    title: "IT Maintenance",
    description: "Support and maintenance to ensure your systems perform optimally",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Dart", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue.js", "Flutter", "React Native", "Laravel"],
  },
  {
    category: "Tools & Platforms",
    items: ["Figma", "Git", "Firebase", "MongoDB", "WordPress", "VS Code"],
  },
];

export const tools: Tool[] = [
  { name: "Firebase", icon: "🔥" },
  { name: "WordPress", icon: "📝" },
  { name: "Laravel", icon: "🚀" },
  { name: "Flutter", icon: "📱" },
  { name: "Figma", icon: "🎨" },
  { name: "Git", icon: "🔗" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/johnnygoldsoft", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", url: "mailto:Johnnygoldsoft@gmail.com", icon: "mail" },
];

export const profileInfo = {
  name: "Jean Claude SASSOU",
  title: "Web and Mobile Developer, IT Specialist",
  bio: "Passionate developer creating innovative digital solutions. Expertise in web and mobile application development, with a focus on user experience and system optimization.",
  email: "Johnnygoldsoft@gmail.com",
  location: "Congo",
  cvUrl: "/jeanclaudesas_cv_finale.pdf",
};
