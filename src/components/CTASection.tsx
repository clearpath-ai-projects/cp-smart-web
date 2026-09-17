import type { ReactNode } from 'react'
import RevealOnScroll from './RevealOnScroll'

interface CTAButton {
  label: string
  /** Same-page anchor target, e.g. "#contact". */
  href: string
  variant?: 'primary' | 'secondary'
}

interface CTASectionProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  buttons: CTAButton[]
  tone?: 'dark' | 'light'
  /** Optional background photo (dark tone only) with a maroon gradient scrim over it. */
  image?: string
  imageAlt?: string
}

/**
 * Reusable closing call-to-action banner. All buttons are same-page
 * anchor links (no portal, no external navigation) since this is a
 * single, purely informational page.
 */
export default function CTASection({ eyebrow, title, subtitle, buttons, tone = 'dark', image, imageAlt }: CTASectionProps) {
  const isDark = tone === 'dark'

  return (
    <section className={isDark ? 'bg-surface-dark' : 'bg-surface-soft'}>
      <div className="container-page section-tight">
        <RevealOnScroll
          className={`relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20 ${
            isDark && !image ? 'bg-gradient-to-br from-brand-900 via-brand-800 to-surface-dark' : ''
          } ${!isDark ? 'card' : ''}`}
        >
          {image && (
            <img
              src={image}
              alt={imageAlt ?? ''}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
          )}
          {image && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(115deg, rgba(35,6,24,0.92) 15%, rgba(69,12,46,0.82) 55%, rgba(22,18,25,0.55) 100%)' }}
              aria-hidden="true"
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            {eyebrow && (
              <span
                className={`eyebrow mb-4 ${isDark ? '!text-white/70' : ''}`}
              >
                {eyebrow}
              </span>
            )}
            <h2
              className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-ink'
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-4 text-[16px] leading-relaxed ${isDark ? 'text-white/65' : 'text-ink/60'}`}>
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {buttons.map((button) => {
                const className =
                  button.variant === 'secondary'
                    ? isDark
                      ? 'btn border border-white/25 text-white hover:bg-white/10'
                      : 'btn-secondary'
                    : isDark
                      ? 'btn bg-white text-brand-700 hover:bg-white/90'
                      : 'btn-primary'

                return (
                  <a key={button.label} href={button.href} className={className}>
                    {button.label}
                  </a>
                )
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
