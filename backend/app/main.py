from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.database import Base, engine

# Database Tables Create
Base.metadata.create_all(bind=engine)

# FastAPI App
app = FastAPI(
    title="SkillForge AI API",
    version="0.1.0"
)

# Routers
app.include_router(auth_router)


# Home API
@app.get("/")
def home():
    return {
        "message": "Welcome to SkillForge AI 🚀"
    }