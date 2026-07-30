from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.database import engine, Base
from app.models.user import User

app = FastAPI(title="SkillForge AI API")

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to SkillForge AI 🚀"
    }