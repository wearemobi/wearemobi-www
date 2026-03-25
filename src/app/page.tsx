import LogoBlock from '@/components/LogoBlock'
import ChatPrompt from '@/components/ChatPrompt'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main
          className="min-h-svh flex flex-col items-center px-4"
          style={{ backgroundColor: 'var(--bg)' }}
      >
        <ThemeToggle />

        <div className="flex flex-1 flex-col justify-center gap-10 w-full max-w-2xl">
          <LogoBlock />
          <ChatPrompt />
          <Footer />
        </div>
      </main>
  )
}
