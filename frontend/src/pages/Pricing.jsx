export default function Pricing() {

  const plans = [

    {
      name: "Free",
      price: "₹0",
      duration: "3 Uploads",
      color: "border-gray-300"
    },

    {
      name: "Starter",
      price: "₹199",
      duration: "15 Days",
      color: "border-green-500"
    },

    {
      name: "Growth",
      price: "₹299",
      duration: "20 Days",
      color: "border-orange-500"
    },

    {
      name: "Premium",
      price: "₹499",
      duration: "30 Days",
      color: "border-purple-500"
    }

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-6xl font-bold text-center text-orange-500 mb-16">

        Restaurant Subscription Plans

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`bg-white border-4 ${plan.color} rounded-3xl shadow-2xl p-8 text-center`}
          >

            <h2 className="text-4xl font-bold">

              {plan.name}

            </h2>

            <h1 className="text-6xl font-extrabold mt-6 text-orange-500">

              {plan.price}

            </h1>

            <p className="mt-4 text-2xl text-gray-600">

              {plan.duration}

            </p>

            <button className="mt-10 bg-orange-500 text-white px-8 py-4 rounded-xl text-xl hover:bg-orange-600 transition">

              Choose Plan

            </button>

          </div>

        ))}

      </div>

    </div>

  );
}