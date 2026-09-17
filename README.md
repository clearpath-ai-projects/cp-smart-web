# CP Smart Diagnostic Services — Website Prototype

A dummy/prototype public website for **CP Smart Diagnostic Services
(Pvt.) Ltd.** (planned domain: `CPSDS.pk`), a professional orthodontic
diagnostic assessment and clinical treatment-planning service for
dentists and orthodontists.

This is a **single-page, purely informational marketing site** — there
is no client-side routing, no clinical portal integration, no login,
and no case-submission functionality. Everything a visitor needs is on
one page; the header navigation and footer links simply smooth-scroll
to the relevant section. The homepage hero does embed a self-contained,
client-side interactive treatment-visualization demo (see below) —
that one visual is intentionally kept even though there is no portal
connectivity.

## Positioning (read this first)

CP Smart is a clinical diagnostic + treatment-planning service for **dental
professionals** — it is not an aligner manufacturer, dental lab, CAD
outsourcing company, or a patient-facing consumer brand. Copy is written
doctor-to-doctor, and the workflow content is careful to make clear that
CP Smart does not manufacture physical aligners; approved treatment data
may be passed to the dentist's own designated manufacturer. Keep this
distinction in mind before adding new copy.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS** (utility-first styling)
- **lucide-react** (icon set)

No router is used — this is intentionally a single static page.

## Getting started

This project was authored in a sandboxed environment without npm registry
access, so dependencies have **not** been installed or build-verified here.
On a machine with normal internet access:

```bash
npm install
npm run dev       # starts the Vite dev server (usually http://localhost:5173)
```

To produce a production build:

```bash
npm run build      # type-checks then builds to /dist
npm run preview     # serves the production build locally
```

If `npm install` surfaces a version-resolution issue, the dependency
versions pinned in `package.json` are recent-as-of-authoring; bumping any
of `vite`, `@vitejs/plugin-react`, `tailwindcss`, or `typescript` to their
current latest minor/patch release should be safe.

## Project structure

```
src/
  components/          Reusable building blocks
    MarqueeBanner.tsx    red scrolling announcement bar (top of page)
    Navbar.tsx           sticky header with same-page anchor nav + scrollspy
    Footer.tsx           footer with same-page anchor nav
    Hero.tsx             homepage hero (used inside sections/Home.tsx)
    SectionHeader.tsx     eyebrow + title + subtitle header block
    PlatformMockup.tsx    static, non-interactive "CP Smart Platform" mockup
    CTASection.tsx        reusable closing call-to-action banner (anchor-only)
    ClinicalDisclaimer.tsx  verbatim Clinical Responsibility notice
    RevealOnScroll.tsx     small IntersectionObserver fade-in wrapper
    DentalArchVisual.tsx   abstract SVG arch used across visuals
    Logo.tsx / TrustStrip.tsx
  sections/            One file per page section (rendered in this order by App.tsx)
    Home.tsx              id="home"
    About.tsx              id="about"
    ClinicalServices.tsx   id="clinical-services"
    HowItWorks.tsx         id="how-it-works" (incl. manufacturer-relationship diagram)
    Platform.tsx           id="platform"
    ForDentists.tsx        id="for-dentists"
    Contact.tsx            id="contact"
    PrivacyPolicy.tsx      id="privacy-policy"
    Terms.tsx              id="terms"
  App.tsx              Assembles MarqueeBanner + Navbar + all sections + Footer
  main.tsx             Entry point (plain root render, no router)
  index.css            Tailwind layers + small reusable utility classes
    (.btn / .btn-primary / .card / .section / .container-page / .input / .marquee-track …)
tailwind.config.js     Design tokens: brand/ink/surface/line color scales,
                       display + sans font families, custom shadows & motion
```

## Section map (single page)

