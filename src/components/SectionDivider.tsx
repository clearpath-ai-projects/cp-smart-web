type Tone = 'white' | 'soft' | 'dark'

interface SectionDividerProps {
  /** Background of the section just above this divider. */
  from: Tone
  /** Background of the section just below this divider. */
  to: Tone
}

const FILLS: Record<Tone, string> = {
  white: '#ffffff',
  soft: '#f7f5f6',
  dark: '#161219',
}

/**
 * A clean, flat section transition replacing the former SVG curve.
 */
export default function SectionDivider({ to }: SectionDividerProps) {
  return (
    <div
      className="h-[1px] w-full border-t border-gray-200/60"
      style={{ backgroundColor: FILLS[to] }}
      aria-hidden="true"
    />
  )
}