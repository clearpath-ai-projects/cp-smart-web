import { ShieldCheck } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

interface ClinicalDisclaimerProps {
  title?: string
  text?: string
  compact?: boolean
}

/**
 * Visually distinct clinical-responsibility notice. Copy is fixed per
 * the brief — this component intentionally does not "soften" it.
 */
export default function ClinicalDisclaimer({
  title = 'Clinical Responsibility',
  text = 'CP Smart Diagnostic Services provides professional diagnostic & treatment-planning support to dental practitioners.\nFinal diagnosis, prescription, treatment decisions, and patient care remain the responsibility of the treating dental practitioner.',
  compact = false,
}: ClinicalDisclaimerProps) {
  return (
    <RevealOnScroll>
      <div
        className={`flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 ${
          compact ? 'p-5' : 'p-7 sm:p-9'
        }`}
      >
        <span className="mt-0.5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
          <ShieldCheck size={38} strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 max-w-[1200px] whitespace-pre-line text-[15px] leading-[1.7] text-ink/70">
            {text}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  )
}