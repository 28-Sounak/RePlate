from fastapi import FastAPI

from auth.routes import router as auth_router
from food.routes import router as food_router
from ngo.routes import router as ngo_router
from volunteer.routes import router as volunteer_router

app = FastAPI(
    title="RePlate Backend",
    description="Smart Food Redistribution Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(food_router)
app.include_router(ngo_router)
app.include_router(volunteer_router)

@app.get("/")
def home():
    return {
        "message": "RePlate Backend Running"
    }