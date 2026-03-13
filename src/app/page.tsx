import LogoBlock from "@/components/LogoBlock"
import ChatPrompt from "@/components/ChatPrompt"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
      <main
          className="relative min-h-screen flex flex-col items-center justify-center px-4 gap-10"
          style={{ backgroundColor: "var(--bg)" }}
      >
        <ThemeToggle />
        <LogoBlock />
        <ChatPrompt />
        <footer className="absolute bottom-6 text-sm" style={{ color: "var(--text-muted)" }}>
          <a href="https://wearemobi.com" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            wearemobi.com
          </a>
          {" · "}
          <a href="mailto:contact@wearemobi.com" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            contact@wearemobi.com
          </a>
        </footer>
</main>
)
}