import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import UploadFood from "./pages/UploadFood";
import NGO from "./pages/NGO";
import Login from "./pages/Login";
import Tracking from "./pages/Tracking";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/upload"
          element={<UploadFood />}
        />

        <Route
          path="/ngo"
          element={<NGO />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/tracking"
          element={<Tracking />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;