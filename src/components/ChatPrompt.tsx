"use client";

import { useEffect, useState } from "react";

const placeholders = [
    "What can we build for you?",
    "¿Qué quieres lanzar?",
    "Tell us your idea.",
    "Need an MVP? Let's talk.",
    "AI, mobile, web — ask anything.",
];

export default function ChatPrompt() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % placeholders.length);
                setVisible(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-2xl animate-entry-delay-2">
            <div
                className="flex items-center gap-3 px-5 py-4 rounded-2xl backdrop-blur-sm"
                style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                }}
            >
                <input
                    type="text"
                    className="flex-1 bg-transparent outline-none text-base"
                    style={{ color: "var(--text-primary)" }}
                    placeholder=""
                />
                <span
                    className="cursor-blink text-lg"
                    style={{ color: "var(--text-muted)" }}
                >
          |
        </span>
                <span
                    className="absolute left-5 text-base pointer-events-none transition-opacity duration-400"
                    style={{
                        color: "var(--text-muted)",
                        opacity: visible ? 1 : 0,
                    }}
                >
          {placeholders[index]}
        </span>
                <button
                    aria-label="Submit"
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent-cyan)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                    }
                >
                    ↑
                </button>
            </div>
        </div>
    );
}
