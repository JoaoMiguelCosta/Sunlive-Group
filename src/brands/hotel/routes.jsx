import { Route, Navigate } from "react-router-dom";

import HotelShell from "./layouts/HotelShell.jsx";
import HomePageHotel from "./pages/Home/index.jsx";
import AboutPageHotel from "./pages/About/index.jsx";
import AccommodationPageHotel from "./pages/Accommodation/index.jsx";
import RestaurantPageHotel from "./pages/Restoration/index.jsx";
import FacilitiesLeisurePageHotel from "./pages/FacilitiesLeisure/index.jsx";
import EventsPageHotel from "./pages/Events/index.jsx";
import InformationPageHotel from "./pages/Information/index.jsx";

export const hotelRoutes = [
  <Route key="hotel" path="/sunlive-group/hotel" element={<HotelShell />}>
    <Route index element={<HomePageHotel />} />

    <Route path="sobre" element={<AboutPageHotel />} />
    <Route path="estadia" element={<AccommodationPageHotel />} />
    <Route path="restauracao" element={<RestaurantPageHotel />} />
    <Route path="instalacoes" element={<FacilitiesLeisurePageHotel />} />
    <Route path="eventos" element={<EventsPageHotel />} />
    <Route path="informacoes" element={<InformationPageHotel />} />

    <Route path="about" element={<Navigate to="sobre" replace />} />
    <Route path="accommodation" element={<Navigate to="estadia" replace />} />

    <Route path="*" element={<Navigate to="/sunlive-group/hotel" replace />} />
  </Route>,
];
