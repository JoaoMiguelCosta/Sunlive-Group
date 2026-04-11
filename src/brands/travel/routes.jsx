import { Route } from "react-router-dom";

import { TRAVEL_BASE_PATH } from "./config/index.js";
import TravelPageLayout from "./layouts/TravelPageLayout.jsx";

import {
  HomePage,
  LogisticsPage,
  DestinationsPage,
  PartnersPage,
  TestimonialsPage,
  ContactsPage,
} from "./pages/index.jsx";

export const travelRoutes = (
  <Route path={TRAVEL_BASE_PATH} element={<TravelPageLayout />}>
    <Route index element={<HomePage />} />
    <Route path="logistica" element={<LogisticsPage />} />
    <Route path="destinos" element={<DestinationsPage />} />
    <Route path="parceiros" element={<PartnersPage />} />
    <Route path="testemunhos" element={<TestimonialsPage />} />
    <Route path="contactos" element={<ContactsPage />} />
  </Route>
);

export default travelRoutes;
