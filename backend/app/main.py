import os

from fastapi import FastAPI

from app.db.database import Base, engine
from app.models.url import URL
from app.routes.url_routes import router as url_routes
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        os.getenv("FRONTEND_URL")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(url_routes)