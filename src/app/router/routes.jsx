// src/app/router/routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import GroupHome from "../../brands/group/Home.jsx";
import SportsHome from "../../brands/sports/Home.jsx";
import HotelHome from "../../brands/hotel/Home.jsx";
import TravelHome from "../../brands/travel/Home.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/group" replace />} />
      <Route path="/group" element={<GroupHome />} />
      <Route path="/sports" element={<SportsHome />} />
      <Route path="/hotel" element={<HotelHome />} />
      <Route path="/travel" element={<TravelHome />} />
      <Route
        path="*"
        element={<div style={{ padding: 16 }}>404 — Página não encontrada</div>}
      />
    </Routes>
  );
}
