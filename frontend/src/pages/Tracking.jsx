import Navbar from "../components/Navbar";

export default function Tracking() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-orange-500 mb-10">
          Delivery Tracking
        </h1>

        <div className="space-y-6">

          <div className="bg-green-100 p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-green-700">
              Food Uploaded
            </h2>

            <p className="mt-2 text-gray-700">
              Restaurant successfully uploaded surplus food.
            </p>

          </div>

          <div className="bg-blue-100 p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-blue-700">
              NGO Accepted Donation
            </h2>

            <p className="mt-2 text-gray-700">
              NGO confirmed pickup request.
            </p>

          </div>

          <div className="bg-purple-100 p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-purple-700">
              Volunteer Assigned
            </h2>

            <p className="mt-2 text-gray-700">
              Volunteer dispatched for pickup.
            </p>

          </div>

          <div className="bg-orange-100 p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-orange-700">
              Food Picked Up
            </h2>

            <p className="mt-2 text-gray-700">
              Food collected from donor location.
            </p>

          </div>

          <div className="bg-gray-200 p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-gray-700">
              Delivered Successfully
            </h2>

            <p className="mt-2 text-gray-700">
              Food delivered to beneficiaries.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}