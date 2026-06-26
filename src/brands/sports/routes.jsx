import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS } from "./config/core/paths.js";

const SportsShell = lazy(() => import("./layouts/SportsShell.jsx"));

const HomePageSports = lazy(() => import("./pages/Home/index.jsx"));

const TrainingCampsPage = lazy(() => import("./pages/TrainingCamps/index.jsx"));

const AcademiesPage = lazy(() => import("./pages/Academies/index.jsx"));

const EventsPage = lazy(() => import("./pages/Events/index.jsx"));

const AthletesPage = lazy(() => import("./pages/Athletes/index.jsx"));

const TestimonialsPage = lazy(() => import("./pages/Testimonials/index.jsx"));

const SpecialisedServicesPage = lazy(
  () => import("./pages/SpecialisedServices/index.jsx"),
);

const EducationPage = lazy(() => import("./pages/Education/index.jsx"));

const LeisureSportsTourismPage = lazy(
  () => import("./pages/LeisureSportsTourism/index.jsx"),
);

const ModalitiesPage = lazy(() => import("./pages/Modalities/index.jsx"));

const InfrastructuresPage = lazy(
  () => import("./pages/Infrastructures/index.jsx"),
);

const LogisticsPage = lazy(() => import("./pages/Logistics/index.jsx"));

const ConsultancyPage = lazy(() => import("./pages/Consultancy/index.jsx"));

const ContactsPage = lazy(() => import("./pages/Contacts/index.jsx"));

export const sportsRoutes = [
  <Route key="sports" path={SPORTS_BASE_PATH} element={<SportsShell />}>
    <Route index element={<HomePageSports />} />

    <Route path="estagios-desportivos" element={<TrainingCampsPage />} />
    <Route path="academias" element={<AcademiesPage />} />
    <Route path="eventos" element={<EventsPage />} />
    <Route path="atletas-sunlive" element={<AthletesPage />} />
    <Route path="testemunhos" element={<TestimonialsPage />} />

    <Route
      path="servicos-especializados"
      element={<SpecialisedServicesPage />}
    />

    <Route path="educacao" element={<EducationPage />} />

    <Route
      path="turismo-desportivo-ludico"
      element={<LeisureSportsTourismPage />}
    />

    <Route path="modalidades" element={<ModalitiesPage />} />
    <Route path="infraestruturas" element={<InfrastructuresPage />} />
    <Route path="logistica" element={<LogisticsPage />} />
    <Route path="consultoria" element={<ConsultancyPage />} />
    <Route path="contactos" element={<ContactsPage />} />

    <Route
      path="training-camps"
      element={<Navigate to={SPORTS_PAGE_PATHS.trainingCamps} replace />}
    />

    <Route
      path="academies"
      element={<Navigate to={SPORTS_PAGE_PATHS.academies} replace />}
    />

    <Route
      path="events"
      element={<Navigate to={SPORTS_PAGE_PATHS.events} replace />}
    />

    <Route
      path="sunlive-athletes"
      element={<Navigate to={SPORTS_PAGE_PATHS.athletes} replace />}
    />

    <Route
      path="testimonials"
      element={<Navigate to={SPORTS_PAGE_PATHS.testimonials} replace />}
    />

    <Route
      path="depoimentos"
      element={<Navigate to={SPORTS_PAGE_PATHS.testimonials} replace />}
    />

    <Route
      path="specialised-services"
      element={<Navigate to={SPORTS_PAGE_PATHS.specialisedServices} replace />}
    />

    <Route
      path="education"
      element={<Navigate to={SPORTS_PAGE_PATHS.education} replace />}
    />

    <Route
      path="leisure-sports-tourism"
      element={<Navigate to={SPORTS_PAGE_PATHS.leisureSportsTourism} replace />}
    />

    <Route
      path="turismo-desportivo-e-lazer"
      element={<Navigate to={SPORTS_PAGE_PATHS.leisureSportsTourism} replace />}
    />

    <Route
      path="modalities"
      element={<Navigate to={SPORTS_PAGE_PATHS.modalities} replace />}
    />

    <Route
      path="sports-modalities"
      element={<Navigate to={SPORTS_PAGE_PATHS.modalities} replace />}
    />

    <Route
      path="infrastructures"
      element={<Navigate to={SPORTS_PAGE_PATHS.infrastructures} replace />}
    />

    <Route
      path="logistics"
      element={<Navigate to={SPORTS_PAGE_PATHS.logistics} replace />}
    />

    <Route
      path="consultancy"
      element={<Navigate to={SPORTS_PAGE_PATHS.consultancy} replace />}
    />

    <Route
      path="contacts"
      element={<Navigate to={SPORTS_PAGE_PATHS.contacts} replace />}
    />

    <Route path="*" element={<Navigate to={SPORTS_BASE_PATH} replace />} />
  </Route>,
];
