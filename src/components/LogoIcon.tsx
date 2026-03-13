"use client";
import { useEffect, useState } from "react";

export default function LogoIcon() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="36" ry="36" fill={isDark ? "#F8FAFC" : "#0A1628"} />
      <text
        x="100"
        y="143"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="130"
        fontWeight="700"
        fill={isDark ? "#0A1628" : "#F8FAFC"}
        textAnchor="middle"
        letterSpacing="-4"
      >
        m
      </text>
    </svg>
  );
}
