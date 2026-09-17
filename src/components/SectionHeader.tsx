import type { ReactNode } from 'react'
import RevealOnScroll from './RevealOnScroll'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <RevealOnScroll className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-brand-800 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/60">
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  )
}
