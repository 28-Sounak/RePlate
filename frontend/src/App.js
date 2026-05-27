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
import NGORequests from "./pages/NGORequests";
import Pricing from "./pages/Pricing";

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

        <Route
        path="/ngo-requests"
        element={<NGORequests />}
        />

        <Route
        path="/pricing"
        element={<Pricing />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;