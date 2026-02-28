import { Route, Navigate } from "react-router-dom";

import HotelShell from "./layouts/HotelShell.jsx";

import HomePageHotel from "./pages/Home/index.jsx";
import AboutPageHotel from "./pages/About/index.jsx";
import AccommodationPageHotel from "./pages/Accommodation/index.jsx";
import RestorationPageHotel from "./pages/Restoration/index.jsx";
import FacilitiesLeisurePageHotel from "./pages/FacilitiesLeisure/index.jsx";
import EventsPageHotel from "./pages/Events/index.jsx";
import InformationPageHotel from "./pages/Information/index.jsx";

export const hotelRoutes = [
  <Route key="hotel" path="/sunlive-group/hotel" element={<HotelShell />}>
    <Route index element={<HomePageHotel />} />

    {/* ✅ Canonical EN routes */}
    <Route path="about" element={<AboutPageHotel />} />
    <Route path="accommodation" element={<AccommodationPageHotel />} />
    <Route path="restoration" element={<RestorationPageHotel />} />
    <Route path="facilities" element={<FacilitiesLeisurePageHotel />} />
    <Route path="events" element={<EventsPageHotel />} />
    <Route path="information" element={<InformationPageHotel />} />

    {/* 🔁 Legacy PT aliases -> redirect to EN */}
    <Route path="sobre" element={<Navigate to="../about" replace />} />
    <Route
      path="estadia"
      element={<Navigate to="../accommodation" replace />}
    />
    <Route
      path="restauracao"
      element={<Navigate to="../restoration" replace />}
    />
    <Route
      path="instalacoes"
      element={<Navigate to="../facilities" replace />}
    />
    <Route path="eventos" element={<Navigate to="../events" replace />} />
    <Route
      path="informacoes"
      element={<Navigate to="../information" replace />}
    />

    {/* Fallback */}
    <Route path="*" element={<Navigate to="/sunlive-group/hotel" replace />} />
  </Route>,
];
