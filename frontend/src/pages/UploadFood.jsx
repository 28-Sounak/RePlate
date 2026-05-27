import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function UploadFood() {

  const [food, setFood] = useState({
    donor_name: "",
    food_type: "",
    quantity: "",
    location: "",
    pickup_time: "",
    expiry_time: ""
  });

  const handleChange = (e) => {

    setFood({
      ...food,
      [e.target.name]: e.target.value
    });
  };

  const uploadFood = async () => {

    try {

      const response = await API.post(
        "/food/upload",
        food
      );

      console.log(response.data);

      alert("Food Uploaded Successfully!");

    } catch (error) {

      console.log(error);

      alert("Upload Failed");
    }
  };

  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          Upload Food
        </h1>

        <div className="space-y-5 max-w-lg">

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Donor Name"
            name="donor_name"
            onChange={handleChange}
          />

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Food Type"
            name="food_type"
            onChange={handleChange}
          />

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Quantity"
            name="quantity"
            onChange={handleChange}
          />

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Location"
            name="location"
            onChange={handleChange}
          />

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Pickup Time"
            name="pickup_time"
            onChange={handleChange}
          />

          <input
            className="border p-4 w-full rounded-lg"
            placeholder="Expiry Time"
            name="expiry_time"
            onChange={handleChange}
          />

          <button
            onClick={uploadFood}
            className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-orange-600 transition"
          >

            Upload Food

          </button>

        </div>

      </div>

    </div>
  );
}