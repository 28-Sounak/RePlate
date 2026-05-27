import Navbar from "../components/Navbar";

export default function Home() {

  return (

    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="flex flex-col items-center justify-center h-[70vh]">

        <h1 className="text-7xl font-extrabold text-orange-500">
          RePlate
        </h1>

        <p className="mt-6 text-2xl text-gray-700">
          Turning Surplus Food Into Support
        </p>

        <button className="mt-10 bg-green-500 text-white px-8 py-4 rounded-xl text-xl hover:bg-green-600 transition">

          Save Food. Feed Lives.

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-orange-500">
            Reduce Waste
          </h2>

          <p className="mt-3 text-gray-600">
            Prevent edible food from being discarded.
          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-orange-500">
            NGO Matching
          </h2>

          <p className="mt-3 text-gray-600">
            Automatically connect donors to NGOs.
          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-orange-500">
            Fast Delivery
          </h2>

          <p className="mt-3 text-gray-600">
            Volunteers ensure quick food distribution.
          </p>

        </div>

      </div>

    </div>

  );
}