import Navbar from "../components/Navbar";

export default function Home() {

  return (
    <div>

      <Navbar />

      <div className="flex flex-col items-center justify-center h-[85vh] bg-gray-50">

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

    </div>
  );
}