import { lazy } from "react";
import { Route } from "react-router-dom";
import { TRAVEL_BASE_PATH } from "./config/index.js";
const TravelPageLayout = lazy(() => import("./layouts/TravelPageLayout.jsx"));
const HomePage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({ default: module.HomePage })),
);
const LogisticsPage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({
    default: module.LogisticsPage,
  })),
);
const DestinationsPage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({
    default: module.DestinationsPage,
  })),
);
const PartnersPage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({
    default: module.PartnersPage,
  })),
);
const TestimonialsPage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({
    default: module.TestimonialsPage,
  })),
);
const ContactsPage = lazy(() =>
  import("./pages/index.jsx").then((module) => ({
    default: module.ContactsPage,
  })),
);
export const travelRoutes = (
  <Route path={TRAVEL_BASE_PATH} element={<TravelPageLayout />}>
    {" "}
    <Route index element={<HomePage />} />{" "}
    <Route path="logistica" element={<LogisticsPage />} />{" "}
    <Route path="destinos" element={<DestinationsPage />} />{" "}
    <Route path="parceiros" element={<PartnersPage />} />{" "}
    <Route path="testemunhos" element={<TestimonialsPage />} />{" "}
    <Route path="contactos" element={<ContactsPage />} />{" "}
  </Route>
);
export default travelRoutes;
