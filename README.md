# TEJAS GOWDA — CINEMATIC DEVELOPER PORTFOLIO

A premium, cinematic, scroll-driven personal developer portfolio for **Tejas Gowda**, engineered with React, TypeScript, Vite, GSAP, Lenis, and CSS 3D transforms.

> **“Building smart solutions, exploring bold ideas, and turning technology into real-world impact.” 🚀**

---

## 📽️ Project Overview

This website is crafted with an editorial art direction inspired by cinematic title sequences and interactive short films:
- **Cinematic Preloader:** Animated numerical counter (00–100%) with split-screen reveal curtain and glowing accent blade.
- **3D Character Stage:** Responsive viewport canvas layer featuring Tejas Gowda's authentic high-resolution photograph (with optimized WebP pipeline and mobile variants), animated depth, warm rim lighting, mouse parallax, and scene-driven blade transitions.
- **Scroll Engine:** Synchronized Lenis smooth scroll (`lerp: 0.075`, `smoothWheel: true`) driven by GSAP's ticker.
- **Strict Factual Accuracy:** Centralized in `src/data.ts`. No fabricated statistics, fake contest ranks, or unverified claims.
- **Selected Projects:** All 6 genuine GitHub projects showcased with custom interactive visual previews, technology badges, and direct repository links.
- **Achievements & Recognition:** Prominent podium feature for **Runner-Up — EVOX 1.0** (Team Technova, DETOX / Unstop), **Data Analytics Hackathon Participant** (Gradient Learnings), and verified **Completed Learning** achievements in HTML5, CSS3, and JavaScript.

---

## 🎨 Design System & Color Palette

- **Warm Off-White:** `#F7F6F0` (Base Canvas)
- **Dark Charcoal:** `#252923` (High-contrast Display Text & Glass Elements)
- **Muted Grey:** `#74776F` (Metadata, Subtitles, & Secondary Badges)
- **Sage Green:** `#879B83` (Hero Accent, Active Markers, & Edge Glows)
- **Pale Sage:** `#E6EBE2` (Ambient Radial Lighting & Depth Highlights)

### Typography
- **Display Headlines:** `Anton`
- **Body Text:** `Inter Tight`
- **Labels, Code, & Metadata:** `JetBrains Mono`

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Bundler & Dev Server:** Vite 5 (base set to `./` for universal hosting)
- **Scroll Engine:** Lenis v1.1
- **Animation Orchestrator:** GSAP 3.12 (Ticker sync)
- **Styling:** Vanilla CSS 3D Transforms, Custom Glassmorphism, & Hardware Acceleration
- **Typography Packages:** `@fontsource/anton`, `@fontsource-variable/inter-tight`, `@fontsource/jetbrains-mono`
- **Icons:** `lucide-react`

---

## 📂 Project Architecture

```text
tejas-cinematic-portfolio/
├── dist/                     # Optimized production bundle
├── public/
│   ├── character/            # Tejas Gowda verified character assets
│   │   ├── tejas-hero.png    # Original transparent cut-out
│   │   ├── tejas-hero.webp   # High-res WebP (77 KB)
│   │   └── tejas-hero-mobile.webp # Mobile optimized WebP (30 KB)
│   ├── favicon.svg           # TG Monogram Favicon
│   └── frames/               # Prepared directory for optional video frame sequences
├── src/
│   ├── components/
│   │   ├── Chrome.tsx        # Sticky nav, active section indicator, progress bar, & mobile drawer
│   │   ├── CustomCursor.tsx  # Smooth trailing cursor dot & expanding ring (desktop)
│   │   ├── Odometer.tsx      # Mechanical rolling digit counter
│   │   ├── Preloader.tsx     # Numerical counter & split-screen reveal
│   │   ├── Stage.tsx         # Fixed character 3D layer with rim flare & blade sweep
│   │   └── TiltCard.tsx      # CSS 3D perspective card with reactive light glare
│   ├── engine/
│   │   ├── director.ts       # 7-scene camera, scale, rotation, and blade glow orchestrator
│   │   ├── frames.ts         # Manifest player & progressive frame blend engine
│   │   └── hooks.ts          # Lenis GSAP ticker sync, mouse parallax, and media queries
│   ├── scenes/
│   │   ├── Hero.tsx          # Section 01: Introduction & Call-to-actions
│   │   ├── About.tsx         # Section 02: Curious by Nature & 3 Pillars
│   │   ├── Work.tsx          # Section 03: 6 Selected Projects with visual previews
│   │   ├── Journey.tsx       # Section 04: Academic Timeline & Milestones
│   │   ├── Skills.tsx        # Section 05: Toolkit (General vs. Project-specific)
│   │   ├── Awards.tsx        # Section 06: EVOX 1.0 Runner-Up & Learning
│   │   └── Contact.tsx       # Section 07: Direct email, GitHub, LinkedIn, & Footer
│   ├── data.ts               # Single source of truth for all verified data
│   ├── styles.css            # Complete Vanilla CSS design system & responsive tokens
│   ├── App.tsx               # Main scene graph composition
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

```bash
npm run build
```

This compiles a fully optimized production build into the `dist/` directory with relative asset paths ready to deploy to GitHub Pages, Vercel, Netlify, or any static hosting service.

---

## 📋 Verified Information Checklist

- [x] **Full Name:** Tejas Gowda
- [x] **Role:** Student Developer
- [x] **College:** B. N. M. Institute of Technology (BNMIT)
- [x] **Degree:** B.E. in Information Science and Engineering (Expected 2029)
- [x] **Tagline:** “Building smart solutions, exploring bold ideas, and turning technology into real-world impact.” 🚀
- [x] **Email:** [tejas448866@gmail.com](mailto:tejas448866@gmail.com)
- [x] **GitHub:** [https://github.com/tejas448866](https://github.com/tejas448866)
- [x] **LinkedIn:** [https://www.linkedin.com/in/tejas-gowda-25902a386](https://www.linkedin.com/in/tejas-gowda-25902a386)
- [x] **Projects Showcased:**
  1. [3D Stealth Horror Game](https://github.com/tejas448866/3d-stealth-horror-game-1-)
  2. [AI Virtual Assistant](https://github.com/tejas448866/AI-VIRTUAL-ASSISTANT)
  3. [AI Business and Financial Decision Optimization Engine](https://github.com/tejas448866/artifacts)
  4. [PalmPilot AI](https://github.com/tejas448866/PalmPilot-AI)
  5. [Smart Timetable Optimization](https://github.com/tejas448866/Smart-Timetable-Optimization)
  6. [VoltRelay Data Analysis](https://github.com/tejas448866/VoltRelay-Data-Analysis)
- [x] **Achievements:**
  - **Runner-Up — EVOX 1.0** (Team Technova, DETOX / Unstop)
  - **Data Analytics Hackathon Participant** (Gradient Learnings)
  - **Completed Learning Achievements** (HTML5 — The Language, CSS3, JavaScript)
- [x] **Résumé:** Omitted gracefully until official PDF is supplied.
