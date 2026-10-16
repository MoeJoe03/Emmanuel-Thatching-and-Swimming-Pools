# Design System & Architecture Documentation
**Emmanuel Thatching and Swimming Pools (Pty) Ltd**  
*Gauteng & Johannesburg, South Africa*

---

## 1. Brand Identity & Creative Direction

### 1.1 Brand Positioning
Emmanuel Thatching & Swimming Pools is positioned as a **luxury, heritage-driven architectural outdoor living contractor**. The brand embodies 21+ years of generational Highveld craftsmanship, combining structural reliability with timeless African and modern architectural aesthetics.

### 1.2 Aesthetic Tone & Mood
- **Architectural & Masculine**: Sharp lines, structural grid systems, heavy high-contrast typographic weights, and raw material authenticity (thatch, slate, stone, timber, steel, water).
- **High-Contrast Editorial**: Alternating sections of deep obsidian black (`#000000` / `#0E0E0E`) and warm alabaster off-white (`#FAF9F6`).
- **Anti-Slop Discipline**: Strict avoidance of generic "AI template" aesthetics—no rounded pill metadata capsules, no rainbow gradients, and no generic icons. Every container uses crisp, low-radius geometry (`rounded-none` or `rounded-sm`), hairline borders, and intentional typographic pairings.

---

## 2. Color Palette & Tokens

| Token Name | Hex Code | Tailwind / Usage | Description |
| :--- | :--- | :--- | :--- |
| **Primary Gold** | `#B8860B` | `text-primary`, `bg-primary` | Dark goldenrod; signature brand accent representing Cape Reed and luxury finishing. |
| **Accent Gold** | `#C5A059` | `text-accent`, `bg-accent` | Secondary lighter warm gold for highlights and borders. |
| **Accent Hover** | `#B08E4E` | `hover:bg-primary-dark` | Interactive hover state for gold primary buttons. |
| **Deep Black** | `#000000` | `bg-black`, `text-black` | Core structural background and primary heading color. |
| **Obsidian Dark** | `#0E0E0E` / `#111111` | `bg-neutral-900` | Dark surface containers, lightboxes, and compliance cards. |
| **Warm Canvas** | `#FAF9F6` | `bg-[#FAF9F6]` | Warm architectural off-white used across page bodies and cards. |
| **Pure White** | `#FFFFFF` | `bg-white`, `text-white` | Card backgrounds, high-contrast text, and bright overlays. |
| **Hairline Gray** | `#E5E7EB` | `border-gray-200` | Subtle hairline dividers and grid container borders. |
| **Muted Slate** | `#4B5563` / `#6B7280` | `text-gray-600` / `text-gray-500` | High-legibility body and secondary metadata text. |

---

## 3. Typography Hierarchy

The typography pairs an ultra-bold architectural sans-serif with an elegant editorial serif for deliberate emotional emphasis.

```
┌────────────────────────────────────────────────────────────┐
│ KICKER:     — OUR HERITAGE & MISSION  (10-12px, Uppercase) │
│ HEADLINE:   21+ YEARS OF              (Heavy Sans-Black)   │
│ ACCENT:     architectural excellence. (Italic Serif Gold)  │
│ BODY:       Founded in Benoni...      (15-18px Sans-Serif) │
└────────────────────────────────────────────────────────────┘
```

### 3.1 Typographic Roles
1. **Section Kickers & Eyebrows**:
   - Class: `text-[10px]` to `text-xs`, `font-bold`, `uppercase`, `tracking-[0.25em]` to `tracking-[0.5em]`, `text-primary`.
   - Pattern: Prefixed with an em-dash (e.g., `— OUR WORK`, `— WHO WE ARE`, `— CORE TRADES`).
2. **Display & Section Headings ($H_1, H_2$)**:
   - Class: `text-3xl` to `text-7xl`, `font-black`, `uppercase`, `tracking-tight` / `tracking-tighter`, `text-black` or `text-white`.
   - Editorial Serif Emphasis: Key phrases are enclosed in `<span className="font-serif italic font-normal text-primary capitalize/lowercase">` (e.g., *"proud of."*, *"superior environments."*, *"project #200+."*).
3. **Sub-Headings ($H_3, H_4$)**:
   - Class: `text-base` to `text-2xl`, `font-bold` / `font-black`, `uppercase`, `tracking-tight`.
4. **Body Copy**:
   - Class: `text-sm` to `text-base` (lead paragraphs up to `text-lg`), `text-gray-700` (on light) or `text-gray-300` (on dark), line-height `relaxed` (`1.65–1.75`).
5. **Metadata & Tags**:
   - Class: `text-[10px]` to `text-xs`, `font-black`, `uppercase`, `tracking-widest`. Unboxed text separated by `·` or `/`.

---

## 4. UI Components & Layout Patterns

### 4.1 Buttons & Interactive Controls
- **Primary Action (Gold Solid)**:
  - Class: `bg-primary hover:bg-[#9a7009] text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm shadow-md transition-colors`.
