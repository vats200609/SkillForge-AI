from pydantic import BaseModel, EmailStr


# -----------------------------
# Signup
# -----------------------------
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


# -----------------------------
# Login
# -----------------------------
class UserLogin(BaseModel):
    email: EmailStr
    password: str


# -----------------------------
# JWT Token
# -----------------------------
class Token(BaseModel):
    access_token: str
    token_type: str


# -----------------------------
# Update Profile
# -----------------------------
class UpdateProfile(BaseModel):
    name: str
    email: EmailStr


# -----------------------------
# Change Password
# -----------------------------
class ChangePassword(BaseModel):
    old_password: str
    new_password: str