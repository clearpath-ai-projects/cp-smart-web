import { Stethoscope, ScanEye, UserCheck, FileHeart } from 'lucide-react'

const ITEMS = [
  { label: 'Clinical Expertise', icon: Stethoscope },
  { label: 'Digital Treatment Visualization', icon: ScanEye },
  { label: 'Doctor Review', icon: UserCheck },
  { label: 'Patient-Specific Planning', icon: FileHeart },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface-soft">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-y divide-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-3 px-2 py-6 sm:justify-center sm:px-5">
                <Icon size={18} strokeWidth={1.75} className="shrink-0 text-brand-600" />
                <span className="text-[13.5px] font-medium text-ink/70">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
