'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LogoIcon() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
      <Image
          src={isDark ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="M.O.B.I.™"
          width={400}
          height={400}
          className="w-28 h-28 md:w-48 md:h-48"
          loading="eager"
      />
  )
}
