import { useState } from 'react'
import MarqueeBanner from './components/MarqueeBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import LegalModal from './components/LegalModal'
import Home from './sections/Home'
import About from './sections/About'
import ClinicalServices from './sections/ClinicalServices'
import HowItWorks from './sections/HowItWorks'
import Platform from './sections/Platform'
import ForDentists from './sections/ForDentists'
import Contact from './sections/Contact'
import PrivacyPolicy from './sections/PrivacyPolicy'
import Terms from './sections/Terms'

type LegalDoc = 'privacy' | 'terms' | null

/**
 * Single-page, purely informational site. Every section lives on this
 * one page and the header nav / footer links scroll to it via same-page
 * anchors — there is no client-side routing, portal integration, or
 * embedded interactive demo.
 *
 * Privacy Policy and Terms & Conditions are the exception: they are not
 * inline sections in the scroll flow (so they're never just "arrived
 * at" by scrolling to the bottom of the page) — they open in a modal
 * only when the visitor clicks the corresponding footer link.
 */
export default function App() {
  const [openLegalDoc, setOpenLegalDoc] = useState<LegalDoc>(null)

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <MarqueeBanner />
      <Navbar />
      <main className="flex-1">
        <Home />
        <SectionDivider from="soft" to="white" />
        <About />
        <ClinicalServices />
        <SectionDivider from="soft" to="white" />
        <HowItWorks />
        <Platform />
        <ForDentists />
        <SectionDivider from="dark" to="soft" />
        <Contact />
      </main>
      <SectionDivider from="soft" to="dark" />
      <Footer
        onOpenPrivacyPolicy={() => setOpenLegalDoc('privacy')}
        onOpenTerms={() => setOpenLegalDoc('terms')}
      />

      {openLegalDoc === 'privacy' && (
        <LegalModal title="Privacy Policy" onClose={() => setOpenLegalDoc(null)}>
          <PrivacyPolicy />
        </LegalModal>
      )}
      {openLegalDoc === 'terms' && (
        <LegalModal title="Terms & Conditions" onClose={() => setOpenLegalDoc(null)}>
          <Terms />
        </LegalModal>
      )}
    </div>
  )
}
