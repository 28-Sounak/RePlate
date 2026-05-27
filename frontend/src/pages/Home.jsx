import Navbar from "../components/Navbar";
import LiveMap from "../components/LiveMap";

export default function Home() {

  return (

    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      {/* Hero Section */}

      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">

        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full mb-6 animate-pulse">

          AI-Powered Food Redistribution Ecosystem

        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-orange-500">

          RePlate

        </h1>

        <p className="mt-6 text-2xl text-gray-700 max-w-3xl">

          Turning Surplus Food Into Support Through
          Smart NGO Matching, Volunteer Networks,
          and Real-Time Food Rescue Operations.

        </p>

        <div className="flex gap-6 mt-10">

          <button className="bg-green-500 text-white px-8 py-4 rounded-xl text-xl hover:bg-green-600 transition shadow-lg">

            Save Food

          </button>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-xl hover:bg-orange-600 transition shadow-lg">

            Explore Dashboard

          </button>

        </div>

      </div>

      {/* Live Ecosystem Stats */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-10 py-10">

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">

          <h2 className="text-5xl font-bold text-orange-500">
            128
          </h2>

          <p className="mt-3 text-gray-600">
            Volunteers Online
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">

          <h2 className="text-5xl font-bold text-green-500">
            4,320
          </h2>

          <p className="mt-3 text-gray-600">
            Meals Served
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">

          <h2 className="text-5xl font-bold text-blue-500">
            34
          </h2>

          <p className="mt-3 text-gray-600">
            Active Donations
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">

          <h2 className="text-5xl font-bold text-purple-500">
            18
          </h2>

          <p className="mt-3 text-gray-600">
            NGOs Nearby
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">

          <h2 className="text-5xl font-bold text-red-500">
            52
          </h2>

          <p className="mt-3 text-gray-600">
            Restaurants Active
          </p>

        </div>

      </div>

      {/* Features Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-20">

        <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition">

          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl">

            ♻️

          </div>

          <h2 className="text-3xl font-bold text-orange-500 mt-6">

            Reduce Waste

          </h2>

          <p className="mt-4 text-gray-600 text-lg">

            Prevent edible food from being discarded
            and redirect it to communities in need.

          </p>

        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition">

          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">

            🤝

          </div>

          <h2 className="text-3xl font-bold text-orange-500 mt-6">

            Smart NGO Matching

          </h2>

          <p className="mt-4 text-gray-600 text-lg">

            AI-powered donation routing automatically
            connects donors to nearby NGOs.

          </p>

        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition">

          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-3xl">

            🚚

          </div>

          <h2 className="text-3xl font-bold text-orange-500 mt-6">

            Fast Volunteer Delivery

          </h2>

          <p className="mt-4 text-gray-600 text-lg">

            Real-time volunteer coordination ensures
            quick and efficient food distribution.

          </p>

        </div>

      </div>

      {/* AI Insights */}

      <div className="px-10 pb-20">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-5xl font-bold">

            AI Control Center

          </h1>

          <p className="mt-4 text-xl">

            Real-time intelligence powering food rescue operations

          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

            <div>

              <h2 className="text-5xl font-bold">
                91%
              </h2>

              <p className="mt-2">
                Match Accuracy
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                4.2T
              </h2>

              <p className="mt-2">
                Food Saved
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                2,430
              </h2>

              <p className="mt-2">
                People Served
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                18
              </h2>

              <p className="mt-2">
                High Risk Zones
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Live Operations Map */}

      <div className="px-10 pb-20">

        <h1 className="text-5xl font-bold text-orange-500 mb-8">

          Live Food Rescue Network

        </h1>

        <p className="text-xl text-gray-600 mb-8">

          Real-time tracking of restaurants,
          NGOs, and volunteers across the city.

        </p>

        <LiveMap />

      </div>

    </div>

  );
}