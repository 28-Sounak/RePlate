from fastapi import APIRouter

from schema.user_schema import UserLogin
from core.security import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
def login(user: UserLogin):

    token = create_access_token({
        "sub": user.email
    })

    return {
        "message": "Login Successful",
        "access_token": token,
        "token_type": "bearer"
    }