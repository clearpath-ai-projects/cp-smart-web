import { useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'

const ROLES = [
  'Select your role',
  'Dentist',
  'Orthodontist',
  'Clinic Administrator',
  'Other Dental Professional',
]

/** Contact Us section — form kept functional-looking (prototype only); no data is transmitted or stored. */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Prototype only: no data is transmitted or stored. A real
    // submission handler would be wired up to CP Smart's intake
    // system here.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section scroll-mt-[72px] bg-surface-soft">
      <div className="container-page">
        <SectionHeader
          
          title="Contact Us"
          subtitle="For dental professionals seeking clinical Tech and treatment-planning support."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealOnScroll className="space-y-6">
              <div className="card p-6">
                <h3 className="font-display text-[15px] font-semibold text-ink">Who this is for</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">
                  Dentists, orthodontists and dental clinics seeking
                  orthodontic assessment and clinical
                  treatment-planning support for their patients.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-display text-[15px] font-semibold text-ink">Already working with us?</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">
                  Existing clinical partners can reach out to our team
                  directly for updates on an active case.
                </p>
              </div>
              <p className="px-1 text-[12.5px] leading-relaxed text-ink/35">
             
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-8">
            <RevealOnScroll delay={80}>
              {submitted ? (
                <div className="card flex flex-col items-start gap-4 p-8 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <CheckCircle2 size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">Inquiry received</h3>
                  <p className="max-w-md text-[14.5px] leading-relaxed text-ink/60">
                    Thank you. This is a prototype form and no information
                    has been sent or stored. In the live product, our
                    clinical team would follow up shortly.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-2">
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="fullName">
                      <input id="fullName" name="fullName" type="text" required className="input" placeholder="Dr. Jane Smith" />
                    </Field>
                    <Field label="Professional Email" htmlFor="email">
                      <input id="email" name="email" type="email" required className="input" placeholder="you@clinic.com" />
                    </Field>
                    <Field label="Clinic Name" htmlFor="clinic">
                      <input id="clinic" name="clinic" type="text" required className="input" placeholder="Your clinic name" />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input id="phone" name="phone" type="tel" className="input" placeholder="+92 ..." />
                    </Field>
                  </div>
                  <Field label="Professional Role" htmlFor="role">
                    <select id="role" name="role" required className="input" defaultValue={ROLES[0]}>
                      {ROLES.map((role) => (
                        <option key={role} disabled={role === ROLES[0]} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="Tell us about the case or inquiry you'd like to discuss."
                    />
                  </Field>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Inquiry
                    <Send size={15} />
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-ink/70">
        {label}
      </label>
      {children}
    </div>
  )
}
