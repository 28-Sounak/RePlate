import { useState } from "react";

export default function NGORequests() {

  const [status, setStatus] = useState(
    "Waiting for NGO response..."
  );

  const handleAcceptWithWorker = () => {
    setStatus(
      "NGO accepted order and dispatched worker."
    );
  };

  const handleAcceptWithoutWorker = () => {
    setStatus(
      "NGO accepted order. Volunteer assignment required."
    );
  };

  const handleReject = () => {
    setStatus(
      "NGO rejected request. Searching nearest NGO..."
    );
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-orange-500 mb-8">

        NGO Response Center

      </h1>

      <div className="bg-white rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-bold">

          Surplus Food Request

        </h2>

        <div className="mt-6 space-y-4 text-lg">

          <p>
            Restaurant: Spice Garden
          </p>

          <p>
            Food Quantity: 120 Meals
          </p>

          <p>
            Pickup Distance: 2.4 km
          </p>

          <p>
            AI Suggested NGO Match Score: 94%
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10">

          <button
            onClick={handleAcceptWithWorker}
            className="bg-green-500 text-white px-6 py-4 rounded-xl text-lg hover:bg-green-600 transition"
          >

            I Will Accept & Send Worker

          </button>

          <button
            onClick={handleAcceptWithoutWorker}
            className="bg-blue-500 text-white px-6 py-4 rounded-xl text-lg hover:bg-blue-600 transition"
          >

            Accept But Need Volunteer

          </button>

          <button
            onClick={handleReject}
            className="bg-red-500 text-white px-6 py-4 rounded-xl text-lg hover:bg-red-600 transition"
          >

            Reject Request

          </button>

        </div>

        <div className="mt-10 bg-gray-100 p-6 rounded-2xl">

          <h3 className="text-2xl font-bold text-gray-700">

            Current Status

          </h3>

          <p className="mt-4 text-xl text-gray-600">

            {status}

          </p>

        </div>

      </div>

    </div>

  );
}