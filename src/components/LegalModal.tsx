import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface LegalModalProps {
  title: string
  onClose: () => void
  children: ReactNode
}

/**
 * Lightweight modal for legal documents (Privacy Policy, Terms &
 * Conditions). Content only renders — and is only readable — once the
 * user explicitly opens it; it is not sitting inline in the page for
 * anyone who scrolls to the bottom.
 */
export default function LegalModal({ title, onClose, children }: LegalModalProps) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/50 px-4 py-8 backdrop-blur-sm sm:py-16"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-2xl animate-[fadeUp_.35s_cubic-bezier(.16,1,.3,1)_both] rounded-2xl bg-white shadow-lift"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b border-line bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8">
          <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink/50 transition-colors hover:bg-surface-soft hover:text-ink"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-8 sm:px-8">{children}</div>
      </div>
    </div>
  )
}
