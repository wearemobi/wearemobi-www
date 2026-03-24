'use client'

import { useEffect, useState } from 'react'

const placeholders = [
    'What can we build for you?',
    '¿Qué quieres lanzar?',
    'Tell us your idea.',
    "Need an MVP? Let's talk.",
    'AI, mobile, web — ask anything.',
]

export default function ChatPrompt() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isDark, setIsDark] = useState(true)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
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
          border: `1px solid ${isDark ? 'var(--border)' : '#CBD5E1'}`,
        }}
      >
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-base"
          style={{
            paddingLeft: '12px',
            minHeight: '64px',
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue === '' && (
          <span
            className="absolute left-5 text-base pointer-events-none"
            style={{
              color: 'var(--text-muted)',
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms',
            }}
          >
            {placeholders[index]}
          </span>
        )}
      </div>
    </div>
  )
}