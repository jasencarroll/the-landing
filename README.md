# the-landing

Personal portfolio site for Jasen Carroll, software engineer.

**Live:** [jasencarroll.com](https://jasencarroll.com)

## Tech Stack

- **Backend:** FastAPI (health check + SPA static file serving, no database)
- **Frontend:** React 19, React Router, Vite, Tailwind CSS v4, shadcn/ui
- **Typography:** IBM Plex Mono
- **Tooling:** uv, Ruff, Bun, Biome, Docker, GitHub Actions CI
- **Deployment:** Railway

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Background, current work, what I'm looking for |
| `/projects` | Portfolio with live deployment links |
| `/resume` | Full work history |
| `/contact` | LinkedIn |

Features include a CommandPalette (Cmd+K) for keyboard navigation and a CursorGlow mouse-follow effect.

## Getting Started

### Prerequisites

- [Python 3.12+](https://www.python.org/) with [uv](https://docs.astral.sh/uv/)
- [Bun](https://bun.sh/) v1.2+

### Installation

```bash
git clone https://github.com/jasencarroll/the-landing.git
cd the-landing

# Backend
cd backend && uv sync

# Frontend
cd ../frontend && bun install
```

### Development

```bash
# Backend (port 8000)
cd backend && uv run uvicorn app.main:app --reload

# Frontend (port 5173, proxies /api to backend)
cd frontend && bun run dev
```

### Production Build

```bash
cd frontend && bun run build   # Outputs to dist/, served by FastAPI
```

## Deployment

Deployed on Railway using a multi-stage Dockerfile. Health check at `/api/health`.

## License

MIT License - see [LICENSE](LICENSE) for details.
