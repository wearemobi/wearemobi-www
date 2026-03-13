"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LogoIcon() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"))
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"))
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
        return () => observer.disconnect()
    }, [])

    return (
        <Image
            src={isDark ? "/icon-dark.svg" : "/icon-light.svg"}
            alt="We Are Mobi logo"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14"
            priority
        />
    )
}
