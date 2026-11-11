import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Code2,
  Database,
  Container,
  Zap,
  Brain,
  Package,
} from "lucide-react";

const technologyIcons: Record<string, React.ReactNode> = {
  FastAPI: <Code2 className="h-4 w-4" />,
  NestJS: <Code2 className="h-4 w-4" />,
  Angular: <Code2 className="h-4 w-4" />,
  React: <Code2 className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  Docker: <Container className="h-4 w-4" />,
  Python: <Code2 className="h-4 w-4" />,
  TypeScript: <Code2 className="h-4 w-4" />,
  Vite: <Zap className="h-4 w-4" />,
  n8n: <Package className="h-4 w-4" />,
  "Deep Learning": <Brain className="h-4 w-4" />,
  "Computer Vision": <Brain className="h-4 w-4" />,
  IA: <Brain className="h-4 w-4" />,
  "Node.js": <Code2 className="h-4 w-4" />,
  "PDF Export": <ExternalLink className="h-4 w-4" />,
};

const projects = [
  {
    name: "Gabbie Boutique",
    type: {
      fr: "Projet personnel · En production",
      en: "Personal project · Live",
    },
    description: {
      fr: "Boutique e-commerce bilingue conçue pour découvrir et rechercher des produits, gérer son panier et son compte client, puis commander avec paiement à la livraison. Le site met aussi en avant la livraison et les retours faciles.",
      en: "Bilingual e-commerce store for browsing and searching products, managing a cart and customer account, and placing orders with cash on delivery. The storefront also highlights delivery and easy returns.",
    },
    impact: {
      fr: [
        "Expérience e-commerce",
        "Panier et compte client",
        "Paiement à la livraison",
      ],
      en: [
        "E-commerce experience",
        "Cart and customer account",
        "Cash on delivery",
      ],
    },
    technologies: [],
    github: null,
    demo: "https://gabbieboutique.com/",
    link: "https://gabbieboutique.com/",
  },
  {
    name: "Scolary_v2",
    type: {
      fr: "Projet expérimental",
      en: "Experimental project",
    },
    description: {
      fr: "Système de gestion académique couvrant inscriptions, réinscriptions, notes, documents et workflows de validation, avec rôles fins et assistance IA (synthèse, anomalies, aide à la délibération).",
      en: "Academic management system covering enrollment, grades, documents, and validation workflows, with granular roles and AI-assisted decision support.",
    },
    impact: {
      fr: ["Workflows métier", "Gestion des rôles", "Assistance IA"],
      en: ["Business workflows", "Role-based access", "AI assistance"],
    },
    technologies: ["FastAPI", "Angular", "PostgreSQL", "IA", "Python"],
    github: null,
    demo: null,
    link: "En cours de construction",
  },
  {
    name: "API Generator",
    type: {
      fr: "Projet expérimental",
      en: "Experimental project",
    },
    description: {
      fr: "Outil de génération de projets API complets: FastAPI ou NestJS avec modèles, routes CRUD, migrations et exécution conteneurisée.",
      en: "API generator for FastAPI or NestJS projects with models, CRUD routes, migrations, and containerized execution.",
    },
    impact: {
      fr: ["Génération de code", "Routes CRUD", "Prêt pour Docker"],
      en: ["Code generation", "CRUD scaffolding", "Docker ready"],
    },
    technologies: [
      "FastAPI",
      "NestJS",
      "Python",
      "TypeScript",
      "Docker",
      "Code Generation",
    ],
    github: null,
    demo: "https://dev.projectsready.com",
    link: "https://dev.projectsready.com",
  },
  {
    name: "CV Generator",
    type: {
      fr: "Outil utilitaire",
      en: "Utility project",
    },
    description: {
      fr: "Petit service web pour créer un CV basique en ligne: formulaire, modèles simples, export PDF et partage public.",
      en: "Lightweight web app to create a basic online CV: editable form, simple templates, PDF export and public share link.",
    },
    impact: {
      fr: ["Création rapide", "Export PDF", "Lien partageable"],
      en: ["Fast CV creation", "PDF export", "Shareable link"],
    },
    technologies: ["React", "TypeScript", "Node.js", "PDF Export"],
    github: null,
    demo: "https://cv.projectsready.com/",
    link: null,
  },
];

type ProjectsProps = {
  lang: "fr" | "en";
};

export function Projects({ lang }: ProjectsProps) {
  const t = {
    fr: {
      section: "Portfolio",
      title: "Projets & réalisations",
      subtitle:
        "Des produits utilisés en conditions réelles et des outils conçus pour résoudre des problèmes concrets.",
      code: "Code",
      demo: "Voir le projet",
      impact: "Points clés",
    },
    en: {
      section: "Portfolio",
      title: "Projects & Work",
      subtitle:
        "Live products and practical tools built to solve real-world problems.",
      code: "Code",
      demo: "View live project",
      impact: "Highlights",
    },
  } as const;

  return (
    <section
      id="projects"
      className="section-enter-right section-frame soft-spotlight bg-slate-50 px-4 py-20 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t[lang].section}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t[lang].title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="stagger-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-lift project-card flex flex-col border-slate-200 bg-white/95 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/95"
            >
              <CardHeader>
                <div className="mb-2">
                  <Badge
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300"
                  >
                    {project.type[lang]}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description[lang]}
                </CardDescription>
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {t[lang].impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.impact[lang].map((item, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-[11px]"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs flex items-center gap-1.5"
                    >
                      {technologyIcons[tech]}
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t[lang].demo}: ${project.name} (opens in a new tab)`}
                      >
                        <ExternalLink
                          className="mr-1 h-4 w-4"
                          aria-hidden="true"
                        />
                        {t[lang].demo}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
