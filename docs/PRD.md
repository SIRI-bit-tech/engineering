# PRD: VoltaEdge Engineering — Company Website

## Project Overview
Build a full **company website** for **VoltaEdge Engineering**, a professional electrical and renewable energy engineering firm. The site must be visually stunning, deeply animated, SEO-optimized, and highly performant. It is a **static/SSG marketing site** with no custom backend — contact form emails are delivered via **Resend**. Every word of copy must be an **SEO-rich keyword phrase** targeting the electrical and renewable energy engineering industry.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 16 (App Router)** | Framework — use `app/` directory exclusively |
| **TypeScript** | Strict mode enabled throughout |
| **Tailwind CSS v4** | Utility-first styling |
| **GSAP + @gsap/react** | Scroll animations, text reveals, counters, timelines |
| **Lenis** | Smooth inertia scrolling synced with GSAP ScrollTrigger |
| **Embla Carousel** | Touch-friendly carousels |
| **Resend** | Transactional email for contact form |
| **next/image** | All images — zero raw `<img>` tags |
| **next/font** | Self-hosted fonts — zero external requests |

---

## Typography (Premium Fonts)

Use **next/font/google** to self-host these — no CDN calls:

| Role | Font | Weight |
|------|------|--------|
| Display / Hero Headings | **Cormorant Garamond** | 600, 700 |
| Section Headings | **Syne** | 600, 700, 800 |
| Body / UI Text | **DM Sans** | 400, 500 |
| Accent / Labels / Badges | **Space Grotesk** | 500, 600 |
| Monospace / Data | **JetBrains Mono** | 400 |

Apply globally via CSS variables: `--font-display`, `--font-heading`, `--font-body`, `--font-accent`, `--font-mono`.

---

## Brand

- **Company Name:** VoltaEdge Engineering
- **Tagline:** *"Powering Tomorrow, Today."*
- **SEO Meta Description:** *"VoltaEdge Engineering delivers world-class electrical engineering, solar energy solutions, power distribution, and industrial automation services across Africa and beyond."*
- **Colors:**
  - Deep Navy `#003B5C` — primary backgrounds, navbar
  - Ocean Blue `#005F8D` — interactive elements, hover, borders
  - Dark Charcoal `#1D1F21` — body text, dark sections
  - Ice Blue `#E1F5FE` — light backgrounds, card tints, section dividers
  - White `#FFFFFF` — text on dark backgrounds
- **Tone:** Authoritative, trustworthy, innovative, globally competitive

---

## SEO Copy Rules

Every heading, paragraph, label, button, and alt text must:
- Use primary keywords: *electrical engineering services, renewable energy solutions, solar power installation, power distribution systems, industrial automation, energy audit consulting, EV charging infrastructure, sustainable energy engineering*
- Use long-tail keywords in section bodies: *"certified electrical engineers in Nigeria," "commercial solar panel installation Africa," "industrial power systems design firm"*
- All `<title>` and `<meta description>` tags must be unique per page
- All `next/image` `alt` props must be descriptive keyword phrases

---

## File & Folder Structure

```
voltaedge/
├── app/
│   ├── layout.tsx                        # Root layout: Lenis + GSAP + fonts + metadata
│   ├── page.tsx                          # Home
│   ├── about/
│   │   ├── page.tsx                      # About overview
│   │   ├── our-story/page.tsx            # Deep-dive company history
│   │   ├── mission-vision/page.tsx       # Mission, vision, values
│   │   └── team/page.tsx                 # Full team directory
│   ├── services/
│   │   ├── page.tsx                      # Services overview
│   │   ├── electrical-design/page.tsx
│   │   ├── solar-renewable-energy/page.tsx
│   │   ├── power-distribution/page.tsx
│   │   ├── energy-audit/page.tsx
│   │   ├── industrial-automation/page.tsx
│   │   └── ev-charging/page.tsx
│   ├── projects/
│   │   ├── page.tsx                      # All projects + filter
│   │   └── [slug]/page.tsx              # Individual project detail page
│   ├── blog/
│   │   ├── page.tsx                      # Blog listing
│   │   └── [slug]/page.tsx              # Individual blog post
│   ├── contact/
│   │   ├── page.tsx                      # Main contact page
│   │   └── get-a-quote/page.tsx          # Dedicated quote request form
│   └── api/
│       └── contact/route.ts              # Resend email API route
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageHero.tsx                  # Reusable hero banner for inner pages
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Divider.tsx
│   │   └── AnimatedCounter.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ServicesSnapshot.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   ├── TeamSnapshot.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   └── HomeCTA.tsx
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── StorySection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   └── CertificationsSection.tsx
│   │   ├── services/
│   │   │   ├── ServicesHero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   └── ServiceCTA.tsx
│   │   ├── projects/
│   │   │   ├── ProjectsHero.tsx
│   │   │   ├── ProjectsFilter.tsx
│   │   │   ├── ProjectsGrid.tsx
│   │   │   └── ProjectDetail.tsx
│   │   └── contact/
│   │       ├── ContactHero.tsx
│   │       ├── ContactInfo.tsx
│   │       └── QuoteForm.tsx
│   └── forms/
│       └── ContactForm.tsx
├── hooks/
│   ├── useGSAP.ts
│   ├── useLenis.ts
│   └── useScrollProgress.ts
├── lib/
│   └── resend.ts
├── constants/
│   └── constants.ts
├── types/
│   └── global.d.ts
├── public/
│   └── images/
│       ├── hero/
│       ├── projects/
│       ├── team/
│       ├── blog/
│       └── partners/
└── styles/
    └── globals.css
```

