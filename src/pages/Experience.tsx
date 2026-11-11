import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BriefcaseBusiness,
  Building,
  Calendar,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

const experiences = [
  {
    title: {
      fr: "Developpeur Full Stack",
      en: "Full Stack Developer",
    },
    company: "SFER Maurice (temps plein)",
    projectLink: "https://solar-rent.mu/en",
    period: "Août 2022 - Aujourd'hui",
    location: "Antananarivo, Madagascar",
    type: {
      fr: "Actuel",
      en: "Current",
    },
    summary: {
      fr: "Conception, développement et déploiement de solutions métier pour la gestion commerciale et le photovoltaïque. Sur Solar Rent Mauritius, contribution Full Stack à une plateforme de leasing solaire avec batteries, du catalogue administrable à la simulation d’offres personnalisées.",
      en: "Designed, built, and deployed business solutions for commercial operations and the solar industry. For Solar Rent Mauritius, contributed full stack to a solar-and-battery leasing platform, from its admin-managed catalogue to personalized offer simulations.",
    },
    highlights: {
      fr: [
        "Conçu un ERP métier pour suivre un dossier client de bout en bout — prospection, rendez-vous, contrats, visites techniques et installation — et centraliser les étapes du processus.",
        "Structuré les processus métier, amélioré la traçabilité des actions et la visibilité sur l’avancement des dossiers, tout en réduisant les tâches manuelles récurrentes.",
        "Développé le front office de Solar Rent : présentation des offres Essential, Autonomy et Performance, avec des informations sur la production estimée, l’autonomie des batteries, les loyers et les économies potentielles.",
        "Développé le back office pour administrer le catalogue des batteries, leurs spécifications techniques et leur disponibilité, puis afficher les informations à jour dans les offres du site public.",
        "Développé le moteur backend de simulation Solar Rent : analyse des besoins et de la consommation du client pour proposer un dimensionnement adapté, une production estimée, l’autonomie et des projections financières.",
        "Mis en place et exploité PVGIS pour estimer la production solaire selon la localisation et produire des analyses personnalisées pour les projets.",
        "Implémenté la génération, la modification et l’impression de documents PDF dynamiques à partir de modèles métier réutilisables.",
        "Mis en place des notifications SMS sans service tiers, via un mobile connecté et l’infrastructure interne.",
      ],
      en: [
        "Designed a business ERP to manage customer cases end to end—from prospecting and appointments to contracts, technical site visits, and installation—while centralizing process stages.",
        "Structured business processes, improved action traceability and visibility into case progress, and reduced recurring manual work.",
        "Developed Solar Rent’s customer-facing site to present the Essential, Autonomy, and Performance offers, including estimated production, battery autonomy, rental fees, and potential savings.",
        "Built the back office to manage the battery catalogue, technical specifications, and availability, then surface up-to-date information in public offers.",
        "Developed Solar Rent’s backend simulation engine to assess customer needs and energy consumption and produce tailored system sizing, estimated production, battery autonomy, and financial projections.",
        "Set up and operated PVGIS to estimate solar production by location and prepare tailored project analyses.",
        "Implemented dynamic PDF generation, editing, and printing using reusable business templates.",
        "Built SMS notifications without third-party providers, using a connected mobile device and internal infrastructure.",
      ],
    },
    metrics: [
      "ERP End-to-End",
      "PVGIS in Production",
      "Dynamic PDF Engine",
      "No Third-Party SMS",
      "Solar Rent · Front + Back Office",
      "Battery Catalogue · Specs · Availability",
      "Customer Project Simulations",
    ],
    technologies: [
      "FastAPI",
      "React",
      "Vite",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "shadcn/ui",
    ],
  },
  {
    title: {
      fr: "Back-End Developer",
      en: "Back-End Developer",
    },
    company: "Paminnov (freelance)",
    projectLink: null,
    period: "Août 2021 - Août 2022",
    location: "Madagascar (sur site)",
    type: {
      fr: "Freelance",
      en: "Freelance",
    },
    summary: {
      fr: "Integration de systemes et automatisation de flux e-commerce pour accelerer le traitement et fiabiliser les donnees.",
      en: "System integration and workflow automation for e-commerce operations, with faster processing and more reliable data.",
    },
    highlights: {
      fr: [
        "Integration des API Shopify et Mirakl pour synchroniser automatiquement les commandes entre plateformes.",
        "Automatisation de traitements recurrents avec scripts Python et deploiements Docker.",
        "Maintenance proactive et optimisation continue des plateformes e-commerce en production.",
        "Reduction d'environ 20% des bugs critiques et amelioration globale de l'experience utilisateur.",
      ],
      en: [
        "Integrated Shopify and Mirakl APIs to automatically synchronize cross-platform order flows.",
        "Automated recurring operations through Python scripts and Dockerized processes.",
        "Handled proactive maintenance and continuous optimization on live e-commerce platforms.",
        "Reduced critical bugs by around 20% and improved overall user experience.",
      ],
    },
    metrics: [
      "Shopify + Mirakl Sync",
      "Workflow Automation",
      "~20% Critical Bugs",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Shopify API",
      "Mirakl",
      "Docker",
      "PostgreSQL",
    ],
  },
];

type ExperienceProps = {
  lang: "fr" | "en";
};

export function Experience({ lang }: ExperienceProps) {
  const t = {
    fr: {
      section: "Expérience",
      title: "Expérience professionnelle",
      subtitle:
        "Des solutions full stack conçues autour des besoins métier, de la simulation de projets à leur gestion opérationnelle.",
      impact: "Réalisations clés",
      stack: "Stack",
    },
    en: {
      section: "Experience",
      title: "Professional Experience",
      subtitle:
        "Full stack solutions shaped around business needs, from project simulation to day-to-day operations.",
      impact: "Key impact",
      stack: "Stack",
    },
  } as const;

  return (
    <section
      id="experience"
      className="section-enter-left section-frame bg-white px-4 py-20 dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t[lang].section}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {t[lang].title}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="reveal relative pl-8"
              style={{ animationDelay: `${index * 120 + 90}ms` }}
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-[9px] top-9 h-[calc(100%+1.8rem)] w-px bg-gradient-to-b from-blue-400/60 to-slate-300 dark:to-slate-700" />
              )}
              <div className="absolute left-0 top-7 flex h-5 w-5 items-center justify-center rounded-full border border-blue-300 bg-white shadow-sm dark:border-blue-800 dark:bg-slate-900">
                <BriefcaseBusiness className="h-3 w-3 text-blue-600" />
              </div>

              <Card className="card-lift timeline-card relative overflow-hidden border-slate-200 bg-gradient-to-b from-white to-slate-50/80 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/30">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300"
                        >
                          {exp.type[lang]}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {exp.location}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {exp.title[lang]}
                      </CardTitle>
                      <div className="mt-1 flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      {exp.projectLink && (
                        <a
                          href={exp.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Solar Rent Mauritius
                          <ExternalLink
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.summary[lang]}
                  </p>

                  <div className="mb-5">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                      {t[lang].impact}
                    </p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      {exp.highlights[lang].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.metrics.map((metric, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-cyan-200 bg-cyan-50/70 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/20 dark:text-cyan-300"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
