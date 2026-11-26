import {
  Image,
  ScanLine,
  Radiation,
  MessageSquare,
  History,
  ClipboardEdit,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import DentalArchVisual from './DentalArchVisual'

const STAGES = ['Stage 01', 'Stage 02', 'Stage 03', 'Final']
const ACTIVE_STAGE = 1
const RECORD_TABS = [
  { label: 'Photos', icon: Image },
  { label: 'Scans', icon: ScanLine },
  { label: 'Radiographs', icon: Radiation },
]

interface PlatformMockupProps {
  compact?: boolean
}

/**
 * Static, non-interactive mock-only representation of the CP Smart
 * clinical platform. Uses realistic dummy case data (no real patient
 * information) purely to illustrate what the platform looks like —
 * this website does not connect to or embed the actual platform.
 */
export default function PlatformMockup({ compact = false }: PlatformMockupProps) {
  return (
    <div className="card overflow-hidden">
      {/* Title bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-dark px-5 py-4 sm:px-6">
        <div className="leading-tight">
          <p className="text-[12.5px] font-semibold tracking-wide text-white">CPSDS</p>
          <p className="text-[11px] text-white/45">Clinical Workflow Platform</p>
        </div>
        <div className="flex items-center gap-4 text-[12.5px]">
          <span className="text-white/60">
            Case: <span className="font-semibold text-white">CP-1024</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/25 px-3 py-1 text-[11.5px] font-medium text-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-200" />
            Status: Doctor Review
          </span>
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-px bg-line ${compact ? '' : 'lg:grid-cols-[260px_1fr]'}`}>
        {/* Sidebar: patient + case */}
        {!compact && (
          <aside className="bg-surface-soft p-5">
            <div className="mb-5 rounded-xl border border-line bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">Case Details</p>
              <dl className="mt-3 space-y-2 text-[13px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">Doctor</dt>
                  <dd className="font-medium text-ink">Dr. Ahmed Khan</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">Clinic</dt>
                  <dd className="text-right font-medium text-ink">Example Dental Clinic</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">Patient ID</dt>
                  <dd className="font-medium text-ink">PT-00482</dd>
                </div>
              </dl>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">Patient Records</p>
            <div className="mt-3 space-y-1.5">
              {RECORD_TABS.map((tab, i) => {
                const Icon = tab.icon
                const active = i === 0
                return (
                  <div
                    key={tab.label}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium ${
                      active ? 'bg-brand-600 text-white' : 'text-ink/65'
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.75} />
                    {tab.label}
                  </div>
                )
              })}
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">Activity</p>
            <div className="mt-3 space-y-3 text-[12.5px] text-ink/55">
              <div className="flex items-start gap-2">
                <MessageSquare size={14} className="mt-0.5 shrink-0" />
                <span>2 clinical comments from CP Smart team</span>
              </div>
              <div className="flex items-start gap-2">
                <History size={14} className="mt-0.5 shrink-0" />
                <span>Revision history: 3 versions</span>
              </div>
            </div>
          </aside>
        )}

        {/* Main panel */}
        <div className="bg-white p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">Clinical Assessment</p>
          <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-ink/60">
            Tech review of submitted records indicates a Class II
            malocclusion with mild crowding. Proposed treatment plan
            below for review by the treating dentist.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">Treatment Plan</p>
            <span className="text-[12px] font-medium text-brand-600">{STAGES[ACTIVE_STAGE]}</span>
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            {STAGES.map((stage, i) => (
              <div key={stage} className="flex flex-1 items-center gap-1.5">
                <div
                  className={`flex h-9 flex-1 items-center justify-center rounded-lg border text-[12px] font-medium ${
                    i === ACTIVE_STAGE
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : i < ACTIVE_STAGE
                        ? 'border-brand-200 bg-brand-50 text-brand-700'
                        : 'border-line bg-surface-soft text-ink/45'
                  }`}
                >
                  {stage}
                </div>
                {i < STAGES.length - 1 && <ChevronRight size={14} className="shrink-0 text-ink/25" />}
              </div>
            ))}
          </div>

          {/* Visualization panel */}
          <div className="relative mt-5 flex h-52 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface-dark sm:h-64">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden="true"
            />
            <span className="absolute left-4 top-4 rounded-md bg-white/10 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wide text-white/60">
              3D Treatment Visualization
            </span>
            <DentalArchVisual tone="light" className="h-36 w-auto animate-drift sm:h-44" />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12.5px] text-ink/50">
              Comments &middot; Clinical modifications &middot; Revision history
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="btn-secondary !cursor-default !px-4 !py-2.5 text-[13px]">
                <ClipboardEdit size={15} />
                Request Modification
              </span>
              <span className="btn-primary !cursor-default !px-4 !py-2.5 text-[13px]">
                <CheckCircle2 size={15} />
                Approve Treatment Plan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}