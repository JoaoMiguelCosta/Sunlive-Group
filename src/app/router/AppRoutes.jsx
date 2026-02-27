

import { Routes, Route, Navigate } from "react-router-dom";

import { groupRoutes } from "../../brands/group/routes.jsx";
import { travelRoutes } from "../../brands/travel/routes.jsx";
import { sportsRoutes } from "../../brands/sports/routes.jsx";
import { hotelRoutes } from "../../brands/hotel/routes.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {groupRoutes}
      {travelRoutes}
      {sportsRoutes}
      {hotelRoutes}

      <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
    </Routes>
  );
}
