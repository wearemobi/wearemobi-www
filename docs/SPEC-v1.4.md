# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
Optimize the user interface for mobile devices and refine the codebase performance following the v1.3 branding update. The goal is to ensure a seamless "mobile-first" experience (specifically focusing on the Hero section and the contact Input) and clean up the technical implementation before the March 24th deadline.

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [ ] Target Directory: `docs/spec/`
- [ ] Target Filename: `docs/spec/v1.4.md`

## Acceptance Criteria (Definition of Done)
- [ ] **Mobile-First Audit:** The grid logo and "M.O.B.I.™" text scale correctly without overflows on viewports ranging from 360px to 430px.
- [ ] **Input Fix:** The "Need an MVP? Let's talk" field does not trigger auto-zoom on iOS (font-size >= 16px) and maintains proper touch targets.
- [ ] **SVG Performance:** All .svg assets are minified and paths are verified to prevent Layout Shifts (CLS).
- [ ] **Tailwind v4 Clean-up:** Removal of redundant classes and transition to native CSS variables in `app.css` to improve maintainability.
- [ ] **Review:** All stakeholders (or R&D) have reviewed the draft.
- [ ] **Merge:** The document is merged into the `main` branch under the `docs/spec/` folder.

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
