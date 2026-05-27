import Navbar from "../components/Navbar";

export default function NgoDashboard() {

  const foods = [
    {
      name: "Veg Biryani",
      place: "Spice Garden Restaurant",
      distance: "2 km away",
      quantity: "10 Packets",
      expiry: "Expires in 4 hours",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Mixed Veg Curry",
      place: "Fresh Bites Cafe",
      distance: "1.5 km away",
      quantity: "8 Packets",
      expiry: "Expires in 3 hours",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Dal Tadka",
      place: "Food Corner",
      distance: "2.8 km away",
      quantity: "6 Packets",
      expiry: "Expires in 5 hours",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Roti (Pack of 20)",
      place: "Royal Kitchen",
      distance: "3.2 km away",
      quantity: "20 Pieces",
      expiry: "Expires in 6 hours",
      image:
  "https://www.google.com/imgres?q=picture%20of%20rotis&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F74%2F2020-05-08_19_34_28_Chapati_being_made_in_a_pan_in_the_Franklin_Farm_section_of_Oak_Hill%252C_Fairfax_County%252C_Virginia.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRoti&docid=SAjeFAJAGgiPVM&tbnid=qzxBsuaHjQuAAM&vet=12ahUKEwjjx5r-tdqUAxWCxDgGHVyJN68QnPAOegQIIhAB..i&w=4032&h=3024&hcb=2&ved=2ahUKEwjjx5r-tdqUAxWCxDgGHVyJN68QnPAOegQIIhAB",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="px-10 py-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-green-800">
              NGO Dashboard
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Find and collect surplus food to support those in need.
            </p>

          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search for nearby surplus food..."
            className="w-full md:w-[500px] px-6 py-4 rounded-2xl border border-gray-200 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

          <div className="bg-green-50 rounded-3xl p-8 shadow-sm border border-green-100">

            <h1 className="text-5xl font-bold text-green-600">
              12
            </h1>

            <p className="text-2xl mt-3 font-semibold">
              Available Foods
            </p>

            <p className="text-gray-500 mt-2">
              Ready to be collected
            </p>

          </div>

          <div className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">

            <h1 className="text-5xl font-bold text-blue-600">
              5
            </h1>

            <p className="text-2xl mt-3 font-semibold">
              Assigned
            </p>

            <p className="text-gray-500 mt-2">
              Foods assigned to you
            </p>

          </div>

          <div className="bg-yellow-50 rounded-3xl p-8 shadow-sm border border-yellow-100">

            <h1 className="text-5xl font-bold text-yellow-600">
              3
            </h1>

            <p className="text-2xl mt-3 font-semibold">
              In Transit
            </p>

            <p className="text-gray-500 mt-2">
              Foods on the way
            </p>

          </div>

          <div className="bg-purple-50 rounded-3xl p-8 shadow-sm border border-purple-100">

            <h1 className="text-5xl font-bold text-purple-600">
              27
            </h1>

            <p className="text-2xl mt-3 font-semibold">
              Completed
            </p>

            <p className="text-gray-500 mt-2">
              Foods successfully collected
            </p>

          </div>

        </div>

        {/* Food Section */}
        <div>

          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Available Surplus Food
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {foods.map((food, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >

                {/* Food Image */}
                <div className="relative">

                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-56 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                    New
                  </span>

                </div>

                {/* Food Details */}
                <div className="p-6">

                  <h2 className="text-3xl font-bold text-green-900">
                    {food.name}
                  </h2>

                  <div className="mt-5 space-y-3 text-gray-600">

                    <p>
                      📍 {food.place}
                    </p>

                    <p>
                      🛵 {food.distance}
                    </p>

                    <p>
                      📦 {food.quantity}
                    </p>

                    <p>
                      ⏰ {food.expiry}
                    </p>

                  </div>

                  <button className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-300">
                    View Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}