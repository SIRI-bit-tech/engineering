# RULES.md — VoltaEdge Engineering
# AI Developer Rules & Constraints
# Read this file before writing ANY code. Follow every rule without exception.

---

## 0. GOLDEN RULE
Always re-read `docs/PRD.md` before starting any new page, component, or section.
If anything in your output conflicts with the PRD, the PRD wins.

---

## 1. FRAMEWORK & VERSION

- Framework: **Next.js 16**, App Router only (`app/` directory)
- No Pages Router. No `getServerSideProps`. No `getStaticProps`.
- TypeScript strict mode — `"strict": true` in `tsconfig.json`
- Tailwind CSS v4
- Node: latest LTS

---

## 2. FOLDER STRUCTURE — NON-NEGOTIABLE

```
app/              → All routes (App Router)
components/       → All React components
  layout/         → Navbar, Footer, PageHero
  ui/             → Reusable primitives (Button, Card, Badge, etc.)
  sections/       → Page-specific sections grouped by page
  forms/          → Form components
hooks/            → Custom React hooks only
lib/              → Third-party setup (resend.ts, etc.)
constants/        → constants.ts ONLY — all static data lives here
types/            → global.d.ts ONLY — all TypeScript types live here
public/images/    → All static images
styles/           → globals.css only
docs/             → PRD.md, RULES.md — never import from here
```

Never create files outside this structure without asking first.

---

## 3. CONSTANTS — ALL CONTENT LIVES IN `constants/constants.ts`

- **Zero hardcoded strings in JSX or TSX files** — no exceptions
- Every piece of text (nav labels, headings, body copy, button labels, badge text, alt text, metadata) must come from `constants/constants.ts`
- Import what you need: `import { SERVICES, STATS } from '@/constants/constants'`
- If a constant doesn't exist yet, add it to `constants.ts` first, then use it

---

## 4. TYPES — ALL TYPES LIVE IN `types/global.d.ts`

- No inline type declarations anywhere in the codebase
- No `type Foo = ...` or `interface Foo {}` inside component files
- All types declared globally in `types/global.d.ts` — they are available everywhere without importing
- If a new type is needed, add it to `global.d.ts` first

---

## 5. COLORS — EXACT HEX CODES ONLY

```
#003B5C   → Deep Navy       — primary bg, navbar, footer, CTA sections
#005F8D   → Ocean Blue      — buttons, links, hover states, icons, borders
#1D1F21   → Dark Charcoal   → body text, dark section backgrounds
#E1F5FE   → Ice Blue        → light section backgrounds, card tints, badges
#FFFFFF   → White           → text on dark bg, card surfaces
```

**BANNED colors — never use these:**
- `#000000` — use `#1D1F21` instead
- Any grey (`#888`, `#999`, `#ccc`, `#f5f5f5`, `gray-*` Tailwind classes etc.)
- Any blue not in the palette (`blue-500`, `sky-400`, `indigo-*` etc.)
- Any other color not listed above

**Shadows:** `rgba(0,59,92,0.08)` default · `rgba(0,59,92,0.18)` hover · `rgba(0,95,141,0.30)` buttons
**Overlays:** `#003B5C` at various opacities — never black overlays

---

## 6. TYPOGRAPHY — EXACT FONTS ONLY

```
Cormorant Garamond 700   → Hero/display headings (H1 on hero sections)
Syne 600/700/800         → Section headings (H2, H3)
DM Sans 400/500          → Body paragraphs, nav links, UI text
Space Grotesk 500/600    → Badges, labels, button text, card titles (H4)
JetBrains Mono 400       → Stats, data, dates, read times, code
```

- Load all fonts via `next/font/google` in `app/layout.tsx` — zero external font requests
- Apply as CSS variables: `--font-display`, `--font-heading`, `--font-body`, `--font-accent`, `--font-mono`
- **Never** use system fonts, Arial, Helvetica, or any Tailwind default font classes like `font-sans`
- **Never** use Inter, Roboto, Poppins, or any font not in the list above

