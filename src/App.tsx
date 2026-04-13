
import { useEffect, useMemo, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Hero } from './pages/Hero'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { Contact } from './pages/Contact'

type Lang = 'fr' | 'en'
type Theme = 'light' | 'dark'

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Henri Franck'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [lang, setLang] = useState<Lang>('fr')
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = useMemo(
    () => ['hero', 'experience', 'projects', 'skills', 'education', 'contact'],
    [],
  )

  const nav = {
    fr: { experience: 'Experience', projects: 'Projets', skills: 'Competences', education: 'Formation', contact: 'Contact' },
    en: { experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact' },
  } as const

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))

      const viewportMark = scrollTop + window.innerHeight * 0.35
      let current = 'hero'

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMark) {
          current = id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const navItemClass = (id: string) =>
    `link-underline transition-colors ${
      activeSection === id
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-blue-600 dark:text-slate-300'
    }`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="pulse-soft h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        <div className="h-[2px] w-full bg-slate-200/40 dark:bg-slate-800/60">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
            {PROFILE_NAME}
          </a>
          <div className="hidden items-center gap-4 text-sm text-slate-600 dark:text-slate-300 md:flex">
            <a href="#experience" className={navItemClass('experience')}>{nav[lang].experience}</a>
            <a href="#projects" className={navItemClass('projects')}>{nav[lang].projects}</a>
            <a href="#skills" className={navItemClass('skills')}>{nav[lang].skills}</a>
            <a href="#education" className={navItemClass('education')}>{nav[lang].education}</a>
            <a href="#contact" className={navItemClass('contact')}>{nav[lang].contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-900 dark:hover:text-blue-300"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${lang === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-blue-600 dark:text-slate-300'}`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-blue-600 dark:text-slate-300'}`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm transition-opacity md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 border-l border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold tracking-wide">Menu</p>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-900 dark:hover:text-blue-300"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        <div className="flex flex-col gap-1 text-sm">
          <a href="#experience" onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 transition ${activeSection === 'experience' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>{nav[lang].experience}</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 transition ${activeSection === 'projects' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>{nav[lang].projects}</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 transition ${activeSection === 'skills' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>{nav[lang].skills}</a>
          <a href="#education" onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 transition ${activeSection === 'education' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>{nav[lang].education}</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 transition ${activeSection === 'contact' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>{nav[lang].contact}</a>
        </div>
      </aside>

      <Hero lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
    </div>
  )
}

export default App