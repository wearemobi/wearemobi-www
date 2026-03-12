# SPEC-initial.md — wearemobi-www
## We Are Mobi · Website v1.0
> Stack: Next.js 16 App Router · Tailwind CSS v4
> Methodology: Spec Driven Development — no code without an approved spec

---

## 1. Design Philosophy

**Less is more. The site IS the product.**

- Extreme minimalism with purpose
- Dark mode by default, light mode available (respects `prefers-color-scheme`)
- Single page — no nav, no sections, no scroll
- The prompt is the absolute center of the experience
- Everything else is subordinate to the prompt

**Visual tone:** Luxury tech. What Vercel and Linear would build if they were from Costa Rica.

---

## 2. Color Palette

| Token            | Dark Mode | Light Mode |
|------------------|-----------|------------|
| `--bg`           | `#0A1628` | `#F0F8FF`  |
| `--surface`      | `#111C2E` | `#FFFFFF`  |
| `--border`       | `#1E2D45` | `#E2E8F0`  |
| `--text-primary` | `#F8FAFC` | `#0A1628`  |
| `--text-muted`   | `#6B7280` | `#6B7280`  |
| `--accent-cyan`  | `#00C2FF` | `#00C2FF`  |
| `--accent-green` | `#00E5B0` | `#00A880`  |

---

## 3. Typography

| Usage          | Font                            |
|----------------|---------------------------------|
| Display / Logo | `Syne ExtraBold` (Google Fonts) |
| Body / UI      | `Inter` (Google Fonts)          |

---

## 4. Layout — Single Page

```
┌─────────────────────────────────────────────┐
│                         [toggle dark/light] │
│                                             │
│                                             │
│              [ m ]  ← logo SVG              │
│           WE ARE MOBI  ← display            │
│     Transforming ideas into high-impact     │
│         digital solutions.  ← tagline       │
│                                             │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  What can we build for you?      ↑   │   │
│  └──────────────────────────────────────┘   │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 5. Components

### 5.1 Logo Block
- `m` icon in black box — inline SVG, matches GitHub profile
- `WE ARE MOBI` in `Syne ExtraBold`, display size
- Tagline below in `Inter Regular`, `--text-muted`
- Entry animation: fade + slide up on load (pure CSS, no library)

### 5.2 Prompt Bar
- Rounded input bar (`rounded-2xl`), subtle border
- Rotating placeholder every 3 seconds:
  ```
  "What can we build for you?"
  "¿Qué quieres lanzar?"
  "Tell us your idea."
  "Need an MVP? Let's talk."
  "AI, mobile, web — ask anything."
  ```
- Submit button: `↑` icon, `--accent-cyan` on hover
- **No response logic** — submit does nothing in v1.0
- Custom blinking cursor
- Background: `--surface` with subtle `backdrop-blur`

> ⚠️ The prompt is pure UI. Intelligence connects in Phase 2.

### 5.3 Dark/Light Toggle
- Position: `fixed` top-right
- Sun/moon inline SVG icon
- Smooth `transition-colors duration-300` across entire body
- Persists preference in `localStorage`

### 5.4 Footer
- Single line: `Costa Rica 🇨🇷 · wearemobi.com`
- `Inter`, `text-sm`, `--text-muted`

---

## 6. Animations

| Element          | Animation                                      |
|------------------|------------------------------------------------|
| Logo             | Fade in + translateY(20px → 0), 600ms ease-out |
| Tagline          | Same, delay 150ms                              |
| Prompt bar       | Same, delay 300ms                              |
| Placeholder text | Fade cross-dissolve every 3s                   |
| Theme toggle     | transition-all 300ms on entire body            |

---

## 7. Responsiveness

| Breakpoint          | Behavior                                |
|---------------------|-----------------------------------------|
| Mobile `< 640px`    | Smaller logo, full-width prompt, `px-4` |
| Tablet `640–1024px` | Centered layout, prompt `max-w-lg`      |
| Desktop `> 1024px`  | Prompt `max-w-2xl`, larger logo         |

---

## 8. SEO & Meta

```html
<title>We Are Mobi — Software that moves your business</title>
<meta name="description" content="AI-native software development from Costa Rica. Mobile, web & AI solutions." />
<meta property="og:title" content="We Are Mobi" />
<meta property="og:image" content="/og-image.png" />
<meta name="theme-color" content="#0A1628" />
```

---

## 9. File Structure

```
wearemobi-www/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # fonts, metadata, theme provider
│   │   ├── page.tsx            # single page — full layout
│   │   └── globals.css         # CSS variables, reset, animations
│   └── components/
│       ├── LogoBlock.tsx       # logo + name + tagline
│       ├── ChatPrompt.tsx      # input bar UI — no logic
│       └── ThemeToggle.tsx     # dark/light switch
└── public/
    └── favicon.ico
```

> ⚠️ Public repo — no sensitive data in code.  
> Environment variables go in `.env.local` (always gitignored).

---

## 10. Definition of Done — v1.0

- [X] Loads in < 2s on mobile
- [X] Dark/light mode works and persists
- [X] Prompt bar pixel-perfect across all breakpoints
- [X] Smooth entry animations
- [X] Zero console errors in production
- [X] Nothing sensitive in the repo

---

## 11. Out of Scope — v1.0

- ❌ Chat response logic
- ❌ AI integration (Phase 2)
- ❌ Inner pages
- ❌ Analytics
- ❌ Contact form
- ❌ Multi-language

---

*SPEC-initial · wearemobi-www · v1.0*
