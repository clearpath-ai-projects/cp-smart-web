/**
 * Continuous scrolling announcement bar shown above the navbar.
 * Pure CSS animation (two duplicated copies of the text scrolled
 * together, looped) so it never stutters or resets visibly.
 */
const SENTENCES = [
  'Smarter Orthodontic Tech',
  'Better Clinical Outcomes',
  'Efficient Treatment Decisions',
]

export default function MarqueeBanner() {
  return (
    <>
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="relative overflow-hidden border-b border-brand-500/20 bg-white py-2">
        <div
          className="flex w-max items-center"
          style={{
            animationName: 'marquee',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDuration: '60s', /* <--- Increase to slow down (e.g. 80s, 100s) */
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
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
    </>
  )
}