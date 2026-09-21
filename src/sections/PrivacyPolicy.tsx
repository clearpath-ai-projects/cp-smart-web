const SECTIONS = [
  {
    heading: '1. Introduction & Scope',
    body: [
      'CP Smart Diagnostic Service operates a dental diagnostic service in Pakistan. This Privacy Policy explains what personal and health-related information we collect from patients and visitors, how we use and protect it, and the choices available to you.',
      'By visiting the Website, booking an appointment, or using any of our diagnostic services, you consent to the collection and use of your information as described in this Policy.',
    ],
  },
  {
    heading: '2. Information We Collect',
    body: [
      'Contact & identity details — name, phone number, & email address.',
      'Health & dental information — symptoms, dental/medical history, diagnostic images, scans, test results, and any other health data generated or shared in connection with your diagnostic visit.',
      'Website usage data — IP address, browser/device type, pages visited, and cookies (see Section 7).',
      'We collect this information directly from you (forms, calls, WhatsApp, in-clinic visits) and, where relevant, from referring healthcare providers with your consent.',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: [
      'We use the information we collect to schedule, confirm, and manage appointments.',
      'We also use it to perform dental diagnostic services and prepare, interpret, and deliver reports and results.',
      'Additionally, information helps us improve our Website, services, and patient experience, as well as comply with applicable Pakistani laws, regulations, and lawful requests from authorities.',
      'We do not use your health information for automated decision-making that produces legal or similarly significant effects without human involvement.',
    ],
  },
  {
    heading: '4. Disclosure & Sharing of Information',
    body: [
      'We do not sell your personal or health information to third parties, and we do not use your health data for marketing without your explicit consent.',
      'We may share your information with referring dentists, specialists, or labs involved in your treatment, for continuity of care.',
      'We may also disclose information to legal and regulatory authorities, where required by Pakistani law, court order, or to protect the rights, safety, or property of CP Smart, our patients, or the public. We require anyone we share data with to keep it confidential and secure.',
    ],
  },
  {
    heading: '5. Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect your personal and health information against unauthorized access, alteration, disclosure, or destruction, including restricting access to authorized clinical and administrative staff only.',
      'However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.',
    ],
  },
  {
    heading: '6. Data Retention',
    body: [
      'We retain patient records, diagnostic reports, and related health information for as long as necessary to provide ongoing care, meet standard medical record-keeping practice in Pakistan, and satisfy legal, tax, or regulatory requirements.',
    ],
  },
  {
    heading: '7. Cookies & Website Analytics',
    body: [
      'Our Website may use cookies and similar tracking technologies to remember your preferences, understand how visitors use the site, and improve its functionality.',
      'You can control or disable cookies through your browser settings; note that some parts of the Website may not function properly if cookies are disabled.',
    ],
  },
  {
    heading: "8. Children's Privacy",
    body: [
      'Our Website is not directed at children, and we do not knowingly collect personal information directly from minors without the involvement of a parent or legal guardian.',
      "Where a patient is a minor (for example, a pediatric dental patient), information is collected and consented to by their parent or guardian, who is responsible for reviewing this Policy on the child's behalf.",
    ],
  },
  {
    heading: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.',
      'The "Last updated" date at the top of this document indicates when it was last revised. We encourage you to review this Policy periodically. Continued use of the Website or our services after changes are posted constitutes acceptance of the updated Policy.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h3 className="font-display text-base font-semibold text-ink">
              {section.heading}
            </h3>
            <div className="mt-2.5 space-y-2.5">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-[14.5px] leading-relaxed text-ink/65">
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