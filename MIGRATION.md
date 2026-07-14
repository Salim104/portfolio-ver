# Portfolio Migration — Vite/React → Next.js (App Router)

**Source:** `C:\coding projetcs\portfolio\portfolio` (React 19 + Vite 7 + Tailwind 3) — left untouched
**Target:** this repo (Next.js 16, App Router, JSX, Tailwind v3)

## Decisions
- Destination: current folder (`portfolio-ver`)
- Router/lang: **App Router + JSX**
- Tailwind: **v3** (classic `tailwind.config.js` + PostCSS)
- Original repo is copied-forward, never modified.

## Route map
| Old (react-router) | New (App Router) |
|---|---|
| `/` → `App.jsx` | `app/page.js` |
| `/dental` → `pages/Dental.jsx` | `app/dental/page.js` |

## Progress — ALL COMPLETE ✅
- [x] **Phase 1** — Scaffold Next.js + deps (framer-motion, motion, lucide-react, react-icons, react-typed; Tailwind v3)
- [x] **Phase 2** — Assets → root `assets/` + `public/images/`; Tailwind v3 config; `app/globals.css`; fonts via `next/font`
- [x] **Phase 3** — `app/layout.js` (Inter/Outfit via next/font) + `app/page.js` + `app/dental/page.js`
- [x] **Phase 4** — Components migrated; `"use client"` added; `react-router` → `next/link`
- [x] **Phase 5** — `next build` passes (both routes static); runtime smoke test 200 OK; images resolve

## Key changes made
- **Routing:** `BrowserRouter/Routes` removed; file-based routing. `react-router` `<Link to>` → `next/link` `<Link href>` in `DentalHeader.jsx`, `DentalAbout.jsx`.
- **Client boundaries — `"use client"` added to:** `Navbar`, `Hero`, `Background`, `ClientWork`, `FeaturedProject`, `Aboutme`, `dental/DentalFinalCta` (hooks / framer-motion / react-typed / event handlers). Dental section components stay server components.
- **Images → `next/image`:** all raster (PNG) images converted to `next/image` for automatic optimization + lazy-loading, using the `fill` prop inside sized/positioned wrappers (`Hero`, `FeaturedProject`, `ClientWork`, `DentalAbout`, `Project`) and static-import responsive style (`Aboutme`). Each has a `sizes` hint; the Hero avatar uses `priority` (above-the-fold LCP). Verified serving via `/_next/image` with responsive srcsets.
  - **SVG logos kept as plain `<img>`** (`Navbar`, `DentalHeader`): Next does **not** optimize SVG (auto-applies `unoptimized` for `.svg`), so `next/image` adds no benefit there. Static imports return an object, so these use `src={logo.src}`.
- **Fonts:** Google Fonts `<link>` → `next/font/google` (Inter + Outfit) exposed as `--font-inter` / `--font-outfit`, wired to Tailwind `fontFamily.body` / `fontFamily.heading`.
- **Title:** Dental `document.title` `useEffect` → per-route `metadata` export.
- **Config:** `vite.config` / `index.html` / `vercel.json` / `_redirects` dropped; Next's `next.config.mjs` + `postcss.config.mjs` + `tailwind.config.js` used. Dropped unused `hero-pattern` Tailwind bg.
- **Dropped deps:** `react-router-dom`, Vite plugins/eslint stack.

## Notes
- `Aboutme.jsx` is copied but not rendered by any route (matches source — `App.jsx` imported but never rendered it).
- Run: `npm run dev` (http://localhost:3000), `npm run build`, `npm run start`.
