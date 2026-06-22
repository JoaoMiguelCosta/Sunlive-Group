import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

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
  <Route key="sports" path="/sunlive-group/sports" element={<SportsShell />}>
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
      element={
        <Navigate to="/sunlive-group/sports/estagios-desportivos" replace />
      }
    />

    <Route
      path="academies"
      element={<Navigate to="/sunlive-group/sports/academias" replace />}
    />

    <Route
      path="events"
      element={<Navigate to="/sunlive-group/sports/eventos" replace />}
    />

    <Route
      path="sunlive-athletes"
      element={<Navigate to="/sunlive-group/sports/atletas-sunlive" replace />}
    />

    <Route
      path="testimonials"
      element={<Navigate to="/sunlive-group/sports/testemunhos" replace />}
    />

    <Route
      path="depoimentos"
      element={<Navigate to="/sunlive-group/sports/testemunhos" replace />}
    />

    <Route
      path="specialised-services"
      element={
        <Navigate to="/sunlive-group/sports/servicos-especializados" replace />
      }
    />

    <Route
      path="education"
      element={<Navigate to="/sunlive-group/sports/educacao" replace />}
    />

    <Route
      path="leisure-sports-tourism"
      element={
        <Navigate
          to="/sunlive-group/sports/turismo-desportivo-ludico"
          replace
        />
      }
    />

    <Route
      path="turismo-desportivo-e-lazer"
      element={
        <Navigate
          to="/sunlive-group/sports/turismo-desportivo-ludico"
          replace
        />
      }
    />

    <Route
      path="modalities"
      element={<Navigate to="/sunlive-group/sports/modalidades" replace />}
    />

    <Route
      path="sports-modalities"
      element={<Navigate to="/sunlive-group/sports/modalidades" replace />}
    />

    <Route
      path="infrastructures"
      element={<Navigate to="/sunlive-group/sports/infraestruturas" replace />}
    />

    <Route
      path="logistics"
      element={<Navigate to="/sunlive-group/sports/logistica" replace />}
    />

    <Route
      path="consultancy"
      element={<Navigate to="/sunlive-group/sports/consultoria" replace />}
    />

    <Route
      path="contacts"
      element={<Navigate to="/sunlive-group/sports/contactos" replace />}
    />

    <Route path="*" element={<Navigate to="/sunlive-group/sports" replace />} />
  </Route>,
];
