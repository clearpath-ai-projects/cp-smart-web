interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const smartColor = variant === 'dark' ? 'text-black' : 'text-white'
  const subtextColor = variant === 'dark' ? 'text-ink/70' : 'text-white/70'

  return (
    <a href="/" className="inline-block">
      <div className="inline-flex flex-col">
        {/* Top line */}
        <div className="flex items-center text-[28px] font-extrabold tracking-tight leading-none">
          <span style={{ color: '#661244' }}>CP</span>
          <span className={`ml-[7px] ${smartColor}`}>SMART</span>
        </div>

        {/* Bottom line: Matches top width automatically, larger font, flush edges */}
        <div
          className={`flex items-center justify-between w-full text-[13px] font-bold uppercase mt-1 leading-none ${subtextColor}`}
        >
          <span className="tracking-[0.22em]">TECH</span>
          <span className="tracking-[0.22em] -mr-[0.22em]">SERVICES</span>
        </div>
      </div>
    </a>
  )
}