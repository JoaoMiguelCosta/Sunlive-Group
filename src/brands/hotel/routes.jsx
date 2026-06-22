import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import {
  HOTEL_BASE_PATH,
  HOTEL_PAGE_PATHS,
} from "./config/core/paths.js";

const HotelShell = lazy(() => import("./layouts/HotelShell.jsx"));

const HomePageHotel = lazy(() => import("./pages/Home/index.jsx"));

const AboutPageHotel = lazy(() => import("./pages/About/index.jsx"));

const AccommodationPageHotel = lazy(() =>
  import("./pages/Accommodation/index.jsx"),
);

const DiningPageHotel = lazy(() => import("./pages/Dining/index.jsx"));

const FacilitiesLeisurePageHotel = lazy(() =>
  import("./pages/FacilitiesLeisure/index.jsx"),
);

const EventsPageHotel = lazy(() => import("./pages/Events/index.jsx"));

const SustainabilityPageHotel = lazy(() =>
  import("./pages/Sustainability/index.jsx"),
);

const InformationPageHotel = lazy(() =>
  import("./pages/Information/index.jsx"),
);

export const hotelRoutes = [
  <Route key="hotel" path={HOTEL_BASE_PATH} element={<HotelShell />}>
    <Route index element={<HomePageHotel />} />

    <Route path="sobre" element={<AboutPageHotel />} />
    <Route path="estadia" element={<AccommodationPageHotel />} />
    <Route path="restauracao" element={<DiningPageHotel />} />
    <Route
      path="instalacoes-lazer"
      element={<FacilitiesLeisurePageHotel />}
    />
    <Route path="eventos" element={<EventsPageHotel />} />
    <Route
      path="sustentabilidade"
      element={<SustainabilityPageHotel />}
    />
    <Route path="informacoes" element={<InformationPageHotel />} />

    <Route
      path="*"
      element={<Navigate to={HOTEL_PAGE_PATHS.home} replace />}
    />
  </Route>,
];

