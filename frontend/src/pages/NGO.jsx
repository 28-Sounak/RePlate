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

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              NGO Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              View and manage available food donations
            </p>

          </div>

          <div className="bg-white shadow-md px-6 py-4 rounded-xl">

            <h2 className="text-2xl font-bold text-green-600">
              {foods.length}
            </h2>

            <p className="text-gray-500">
              Active Donations
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {foods.map((food) => (

            <div
              key={food.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold text-orange-500">
                  {food.food_type}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

                  Available

                </span>

              </div>

              <div className="mt-5 space-y-3 text-gray-700">

                <p>
                  <span className="font-bold">
                    Donor:
                  </span>{" "}
                  {food.donor_name}
                </p>

                <p>
                  <span className="font-bold">
                    Quantity:
                  </span>{" "}
                  {food.quantity}
                </p>

                <p>
                  <span className="font-bold">
                    Location:
                  </span>{" "}
                  {food.location}
                </p>

                <p>
                  <span className="font-bold">
                    Pickup Time:
                  </span>{" "}
                  {food.pickup_time}
                </p>

                <p>
                  <span className="font-bold">
                    Expiry:
                  </span>{" "}
                  {food.expiry_time}
                </p>

              </div>

              <button
                className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
              >

                Accept Donation

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}