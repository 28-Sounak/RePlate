from food.storage import food_db
from ngo.storage import ngo_db

def upload_food_service(food):

    food_item = {
        "id": len(food_db) + 1,
        "donor_name": food.donor_name,
        "food_type": food.food_type,
        "quantity": food.quantity,
        "location": food.location,
        "pickup_time": food.pickup_time,
        "expiry_time": food.expiry_time,
        "status": "available",
        "matched_ngos": ngo_db
    }

    food_db.append(food_item)

    return food_item


def get_all_food_service():
    return food_db


def update_food_status(food_id, status):

    for food in food_db:

        if food["id"] == food_id:

            food["status"] = status

            return {
                "message": "Status Updated",
                "food": food
            }

    return {
        "message": "Food Item Not Found"
    }