---

## `constants/constants.ts`

All static content lives here. Zero hardcoded strings in components.

```ts
export const SITE_NAME = "VoltaEdge Engineering"
export const SITE_TAGLINE = "Powering Tomorrow, Today."
export const SITE_DESCRIPTION = "VoltaEdge Engineering delivers world-class electrical engineering, solar energy solutions, power distribution, and industrial automation services."
export const SITE_EMAIL = "info@voltaedge.com"
export const SITE_PHONE = "+234 800 123 4567"
export const SITE_ADDRESS = "12 Power Avenue, Victoria Island, Lagos, Nigeria"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Our Team", href: "/about/team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Electrical System Design", href: "/services/electrical-design" },
      { label: "Solar & Renewable Energy", href: "/services/solar-renewable-energy" },
      { label: "Power Distribution", href: "/services/power-distribution" },
      { label: "Energy Audit & Consulting", href: "/services/energy-audit" },
      { label: "Industrial Automation", href: "/services/industrial-automation" },
      { label: "EV Charging Infrastructure", href: "/services/ev-charging" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const SERVICES: ServiceItem[] = [ /* 6 full service objects */ ]
export const PROJECTS: ProjectItem[] = [ /* 8+ project objects with slug */ ]
export const TEAM: TeamMember[] = [ /* 8 team members */ ]
export const TESTIMONIALS: Testimonial[] = [ /* 6 testimonials */ ]
export const BLOG_POSTS: BlogPost[] = [ /* 6 blog posts with slug */ ]
export const STATS: StatItem[] = [
  { value: "150+", label: "Renewable Energy Projects Delivered" },
  { value: "20+", label: "Years of Electrical Engineering Excellence" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "40+", label: "Certified Power Engineers" },
]
export const PROCESS_STEPS: ProcessStep[] = [ /* 5 steps */ ]
export const PARTNERS: Partner[] = [ /* 10 partner logos */ ]
export const CERTIFICATIONS: Certification[] = [ /* ISO, COREN, etc. */ ]
export const SOCIAL_LINKS: SocialLink[] = [ /* LinkedIn, X, Facebook, Instagram */ ]
export const CORE_VALUES: CoreValue[] = [ /* 6 values */ ]
export const COMPANY_MILESTONES: Milestone[] = [ /* timeline data */ ]
```

---

## `types/global.d.ts`

