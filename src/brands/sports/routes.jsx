import { Route, Navigate } from "react-router-dom";

import SportsShell from "./layouts/SportsShell.jsx";

import HomePageSports from "./pages/Home/index.jsx";
import TrainingCampsPage from "./pages/TrainingCamps/index.jsx";
import AcademiesPage from "./pages/Academies/index.jsx";
import EventsPage from "./pages/Events/index.jsx";
import AthletesPage from "./pages/Athletes/index.jsx";
import SpecialisedServicesPage from "./pages/SpecialisedServices/index.jsx";
import EducationPage from "./pages/Education/index.jsx";
import LeisureSportsTourismPage from "./pages/LeisureSportsTourism/index.jsx";
import ModalitiesPage from "./pages/Modalities/index.jsx";
import InfrastructuresPage from "./pages/Infrastructures/index.jsx";
import LogisticsPage from "./pages/Logistics/index.jsx";
import ConsultancyPage from "./pages/Consultancy/index.jsx";
import ContactsPage from "./pages/Contacts/index.jsx";

export const sportsRoutes = [
  <Route key="sports" path="/sunlive-group/sports" element={<SportsShell />}>
    <Route index element={<HomePageSports />} />

    <Route path="estagios-desportivos" element={<TrainingCampsPage />} />
    <Route path="academias" element={<AcademiesPage />} />
    <Route path="eventos" element={<EventsPage />} />
    <Route path="atletas-sunlive" element={<AthletesPage />} />
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
