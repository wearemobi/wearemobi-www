"use client"

import { useEffect, useState } from "react"

const placeholders = [
    "What can we build for you?",
    "¿Qué quieres lanzar?",
    "Tell us your idea.",
    "Need an MVP? Let's talk.",
    "AI, mobile, web — ask anything.",
]

export default function ChatPrompt() {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)
    const [isDark, setIsDark] = useState(true)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"))
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"))
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % placeholders.length)
                setVisible(true)
            }, 400)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-2xl animate-entry-delay-2">
            <div
                className="relative flex items-center gap-3 px-5 py-4 rounded-2xl backdrop-blur-sm"
                style={{
                    backgroundColor: "var(--surface)",
                    border: `1px solid ${isDark ? "var(--border)" : "#CBD5E1"}`,
                    minHeight: "64px",
                }}
            >
                <input
                    type="text"
                    className="flex-1 bg-transparent outline-none text-base"
                    style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-inter), sans-serif",
                        paddingLeft: "12px",
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue === "" && (
                    <span
                        className="absolute left-5 text-base pointer-events-none"
                        style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-inter), sans-serif",
                            opacity: visible ? 1 : 0,
                            transition: "opacity 400ms",
                        }}
                    >
                        {placeholders[index]}
                    </span>
                )}
                <button
                    aria-label="Submit"
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)"
                        e.currentTarget.style.border = "1px solid var(--text-muted)"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-muted)"
                        e.currentTarget.style.border = "none"
                    }}
                >
                    ↑
                </button>
            </div>
        </div>
    )
}