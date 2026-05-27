from pydantic import BaseModel

class FoodCreate(BaseModel):
    donor_name: str
    food_type: str
    quantity: str
    location: str
    pickup_time: str
    expiry_time: str