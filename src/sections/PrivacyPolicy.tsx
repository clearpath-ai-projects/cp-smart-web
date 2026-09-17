const SECTIONS = [
  {
    heading: 'Overview',
    body: [
      'This Privacy Policy describes, at a general level, how CP Smart Diagnostic Services (Pvt.) Ltd. ("CP Smart", "we", "us") approaches the handling of information submitted through this website and the CP Smart clinical platform by dental professionals.',
      'This page is part of a prototype website and is provided as a placeholder. It does not constitute a final, legally reviewed privacy policy.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: [
      'Information submitted by dental professionals may include professional contact details, clinic information, and patient clinical records submitted for the purpose of orthodontic diagnostic assessment and treatment planning.',
    ],
  },
  {
    heading: 'Data & Confidentiality',
    body: [
      'Patient information and clinical records are handled confidentially and used only for legitimate clinical, treatment-planning and, where authorized, manufacturing purposes.',
      'Necessary treatment information may be securely shared with the treating dentist’s designated manufacturer after clinical approval and authorization.',
    ],
  },
  {
    heading: 'How Information Is Used',
    body: [
      'Information is used to perform orthodontic diagnostic assessment, prepare and refine clinical treatment plans, facilitate doctor review and approval, and, where authorized, to support downstream manufacturing of an approved appliance.',
    ],
  },
  {
    heading: 'Data Sharing',
    body: [
      'Clinical and treatment information is shared only with the treating dentist, the CP Smart clinical team, and, following approval and authorization, the designated manufacturing partner.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'Treating dentists may contact CP Smart’s clinical team regarding the information submitted for a case. Full details of applicable rights and procedures will be provided in the final published policy.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'This placeholder policy may be updated as CP Smart Diagnostic Services finalizes its clinical platform and data-handling procedures.',
    ],
  },
]

/**
 * Privacy Policy content — placeholder copy; final language to be
 * supplied by the client. Rendered inside LegalModal, opened only when
 * the user clicks the "Privacy Policy" link (not sitting inline on the
 * page for anyone who scrolls past it).
 */
export default function PrivacyPolicy() {
  return (
    <div>
      <div className="mb-8 rounded-xl border border-line bg-surface-soft px-5 py-4 text-[13.5px] text-ink/55">
        Prototype placeholder document. Final policy language will be
        reviewed and published prior to launch.
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