| Anchor id            | Section                                     |
| --------------------- | -------------------------------------------- |
| `#home`               | Home (hero + trust strip)                    |
| `#about`               | About Us                                     |
| `#clinical-services`   | Clinical Services                            |
| `#how-it-works`        | How It Works (6-step workflow + manufacturer relationship) |
| `#platform`            | The CP Smart Platform                        |
| `#for-dentists`        | Built for Dental Professionals               |
| `#contact`             | Contact Us (inquiry form)                    |
| `#privacy-policy`      | Privacy Policy (placeholder copy)            |
| `#terms`               | Terms & Conditions (placeholder copy)        |

Clicking any header nav item or footer link smooth-scrolls to that
section on the same page (`scroll-behavior: smooth` in `index.css`,
plus `scroll-mt-[72px]` on each section so the sticky navbar doesn't
overlap the heading). The navbar also highlights whichever section is
currently in view via an `IntersectionObserver` (see `Navbar.tsx`).

## Design system

Colors are adapted from the CP Smart / ClearPath brand identity — a deep
clinical burgundy (`brand-600`, `#661244`) as the primary accent against a
white-and-neutral-grey base (`surface`, `surface-soft`, `surface-dark`) and
warm near-black text (`ink`). Headings use "Plus Jakarta Sans"; body text
uses "Inter" (both loaded via Google Fonts in `index.html`). Motion is
intentionally subtle: short fade/slide-up reveals on scroll, a gentle
"drift" float on the digital visualization graphics, a continuous CSS
marquee for the top announcement bar, and simple hover states — no heavy
parallax or looping animation. All motion respects
`prefers-reduced-motion`.

## No portal or login (by design) — but the visualization demo stays

This is a purely informational website at this stage — it does **not**
connect to the CP Smart clinical platform or dentist portal. Concretely:

- There are no "Doctor Login" or "Submit a Case" **buttons** anywhere.
  Both are mentioned only as **descriptive feature text** (see the
  "Platform Capabilities" area of `sections/Platform.tsx` and the
  feature chips under the hero in `components/Hero.tsx`), never as
  clickable actions or links.
- "Speak to Our Clinical Team" has been removed everywhere; the single
  remaining call-to-action across the site points to the on-page
  Contact section (`href="#contact"`).
- `PlatformMockup.tsx` is fully static — no `useState`/`onClick`
  interactivity. Its "Request Modification" / "Approve Treatment Plan"
  controls are non-interactive visual elements only.
- There are no external clinical-portal link constants in the project
  (`src/lib/links.ts` was removed) — nothing points off-site.

### Hero visualization (30-stage treatment demo)

The hero's right-hand visual embeds a self-contained, interactive
WebGL demo (`public/assets/dental-alignment-demo.html`, ~19 MB) via an
`<iframe>` in `src/components/Hero.tsx`. It renders an illustrative
30-stage upper/lower arch alignment animation with its own view/layer
controls and stage timeline — it is not modified from the originally
supplied file and runs entirely client-side (no backend, no network
calls, no data transmitted anywhere). Because it's a large static
asset, it lives in `public/assets/` so Vite serves it byte-for-byte as
is rather than bundling it. It is purely illustrative, not a real
patient case or an actual treatment plan (the demo's own on-page
copy says so).

## Notes / things intentionally left as prototype-only

- The Contact form is **not** wired to a backend — it simulates success
  locally for demonstration purposes. No data is transmitted or stored.
- The CP Smart Platform section (`PlatformMockup.tsx`) is a **mockup only**,
  using clearly dummy data (Case ID `CP-1024`, Dr. Ahmed Khan, Example
  Dental Clinic). No real patient information is used anywhere.
- No pricing, invoicing, certifications (HIPAA/GDPR/ISO), or unverified
  statistics ("trusted by 10,000+ dentists") are shown anywhere on the
  site, per the brief.
- Privacy Policy and Terms & Conditions sections contain clearly labeled
  placeholder legal copy, not reviewed legal language.
- All section content is a **structural placeholder pass** — final copy
  for each of the nine sections (Home, About Us, Clinical Services, How
  It Works, Platform, For Dentists, Contact, Privacy Policy, Terms &
  Conditions) is expected to be supplied and swapped in next.
