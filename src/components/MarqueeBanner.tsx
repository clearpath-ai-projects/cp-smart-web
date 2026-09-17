/**
 * Continuous scrolling announcement bar shown above the navbar.
 * Pure CSS animation (two duplicated copies of the text scrolled
 * together, looped) so it never stutters or resets visibly.
 */
const SENTENCES = [
  'Smarter Orthodontic Diagnostics.',
  'Better Treatment Decisions.',
  'Stronger Clinical Outcomes.',
]

export default function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden border-b border-brand-500/20 bg-white py-2">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {Array.from({ length: 4 }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center">
                {SENTENCES.map((sentence, i) => (
                  <span
                    key={i}
                    style={{ color: '#661244' }}
                    className="mx-8 whitespace-nowrap text-[13px] font-bold uppercase tracking-wide text-brand-700"
                  >
                    {sentence}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}