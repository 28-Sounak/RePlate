import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import UploadFood from "./pages/UploadFood";
import NGO from "./pages/NGO";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;