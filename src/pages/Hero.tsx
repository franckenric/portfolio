import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, Briefcase, GitBranch, Globe, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import cvFile from "@/assets/CV_Developer.pdf";
import profilePic from "@/assets/pic.jpg";

type HeroProps = {
  lang: "fr" | "en";
};

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Henri Franck';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'enricfrank@gmail.com';
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 17 591 93';
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar';
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/enricfrank';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/henri-franck';

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const t = {
    fr: {
      available: "Disponible pour missions full stack & IA appliquee",
      headline: `${PROFILE_NAME}, je conçois des applications web rapides, fiables et orientées résultats.`,
      intro:
        "J'accompagne les entreprises de l'idee a la mise en production: architecture, developpement, integration API et optimisation continue.",
      projects: "Voir les projets",
      downloadCv: "Telecharger le CV",
      quickLinks: "Liens rapides",
      email: "Envoyer un email",
      role: "Développeur Full Stack",
      contactInfo: "Coordonnees",
      strongDomains:
        "Specialites: ERP metier, plateformes photovoltaiques, automatisation de workflows, integration de services tiers et generation de PDF dynamiques.",
    },
    en: {
      available: "Open to full stack and applied AI opportunities",
      headline: `${PROFILE_NAME}, I build fast, reliable web apps focused on real business outcomes.`,
      intro:
        "I help teams move from idea to production with scalable architecture, clean implementation, API integrations, and continuous optimization.",
      projects: "View projects",
      downloadCv: "Download resume",
      quickLinks: "Quick links",
      email: "Send email",
      role: "Full Stack Developer",
      contactInfo: "Contact details",
      strongDomains:
        "Focus areas: business ERP, photovoltaic platforms, workflow automation, third-party service integration, and dynamic PDF generation.",
    },
  } as const;

 useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
      
      setMousePosition({ 
        x: (relativeX - 0.5) * 30, 
        y: (relativeY - 0.5) * 20 
      });
    };

    const resetPosition = () => setMousePosition({ x: 0, y: 0 });

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetPosition);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <section ref={containerRef} id="hero" className="reveal section-frame soft-spotlight relative overflow-hidden px-4 pb-12 pt-12 sm:pb-16 sm:pt-20 md:pb-20 md:pt-24 lg:pb-20 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-0 hidden transition-transform duration-300 lg:block"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          backgroundImage:
            'radial-gradient(circle at top right, #93c5fd33, transparent 50%), radial-gradient(circle at bottom left, #06b6d433, transparent 45%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#93c5fd33,transparent_50%),radial-gradient(circle_at_bottom_left,#06b6d433,transparent_45%)] lg:hidden" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="reveal reveal-delay-1 lg:self-start">
          <Badge variant="outline" className="mb-4 rounded-full border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            {t[lang].available}
          </Badge>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t[lang].headline}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
            {t[lang].intro}
          </p>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm md:text-base">
            {t[lang].strongDomains}
          </p>

          <div className="stagger-grid mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            <Badge variant="secondary">FastAPI</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Automation</Badge>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <Button asChild className="gap-2 rounded-full text-sm sm:text-base">
              <a href="#projects">
                {t[lang].projects}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full text-sm sm:text-base">
              <a href={cvFile} target="_blank" rel="noreferrer">{t[lang].downloadCv}</a>
            </Button>
          </div>

          <div className="mt-5 pb-4 sm:pb-8">
            {/* <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">{t[lang].quickLinks}</p> */}
            <div className="grid gap-1.5 sm:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                <span className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  LinkedIn
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t[lang].email}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
              </a>
            </div>
          </div>

        </div>

        <div 
            className="relative w-full lg:col-span-1 lg:self-start overflow-hidden"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <div className="relative group">
              {/* Decorative elements behind image - hidden on mobile due to overflow */}
              <div className="absolute -inset-1 hidden sm:block bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 hidden sm:block bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
              
              {/* Profile image container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 sm:p-1 md:p-1.5 shadow-lg sm:shadow-2xl w-full">
                <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
                  <img
                    src={profilePic}
                    alt={PROFILE_NAME}
                    className="w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105 aspect-[3/4]"
                  />
                </div>
                
                {/* Overlay info card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {PROFILE_NAME}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                    <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {t[lang].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-slate-200 bg-white/90 p-3 sm:p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
              <p className="mb-2.5 sm:mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {t[lang].contactInfo}
              </p>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">{CONTACT_PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="truncate transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">{CONTACT_LOCATION}</span>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  )
}