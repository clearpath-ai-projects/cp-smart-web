import { CheckCircle2, FolderInput, KeyRound } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'

const CAPABILITIES = [
  { title: 'View Patient-Specific Treatment Plans', description: 'Review proposed clinical treatment strategies.' },
  { title: 'Review Proposed Tooth Movements', description: 'Understand the planned orthodontic movement digitally.' },
  { title: 'Examine Treatment Stages', description: 'Navigate through proposed treatment stages.' },
  { title: 'Communicate Clinical Modifications', description: 'Send clinical feedback to the CP Smart team.' },
  { title: 'Review Revised Plans', description: 'Review updated treatment proposals.' },
  { title: 'Approve Final Clinical Treatment Plan', description: 'Provide final clinical approval before the next stage.' },
]

// Descriptive feature mentions only — not functionality available on
// this informational website (no live portal, login, or case
// submission is connected here).
const PLATFORM_FEATURES = [
  { title: 'Case Submission', description: 'Dentists submit new patient cases and records through a structured intake feature.', icon: FolderInput },
  { title: 'Doctor Login', description: 'Registered dentists sign in to track case status and review treatment plans.', icon: KeyRound },
]

/** CP Smart Platform section — placeholder structure; final copy to be supplied by the client. */
export default function Platform() {
  return (
    <section id="platform" className="section scroll-mt-[72px] bg-surface-soft">
      <div className="container-page">
        <SectionHeader
          eyebrow="The CP Smart Platform"
          title="A digital environment built for clinical treatment review."
          subtitle="A digital environment that helps dental professionals review patient-specific orthodontic treatment plans, visualize proposed treatment and communicate clinical modifications."
          align="center"
          className="mb-14"
        />

        <RevealOnScroll>
          {/* Removed fixed height limits (h-[360px] etc.) to allow natural image expansion */}
          <div className="card overflow-hidden rounded-xl border border-border shadow-xl">
            <img
              src="/images/doctor-portal-platform.png"
              alt="CP Smart doctor's portal dashboard, showing case status and quick overview"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </RevealOnScroll>
        <p className="mt-4 text-center text-[12.5px] text-ink/35">
          
        </p>

        {/* Feature mentions — descriptive only, no login/submission functionality on this site */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {PLATFORM_FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <RevealOnScroll key={feature.title} delay={i * 60}>
                <div className="card flex h-full gap-3.5 border-dashed p-6">
                  <Icon size={18} className="mt-0.5 shrink-0 text-brand-600" />
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/55">{feature.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <RevealOnScroll key={cap.title} delay={i * 60}>
              <div className="card flex h-full gap-3.5 p-6">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                <div>
                  <h3 className="text-[14.5px] font-semibold text-ink">{cap.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/55">{cap.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}