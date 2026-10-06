import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import VictimDashboard from "./pages/VictimDashboard";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import DistrictDashboard from "./pages/DistrictDashboard";
import StateDashboard from "./pages/StateDashboard";
import NationalDashboard from "./pages/NationalDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Victim */}
        <Route
          path="/victim-dashboard"
          element={<VictimDashboard />}
        />

        {/* Counsellor */}
        <Route
          path="/counsellor-dashboard"
          element={<CounsellorDashboard />}
        />

        {/* Government Dashboards */}
        <Route
          path="/district-dashboard"
          element={<DistrictDashboard />}
        />

        <Route
          path="/state-dashboard"
          element={<StateDashboard />}
        />

        <Route
          path="/national-dashboard"
          element={<NationalDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;