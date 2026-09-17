import Logo from './Logo'

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#clinical-services', label: 'Clinical Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#platform', label: 'CP Smart Platform' },
  { href: '#for-dentists', label: 'For Dentists' },
  { href: '#contact', label: 'Contact Us' },
]

interface FooterProps {
  onOpenPrivacyPolicy: () => void
  onOpenTerms: () => void
}

export default function Footer({ onOpenPrivacyPolicy, onOpenTerms }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-surface-dark text-white/70">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55">
              CP Smart Diagnostic Services (Pvt.) Ltd.
              <br />
              Orthodontic Diagnostic &amp; Clinical Consultation Services
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-[14px] text-white/65 transition-colors hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenTerms}
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Clinical Responsibility
            </h3>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/50">
              Final diagnosis, prescription, treatment decisions and patient
              care remain the responsibility of the treating dental
              practitioner.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} CP Smart Diagnostic Services (Pvt.) Ltd. All rights reserved.
          </p>
          <p></p>
        </div>
      </div>
    </footer>
  )
}
