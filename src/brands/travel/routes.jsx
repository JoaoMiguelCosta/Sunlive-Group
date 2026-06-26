import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { TRAVEL_BASE_PATH } from "./config/core/paths.js";

const TravelPageLayout = lazy(() =>
  import("./layouts/TravelPageLayout.jsx"),
);

const HomePage = lazy(() => import("./pages/Home/index.jsx"));

const LogisticsPage = lazy(() =>
  import("./pages/Logistics/index.jsx"),
);

const DestinationsPage = lazy(() =>
  import("./pages/Destinations/index.jsx"),
);

const PartnersPage = lazy(() =>
  import("./pages/Partners/index.jsx"),
);

const TestimonialsPage = lazy(() =>
  import("./pages/Testimonials/index.jsx"),
);

const ContactsPage = lazy(() =>
  import("./pages/Contacts/index.jsx"),
);

export const travelRoutes = (
  <Route path={TRAVEL_BASE_PATH} element={<TravelPageLayout />}>
    <Route index element={<HomePage />} />
    <Route path="logistica" element={<LogisticsPage />} />
    <Route path="destinos" element={<DestinationsPage />} />
    <Route path="parceiros" element={<PartnersPage />} />
    <Route path="testemunhos" element={<TestimonialsPage />} />
    <Route path="contactos" element={<ContactsPage />} />
    <Route path="*" element={<Navigate to={TRAVEL_BASE_PATH} replace />} />
  </Route>
);
