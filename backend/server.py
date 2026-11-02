import logging
import os

from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from db import client
from auth import router as auth_router, seed_admin
from blog_routes import admin, cron, public, mark_interrupted
import storage
from google_reviews import router as google_reviews_router

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI()
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"message": "Green Continent Tours API"}


app.include_router(api_router)
app.include_router(auth_router)
app.include_router(admin)
app.include_router(cron)
app.include_router(public)
app.include_router(google_reviews_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=os.environ['CORS_ORIGINS'].split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await seed_admin()
    await mark_interrupted()
    try:
        storage.init_storage()
    except Exception as e:
        logger.error(f"Storage init failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
