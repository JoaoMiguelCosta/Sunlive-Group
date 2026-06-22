import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { groupRoutes } from "../../brands/group/routes.jsx";
import { hotelRoutes } from "../../brands/hotel/routes.jsx";
import { sportsRoutes } from "../../brands/sports/routes.jsx";
import { travelRoutes } from "../../brands/travel/routes.jsx";

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {groupRoutes}
        {travelRoutes}
        {sportsRoutes}
        {hotelRoutes}

        <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
      </Routes>
    </Suspense>
  );
}
