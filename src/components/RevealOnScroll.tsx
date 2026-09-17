import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

/**
 * Lightweight scroll-reveal wrapper (IntersectionObserver based).
 * Kept subtle and short-duration per the "avoid excessive animation"
 * direction in the brief.
 */
export default function RevealOnScroll({ children, className = '', delay = 0, as = 'div' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Component = as
  return (
    <Component
      ref={ref as never}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-5 scale-[0.97] opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
