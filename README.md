# the-landing

Personal website and landing page for Jasen Carroll. Static, fast, no backend.

**Live:** [jasencarroll.com](https://jasencarroll.com)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v6 with static site generation
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Components:** React islands (CursorGlow, CommandPalette via cmdk)
- **UI:** [Radix UI](https://www.radix-ui.com/) primitives, [Lucide](https://lucide.dev/) icons
- **Typography:** IBM Plex Mono
- **Runtime:** Bun

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Background, current work, what I'm looking for |
| `/projects` | bun-stack, specz, axiomlayer |
| `/resume` | Full work history |
| `/contact` | LinkedIn |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.2+

### Installation

```bash
git clone https://github.com/jasencarroll/the-landing.git
cd the-landing
bun install
```

## Development

```bash
bun run dev       # Start dev server
bun run build     # Production build
bun run preview   # Preview production build
```

## Deployment

### Railway

The `railway.json` config handles the build and start commands automatically.

```bash
railway init
railway up
```

## Project Structure

```
the-landing/
├── public/                  # Static assets
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/          # React islands
│   │   ├── CommandPalette.tsx
│   │   ├── CursorGlow.tsx
│   │   └── ui/              # Radix-based UI primitives
│   │       ├── badge.tsx
│   │       └── button.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects.astro
│   │   └── resume.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── components.json
├── package.json
└── tsconfig.json
```

## License

MIT License - see [LICENSE](LICENSE) for details.
