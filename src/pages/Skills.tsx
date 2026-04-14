import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Code2, Database, Globe, Layout, Network, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: {
      fr: 'Langages',
      en: 'Languages',
    },
    icon: Code2,
    skills: {
      fr: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
      en: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    },
  },
  {
    title: {
      fr: 'Frameworks',
      en: 'Frameworks',
    },
    icon: Layout,
    skills: {
      fr: ['FastAPI', 'React', 'Angular', 'Ionic', 'Vite', 'NestJS', 'Flutter'],
      en: ['FastAPI', 'React', 'Angular', 'Ionic', 'Vite', 'NestJS', 'Flutter'],
    },
  },
  {
    title: {
      fr: 'Bases de donnees',
      en: 'Databases',
    },
    icon: Database,
    skills: {
      fr: ['PostgreSQL', 'PostgreSQL vectoriel', 'MySQL', 'MongoDB'],
      en: ['PostgreSQL', 'Vector PostgreSQL', 'MySQL', 'MongoDB'],
    },
  },
  {
    title: {
      fr: 'IA & Donnees',
      en: 'AI & Data',
    },
    icon: Brain,
    skills: {
      fr: ['Reconnaissance d\'images', 'Modeles IA', 'Pretraitement de donnees'],
      en: ['Image recognition', 'AI model experimentation', 'Data preprocessing'],
    },
  },
  {
    title: {
      fr: 'DevOps & Outils',
      en: 'DevOps & Tooling',
    },
    icon: Settings,
    skills: {
      fr: ['Docker', 'Git', 'Linux', 'n8n', 'CI/CD', 'Nginx'],
      en: ['Docker', 'Git', 'Linux', 'n8n', 'CI/CD', 'Nginx'],
    },
  },
  {
    title: {
      fr: 'Methodes',
      en: 'Methods',
    },
    icon: Network,
    skills: {
      fr: ['Modelisation', 'Tracabilite', 'Integration API', 'Automatisation evenementielle'],
      en: ['Modeling', 'Traceability', 'API integration', 'Event-driven automation'],
    },
  },
  {
    title: {
      fr: 'Langues',
      en: 'Languages (spoken)',
    },
    icon: Globe,
    skills: {
      fr: ['Francais (B2)', 'Anglais (B1 scientifique)', 'Malgache (maternelle)'],
      en: ['French (B2)', 'English (B1 technical reading)', 'Malagasy (native)'],
    },
  },
]

type SkillsProps = {
  lang: 'fr' | 'en'
}

export function Skills({ lang }: SkillsProps) {
  const t = {
    fr: {
      section: 'Stack',
      title: 'Competences',
      subtitle: 'Competences techniques et methodologiques appliquees a des systemes reels et exigeants.',
    },
    en: {
      section: 'Stack',
      title: 'Skills',
      subtitle: 'Technical and methodological capabilities applied to real, production-grade systems.',
    },
  } as const

  return (
    <section id="skills" className="section-enter-zoom section-frame bg-white px-4 py-20 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{t[lang].section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t[lang].title}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="stagger-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-lift skill-card border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="h-5 w-5 text-blue-600" />
                  {category.title[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills[lang].map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}