---

## 7. IMAGES — STRICT RULES

- **All images via `next/image`** — zero raw `<img>` tags anywhere
- **NO human photography** — no people, no faces, no hands, no bodies
- Allowed image subjects: aerial solar farms, power substations, transmission towers, wind turbines, circuit boards, electrical diagrams, industrial facilities (exterior/aerial), engineering dashboards, abstract electrical SVG patterns, architectural renders
- Every `next/image` must have a descriptive keyword-rich `alt` prop — never `alt=""` or `alt="image"`
- Use `fill` prop inside a positioned parent for full-bleed images
- All images stored in `public/images/` with subfolders: `hero/`, `projects/`, `blog/`, `team/`, `partners/`
- **Team/author avatars:** gradient circles `#003B5C → #005F8D` with white initials — never placeholder silhouettes or grey circles

---

## 8. COMPONENTS

- `"use client"` — only on components that use: `useState`, `useEffect`, `useRef`, browser APIs, GSAP, Lenis, event handlers
- Server components by default — do not add `"use client"` unless necessary
- All reusable primitives go in `components/ui/` — never duplicate a Button or Card component
- Page-specific sections go in `components/sections/[pagename]/`
- All internal navigation uses `next/link` — zero raw `<a>` tags for internal routes
- No component file should exceed 200 lines — split into smaller components if needed

---

## 9. ANIMATIONS — GSAP + LENIS

**Lenis:**
- Initialize once and only once in `app/layout.tsx` inside a `<LenisProvider>` client component
- Sync with GSAP: `gsap.ticker.add((time) => lenis.raf(time * 1000))`
- Set `gsap.ticker.lagSmoothing(0)`
- Never initialize Lenis inside individual page or section components

**GSAP:**
- Always use `useGSAP()` from `@gsap/react` — never raw `useEffect` for GSAP
- Always return a cleanup function inside `useGSAP`
- Register plugins at the top of every file that uses them: `gsap.registerPlugin(ScrollTrigger, SplitText)`
- Add `will-change: transform` on elements that animate position/scale
- Never animate layout properties (`width`, `height`, `padding`, `margin`) — only `transform` and `opacity`

**Required animations:**
- Hero headline: SplitText character stagger reveal, 0.04s delay per char
- Section headings: clip-path reveal left → right on ScrollTrigger
- Cards: staggered `y: 40 → 0` + `opacity: 0 → 1` on scroll enter, 0.1s stagger
- Stats: animated number counter 0 → final value, 2s duration, ScrollTrigger
- Navbar: GSAP timeline hide on scroll down, show on scroll up
- Partner logo ticker: infinite GSAP loop, no pause
- Page transitions: opacity fade on route change

---

## 10. HOVER EFFECTS — REQUIRED ON ALL INTERACTIVE ELEMENTS

```
Service cards    → translateY(-8px), left border 4px #005F8D, shadow deepens
Project cards    → dark overlay slides up from bottom with description + CTA
Team cards       → bio overlay fades in, social icons slide up
Blog cards       → image scale(1.04), card shadow deepens
Buttons          → background #003B5C → #005F8D, scale(1.03)
Nav links        → underline pseudo-element slides in from left
Images           → scale(1.04) inside overflow:hidden container
FAQ rows         → GSAP height expansion, smooth
Core value cards → flip: front icon/title, back full description
```

All hover transitions: `transition: all 0.3s ease` unless GSAP-controlled.

---

## 11. FORMS & CONTACT

- Contact form submission goes to `app/api/contact/route.ts`
- Use **Resend** for email delivery — import from `lib/resend.ts`
- API key from `process.env.RESEND_API_KEY` — never hardcoded
- Form must show: loading spinner during submit → success toast → error toast
- Success message: *"Your engineering enquiry has been received. Our team will respond within 24 hours."*
- All form field types must match the `ContactFormData` type in `global.d.ts`
- File upload on quote form: accept `.pdf`, `.dwg`, `.xlsx` only

