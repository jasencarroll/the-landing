# CLAUDE.md

## Build and Development Commands

```bash
# Backend
cd backend && uv sync              # Install Python dependencies
uv run uvicorn app.main:app --reload  # Start dev server on :8000
uv run pytest -v                   # Run tests
uv run ruff check . && uv run ruff format --check .  # Lint

# Frontend
cd frontend && bun install         # Install JS dependencies
bun run dev                        # Start Vite dev server on :5173
bun run build                      # Production build (dist/)
bun run lint                       # Biome lint check
```

## Architecture

Personal portfolio site for jasencarroll.com. FastAPI backend serves React SPA.

- **Backend**: FastAPI (health check + static file serving)
- **Frontend**: React 19 + Vite + Tailwind v4 + shadcn/ui + React Router
- **Font**: IBM Plex Mono (Google Fonts)
- **Deployment**: Railway (Dockerfile), health check at /api/health

### Key Directories

```
backend/
  app/
    main.py                  # FastAPI app, serves frontend/dist as SPA
    routes/health.py         # GET /api/health
  tests/
frontend/
  src/
    components/
      Layout.tsx             # Nav bar + CursorGlow + CommandPalette
      CommandPalette.tsx     # Cmd+K navigation palette
      CursorGlow.tsx         # Mouse-following glow effect
      ui/badge.tsx           # shadcn/ui Badge
    pages/
      Home.tsx               # Landing page
      About.tsx              # Bio + tech stack
      Projects.tsx           # Portfolio with live deployment links
      Resume.tsx             # Full resume
      Contact.tsx            # LinkedIn CTA
    lib/utils.ts             # cn() utility
    index.css                # Tailwind theme
```

### Conventions

- No database (static portfolio site)
- Path alias `@/` maps to `src/`
- Biome: tabs, single quotes, lineWidth 100
- Vite proxies `/api` to backend dev server
