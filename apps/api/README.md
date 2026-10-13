# ToeicKnot API

FastAPI backend for the ToeicKnot platform.

## Development

Run with `uv`:

```bash
# Install dependencies
uv sync --extra dev

# Run development server
uv run uvicorn app.main:app --reload --port 8000
```

Interactive API documentation:
- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)
