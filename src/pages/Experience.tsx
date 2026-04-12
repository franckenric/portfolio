
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BriefcaseBusiness, Building, Calendar, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: {
      fr: 'Developpeur Full Stack',
      en: 'Full Stack Developer',
    },
    company: 'SFER Maurice (temps plein)',
    period: "Août 2022 - Aujourd'hui",
    location: 'Antananarivo, Madagascar',
    type: {
      fr: 'Actuel',
      en: 'Current',
    },
    summary: {
      fr: 'Conception, developpement et deploiement de solutions logicielles metier pour la gestion commerciale et le secteur photovoltaïque.',
      en: 'Designed, built, and deployed business software for commercial operations and the photovoltaic domain.',
    },
    highlights: {
      fr: [
        "Conception d'un ERP specialise couvrant l'integralite du cycle client: prospection, rendez-vous, contrats, visites de site et installation.",
        'Structuration des processus metier, meilleure tracabilite des actions et reduction significative des taches manuelles.',
        "Mise en place et exploitation de pvgis.com pour simuler le rendement solaire selon la localisation et produire des analyses personnalisees.",
        "Implementation d'un systeme de generation, modification et impression de PDF dynamiques a partir de templates metier.",
        'Mise en place de notifications SMS sans service tiers via mobile connecte et infrastructure interne.',
      ],
      en: [
        'Designed a specialized ERP covering the full customer lifecycle: prospecting, meetings, contracts, site visits, and installation.',
        'Improved process structure and action traceability, while reducing repetitive manual tasks.',
        'Launched and operated pvgis.com to simulate solar output by location and deliver tailored analysis for projects.',
        'Implemented a dynamic PDF engine for generation, updates, and printing from reusable business templates.',
        'Built autonomous SMS notifications without third-party providers, using internal infrastructure.',
      ],
    },
    metrics: ['ERP End-to-End', 'PVGIS in Production', 'Dynamic PDF Engine', 'No Third-Party SMS'],
    technologies: ['FastAPI', 'React', 'Vite', 'TypeScript', 'PostgreSQL', 'Docker', 'shadcn/ui'],
  },
  {
    title: {
      fr: 'Back-End Developer',
      en: 'Back-End Developer',
    },
    company: 'Paminnov (freelance)',
    period: 'Août 2021 - Août 2022',
    location: 'Madagascar (sur site)',
    type: {
      fr: 'Freelance',
      en: 'Freelance',
    },
    summary: {
      fr: 'Integration de systemes et automatisation de flux e-commerce pour accelerer le traitement et fiabiliser les donnees.',
      en: 'System integration and workflow automation for e-commerce operations, with faster processing and more reliable data.',
    },
    highlights: {
      fr: [
        'Integration des API Shopify et Mirakl pour synchroniser automatiquement les commandes entre plateformes.',
        'Automatisation de traitements recurrents avec scripts Python et deploiements Docker.',
        'Maintenance proactive et optimisation continue des plateformes e-commerce en production.',
        "Reduction d'environ 20% des bugs critiques et amelioration globale de l'experience utilisateur.",
      ],
      en: [
        'Integrated Shopify and Mirakl APIs to automatically synchronize cross-platform order flows.',
        'Automated recurring operations through Python scripts and Dockerized processes.',
        'Handled proactive maintenance and continuous optimization on live e-commerce platforms.',
        'Reduced critical bugs by around 20% and improved overall user experience.',
      ],
    },
    metrics: ['Shopify + Mirakl Sync', 'Workflow Automation', '~20% Critical Bugs'],
    technologies: ['Python', 'FastAPI', 'Shopify API', 'Mirakl', 'Docker', 'PostgreSQL'],
  },
]

type ExperienceProps = {
  lang: 'fr' | 'en'
}

export function Experience({ lang }: ExperienceProps) {
  const t = {
    fr: {
      section: 'Experience',
      title: 'Experience Professionnelle',
      subtitle: 'Parcours axe livraison de valeur, impact metier et execution technique solide.',
      impact: 'Impacts cles',
      stack: 'Stack',
    },
    en: {
      section: 'Experience',
      title: 'Professional Experience',
      subtitle: 'A track record focused on business impact, delivery quality, and technical ownership.',
      impact: 'Key impact',
      stack: 'Stack',
    },
  } as const

  return (
    <section id="experience" className="reveal reveal-delay-1 section-frame bg-white px-4 py-20 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{t[lang].section}</p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {t[lang].title}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="reveal relative pl-8" style={{ animationDelay: `${index * 120 + 90}ms` }}>
              {index < experiences.length - 1 && (
                <div className="absolute left-[9px] top-9 h-[calc(100%+1.8rem)] w-px bg-gradient-to-b from-blue-400/60 to-slate-300 dark:to-slate-700" />
              )}
              <div className="absolute left-0 top-7 flex h-5 w-5 items-center justify-center rounded-full border border-blue-300 bg-white shadow-sm dark:border-blue-800 dark:bg-slate-900">
                <BriefcaseBusiness className="h-3 w-3 text-blue-600" />
              </div>

              <Card className="card-lift relative overflow-hidden border-slate-200 bg-gradient-to-b from-white to-slate-50/80 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/30">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
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
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.metrics.map((metric, i) => (
                      <Badge key={i} variant="outline" className="border-cyan-200 bg-cyan-50/70 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/20 dark:text-cyan-300">
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
  )
}