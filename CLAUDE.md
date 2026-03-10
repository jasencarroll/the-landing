# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Build and Development Commands

```bash
bun install                        # Install dependencies
bun run dev                        # Start Astro dev server
bun run build                      # Production build (dist/)
bun run preview                    # Preview production build
bun run lint                       # Biome lint + format check
bun run format                     # Biome auto-fix + format
```

## Architecture

Personal portfolio and landing page for jasencarroll.com. Static site deployed on Railway.

### Tech Stack

- **Framework**: Astro 6 with React islands (`client:load`)
- **Styling**: Tailwind CSS v4 (via Vite plugin), shadcn/ui components
- **Linting/Formatting**: Biome (tabs, single quotes, no trailing commas)
- **Package manager**: Bun
- **Deployment**: Railway (static build served via `bunx serve`)

### Key Directories

```
src/
  components/
    CommandPalette.tsx       # Cmd+K command palette (React island)
    CursorGlow.tsx           # Mouse-following glow effect (React island)
    ui/                      # shadcn/ui primitives (Badge, Button)
  layouts/
    Layout.astro             # Base HTML layout with nav + global styles
  pages/
    index.astro              # Home page
    about.astro              # About + tech stack
    projects.astro           # Project showcase
    resume.astro             # Full resume
    contact.astro            # Contact / LinkedIn
  lib/
    utils.ts                 # cn() utility (clsx + tailwind-merge)
  styles/
    global.css               # Tailwind theme + base styles
```

### Conventions

- Astro pages use `.astro` files; interactive components are React `.tsx` with `client:load`
- Path alias `@/` maps to `src/`
- shadcn/ui config in `components.json`
- Biome only checks `src/**/*.ts` and `src/**/*.tsx` (not `.astro` files)