```ts
declare global {

  type NavChild = { label: string; href: string }

  type NavLink = {
    label: string
    href: string
    children?: NavChild[]
  }

  type ServiceItem = {
    id: string
    slug: string
    icon: string
    title: string
    shortDescription: string
    fullDescription: string
    features: string[]
    benefits: string[]
    heroImage: string
    gallery: string[]
    metaTitle: string
    metaDescription: string
  }

  type ProjectItem = {
    id: string
    slug: string
    title: string
    category: "Solar" | "Industrial" | "Transmission" | "Automation" | "EV" | "Audit"
    client: string
    location: string
    year: number
    duration: string
    value: string
    image: string
    gallery: string[]
    description: string
    challenge: string
    solution: string
    outcome: string
    tags: string[]
    metaTitle: string
    metaDescription: string
  }

  type TeamMember = {
    id: string
    name: string
    role: string
    department: string
    image: string
    bio: string
    qualifications: string[]
    socials: { platform: string; url: string }[]
  }

  type Testimonial = {
    id: string
    name: string
    role: string
    company: string
    avatar: string
    quote: string
    rating: number
    projectRef?: string
  }

  type BlogPost = {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    readTime: string
    category: string
    tags: string[]
    author: string
    authorAvatar: string
    metaTitle: string
    metaDescription: string
  }

  type StatItem = { value: string; label: string }

  type ProcessStep = {
    step: number
    title: string
    description: string
    icon: string
  }

  type Partner = { name: string; logo: string; website: string }

  type Certification = { name: string; logo: string; year: string }

  type SocialLink = { platform: string; href: string; icon: string }

  type CoreValue = { title: string; description: string; icon: string }

  type Milestone = { year: string; title: string; description: string }

  type ContactFormData = {
    name: string
    email: string
    phone?: string
    company?: string
    subject: string
    service?: string
    message: string
    budget?: string
  }
}

export {}
```

---

## Pages — Full Detailed Specifications

---

### 1. Home (`/`) — Rich & Dense

**Every section links to a deeper internal page.**

#### Section 1 — Hero
- Full-viewport height, cinematic background image (solar farm / transmission grid).
- **GSAP SplitText** character-by-character reveal on: *"Nigeria's Leading Electrical & Renewable Energy Engineering Firm"*
- Sub-headline fade-in: *"Delivering certified solar power installation, industrial electrical design, and sustainable energy infrastructure across West Africa."*
- Two CTAs: `Explore Our Services →` (links `/services`) + `View Energy Projects →` (links `/projects`)
- Lenis smooth-scroll arrow pulsing at bottom.
- Overlay gradient: `#003B5C` at 60% opacity blended bottom-up.
- Small trust badge strip at bottom of hero: ISO Certified · COREN Registered · 20+ Years Experience

#### Section 2 — Trust Bar / Client Logos
- Auto-scrolling logo ticker (GSAP infinite loop) of 10 client/partner logos.
- Subtext: *"Trusted by leading corporations, government agencies, and industrial operators."*

#### Section 3 — Services Snapshot
- Heading: *"Comprehensive Electrical & Renewable Energy Engineering Services"*
- 6 cards in a 3×2 grid. Each card: icon (SVG), service title (keyword-rich), 2-line description, `Learn More →` link to individual service page.
- Hover: card lifts `translateY(-8px)`, left border glows `#005F8D`, icon animates.
- Below grid: `View All Engineering Services →` button linking to `/services`.

#### Section 4 — Featured Projects Carousel
- Heading: *"Award-Winning Electrical & Solar Energy Projects"*
- Embla Carousel, 3 visible cards on desktop, 1 on mobile.
- Each card: full-bleed project image, category badge, project title, location + year, short outcome stat (e.g. *"2.4MW Solar Capacity Installed"*).
- Hover: dark overlay slides up with description + `View Full Case Study →` linking to `/projects/[slug]`.
- CTA below: `Explore All Engineering Projects →` → `/projects`.

#### Section 5 — Why Choose VoltaEdge
- Two-column: Left → large image (engineers on-site). Right → content.
- Heading: *"Why Industry Leaders Choose VoltaEdge for Electrical Engineering"*
- 5 bullet rows, each with icon + bold keyword title + 1-line description:
  - ✓ COREN-Certified Electrical Engineers
  - ✓ End-to-End Renewable Energy Project Management
  - ✓ ISO 9001 Quality-Assured Processes
  - ✓ On-Time Delivery with 98% Client Satisfaction
  - ✓ 24/7 Post-Installation Technical Support
- GSAP staggered fade-up on each row.
- CTA: `Meet Our Engineering Team →` → `/about/team`

#### Section 6 — Animated Stats
- 4 stats: animated number counters trigger on scroll.
- Background: dark `#1D1F21` with subtle grid texture.
- Stats: *150+ Projects · 20+ Years · 98% Satisfaction · 40+ Engineers*

#### Section 7 — Our Engineering Process
- Heading: *"Our Proven 5-Step Electrical & Energy Project Delivery Process"*
- Horizontal scrolling step cards (GSAP horizontal scroll on desktop, vertical stack on mobile).
- Steps: Consultation → Site Assessment → Engineering Design → Installation → Testing & Handover
- CTA: `Request a Free Engineering Consultation →` → `/contact/get-a-quote`

