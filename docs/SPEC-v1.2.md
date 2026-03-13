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
- Style: `text-xs`, `align-super`, `--text-muted` color
- Must not break existing layout or animation

---

### 2.2 Logo Icon — Square, Larger

Update the inline SVG logo icon.

**Spec:**

- Remove border radius → `rounded-none` (sharp square)
- New size: `56x56px` desktop · `48x48px` mobile (up from 48/40)
- Black background, white `M` lettermark — no change to content
- Must remain inline SVG, no `<img>` tag

---

### 2.3 Footer — Re-enable Email

Cloudflare Email Forwarding is being configured. Re-enable the email in the footer.

**Spec:**

- Current: `wearemobi.com · contact@wearemobi.com` (hidden or removed in v1.1)
- New: restore `wearemobi.com · contact@wearemobi.com`
- Email renders as a `mailto:` link
- Style: `Inter`, `text-sm`, `--text-muted` — no change from original design

---

### 2.4 Chat Input — Border Contrast in Light Mode

The chat input border is too subtle in light mode. Increase contrast.

**Spec:**

- Dark mode: no change
- Light mode: border color → `#CBD5E1` (up from current `--border`)
- Apply only to the prompt bar component (`ChatPrompt.tsx`)

---

### 2.5 Favicon — Replace with Mobi Icon

Replace the default Next.js favicon with the Mobi `M` icon.

**Spec:**

- Format: `.ico` (32x32) + `.png` (192x192, 512x512) for PWA readiness
- Design: black square, white `M` — matches logo icon
- Files go in `/public`
- Reference in `app/layout.tsx` via Next.js metadata API
- Remove any existing Vercel or Next.js default favicon files

---

### 2.6 Font Audit & Optimization

Audit current font loading and optimize.

**Spec:**

- Confirm only `Syne` and `Inter` are loaded (no unused fonts)
- Use `next/font/google` with `display: swap` for both
- Remove any `@import` from CSS — fonts must load via `next/font` only
- Subset: `latin` only
- Verify no layout shift on load (CLS = 0)

---

### 2.7 Color Palette — Grayscale First

Shift palette to grayscale-first. Cyan is on hold until corporate color is defined.

**Spec:**

| Token                | Current   | New                     |
| -------------------- | --------- | ----------------------- |
| `--accent-cyan`      | `#00C2FF` | `#F8FAFC` (near-white)  |
| Submit button hover  | cyan      | white with dark border  |
| Any cyan text/border | cyan      | `--text-muted` or white |

- Do not remove the `--accent-cyan` CSS variable — comment it with `/* on hold */`
- No cyan visible anywhere in the UI after this change
- Dark mode and light mode both affected

---

### 2.8 SVG Consistency

Ensure all SVGs in the site match the black & white official logo style.

**Spec:**

- Audit all SVGs in `/public` and components
- Remove any colored or off-brand SVGs not used in production
- Theme toggle icons (sun/moon): must use `currentColor` — no hardcoded colors
- All SVGs must render correctly in both dark and light mode

---

### 2.9 Prettier + ESLint Setup

Add code formatting and linting tooling to the repo.

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
- No custom rules in v1.2 — defaults only
- Add `lint` script to `package.json`: `"lint": "next lint"`
- Add `format` script: `"format": "prettier --write ."`

Files to create:

- `.prettierrc`
- `.eslintrc.json` (if not already present)
- `.prettierignore` → ignore `node_modules`, `.next`, `public`

---

### 2.10 Prod Optimization

**Spec:**

- Confirm `next.config.js` has `images.unoptimized: false`
- Enable `compress: true` in next config
- Verify `"build"` script runs without warnings
- No `console.log` statements in production code

---

### 2.11 Clean Unused SVGs in `/public`

**Spec:**

- Audit all files in `/public`
- Delete any SVG not referenced in code (Vercel, Next.js defaults, etc.)
- Keep only: favicon files + any SVG actively used in components
- Document what was removed in the PR description

---

### 2.12 OG Image

Add a basic Open Graph image for link previews.

**Spec:**

- File: `/public/og-image.png`
- Size: `1200x630px`
- Design: dark background (`#0A1628`), white `WE ARE MOBI™` centered, tagline below in muted
- Reference in `app/layout.tsx`:

```tsx
openGraph: {
  title: 'We Are Mobi',
  description: 'AI-native software development from Costa Rica.',
  images: ['/og-image.png'],
}
```

- Static file — no dynamic OG in v1.2

---

### 2.13 README — Contributing URL

Confirm the contributing URL in README points to the org profile.

**Spec:**

- URL: `https://github.com/wearemobi`
- Verify it renders correctly on GitHub
- No other README changes in this spec

---

## 3. Definition of Done — v1.2

- [ ] `WE ARE MOBI™` renders correctly in both modes
- [ ] Logo icon is sharp square, larger size, both modes
- [ ] Chat input border visible in light mode
- [ ] Favicon is Mobi `M` icon — no Next.js/Vercel defaults
- [ ] Only `Syne` + `Inter` loaded via `next/font`
- [ ] No cyan visible anywhere in the UI
- [ ] All SVGs use `currentColor` or are black/white on-brand
- [ ] `.prettierrc` and `.eslintrc.json` present and working
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` passes with zero warnings
- [ ] No `console.log` in production code
- [ ] `/public` contains only referenced files
- [ ] OG image present and referenced in metadata
- [ ] README contributing URL points to `github.com/wearemobi`
- [ ] Zero console errors in production
- [ ] No regressions from v1.1

---

## 4. Out of Scope — v1.2

- ❌ AI integration
- ❌ New pages or sections
- ❌ Analytics
- ❌ Chat response logic
- ❌ Dynamic OG image
- ❌ Multi-language
