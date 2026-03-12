import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "We Are Mobi — Transforming ideas into high-impact digital solutions",
  description: "AI-native nearshore software development. Mobile, web & AI solutions",
  openGraph: {
    title: "We Are Mobi",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
