export default function LogoBlock() {
  return (
    <div className="flex flex-col items-center gap-4 animate-entry">
      {/* Logo icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-lg"
           style={{ backgroundColor: "var(--text-primary)" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text
                  x="14"
                  y="21"
                  textAnchor="middle"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="800"
                  fontSize="20"
                  fill="var(--bg)">M</text>
            </svg>
        </div>

      {/* Brand name */}
      <h1
        className="text-4xl md:text-6xl tracking-tight"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: "var(--text-primary)",
        }}
      >
        WE ARE MOBI
      </h1>

      {/* Tagline */}
      <p
        className="text-base md:text-lg text-center max-w-md animate-entry-delay-1"
        style={{ color: "var(--text-muted)" }}
      >
        Transforming ideas into high-impact digital solutions.
      </p>
    </div>
  );
}