#### Section 8 — Testimonials
- Heading: *"What Our Clients Say About VoltaEdge Engineering"*
- Auto-playing Embla carousel. Each slide: large quote mark, testimonial text, star rating, avatar + name + role + company.
- Controls: prev/next arrows + dot indicators.

#### Section 9 — Team Snapshot
- Heading: *"Meet Our Certified Electrical & Energy Engineering Experts"*
- 4 team cards in a row: photo, name, role badge.
- Hover: overlay slides up with short bio + LinkedIn icon.
- CTA: `View Full Engineering Team →` → `/about/team`

#### Section 10 — Latest From Our Energy Blog
- Heading: *"Insights on Electrical Engineering & Renewable Energy Trends"*
- 3 blog cards: image, category badge (Space Grotesk font), date, title, 2-line excerpt, `Read Article →`.
- CTA: `Visit the VoltaEdge Engineering Blog →` → `/blog`

#### Section 11 — Partners & Certifications
- Two rows: top = partner logos (grid). Bottom = certification badges (ISO, COREN, etc.).
- Heading: *"Internationally Certified & Globally Partnered"*

#### Section 12 — CTA Banner
- Full-width, background `#003B5C`, large Cormorant Garamond heading.
- *"Ready to Power Your Next Electrical or Solar Energy Project?"*
- Sub-copy: *"Get a free engineering consultation and project quote from Nigeria's most trusted power and energy firm."*
- Two buttons: `Get a Free Quote →` (`/contact/get-a-quote`) + `Call Us Now →` (tel link)

---

### 2. About Pages

#### `/about` — About Overview
- Hero with team photo background + breadcrumb.
- 3 summary cards linking to sub-pages: Our Story, Mission & Vision, Meet the Team.
- Company overview paragraph (SEO-rich, 150+ words).
- Mini stats strip.
- Quick certifications row.
- CTA → `/contact`

#### `/about/our-story`
- Page Hero.
- Long-form two-column story section (image left, text right) — 3–4 paragraphs, SEO copy.
- **Interactive Timeline** — GSAP horizontal or vertical animated milestone timeline from founding year to present. Each node: year, title, 2-line description.
- *"From a small Lagos electrical consultancy to West Africa's foremost renewable energy engineering firm."*
- CTA → `/about/team`

#### `/about/mission-vision`
- Page Hero.
- Mission card + Vision card (full-width, alternating layout).
- Core Values grid — 6 cards, each with icon, bold title, description. Hover: flip card (front = title/icon, back = full description).
- Quality Policy section.
- CTA → `/services`

#### `/about/team`
- Page Hero.
- Department filter tabs: All · Engineering · Management · Operations · R&D
- Full team grid: photo, name, role, department badge, qualifications.
- Hover: overlay with bio + social icons.
- CTA → `/contact`

---

### 3. Services Pages

#### `/services` — Services Overview
- Hero: *"Full-Spectrum Electrical Engineering & Renewable Energy Services"*
- Intro paragraph (SEO-rich).
- 6 large service cards (icon, title, description, feature list bullets, `Explore Service →` linking to individual page).
- Process section (5-step).
- Industries Served section: Oil & Gas · Manufacturing · Real Estate · Government · Telecoms · Agriculture — each with icon + 2-line description.
- Technology & tools section (badges/logos: AutoCAD, ETAP, PVsyst, etc.).
- CTA → `/contact/get-a-quote`

#### `/services/[service-slug]` — Individual Service Pages (×6)
Each of the 6 service detail pages must include:
1. **Full-width Hero** — service-specific background image, h1 with exact service keyword, breadcrumb.
2. **Overview** — 200+ word SEO description with primary + LSI keywords.
3. **Key Features** — 6 icon + title + description cards.
4. **Benefits** — 2-column alternating image/text sections (3 benefit pairs).
5. **Industries** — which sectors this service applies to.
6. **Related Projects** — 3 cards linking to `/projects/[slug]`.
7. **FAQ Accordion** — 5 SEO-targeted questions with GSAP height-animated answers.
8. **CTA** → `/contact/get-a-quote`

---

### 4. Projects Pages

