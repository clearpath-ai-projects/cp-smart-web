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
  text = 'CP Smart Diagnostic Services provides professional diagnostic & treatment-planning support to dental practitioners. Final diagnosis, prescription, treatment decisions & patient care remain the responsibility of the treating dental practitioner.',
  compact = false,
}: ClinicalDisclaimerProps) {
  return (
    <RevealOnScroll>
      <div
        className={`flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 ${
          compact ? 'p-5' : 'p-7 sm:p-9'
        }`}
      >
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
          <ShieldCheck size={19} strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink/70">{text}</p>
        </div>
      </div>
    </RevealOnScroll>
  )
}
