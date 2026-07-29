from fastapi import FastAPI

app = FastAPI(title="SkillForge AI API")

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillForge AI 🚀"
    }