import { Route, Navigate } from "react-router-dom";

import { HOTEL_BASE_PATH, HOTEL_PAGE_PATHS } from "./config/core/paths.js";

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
  <Route key="hotel" path={HOTEL_BASE_PATH} element={<HotelShell />}>
    <Route index element={<HomePageHotel />} />

    <Route path="sobre" element={<AboutPageHotel />} />
    <Route path="estadia" element={<AccommodationPageHotel />} />
    <Route path="restauracao" element={<DiningPageHotel />} />
    <Route path="instalacoes-lazer" element={<FacilitiesLeisurePageHotel />} />
    <Route path="eventos" element={<EventsPageHotel />} />
    <Route path="sustentabilidade" element={<SustainabilityPageHotel />} />
    <Route path="informacoes" element={<InformationPageHotel />} />

    <Route path="*" element={<Navigate to={HOTEL_PAGE_PATHS.home} replace />} />
  </Route>,
];
