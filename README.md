# kushal-reshamdalal-portfolio

Personal portfolio website for Kushal Reshamdalal — Senior Software Engineer at Nasdaq specializing in high-throughput fraud detection systems and cloud-native fintech infrastructure.

## Overview

A dark, technical portfolio built in the aesthetic of Bloomberg Terminal meets modern SaaS. Features:

- **Animated hero** with live transaction feed and stat counters
- **Three featured projects** with metrics — ACH Transaction Engine, ML Fraud Detection, Big Data Migration
- **Vertical experience timeline** covering Nasdaq, Verafin, and Larsen & Toubro
- **Categorized skills matrix** — Backend, Cloud/DevOps, Data/ML, Observability
- **Contact section** with copy-to-clipboard email
- Scroll-triggered reveal animations via IntersectionObserver
- Fully responsive (mobile-first)
- Dark mode by default

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Syne (display) · DM Sans (body) · JetBrains Mono (code/numbers) via `next/font/google`
- **Animations**: CSS keyframes + IntersectionObserver (no external animation libraries)

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/kushal-reshamdalal-portfolio.git
cd kushal-reshamdalal-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kushal-reshamdalal-portfolio/
├── app/
│   ├── layout.js          # Root layout with font imports + metadata
│   ├── page.js            # Page assembling all sections
│   ├── globals.css        # Global styles, animations, utility classes
│   └── components/
│       ├── Navbar.jsx     # Sticky nav with scroll detection + mobile menu
│       ├── Hero.jsx       # Full-viewport hero with stats + transaction feed
│       ├── About.jsx      # Bio, fast facts, core strengths
│       ├── Projects.jsx   # 3 featured projects with metrics
│       ├── Experience.jsx # Timeline of 5 roles
│       ├── Skills.jsx     # Categorized tech stack + certifications
│       ├── Contact.jsx    # Contact links + CTA
│       └── Footer.jsx     # Minimal footer
├── public/                # Static assets
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Build for Production

```bash
npm run build
npm start
```

## Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Color accent | `#00e5a0` electric mint | Fintech terminal aesthetic; authority + precision |
| Background | `#04080f` near-black navy | Maximum contrast; Bloomberg-inspired |
| Display font | Syne 800 | Geometric, distinctive — not a common AI-portfolio font |
| Body font | DM Sans | Clean, readable, modern without being generic |
| Mono font | JetBrains Mono | Technical credibility for numbers and code labels |
| Animations | CSS-only + IntersectionObserver | Zero runtime dependencies; fast load |
| Layout | Left-heavy asymmetric | Engineers scan left-to-right; most important content leads |

---

Built with ❤️ by Kushal Reshamdalal · Toronto, ON
