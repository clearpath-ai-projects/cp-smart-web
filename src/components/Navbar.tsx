import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'clinical-services', label: 'Clinical Services' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'platform', label: 'Platform' },
  { id: 'for-dentists', label: 'For Dentists' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled ? 'border-line bg-white/90 backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      {/* Logo (left) — nav (true center) — CTA (right): mirrors a
          conventional clinical-brand header rhythm instead of leaving
          the nav links stranded against the right edge. */}
      <div className="container-page grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4">
        <Logo />

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link relative rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                active === link.id ? 'text-brand-700' : 'text-ink/70 hover:text-ink'
              }`}
              data-active={active === link.id}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-3 text-[15px] font-medium transition-colors ${
                  active === link.id ? 'text-brand-700' : 'text-ink/75'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
