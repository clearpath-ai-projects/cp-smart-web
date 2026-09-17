interface DentalArchVisualProps {
  className?: string
  tone?: 'brand' | 'light'
}

/**
 * A restrained, custom SVG representation of an orthodontic arch used
 * across the hero and platform visuals. Deliberately abstract rather
 * than a literal tooth/product illustration, per the "no product
 * advertisement" direction in the brief.
 */
export default function DentalArchVisual({ className = '', tone = 'brand' }: DentalArchVisualProps) {
  const stroke = tone === 'brand' ? '#661244' : '#ffffff'
  const fill = tone === 'brand' ? '#f3e6ee' : 'rgba(255,255,255,0.08)'

  return (
    <svg viewBox="0 0 400 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M40 60 C40 170 130 230 200 230 C270 230 360 170 360 60"
        stroke={stroke}
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="3 6"
      />
      {Array.from({ length: 14 }).map((_, i) => {
        const t = i / 13
        const angle = Math.PI * (0.12 + t * 0.76)
        const rx = 168
        const ry = 96
        const cx = 200 + rx * Math.cos(Math.PI - angle)
        const cy = 55 + ry * Math.sin(angle)
        const w = 20 - Math.abs(t - 0.5) * 8
        return (
          <rect
            key={i}
            x={cx - w / 2}
            y={cy - 12}
            width={w}
            height={24}
            rx={6}
            fill={fill}
            stroke={stroke}
            strokeWidth="1.25"
            strokeOpacity="0.55"
          />
        )
      })}
    </svg>
  )
}
