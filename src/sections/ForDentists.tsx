import {
  FolderInput,
  Stethoscope,
  ScanEye,
  MessagesSquare,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import RevealOnScroll from '../components/RevealOnScroll'

const BENEFITS = [
  {
    icon: FolderInput,
    title: 'Structured Case Submission',
    description: 'Submit patient records, scans and diagnostic information through a consistent, organized workflow.',
  },
  {
    icon: Stethoscope,
    title: 'Qualified Clinical Review',
    description: 'Cases are assessed by qualified dental professionals before a treatment plan reaches you.',
  },
  {
    icon: ScanEye,
    title: 'Transparent Treatment Visualization',
    description: 'Review proposed tooth movements and treatment stages digitally before making a decision.',
  },
  {
    icon: MessagesSquare,
    title: 'Direct Clinical Communication',
    description: 'Request modifications and communicate clinically with the CP Smart team through the platform.',
  },
]

/** For Dentists section — placeholder structure; final copy to be supplied by the client. */
export default function ForDentists() {
  return (
    <>
      <section id="for-dentists" className="section scroll-mt-[72px] bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll className="card photo-card h-72 sm:h-96">
              <img
                src="/images/photo-fordentists.jpg"
                alt="Dental professionals collaborating around a case in clinic"
                loading="lazy"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <span className="eyebrow mb-4">For Dentists</span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-800 sm:text-4xl">
                Built for Dental Professionals
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/60">
                Dentists work with CP Smart by submitting cases, reviewing
                clinical assessments, examining proposed treatment stages
                and collaborating with the CP Smart clinical team through
                a structured digital workflow.
              </p>
            </RevealOnScroll>
          </div>

          <SectionHeader
            eyebrow="Why Dentists Choose CP Smart"
            title="A structured clinical partner, not another vendor to manage."
            align="center"
            className="mb-10 mt-20 sm:mt-24"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <RevealOnScroll key={benefit.title} delay={i * 80}>
                  <div className="card flex h-full items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-lift">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-ink">{benefit.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">{benefit.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready to Work With CP Smart?"
        subtitle="Get in touch with our clinical team to learn more about orthodontic diagnostic assessment and treatment-planning support for your practice."
        buttons={[{ label: 'Contact Us', href: '#contact' }]}
        image="/images/photo-cta.jpg"
        imageAlt="A dentist consulting with a patient in a modern clinic"
      />
    </>
  )
}
