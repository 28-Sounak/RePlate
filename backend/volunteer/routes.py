from fastapi import APIRouter

router = APIRouter(
    prefix="/volunteer",
    tags=["Volunteer"]
)

@router.post("/assign")
def assign_volunteer(
    food_id: int,
    volunteer_name: str
):

    return {
        "message": "Volunteer Assigned Successfully",
        "food_id": food_id,
        "volunteer": volunteer_name,
        "status": "assigned"
    }