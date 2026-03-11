from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .routes import health

app = FastAPI(title="the-landing")
app.include_router(health.router)

frontend_dir = Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"
if frontend_dir.exists():
    app.mount("/assets", StaticFiles(directory=frontend_dir / "assets"), name="static")

    @app.get("/{path:path}")
    async def serve_spa(path: str) -> FileResponse:
        file = frontend_dir / path
        if file.exists() and file.is_file():
            return FileResponse(file)
        return FileResponse(frontend_dir / "index.html")
else:

    @app.get("/")
    def root() -> dict:
        return {"status": "the-landing backend running"}
