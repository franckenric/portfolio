import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Sigma } from 'lucide-react'

const education = [
  {
    degree: {
      fr: 'Master II Mathematiques et Informatique',
      en: 'Master II in Mathematics and Computer Science',
    },
    school: "Université de Fianarantsoa",
    faculty: "Faculté des Sciences",
    period: "2019 - 2020",
    description: {
      fr: 'Algorithmique avancee, systemes informatiques, conception logicielle et rigueur mathematique appliquee.',
      en: 'Advanced algorithms, computer systems, software design, and mathematically rigorous problem solving.',
    },
    focus: ['Algorithms', 'Software Architecture', 'Systems Thinking'],
  },
  {
    degree: {
      fr: 'Licence Mathematiques et Informatique',
      en: 'Bachelor in Mathematics and Computer Science',
    },
    school: "Université de Fianarantsoa",
    faculty: "Faculté des Sciences",
    period: "2017 - 2018",
    description: {
      fr: 'Fondamentaux solides en mathematiques appliquees, programmation et structures de donnees.',
      en: 'Strong foundations in applied mathematics, programming, and data structures.',
    },
    focus: ['Applied Math', 'Programming', 'Data Structures'],
  },
  {
    degree: {
      fr: 'Baccalaureat - Serie C',
      en: 'Science Baccalaureate - Series C',
    },
    school: "Lycée Raherivelo Ramamonjy",
    faculty: "Fianarantsoa",
    period: "2013 - 2014",
    description: {
      fr: 'Formation scientifique a dominante mathematiques et sciences physiques.',
      en: 'Scientific curriculum focused on mathematics and physics.',
    },
    focus: ['Math', 'Physics', 'Scientific Method'],
  },
]

type EducationProps = {
  lang: 'fr' | 'en'
}

export function Education({ lang }: EducationProps) {
  const t = {
    fr: {
      section: 'Education',
      title: 'Formation',
      subtitle: 'Parcours academique scientifique qui soutient une execution technique solide en entreprise.',
      focus: 'Axes de formation',
    },
    en: {
      section: 'Education',
      title: 'Education',
      subtitle: 'Scientific academic track that supports strong technical execution in real projects.',
      focus: 'Focus areas',
    },
  } as const

  return (
    <section id="education" className="section-enter-blur section-frame soft-spotlight bg-slate-50 px-4 py-20 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{t[lang].section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t[lang].title}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="card-lift reveal education-card border-slate-200 dark:border-slate-800" style={{ animationDelay: `${index * 90 + 90}ms` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {edu.degree[lang]}
                      </CardTitle>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.school} • {edu.faculty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-600 dark:text-slate-400">{edu.description[lang]}</p>
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  <Sigma className="h-3.5 w-3.5 text-blue-600" />
                  {t[lang].focus}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((item, i) => (
                    <Badge key={i} variant="secondary" className="text-[11px]">
                      {item}
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