#### `/projects` — Projects Listing
- Hero: *"Electrical Engineering & Renewable Energy Project Portfolio"*
- **Filter bar**: All · Solar Energy · Industrial Electrical · Power Transmission · Automation · EV Infrastructure · Energy Audit
- Clicking a filter smoothly transitions the grid with GSAP opacity + y-axis animation.
- **Projects Grid**: uniform 3-column grid. Each card:
  - Top: full-bleed image in `overflow-hidden` container. Hover: `scale(1.05)` zoom.
  - Body: category badge, project title, location + year, value badge, 2-line description.
  - Hover: overlay with `View Case Study →` button.
- Pagination or "Load More Projects" button.
- Stats strip: *"150+ Projects · 12 Countries · 500MW+ Capacity Installed"*
- CTA → `/contact/get-a-quote`

#### `/projects/[slug]` — Project Detail Page
Each project page includes:
1. **Full-width hero** with project image, title, category badge, client + location.
2. **Project Stats Bar** — 4 cards: Client · Duration · Year · Project Value.
3. **Overview** — SEO paragraph describing the project.
4. **The Challenge** — problem statement section.
5. **Our Solution** — how VoltaEdge solved it, with bullet list.
6. **The Outcome** — key results with bold stats.
7. **Image Gallery** — GSAP-animated masonry grid of project photos.
8. **Related Projects** — 3 cards.
9. **CTA** → `/contact/get-a-quote`

---

### 5. Blog Pages

#### `/blog` — Blog Listing
- Hero: *"Electrical Engineering & Renewable Energy Insights, News & Guides"*
- **Featured Post** — large card: full-width image, category badge, title, excerpt (3 lines), author avatar + name + date + read time, `Read Full Article →`.
- **Category Filter Tabs**: All · Solar Energy · Power Systems · Automation · Industry News · Guides
- **Blog Grid**: 3-column. Each card: image (hover zoom), badge, title, excerpt, author + date + read time.
- **Sidebar (desktop)**:
  - Popular Tags cloud (Space Grotesk badges).
  - Recent Posts list.
  - Newsletter subscribe input: *"Get weekly electrical engineering insights."*
- Pagination.

#### `/blog/[slug]` — Individual Blog Post
1. **Full-width hero** with post image + title overlay.
2. **Article meta bar**: author avatar, name, date, read time, category, share buttons (LinkedIn, X, WhatsApp).
3. **Article body** — long-form SEO content with proper H2/H3 heading hierarchy, inline images, pull quotes.
4. **Tags** strip.
5. **Author Bio Card** — avatar, name, role, short bio, LinkedIn link.
6. **Related Articles** — 3 cards.
7. **Comments CTA** or **Newsletter signup**.

---

### 6. Contact Pages

#### `/contact` — Main Contact
- Hero: *"Contact VoltaEdge Engineering — Get Expert Electrical & Energy Advice"*
- **Two-column layout:**
  - **Left**: Contact info cards (Address, Phone, Email, Office Hours) + embedded Google Map.
  - **Right**: Full contact form (see below).
- **Contact Form Fields**: Full Name · Email · Phone · Company Name · Subject · Service Interest (dropdown) · Message (textarea) · Submit.
- Submit: shows spinner, then success toast (*"Your electrical engineering enquiry has been received. We'll respond within 24 hours."*) or error toast.
- Below: FAQ strip (3 quick questions about working with VoltaEdge).

#### `/contact/get-a-quote` — Quote Request Page
- Page Hero: *"Request a Free Electrical Engineering & Renewable Energy Project Quote"*
- **Detailed Quote Form Fields**:
  - Full Name · Company Name · Email · Phone
  - Service Required (multi-select checkboxes)
  - Project Location · Estimated Budget (dropdown ranges) · Project Timeline (dropdown)
  - Project Description (large textarea)
  - How did you hear about us? (dropdown)
  - File Upload (plans/specs — accept .pdf, .dwg, .xlsx)
  - Submit button with loading state
- Right sidebar: Why request a quote? (5 bullet benefits) + contact info card.
- After submission: animated success screen with next steps.

---

## Resend Integration

### `app/api/contact/route.ts`
```ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body: ContactFormData = await req.json()
  const { name, email, phone, company, subject, service, message, budget } = body

  try {
    await resend.emails.send({
      from: 'VoltaEdge Engineering <no-reply@voltaedge.com>',
      to: 'info@voltaedge.com',
      replyTo: email,
      subject: `New Enquiry: ${subject} — ${name}`,
      html: `
        <h2 style="color:#003B5C;">New Engineering Enquiry — VoltaEdge</h2>
        <table>
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone ?? 'N/A'}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company ?? 'N/A'}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service ?? 'N/A'}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget ?? 'N/A'}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
```

### `.env.local`
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://voltaedge.com
```

