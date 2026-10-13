from fastapi import APIRouter

from app.api.v1.endpoints import health, toeic

api_router = APIRouter()
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(toeic.router, prefix="/toeic", tags=["TOEIC"])
