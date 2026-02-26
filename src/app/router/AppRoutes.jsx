import { Routes, Route, Navigate } from "react-router-dom";

/* Group (modular) */
import groupRoutes from "../../brands/group/routes.jsx";

/* Travel (modular) */
import travelRoutes from "../../brands/travel/routes.jsx";

/* Sports (modular) */
import sportsRoutes from "../../brands/sports/routes.jsx";

/* Hotel (modular) */
import hotelRoutes from "../../brands/hotel/routes.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ===== Brand — Group ===== */}
      {groupRoutes()}

      {/* ===== Submarca — Travel ===== */}
      {travelRoutes()}

      {/* ===== Submarca — Sports ===== */}
      {sportsRoutes()}

      {/* ===== Submarca — Hotel ===== */}
      {hotelRoutes()}

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
    </Routes>
  );
}
