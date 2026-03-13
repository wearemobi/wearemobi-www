import LogoIcon from "@/components/LogoIcon"

export default function LogoBlock() {
    return (
        <div className="flex flex-col items-center gap-4 animate-entry">
            <LogoIcon />
            <h1
                className="text-4xl md:text-6xl tracking-tight"
                style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    color: "var(--text-primary)",
                }}
            >
                WE ARE MOBI
                <sup
                    className="text-xs align-super"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                    ™
                </sup>
            </h1>
            <p
                className="text-base md:text-lg text-center max-w-md animate-entry-delay-1"
                style={{ color: "var(--text-muted)" }}
            >
                Transforming ideas into high-impact digital solutions.
            </p>
        </div>
    )
}