---

## 12. SEO — EVERY PAGE

Every `app/**/page.tsx` must export a `metadata` object:

```ts
export const metadata: Metadata = {
  title: 'Page Title | VoltaEdge Engineering',
  description: 'Unique SEO description, 150–160 characters, keyword-rich',
  openGraph: { title: '...', description: '...', images: ['...'] },
  twitter: { card: 'summary_large_image', title: '...', description: '...' },
  keywords: ['electrical engineering Nigeria', 'solar energy installation', ...],
}
```

- `app/sitemap.ts` — generate sitemap for all static + dynamic routes
- `app/robots.ts` — generate robots.txt
- JSON-LD structured data on: Home (Organization), Services (Service), Projects (CreativeWork), Blog (Article)
- All copy must use primary keywords: *electrical engineering, renewable energy, solar power installation, power distribution, industrial automation, energy audit, EV charging infrastructure*

---

## 13. RESPONSIVENESS

- Mobile-first always — write mobile styles first, scale up with `md:` and `lg:`
- Breakpoints: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px
- All grids: 1-column mobile → 2-column tablet → 3 or 4-column desktop
- All font sizes reduce ~30% on mobile
- All section padding: 120px desktop → 80px tablet → 60px mobile
- All CTAs stack vertically on mobile
- Carousels: touch/drag enabled, keyboard accessible
- Navbar: hamburger on mobile → GSAP full-screen overlay menu

---

## 14. PERFORMANCE

- `next/image` with correct `width`, `height` or `fill` — never unsized images
- Lazy load all below-fold images: `loading="lazy"`
- Above-fold hero image: `priority` prop on `next/image`
- Dynamic imports for heavy components: `const Carousel = dynamic(() => import(...))`
- No unused imports — clean up after every file
- `next/font` for all fonts — zero Google Fonts CDN calls

---

## 15. CODE QUALITY

- No `any` type — ever. Use proper types from `global.d.ts`
- No `console.log` in production code
- No commented-out code blocks left in files
- No TODO comments left unresolved
- Concise variable names: `el` not `element`, `e` not `event`, `i` not `index`
- Destructure props always: `({ title, description }: ServiceCardProps)` not `(props)`
- Arrow functions for all components
- Named exports for components, default export for pages

---

## 16. ENVIRONMENT VARIABLES

```env
RESEND_API_KEY=           ← server-side only, never expose to client
NEXT_PUBLIC_SITE_URL=     ← safe for client use
```

Never use `process.env.*` in client components — only in server components and API routes.
`NEXT_PUBLIC_*` variables are the only ones safe in client components.

---

## 17. WHAT TO DO WHEN STUCK

1. Re-read `docs/PRD.md` for the relevant page or section
2. Check `constants/constants.ts` for the data you need
3. Check `types/global.d.ts` for the type you need
4. If a design decision isn't in the PRD, default to: navy `#003B5C` background, white text, Ocean Blue `#005F8D` accents
5. If an animation detail isn't specified, use: `opacity 0→1` + `y 40→0`, 0.6s ease, ScrollTrigger

---

## 18. NEVER DO THESE

- ❌ Hardcode any string in JSX
- ❌ Use `<img>` tags
- ❌ Use human photos or silhouette avatars
- ❌ Add `"use client"` without a real reason
- ❌ Use colors outside the defined palette
- ❌ Use fonts not in the typography list
- ❌ Initialize Lenis more than once
- ❌ Use raw `useEffect` for GSAP (use `useGSAP` instead)
- ❌ Leave placeholder text or grey boxes
- ❌ Skip the `metadata` export on any page
- ❌ Use the Pages Router (`pages/` directory)
- ❌ Use `any` as a TypeScript type
- ❌ Write types inside component files
- ❌ Write content/copy inside component files
- ❌ Use `<a>` tags for internal links (use `next/link`)
- ❌ Expose `RESEND_API_KEY` to the client