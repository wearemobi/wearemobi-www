# SPEC-v1.1.md — wearemobi-www
## We Are Mobi · Website v1.1 — Polish & Fixes
> Stack: Next.js 16 App Router · Tailwind CSS v4
> Methodology: Spec Driven Development — no code without an approved spec
> Builds on: docs/SPEC-initial.md (v1.0)

---

## 1. Scope

This SPEC covers fixes and polish items identified after merging v1.0.
No new features. No new pages.

---

## 2. Changes

### 2.1 README — Restore & Improve

The README was overwritten during the v1.0 merge. Restore it as a proper
developer doc.

**Required sections:**
- Project name + one-line description
- Tech stack (Next.js 16, Tailwind v4, Cloudflare Pages)
- Local setup:
```
git clone https://github.com/wearemobi/wearemobi-www
cd wearemobi-www
npm install
npm run dev
```
- Branch convention reference → `docs/git-convention.md`
- SPEC reference → `docs/SPEC-initial.md`

---

### 2.2 Logo — Integrate SVG

Replace the placeholder `[ m ]` text with a proper inline SVG logo.

**Spec:**
- Black background box, rounded corners (`rounded-lg`)
- White `M` lettermark, bold, centered
- Size: `48x48px` desktop · `40x40px` mobile
- Inline SVG — no external file, no `<img>` tag
- Must match the GitHub org profile avatar style

---

### 2.3 Footer — Remove "Costa Rica" reference

Current: `Costa Rica 🇨🇷 · wearemobi.com`
New: `Copyright (c) 2025 We Are Mobi™`

Rationale: global-first positioning, no geographic anchoring in v1.

---

### 2.4 Remove Vercel References

- Remove any Vercel SVG assets from `/public` not used in production
- Remove any Vercel-related comments or links in code
- Confirm no Vercel deploy config files exist in repo

Files to audit:
- `public/vercel.svg` → delete
- Any `vercel.json` → delete if present
- Any `<!-- Deploy on Vercel -->` comments → remove

---

## 3. Definition of Done — v1.1

- [X] README renders correctly on GitHub with all sections
- [X] Logo SVG displays correctly in dark and light mode
- [X] Footer shows `Copyright (c) 2026 We Are Mobi™` only
- [X] No Vercel assets or references in repo
- [X] Zero console errors
- [X] No regressions from v1.0

---

## 4. Out of Scope — v1.1

- ❌ Visual redesign
- ❌ New components
- ❌ AI integration
- ❌ Analytics
- ❌ OG image