- **Secondary Action (Monochrome Outline)**:
  - Class: `border-2 border-black text-black hover:bg-black hover:text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm transition-colors` (or white variant on dark backgrounds).
- **Segmented Filter Tabs**:
  - Rectangular buttons with sharp borders (`border border-gray-300 rounded-sm`), active state switches to `bg-primary text-white shadow-sm ring-1 ring-primary`.

### 4.2 Interactive Elements
- **Before & After Transformation Slider**:
  - Dual-layer image viewer utilizing hardware-accelerated CSS `clipPath: polygon(...)`.
  - Pointer capture (`onPointerDown`, `onPointerMove`, `onPointerUp`) supporting seamless touch and desktop dragging.
  - Custom gold circular handle with `ChevronsLeftRight` icon and accessible range input fallback.
- **Project Lightbox Modal**:
  - Full-screen dark backdrop blur (`bg-black/95 backdrop-blur-md`).
  - Image scaling with `object-contain`, keyboard listeners (`ArrowLeft`, `ArrowRight`, `Escape`), and direct phone & quote trigger buttons in the modal footer.
- **Sticky Viewport Controls**:
  - `StickyPhoneBadge`: Fixed vertical tab on desktop right edge (`fixed right-0 top-1/2 -translate-y-1/2 z-40`) with pulsing phone icon and vertical text `CALL (063) 325-2012`.
  - Global navigation bar with scroll detection, backdrop blur, and mobile sliding menu.

---

## 5. Information Architecture & Page Matrix

```
/ (Home Page)
├── Navbar (Sticky Glass Header)
├── Hero (Background Video + Large Crest Logo + Immediate Action CTAs)
├── Marquee (Infinite Trade Ticker)
├── Services Bento Grid (7-Card High-Impact Showcase)
├── Gallery Carousel (Horizontal Infinite Drag & Auto-Scroll)
├── About Us Editorial Summary (Overview + Photo + Core Specialties)
├── Contact Section (Detailed Form + Direct Calling + Operational Map)
├── CTA Strip (Full-Bleed Direct Action Bar)
└── Footer (Navigation + Suburbs Served + Trade Accreditations)

/services (Services Hub)
├── ServicesHero (Trade Overview & Key Metrics)
├── Filterable Services Grid (Thatch, Pools, Harvey Tiles, Decking, Painting, Paving, Building)
├── 4-Phase Project Process (Consultation → Scoping → Construction → Handover)
├── "Not Sure Where To Start?" Guidance Banner
└── Global CTA & Footer

/gallery (Project Showcase)
├── GalleryHero (Editorial Kicker & Segmented Filter Bar)
├── 4-Column Photo Grid (Filtered Portfolio with Hover Overlays)
├── Full-Screen Interactive Lightbox
├── Dark Verified Testimonials Quote Strip (5.0★ Google Reviews)
├── "Let's Make Yours Project #200+" Conversion Block
└── Global CTA & Footer

/about (About Us & Heritage)
├── AboutHero (21+ Years Experience & 4-Stat Value Bar)
├── AboutStory (Origin Narrative & Dual Asymmetrical Imagery)
├── AboutPillars (6 Specialized In-House Architectural Disciplines)
├── AboutAreas (Gauteng Footprint: East Rand, Joburg, Pretoria, Vaal)
└── Global CTA & Footer

/contact (Contact & Free Quotes)
├── ContactHero (Direct Channels: Phone, WhatsApp, Email, Office Base)
├── ContactFormSection (Interactive Quote Form + Direct Line to Emmanuel + Operational Schedule)
├── ContactFAQ (Top 6 High-Intent Customer Inquiries)
└── Global CTA & Footer
```

---

## 6. Motion & Performance Guidelines

1. **Smooth Scrolling**: Implemented via Lenis smooth scrolling (`SmoothScrollProvider.tsx`) for fluid momentum and premium editorial feel.
2. **GSAP Scroll Triggers**: Lightweight custom hook (`useScrollAnimation.ts`) observing `.gsap-fade-up` and `.gsap-scale-up` elements to trigger graceful reveals as sections enter the viewport.
3. **Image Optimization**:
   - Next.js `<Image>` used exclusively with responsive `sizes` attribute.
   - All external Supabase storage URLs registered in `next.config.ts`.
   - `referrerPolicy="no-referrer"` enforced on remote assets.
4. **Zero Layout Shifts (CLS)**: Aspect ratios strictly declared on media wrappers (`aspect-video`, `aspect-[4/3]`, `aspect-square`).

---

## 7. Direct Contact & Conversion Points

- **Primary Contact Number**: `+27 63 325 2012` / `(063) 325-2012`
- **Location Base**: Benoni, East Rand, Gauteng, South Africa
- **Service Region**: Johannesburg, Pretoria, East Rand, Centurion, Midrand, Vaal Triangle
- **Key Lead Triggers**:
  - Sticky right-side call tab
  - Direct tel links in navbar, heroes, lightboxes, and footers
  - Interactive estimate request form linking to `#contact`
