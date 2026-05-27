import { useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const navStyle = (path) =>
    `px-4 py-2 rounded-lg transition duration-300 ${
      location.pathname === path
        ? "bg-white/25 backdrop-blur-sm font-semibold"
        : "hover:bg-white/10"
    }`;

  return (
    <div className="bg-orange-500 text-white px-10 py-5 flex justify-between items-center shadow-lg">

      <h1 className="text-3xl font-bold">
        RePlate
      </h1>

      <div className="space-x-4 text-lg flex">

        <a href="/" className={navStyle("/")}>
          Home
        </a>

        <a href="/upload" className={navStyle("/upload")}>
          Upload
        </a>

        <a href="/ngo" className={navStyle("/ngo")}>
          NGO Dashboard
        </a>

      </div>

    </div>
  );
}