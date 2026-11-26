import {
  ArrowRight,
  FolderInput,
  KeyRound,
  Stethoscope,
  Scan,
  UserCheck,
  HeartPulse,
} from 'lucide-react'

const kpiFeatures = [
  {
    icon: Stethoscope,
    title: 'Clinical Expertise',
    description: 'Expert Orthodontic Analysis provided by Qualified Dental Specialists.',
  },
  {
    icon: Scan,
    title: 'Digital Treatment Visualization',
    description: 'Visualize projected tooth movements with advanced digital software.',
  },
  {
    icon: UserCheck,
    title: 'Doctor Review',
    description: 'Seamless portal for dentists to review, request modifications & confirm treatment plans.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Specific Planning',
    description: 'Customized Plans tailored to unique patient anatomy.',
  },
]

export default function Hero() {
  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden bg-ink">
        {/* Background Image Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/hero-dentist-platform.jpg"
            alt="Doctor reviewing CP Smart orthodontic cases"
            className="h-full w-full object-cover scale-115 object-[right_top]"
          />
          {/* Dark Solid Overlay: Left side 95% solid burgundy to completely hide background UI text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d0b29] via-[#3d0b29]/95 via-50% to-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <div className="max-w-xl text-white">
            <span className="eyebrow mb-3 block text-brand-200">
              Orthodontic Tech Services
            </span>

            <h1 className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Smarter Orthodontic
              <br />
              Tech.
              <br className="hidden sm:block" /> Better Treatment Decisions.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Clinical Orthodontic Assessment & Treatment Planning Support
              for Dental Professionals.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-white/75">
              CP Smart's Clinical Assessment Team enables dentists to evaluate orthodontic cases, review
              records, visualize proposed tooth movements, and
              develop clinically appropriate treatment plans.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="btn-primary border-0 bg-white text-brand-900 hover:bg-white/90"
              >
                Get in Touch
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80">
                <FolderInput size={15} strokeWidth={1.75} className="text-brand-300" />
                Structured Case Submission
              </span>
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80">
                <KeyRound size={15} strokeWidth={1.75} className="text-brand-300" />
                Secure Doctor Review Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLOATING 4-CARD KPI GRID SECTION --- */}
      <section className="bg-[#f8f9fa] py-10 px-6 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {kpiFeatures.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50/80 text-[#3d0b29]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}