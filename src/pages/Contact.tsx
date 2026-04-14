import { useState } from 'react'
import type { FormEvent } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, GitBranch, Globe, Phone, MapPin, Send } from 'lucide-react'

type ContactProps = {
  lang: 'fr' | 'en'
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Henri Franck'
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'enricfrank@gmail.com'
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 17 591 93'
const CONTACT_PHONE_LINK = import.meta.env.VITE_CONTACT_PHONE_LINK || '+261381759193'
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/enricfrank'
const GITHUB_LABEL = import.meta.env.VITE_GITHUB_LABEL || 'github.com/enricfrank'
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/henri-franck'
const LINKEDIN_LABEL = import.meta.env.VITE_LINKEDIN_LABEL || 'linkedin.com/in/henri-franck'

export function Contact({ lang }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = {
    fr: {
      section: 'Contact',
      title: 'Contact',
      subtitle: 'Disponible pour des missions backend/full stack, architecture API et automatisation de workflows metier.',
      infoTitle: 'Informations',
      infoDesc: 'Coordonnees professionnelles et canaux de collaboration',
      formTitle: 'Envoyer un message',
      formDesc: 'Decrivez votre besoin, je reviens vers vous rapidement',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      submit: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message traite. Verifiez votre client mail (redirection en cours).',
      error: 'Echec de l\'envoi. Verifiez VITE_FORMSPREE_ENDPOINT ou utilisez le mail direct.',
      availability: 'Disponibilite',
      availabilityItems: ['Mission freelance / long terme', 'Remote ou hybride', 'Demarrage rapide'],
      response: 'Temps de reponse habituel: sous 24h (jours ouvres).',
      copyright: 'Tous droits reserves',
    },
    en: {
      section: 'Contact',
      title: 'Contact',
      subtitle: 'Open to backend/full stack work, API architecture initiatives, and workflow automation projects.',
      infoTitle: 'Details',
      infoDesc: 'Professional contact details and collaboration channels',
      formTitle: 'Send a message',
      formDesc: 'Share your need and context, I will get back to you quickly',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      submit: 'Send',
      sending: 'Sending...',
      success: 'Message submitted. Opening email client...',
      error: 'Send failed. Check VITE_FORMSPREE_ENDPOINT or use direct email.',
      availability: 'Availability',
      availabilityItems: ['Freelance / long-term projects', 'Remote or hybrid', 'Fast onboarding'],
      response: 'Typical response time: within 24h on business days.',
      copyright: 'All rights reserved',
    },
  } as const

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const isValidEndpoint = FORMSPREE_ENDPOINT && 
      FORMSPREE_ENDPOINT.includes('formspree.io/f/') && 
      !FORMSPREE_ENDPOINT.includes('your-form-id')

    // Fallback: open email client
    const sendViaEmail = () => {
      const subject = lang === 'fr' ? 'Message de contact' : 'Contact message'
      const body = `${lang === 'fr' ? 'Nom' : 'Name'}: ${name}\n${lang === 'fr' ? 'Email' : 'Email'}: ${email}\n\n${message}`
      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
    }

    if (!isValidEndpoint) {
      sendViaEmail()
      form.reset()
      setStatus('success')
      return
    }

    try {
      setIsSubmitting(true)
      setStatus('idle')
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      // On error, fallback to email
      sendViaEmail()
      form.reset()
      setStatus('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-enter-pop section-frame bg-white px-4 py-20 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{t[lang].section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t[lang].title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-lift contact-card reveal border-slate-200 shadow-sm dark:border-slate-800" style={{ animationDelay: '110ms' }}>
            <CardHeader>
              <CardTitle>{t[lang].infoTitle}</CardTitle>
              <CardDescription>{t[lang].infoDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{t[lang].availability}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {t[lang].availabilityItems.map((item, i) => (
                    <Badge key={i} variant="secondary" className="text-[11px]">
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t[lang].response}</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href={`tel:${CONTACT_PHONE_LINK}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600 dark:text-slate-400">{CONTACT_LOCATION}</span>
              </div>
              <div className="flex items-center gap-3">
                <GitBranch className="h-5 w-5 text-blue-600" />
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  {GITHUB_LABEL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                  {LINKEDIN_LABEL}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="card-lift contact-card reveal border-slate-200 shadow-sm dark:border-slate-800" style={{ animationDelay: '190ms' }}>
            <CardHeader>
              <CardTitle>{t[lang].formTitle}</CardTitle>
              <CardDescription>{t[lang].formDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t[lang].name}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t[lang].email}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  name="message"
                  placeholder={t[lang].message}
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  {isSubmitting ? t[lang].sending : t[lang].submit}
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{t[lang].success}</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-rose-600 dark:text-rose-400">{t[lang].error}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© 2026 {PROFILE_NAME} - {t[lang].copyright}</p>
        </div>
      </div>
    </section>
  )
}