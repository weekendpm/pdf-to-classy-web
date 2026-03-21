

# Ruhi (रूही) — Luxury Indian Bridal Styling Website

## Overview
Build a high-fashion editorial single-page website with 8 major sections, a lead capture form, sticky nav, scroll animations, and grain texture overlay. Component-driven architecture with each section as its own file.

## File Structure

```text
src/
├── pages/Index.tsx          — Main page, composes all sections
├── hooks/useScrollAnimation.ts — Intersection Observer hook
├── components/
│   ├── Navbar.tsx           — Sticky nav (transparent → maroon)
│   ├── HeroSection.tsx      — Full-viewport hero with gradient
│   ├── ProblemSection.tsx   — "The moment that defines us"
│   ├── MeetRuhiSection.tsx  — Three-column 01/02/03
│   ├── ProcessSection.tsx   — Horizontal 5-step timeline
│   ├── PackagesSection.tsx  — Editorial table with gold dividers
│   ├── CollaborateSection.tsx — Gold gradient + benefits
│   ├── HowWeWorkSection.tsx — 4-step flow + "we ask" card
│   ├── FinalCtaSection.tsx  — Full-width maroon CTA
│   ├── LeadFormDialog.tsx   — Modal form (bride details)
│   └── GrainOverlay.tsx     — Fixed SVG noise overlay
```

## Key Implementation Details

### 1. Brand System (index.css + tailwind.config.ts)
- Override CSS variables: `--maroon: #8B1A1A`, `--champagne: #D4A96A`, `--parchment: #F5EFE6`, `--charcoal: #1C1C1C`
- Add brand colors to Tailwind config: `maroon`, `champagne`, `parchment`, `charcoal`
- Google Fonts in index.html: Cormorant Garamond (400/500/600/700 italic), DM Serif Display, Lato (300/400)
- Font-family utilities in Tailwind: `font-cormorant`, `font-dm-serif`, `font-lato`
- Add fade-in keyframes for scroll animations

### 2. Grain Overlay (GrainOverlay.tsx)
- Fixed full-screen pseudo-element with SVG noise filter at 0.03 opacity, `pointer-events-none`, z-50

### 3. Sticky Navbar (Navbar.tsx)
- `position: fixed`, transparent bg initially
- On scroll (>50px), transitions to `bg-maroon` with backdrop blur
- "रूही" Devanagari logo on left, nav links on right
- Mobile: hamburger menu

### 4. Scroll Animation Hook (useScrollAnimation.ts)
- Custom hook using Intersection Observer
- Returns a ref; element gets `opacity-0 translate-y-8` → `opacity-100 translate-y-0` transition when intersecting
- `threshold: 0.15`, `triggerOnce: true`

### 5. Sections — all use alternating maroon/parchment backgrounds as specified, with the exact copy provided in the prompt

### 6. Process Timeline (ProcessSection.tsx)
- Horizontal layout on desktop: 5 numbered circles connected by dotted lines (`border-dashed`)
- Stack vertically on mobile with vertical dotted line

### 7. Packages Table (PackagesSection.tsx)
- No cards — plain typographic rows separated by thin `border-champagne` horizontal rules
- Three columns: Package (monospace weight), For, Offering (Cormorant)

### 8. Lead Form (LeadFormDialog.tsx)
- Triggered by "I'm a Bride" CTA and "Start Your Journey" button
- Dialog/modal with maroon header
- Fields: Name, Email, Phone, Wedding Date (date input), Estimated Budget (select: ₹1-3L / ₹3-5L / ₹5-7L / ₹7L+), Number of Events (select: 1-3 / 4-6 / 7+), "Tell us about your vision" (textarea)
- Submit saves to localStorage, shows success toast
- Styled with brand fonts and colors

### 9. Responsive
- All multi-column layouts stack on mobile (`grid-cols-1 md:grid-cols-3`)
- Hero headline scales down (`text-5xl md:text-7xl lg:text-[96px]`)
- Timeline goes vertical on mobile

### 10. No purple, no blue, no cold gradients. All warm tones only.

