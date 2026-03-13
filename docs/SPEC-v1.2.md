# SPEC-v1.2.md — wearemobi-www

## We Are Mobi · Website v1.2 — Branding, Polish & Dev Tooling

> Stack: Next.js 16 App Router · Tailwind CSS v4
> Methodology: Spec Driven Development — no code without an approved spec
> Builds on: docs/SPEC-v1.1.md
> Ref: https://github.com/wearemobi/wearemobi-www/issues/5

---

## 1. Scope

Polish, branding consistency, and developer tooling.
No new pages. No new features. No AI integration.

---

## 2. Changes

### 2.1 LogoBlock — Trademark Symbol

Add `™` after `WE ARE MOBI` in the LogoBlock component.

**Spec:**

- Symbol: `™` (U+2122)
- Rendered as: `WE ARE MOBI™`
- Style: `font-size: 0.25em`, `verticalAlign: super`, `--text-muted` color
- Must not break existing layout or animation

**Implemented:** ✅

---

### 2.2 Logo Icon — SVG Files, Square, Larger

Replace inline SVG placeholder with official brand icon files.

**Spec:**

- Two SVG files in `/public`: `icon-light.svg` (black bg, white m) and `icon-dark.svg` (white bg, navy m)
- Sharp square — no border radius
- Size: `w-24 h-24 md:w-28 md:h-28` (up from 48/40px)
- Uses `next/image` with `MutationObserver` to swap based on theme
- `m` lowercase, Helvetica Neue 700, matches official brand

**Implemented:** ✅

---

### 2.3 Footer — Re-enable Email + GitHub Link

Re-enable email and add GitHub organization link.

**Spec:**

- Layout: `flex items-center gap-3`
- Links: `wearemobi.com · contact@wearemobi.com · GitHub`
- Email renders as `mailto:` link
- GitHub renders as inline SVG icon + text, links to `github.com/wearemobi`
- GitHub SVG: `width=16 height=16`, `shapeRendering: geometricPrecision`
- Font: `var(--font-inter), sans-serif`, `text-sm`, `--text-muted`

**Implemented:** ✅

---

### 2.4 Chat Input — Border Contrast + Height + Placeholder Fix

**Spec:**

- Dark mode: no change to border
- Light mode: border color → `#CBD5E1`
- `minHeight: 64px` for better proportions
- Rotating placeholder hides when user types (`inputValue === ""` condition)
- Placeholder font: `var(--font-inter), sans-serif`
- Submit button hover: white/muted — no cyan
- Container: `position: relative` for correct absolute placeholder positioning

**Implemented:** ✅

---

### 2.5 Favicon — SVG via Metadata API

Replace default Next.js favicon with Mobi icon.

**Spec:**

- Reference `icon-light.svg` via Next.js metadata API (`type: image/svg+xml`)
- Remove any existing Vercel or Next.js default favicon files
- PNG favicons deferred — SVG supported by all modern browsers

**Implemented:** ✅

---

### 2.6 Font Audit & Optimization

**Spec:**

- Replace `Syne` with `Urbanist` for headlines — closer to brand's Brandon Grotesque aesthetic
- Load `Urbanist` (weight 800) and `Inter` (weight 400, 500) via `next/font/google`
- Remove `@import` from `globals.css` — fonts load via `next/font` only
- Subset: `latin` only, `display: swap`
- CSS variables: `--font-urbanist`, `--font-inter`
- Add `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to `body`

**Implemented:** ✅

---

### 2.7 Color Palette — Grayscale First

Shift palette to grayscale-first. Cyan is on hold until corporate color is defined.

**Spec:**

| Token                | Current   | New                     |
|----------------------|-----------|-------------------------|
| `--accent-cyan`      | `#00C2FF` | commented out on hold   |
| Submit button hover  | cyan      | white with dark border  |
| Any cyan text/border | cyan      | `--text-muted` or white |

- CSS variable commented with `/* on hold: --accent-cyan: #00c2ff; */`
- No cyan visible anywhere in the UI
- Dark mode and light mode both affected

**Implemented:** ✅

---

### 2.8 SVG Consistency

**Spec:**

- All SVGs in `/public` audited
- ThemeToggle icons use `currentColor` — no hardcoded colors
- `aria-hidden="true"` on decorative SVGs
- `strokeLinecap="round"` and `strokeLinejoin="round"` on ThemeToggle SVGs
- GitHub icon uses `shapeRendering: geometricPrecision`

**Implemented:** ✅

---

### 2.9 Prettier + ESLint Setup

**Spec:**

**Prettier:**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

**ESLint:**

- Extend `next/core-web-vitals`
- Replace `eslint.config.mjs` with `.eslintrc.json`
- Add `lint` script: `"lint": "next lint"`
- Add `format` script: `"format": "prettier --write ."`
- `.prettierignore`: `node_modules`, `.next`, `public`

**Implemented:** ✅

---

### 2.10 Prod Optimization

**Spec:**

- `compress: true` in `next.config.ts`
- `images.unoptimized: false`
- `metadataBase: new URL('https://wearemobi.com')` — fixes OG warning
- Theme init script moved from `<head>` to `<body>` — fixes missing `<title>` warning
- `npm run build` passes with zero warnings

**Implemented:** ✅

---

### 2.11 Clean Unused SVGs in `/public`

**Spec:**

- Removed: `vercel.svg`, `next.svg`, `file.svg`, `globe.svg`, `window.svg`
- Kept: `icon-dark.svg`, `icon-light.svg`, `og-image.png`

**Implemented:** ✅

---

### 2.12 OG Image

**Spec:**

- File: `/public/og-image.png`
- Size: `1200x630px`
- Design: dark background `#0A1628`, white `WE ARE MOBI` centered, tagline in muted
- Referenced in `layout.tsx` via `openGraph.images`

**Implemented:** ✅

---

### 2.13 README — Contributing URL

**Spec:**

- URL confirmed: `https://github.com/wearemobi/.github/blob/main/CONTRIBUTING.md`
- Renders correctly on GitHub

**Implemented:** ✅

---

### 2.14 Headline Typography (Added during implementation)

**Spec:**

- Font: `Urbanist 800` — closer to Brandon Grotesque than Syne
- Size: `clamp(2rem, 5vw, 3.5rem)` — responsive without Tailwind dependency
- `fontWeight: 900`, `letterSpacing: -0.02em`, `lineHeight: 1`
- `display: inline-block` for correct transform behavior

**Implemented:** ✅

---

## 3. Definition of Done — v1.2

- [x] `WE ARE MOBI™` renders correctly in both modes
- [x] Logo icon is sharp square, larger size, both modes
- [x] Chat input border visible in light mode
- [x] Favicon is Mobi SVG icon — no Next.js/Vercel defaults
- [x] Only `Urbanist` + `Inter` loaded via `next/font`
- [x] No cyan visible anywhere in the UI
- [x] All SVGs use `currentColor` or are black/white on-brand
- [x] `.prettierrc` and `.eslintrc.json` present and working
- [x] `npm run lint` passes with zero errors
- [x] `npm run build` passes with zero warnings
- [x] No `console.log` in production code
- [x] `/public` contains only referenced files
- [x] OG image present and referenced in metadata
- [x] README contributing URL points to `github.com/wearemobi`
- [x] Zero console errors in production
- [x] No regressions from v1.1
- [x] Font smoothing applied globally
- [x] GitHub link in footer
- [x] Chat input placeholder hides on type

---

## 4. Out of Scope — v1.2

- ❌ AI integration
- ❌ New pages or sections
- ❌ Analytics
- ❌ Chat response logic
- ❌ Dynamic OG image
- ❌ Multi-language