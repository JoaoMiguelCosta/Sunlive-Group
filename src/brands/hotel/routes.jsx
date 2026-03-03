import { Route, Navigate } from "react-router-dom";

import HotelShell from "./layouts/HotelShell.jsx";

import HomePageHotel from "./pages/Home/index.jsx";
import AboutPageHotel from "./pages/About/index.jsx";
import AccommodationPageHotel from "./pages/Accommodation/index.jsx";
import DiningPageHotel from "./pages/Dining/index.jsx";
import FacilitiesLeisurePageHotel from "./pages/FacilitiesLeisure/index.jsx";
import EventsPageHotel from "./pages/Events/index.jsx";
import SustainabilityPageHotel from "./pages/Sustainability/index.jsx";
import InformationPageHotel from "./pages/Information/index.jsx";

export const hotelRoutes = [
  <Route key="hotel" path="/sunlive-group/hotel" element={<HotelShell />}>
    <Route index element={<HomePageHotel />} />

    {/* ✅ Canonical EN routes */}
    <Route path="about" element={<AboutPageHotel />} />
    <Route path="accommodation" element={<AccommodationPageHotel />} />
    <Route path="dining" element={<DiningPageHotel />} />
    <Route path="facilities" element={<FacilitiesLeisurePageHotel />} />
    <Route path="events" element={<EventsPageHotel />} />
    <Route path="sustainability" element={<SustainabilityPageHotel />} />
    <Route path="information" element={<InformationPageHotel />} />

    {/* Fallback */}
    <Route path="*" element={<Navigate to="/sunlive-group/hotel" replace />} />
  </Route>,
];
