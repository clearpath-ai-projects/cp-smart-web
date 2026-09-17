interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const smartColor = variant === 'dark' ? 'text-black' : 'text-white'
  const subtextColor = variant === 'dark' ? 'text-ink/70' : 'text-white/70'

  return (
    <a
      href="#home"
      className={`group inline-flex items-center ${className}`}
      aria-label="CP SMART — Diagnostic Services, Home"
    >
      <div className="flex flex-col">
        {/* Top line */}
        <div className="flex items-center text-[28px] font-extrabold tracking-tight leading-none">
          <span style={{ color: '#661244' }}>CP</span>
          <span className={`ml-[7px] ${smartColor}`}>SMART</span>
        </div>

        {/* Bottom line: Pixel-perfect forced flex distribution */}
        <div 
          className={`flex items-center justify-between text-[9.5px] font-bold uppercase mt-1.5 leading-none -ml-[1px] ${subtextColor}`}
        >
          <span className="tracking-[0.18em]">DIAGNOSTIC</span>
          <span className="tracking-[0.18em] -mr-[1px]">SERVICES</span>
        </div>
      </div>
    </a>
  )
}