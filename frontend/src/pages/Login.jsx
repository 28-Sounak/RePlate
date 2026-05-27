import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "ngo"
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = () => {

    localStorage.setItem(
      "userRole",
      user.role
    );

    alert("Login Successful!");

    if (user.role === "restaurant") {

      navigate("/upload");

    } else if (user.role === "ngo") {

      navigate("/ngo");

    } else {

      navigate("/tracking");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[450px]">

        <h1 className="text-5xl font-bold text-orange-500 text-center">
          RePlate
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login to continue
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >

            <option value="restaurant">
              Restaurant
            </option>

            <option value="ngo">
              NGO
            </option>

            <option value="volunteer">
              Volunteer
            </option>

          </select>

          <button
            onClick={login}
            className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg hover:bg-orange-600 transition"
          >

            Login

          </button>

        </div>

      </div>

    </div>
  );
}