import LogoIcon from '@/components/LogoIcon'

export default function LogoBlock() {
  return (
    <div className="flex flex-col items-center gap-4 animate-entry">
      <LogoIcon />
      <h1
        className="text-6xl md:text-8xl tracking-tight"
        style={{
          fontFamily: 'var(--font-urbanist), sans-serif',
          color: 'var(--text-primary)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          lineHeight: '1',
        }}
      >
        We Are M.O.B.I.
        <sup
          style={{
            fontFamily: 'var(--font-urbanist), sans-serif',
            color: 'var(--text-muted)',
            fontSize: '0.25em',
            verticalAlign: 'super',
          }}
        >
          ™
        </sup>
      </h1>
      <p
        className="text-base md:text-lg text-center max-w-md animate-entry-delay-1"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-urbanist), sans-serif' }}
      >
        Transforming ideas into high-impact digital solutions.
      </p>
    </div>
  )
}
