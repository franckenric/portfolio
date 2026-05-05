import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import cvFile from "@/assets/CV_Developer.pdf";
import profilePic from "@/assets/pic.jpg";

type HeroProps = {
  lang: "fr" | "en";
};

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || "Henri Franck";
const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "enricfrank@gmail.com";
const CONTACT_PHONE_DISPLAY =
  import.meta.env.VITE_CONTACT_PHONE_DISPLAY || "+261 38 17 591 93";
const CONTACT_LOCATION =
  import.meta.env.VITE_CONTACT_LOCATION || "Antananarivo, Madagascar";
const GITHUB_URL =
  import.meta.env.VITE_GITHUB_URL || "https://github.com/enricfrank";
const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/henri-franck";

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Tailwind",
  "AWS",
];

const translations = {
  fr: {
    available: "Disponible pour missions Full Stack et IA appliquee",
    titleLine2:
      "J'allie vision produit et execution technique pour des experiences utiles.",
    rotatingPhrases: [
      { prefix: "Bonjour, je suis ", highlight: PROFILE_NAME, suffix: "." },
      {
        prefix: "Je transforme ",
        highlight: "des idees complexes en produits clairs",
        suffix: ", rapides a livrer.",
      },
      {
        prefix: "Objectif: ",
        highlight: "du resultat mesurable des la V1",
        suffix: ".",
      },
    ],
    intro:
      "Developpeur Full Stack oriente impact: je livre des applications modernes, fiables et simples a maintenir.",
    role: "Developpeur Full Stack",
    primaryCta: "Voir mes projets",
    secondaryCta: "Voir mon CV",
    valueTitle: "Ce que j'apporte",
    valuePoints: [
      "Vision produit + execution technique",
      "Architecture claire, dette technique controlee",
      "Livraison rapide avec qualite mesurable",
    ],
    contactLabel: "Contact",
    stackLabel: "Technologies principales",
    nowLabel: "Ouvert aux missions freelance, CDD et CDI.",
    locationLabel: "Localisation",
  },
  en: {
    available: "Available for Full Stack and Applied AI opportunities",
    titleLine2:
      "I blend product vision with engineering to ship useful experiences.",
    rotatingPhrases: [
      { prefix: "Hello, I'm ", highlight: PROFILE_NAME, suffix: "." },
      {
        prefix: "I turn ",
        highlight: "complex ideas into clear products",
        suffix: ", fast to deliver.",
      },
      {
        prefix: "Goal: ",
        highlight: "measurable value from v1",
        suffix: ".",
      },
    ],
    intro:
      "Impact-focused Full Stack developer building modern, reliable apps that stay easy to evolve.",
    role: "Full Stack Developer",
    primaryCta: "View my projects",
    secondaryCta: "View my resume",
    valueTitle: "What I deliver",
    valuePoints: [
      "Product thinking with strong execution",
      "Clean architecture, controlled technical debt",
      "Fast delivery with measurable quality",
    ],
    contactLabel: "Contact",
    stackLabel: "Core technologies",
    nowLabel: "Open to freelance and full-time opportunities.",
    locationLabel: "Location",
  },
} as const;

export function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    let lineIndex = 0;
    let index = 0;
    let isDeleting = false;
    let timerId = 0;

    const tick = () => {
      const phrase = t.rotatingPhrases[lineIndex];
      const fullText = `${phrase.prefix}${phrase.highlight}${phrase.suffix}`;

      if (!isDeleting) {
        index += 1;
        setTypedLength(index);

        if (index === fullText.length) {
          isDeleting = true;
          timerId = window.setTimeout(tick, 1200);
          return;
        }

        timerId = window.setTimeout(tick, 110);
        return;
      }

      index -= 1;
      setTypedLength(index);

      if (index === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % t.rotatingPhrases.length;
        setActiveLineIndex(lineIndex);
        timerId = window.setTimeout(tick, 350);
        return;
      }

      timerId = window.setTimeout(tick, 70);
    };

    timerId = window.setTimeout(tick, 500);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [t.rotatingPhrases]);

  const activePhrase = t.rotatingPhrases[activeLineIndex];
  const prefixVisible = activePhrase.prefix.slice(
    0,
    Math.min(typedLength, activePhrase.prefix.length),
  );
  const highlightStart = activePhrase.prefix.length;
  const highlightVisible = activePhrase.highlight.slice(
    0,
    Math.max(
      0,
      Math.min(typedLength - highlightStart, activePhrase.highlight.length),
    ),
  );
  const suffixStart = highlightStart + activePhrase.highlight.length;
  const suffixVisible = activePhrase.suffix.slice(
    0,
    Math.max(
      0,
      Math.min(typedLength - suffixStart, activePhrase.suffix.length),
    ),
  );

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="section-enter-pop relative overflow-hidden px-4 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-700/20" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-800/20" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <Badge
            variant="outline"
            className="w-fit border-cyan-200 bg-cyan-50/90 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            {t.available}
          </Badge>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              <span>{prefixVisible}</span>
              <span className="text-cyan-600 dark:text-cyan-400">
                {highlightVisible}
              </span>
              <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-cyan-600 align-[-0.12em] dark:bg-cyan-400" />
              <span>{suffixVisible}</span>
            </h1>
            <p className="text-balance text-lg font-medium text-slate-700 dark:text-slate-300 sm:text-xl">
              {t.titleLine2}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              {t.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="group rounded-full px-5">
              <a href="#projects">
                {t.primaryCta}
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-5">
              <a href={cvFile} target="_blank" rel="noopener noreferrer">
                {t.secondaryCta}
              </a>
            </Button>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              PDF
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t.valueTitle}
              </p>
              <div className="space-y-2.5">
                {t.valuePoints.map((point) => (
                  <p
                    key={point}
                    className="inline-flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t.stackLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <img
              src={profilePic}
              alt={`${PROFILE_NAME} portrait`}
              className="h-full w-full object-cover"
              loading="eager"
              width="640"
              height="700"
            />

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {PROFILE_NAME}
                  </h2>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Phone className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  {CONTACT_PHONE_DISPLAY}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  {CONTACT_EMAIL}
                </a>
                <p className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  {t.locationLabel}: {CONTACT_LOCATION}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:text-blue-300"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:text-blue-300"
                >
                  <Globe className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.nowLabel}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
