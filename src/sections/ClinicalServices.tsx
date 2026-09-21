import { FileSearch, ClipboardList, ScanEye, MessageSquareText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'

const SERVICES = [
  {
    icon: FileSearch,
    title: 'Orthodontic Diagnostic Assessment',
    description:
      'Clinical assessment of patient records, scans, photographs, radiographs, dental conditions & orthodontic requirements.',
    points: [
      'Review of submitted clinical photographs & radiographs',
      'Assessment of dental scans & orthodontic requirements',
      'Identification of clinically relevant findings for the treating dentist',
    ],
    photo: '/images/photo-service-assessment.jpg',
    photoAlt: 'A dentist reviewing a patient’s digital scan results on a chairside monitor',
  },
  {
    icon: ClipboardList,
    title: 'Clinical Treatment Planning',
    description:
      'Patient-specific orthodontic treatment planning performed & supervised by qualified dental practitioners.',
    points: [
      'Patient-Specific treatment strategy development',
      'Planning performed & supervised by dental practitioners',
      'Treatment plans prepared for the treating dentist’s review',
    ],
    photo: '/images/photo-service-planning.jfif',
    photoAlt: 'Clinician examining a 3D dental mesh model on a workstation monitor at a clear aligner planning station',
  },
  {
    icon: ScanEye,
    title: 'Digital Treatment Visualization',
    description:
      'Interactive visualization of proposed orthodontic tooth movements to assist the treating dentist in reviewing the proposed treatment.',
    points: [
      'Digital Visualization of proposed tooth movement',
      'Step-by-Step treatment progression view',
      'Supports clinical review, not a standalone diagnosis tool',
    ],
    photo: '/images/photo-service-visualization.jpg',
    photoAlt: 'Dashboard showing dental alignment progress, treatment acceptance, and movement progression charts',
  },
  {
    icon: MessageSquareText,
    title: 'Clinical Review & Plan Refinement',
    description:
      'Dentists can review proposed plans & request clinically appropriate modifications before giving final approval.',
    points: [
      'Structured clinical feedback & modification requests',
      'Revision history maintained through the CP Smart Platform',
      'Final approval remains with the treating dentist',
    ],
    photo: '/images/photo-service-review.jpg',
    photoAlt: 'Tablet displaying clinical plan refinement interface comparing Plan A & Plan B options',
  },
]

export default function ClinicalServices() {
  return (
    <section id="clinical-services" className="scroll-mt-[72px] bg-surface-soft pt-10 sm:pt-14 pb-20 sm:pb-24">
      <div className="container-page">
        <SectionHeader
          title="Clinical Services"
          subtitle="Clinical & Digital support designed around the orthodontic workflow &mdash; from diagnostic assessment to approved treatment planning."
          align="center"
          className="mb-16"
        />

        <div className="space-y-20 sm:space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1

            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <RevealOnScroll>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink/60">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[14.5px] text-ink/60">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                  <div className="card photo-card h-72 sm:h-96 w-full overflow-hidden p-0">
                    <img
                      src={service.photo}
                      alt={service.photoAlt}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}