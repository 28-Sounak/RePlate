import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function NGO() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const response = await API.get("/food/all");

      setFoods(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          NGO Dashboard
        </h1>

        <div className="grid gap-6">

          {foods.map((food) => (

            <div
              key={food.id}
              className="border rounded-xl p-6 shadow-lg bg-white"
            >

              <h2 className="text-3xl font-bold text-orange-500">
                {food.food_type}
              </h2>

              <p className="mt-3">
                Quantity: {food.quantity}
              </p>

              <p>
                Location: {food.location}
              </p>

              <p>
                Status: {food.status}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}