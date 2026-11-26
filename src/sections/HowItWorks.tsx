import {
  FileUp,
  Stethoscope,
  ClipboardList,
  Eye,
  CheckCircle2,
  Share2,
  ShieldCheck,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'

const STEPS = [
  {
    number: '01',
    icon: FileUp,
    title: 'Submit Patient Records',
    description: "The treating dentist submits the patient's clinical information, scans & relevant records.",
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Clinical Assessment',
    description: 'The case is reviewed by qualified dental professionals.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Treatment Plan',
    description: 'A patient-specific orthodontic assessment & proposed clinical treatment plan is prepared.',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Doctor Review',
    description: 'The treating dentist reviews the proposed treatment digitally & can request modifications.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Clinical Approval',
    description: 'The treating dentist gives final approval/prescription for the treatment plan.',
  },
  {
    number: '06',
    icon: Share2,
    title: 'Manufacturing Data',
    description: 'Where aligners are prescribed, the approved treatment information can be securely provided to the designated aligner manufacturer for production.',
    highlight: true,
  },
]

/** How It Works section — placeholder structure; final copy to be supplied by the client. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section scroll-mt-[72px] bg-white">
      <div className="container-page">
        <SectionHeader
          
          title="How It Works"
          subtitle="From case submission to clinically approved treatment planning."
          align="center"
          className="mb-14"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-2 bottom-2 hidden w-px bg-line sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <RevealOnScroll key={step.number} delay={i * 70} as="li">
                  <div
                    className={`relative flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-start sm:gap-6 sm:pl-8 ${
                      step.highlight
                        ? 'border-brand-200 bg-brand-50/50'
                        : 'border-line bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                        <Icon size={19} strokeWidth={1.75} />
                      </span>
                      <span className="font-display text-xs font-semibold text-ink/35 sm:hidden">
                        Step {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="font-display hidden text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 sm:inline">
                        Step {step.number}
                      </span>
                      <h3 className="font-display mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink/60">
                        {step.description}
                      </p>
                      {step.highlight && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600/10 px-3 py-2 text-[13px] font-medium text-brand-700">
                          <ShieldCheck size={15} />
                          CP Smart Tech Services does not manufacture physical aligners.
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
