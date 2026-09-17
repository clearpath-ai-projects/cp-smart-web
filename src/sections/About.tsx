import { ScanEye, Users2, Stethoscope, Building2, HeartPulse } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ClinicalDisclaimer from '../components/ClinicalDisclaimer'
import RevealOnScroll from '../components/RevealOnScroll'

const WHO_WE_WORK_WITH = [
  { label: 'Dentists', icon: Stethoscope },
  { label: 'Orthodontists', icon: HeartPulse },
  { label: 'Dental Clinics', icon: Building2 },
  { label: 'Dental Healthcare Organizations', icon: Users2 },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-[72px] border-t border-gray-200/60 bg-white pt-12 pb-10 sm:pb-12">
      <div className="container-page">
        {/* Main 2-Column Grid using items-stretch so both columns match exact height */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Column: Header + Paragraph + KPI Cards */}
          <RevealOnScroll className="flex flex-col justify-between">
            <div>
              <SectionHeader
                eyebrow="About Us"
                title="About CP Smart"
                subtitle="Combining dental expertise with digital technology to support dentists in orthodontic diagnosis and treatment planning."
                className="mb-6"
              />

              <p className="text-[17px] leading-relaxed text-ink/70">
                CP Smart Diagnostic Services combines dental expertise with
                digital technology to support dentists in orthodontic
                diagnosis and treatment planning. Our clinical team works
                with dental professionals to assess cases, develop
                patient-specific treatment strategies and provide clear
                digital visualization of proposed orthodontic treatment.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3.5 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50/80 text-[#3d0b29]">
                  <Users2 size={20} strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-gray-900 leading-snug">
                  Qualified dental practitioners
                </span>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50/80 text-[#3d0b29]">
                  <ScanEye size={20} strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-gray-900 leading-snug">
                  Digital treatment visualization
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Photo Container stretching to match exact height */}
          <RevealOnScroll delay={100} className="h-full">
            <div className="card h-full overflow-hidden p-3">
              <div className="photo-card relative h-full min-h-[300px] w-full">
                <img
                  src="/images/photo-about-new.jpg"
                  alt="Dentist explaining digital radiograph scan on monitor"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-xl transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Who We Work With */}
        <div className="mt-20 sm:mt-24">
          <SectionHeader
            eyebrow="Who We Work With"
            title="Doctor-to-doctor professional clinical support."
            subtitle="CP Smart works directly with dental professionals and organizations &mdash; never with patients."
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WHO_WE_WORK_WITH.map((item, i) => {
              const Icon = item.icon
              return (
                <RevealOnScroll key={item.label} delay={i * 60}>
                  <div className="card flex h-full flex-col items-center gap-3 p-5 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="text-[13.5px] font-medium text-ink/70">{item.label}</span>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>

          <div className="mt-10">
            <ClinicalDisclaimer />
          </div>
        </div>
      </div>
    </section>
  )
}