from fastapi import APIRouter
from schema.food_schema import FoodCreate

from food.service import (
    upload_food_service,
    get_all_food_service,
    update_food_status
)

router = APIRouter(
    prefix="/food",
    tags=["Food"]
)

@router.post("/upload")
def upload_food(food: FoodCreate):

    return upload_food_service(food)


@router.get("/all")
def get_all_food():

    return get_all_food_service()


@router.patch("/status/{food_id}")
def update_status(food_id: int, status: str):

    return update_food_status(food_id, status)