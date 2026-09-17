const SECTIONS = [
  {
    heading: 'Overview',
    body: [
      'These Terms & Conditions govern the use of this website and, where applicable, the CP Smart clinical platform by dental professionals.',
      'This page is part of a prototype website and is provided as a placeholder. It does not constitute final, legally reviewed terms.',
    ],
  },
  {
    heading: 'Use of the Platform',
    body: [
      'The CP Smart platform is intended for use by dentists, orthodontists and authorized dental clinic staff for the purpose of submitting cases, reviewing clinical assessments and managing treatment plan approvals.',
    ],
  },
  {
    heading: 'Clinical Responsibility',
    body: [
      'CP Smart Diagnostic Services provides professional diagnostic and treatment-planning support to dental practitioners. Final diagnosis, prescription, treatment decisions and patient care remain the responsibility of the treating dental practitioner.',
    ],
  },
  {
    heading: 'Manufacturer Relationship',
    body: [
      'Following approval by the treating dentist, relevant treatment and manufacturing information may be securely transferred to the dentist’s designated manufacturing partner for production of the prescribed orthodontic appliance. CP Smart Diagnostic Services does not manufacture physical aligners.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All content on this website, including text, visuals and platform interface designs, remains the property of CP Smart Diagnostic Services (Pvt.) Ltd. unless otherwise stated.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'CP Smart Diagnostic Services provides diagnostic and treatment-planning support and does not replace the clinical judgment of the treating dental practitioner. Full liability terms will be provided in the final published version of this document.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'These placeholder terms may be updated as CP Smart Diagnostic Services finalizes its clinical platform and commercial agreements.',
    ],
  },
]

/**
 * Terms & Conditions content — placeholder copy; final language to be
 * supplied by the client. Rendered inside LegalModal, opened only when
 * the user clicks the "Terms & Conditions" link (not sitting inline on
 * the page for anyone who scrolls past it).
 */
export default function Terms() {
  return (
    <div>
      <div className="mb-8 rounded-xl border border-line bg-surface-soft px-5 py-4 text-[13.5px] text-ink/55">
        Prototype placeholder document. Final terms will be reviewed and
        published prior to launch.
      </div>
      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h3 className="font-display text-base font-semibold text-ink">{section.heading}</h3>
            <div className="mt-2.5 space-y-2.5">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-[14.5px] leading-relaxed text-ink/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
