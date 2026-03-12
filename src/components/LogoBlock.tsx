export default function LogoBlock() {
  return (
    <div className="flex flex-col items-center gap-4 animate-entry">
      {/* Logo icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg"
        style={{ backgroundColor: "var(--text-primary)" }}
      >
        <span
          className="text-2xl font-bold"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: "var(--bg)",
          }}
        >
          m
        </span>
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
