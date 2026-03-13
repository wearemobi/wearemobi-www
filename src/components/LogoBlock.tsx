import LogoIcon from "@/components/LogoIcon";

export default function LogoBlock() {
  return (
    <div className="flex flex-col items-center gap-4 animate-entry">
      {/* Logo icon */}
      <LogoIcon />

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
