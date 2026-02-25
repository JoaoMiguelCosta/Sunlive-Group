// src/app/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

/* Group (modular) */
import groupRoutes from "../../brands/group/routes.jsx";

/* Travel (modular) */
import travelRoutes from "../../brands/travel/routes.jsx";

/* Sports (modular) */
import sportsRoutes from "../../brands/sports/routes.jsx";

/* Hotel — layouts + páginas */
import HotelShellHome from "../../brands/hotel/layouts/HotelShellHome.jsx";
import HomePageHotel from "../../brands/hotel/pages/Home/index.jsx";
import AboutPageHotel from "../../brands/hotel/pages/About/index.jsx";
import AccommodationPageHotel from "../../brands/hotel/pages/Accommodation/index.jsx";
import RestaurantPageHotel from "../../brands/hotel/pages/Restoration/index.jsx";
import FacilitiesLeisurePageHotel from "../../brands/hotel/pages/FacilitiesLeisure/index.jsx";
import EventsPageHotel from "../../brands/hotel/pages/Events/index.jsx";
import InformationPageHotel from "../../brands/hotel/pages/Information/index.jsx";

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
      <Route path="/sunlive-group/hotel" element={<HotelShellHome />}>
        <Route index element={<HomePageHotel />} />

        <Route path="sobre" element={<AboutPageHotel />} />
        <Route path="estadia" element={<AccommodationPageHotel />} />
        <Route path="restauracao" element={<RestaurantPageHotel />} />

        <Route path="instalacoes" element={<FacilitiesLeisurePageHotel />} />
        <Route path="eventos" element={<EventsPageHotel />} />
        <Route path="informacoes" element={<InformationPageHotel />} />

        {/* Aliases EN → PT */}
        <Route path="about" element={<Navigate to="sobre" replace />} />
        <Route
          path="accommodation"
          element={<Navigate to="estadia" replace />}
        />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
    </Routes>
  );
}
