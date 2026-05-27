export default function Navbar() {

  return (
    <div className="bg-orange-500 text-white px-10 py-5 flex justify-between items-center shadow-lg">

      <h1 className="text-3xl font-bold">
        RePlate
      </h1>

      <div className="space-x-6 text-lg">

        <a href="/">Home</a>

        <a href="/upload">
          Upload
        </a>

        <a href="/ngo">
          NGO Dashboard
        </a>

      </div>

    </div>
  );
}