---

## Animation System (GSAP + Lenis)

### Lenis Setup
- Wrap `{children}` in a `<LenisProvider>` client component in `app/layout.tsx`.
- Sync Lenis RAF with GSAP ticker: `gsap.ticker.add((time) => lenis.raf(time * 1000))`.
- Set `gsap.ticker.lagSmoothing(0)`.

### GSAP Animations Required
| Element | Animation |
|---|---|
| Hero headline | SplitText char-by-char stagger, 0.04s delay each |
| Hero sub-copy | Fade up, 0.6s delay after headline |
| Navbar | Hide on scroll down, reveal on scroll up (GSAP timeline) |
| Section headings | Clip-path reveal left → right on ScrollTrigger |
| Cards | Staggered `y: 40 → 0` + `opacity: 0 → 1` on scroll enter |
| Stat counters | Count from 0 to value over 2s on ScrollTrigger |
| Process steps | Horizontal scroll pinned section on desktop |
| Timeline (Our Story) | Draw-line SVG + node pop on scroll |
| Images | `scale(1.05)` parallax on scroll |
| Page transitions | Clip-path wipe or opacity fade between routes |
| Partner ticker | Infinite GSAP loop (no pause on hover) |

---

## Hover Effects

| Component | Effect |
|---|---|
| Service cards | `translateY(-8px)` + left border `#005F8D` glow + icon rotate 10deg |
| Project cards | Dark gradient overlay slides up, CTA button scales in |
| Team cards | Bio overlay fades in, social icons slide up from bottom |
| Blog cards | Image `scale(1.04)` + card shadow deepens |
| Buttons | Background `#003B5C → #005F8D`, `scale(1.03)`, shadow |
| Nav links | Underline pseudo-element slides in from left |
| FAQ rows | Smooth GSAP height expansion |
| Core Value cards | Flip card: front = icon/title, back = full description |

---

## Navbar

- **Transparent** over hero → **solid `#003B5C`** on scroll (GSAP).
- Logo (SVG wordmark) on left.
- Nav links with **mega-dropdown** for Services and About (GSAP fade + translate on hover).
- Dropdown items must link to individual sub-pages.
- `Get a Free Quote` button far right (accent).
- Mobile: hamburger → GSAP full-screen overlay menu with staggered link reveal.
- Active route indicator.

---

## Footer

- **5-column layout:**
  1. Logo + description + social icons + certifications badges
  2. Company (links to About sub-pages)
  3. Services (links to all 6 service pages)
  4. Quick Links (Projects, Blog, Contact, Get a Quote)
  5. Contact info + newsletter signup
- Bottom bar: © VoltaEdge Engineering · Privacy Policy · Terms of Service · Sitemap
- Background `#003B5C`, text white / `#E1F5FE`.

---

## SEO Infrastructure

- `app/sitemap.ts` — dynamically generates sitemap for all static + dynamic routes.
- `app/robots.ts` — generated robots.txt.
- Each page exports a `metadata` object with unique `title`, `description`, `openGraph`, `twitter`, `keywords`.
- Structured data (JSON-LD) on: Homepage (Organization), Service pages (Service), Project pages (CreativeWork), Blog posts (Article).

---

## Environment Variables

```env
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://voltaedge.com
```

---

## Critical Rules for the AI Building This

1. **Next.js 16 App Router only** — no Pages Router. No `getServerSideProps`.
2. **All content from `constants/constants.ts`** — zero hardcoded strings in JSX.
3. **All types in `types/global.d.ts`** — no inline type declarations.
4. `"use client"` only on components using hooks, browser APIs, or interactivity.
5. **Every route is a real navigable page** — no placeholder `<div>Coming Soon</div>`.
6. All images via `next/image` — no `<img>` tags, ever.
7. GSAP wrapped in `useGSAP()` from `@gsap/react` with proper cleanup.
8. Lenis initialized **once** in root layout.
9. Every internal link uses `next/link` — no raw `<a>` tags for internal navigation.
10. Contact form: loading spinner during submit, success + error toasts.
11. All carousels must be **keyboard accessible** and **touch-friendly**.
12. `will-change: transform` on animated elements to prevent jank.
13. Mobile-first Tailwind — every section fully responsive at sm/md/lg/xl.
14. `metadata` export on every page with unique SEO title + description.
15. JSON-LD structured data on service, project, and blog pages.