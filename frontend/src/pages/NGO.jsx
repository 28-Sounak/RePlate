import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function NGO() {

  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const response = await API.get("/food/all");

      const foodData = response.data;

      setFoods(foodData);
      setFilteredFoods(foodData);

    } catch (error) {

      console.log(error);
    }
  };

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    const filtered = foods.filter((food) =>
      food.food_type.toLowerCase().includes(value.toLowerCase()) ||
      food.location.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredFoods(filtered);
  };

  const acceptDonation = async (foodId) => {

    try {

      await API.put(
        `/food/status/${foodId}?status=accepted`
      );

      alert("Donation Accepted!");

      fetchFoods();

    } catch (error) {

      console.log(error);

      alert("Failed to update status");
    }
  };

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-10">

        {/* Top Section */}

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              NGO Dashboard
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              Manage food donations efficiently
            </p>

          </div>

          {/* Stats */}

          <div className="flex gap-6">

            <div className="bg-white p-5 rounded-2xl shadow-lg w-44">

              <h2 className="text-4xl font-bold text-green-600">
                {foods.length}
              </h2>

              <p className="text-gray-500 mt-2">
                Total Donations
              </p>

            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg w-44">

              <h2 className="text-4xl font-bold text-orange-500">
                {
                  foods.filter(
                    (food) => food.status === "available"
                  ).length
                }
              </h2>

              <p className="text-gray-500 mt-2">
                Available
              </p>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="mb-10">

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by food type or location..."
            className="w-full md:w-[500px] p-4 rounded-xl border shadow-sm"
          />

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredFoods.map((food) => (

            <div
              key={food.id}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >

              {/* Header */}

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold text-orange-500">
                  {food.food_type}
                </h2>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold
                  ${
                    food.status === "accepted"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >

                  {food.status}

                </span>

              </div>

              {/* Content */}

              <div className="mt-6 space-y-3 text-gray-700">

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

              {/* Urgency Warning */}

              <div className="mt-5 bg-red-100 text-red-700 px-4 py-2 rounded-xl text-sm">

                Urgent pickup recommended

              </div>

              {/* Actions */}

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    acceptDonation(food.id)
                  }
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
                >

                  Accept

                </button>

                <button
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition"
                >

                  Reject

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}