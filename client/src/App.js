import {

  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Bikes from "./pages/Bikes";

import BikeDetails from "./pages/BikeDetails";

import SellBike from "./pages/SellBike";

import Dashboard from "./pages/Dashboard";

import Register from "./pages/Register";

import Login from "./pages/Login";

import Profile from "./pages/Profile";

import PredictPrice from "./pages/PredictPrice";

import EditBike from "./pages/EditBike";

import AIChatBot from "./pages/AIChatBot";

import Recommendations from "./pages/Recommendations";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ALL BIKES */}

        <Route
          path="/bikes"
          element={<Bikes />}
        />

        {/* SINGLE BIKE */}

        <Route
          path="/bike/:id"
          element={<BikeDetails />}
        />

        {/* SELL BIKE */}

        <Route
          path="/sell"
          element={<SellBike />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* PREDICT PRICE */}

        <Route
          path="/predict"
          element={<PredictPrice />}
        />

        {/* EDIT BIKE */}

        <Route
          path="/edit-bike/:id"
          element={<EditBike />}
        />

        {/* AI CHATBOT */}

        <Route
          path="/chatbot"
          element={<AIChatBot />}
        />

        {/* SMART RECOMMENDATION */}

        <Route
          path="/recommend"
          element={<Recommendations />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;