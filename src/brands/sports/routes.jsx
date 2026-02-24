// src/brands/sports/routes.jsx
import { Route, Navigate } from "react-router-dom";

/* Sports — layouts */
import SportsShellHome from "./layouts/SportsShellHome.jsx";
import SportsShellInner from "./layouts/SportsShellInner.jsx";

/* Sports — páginas */
import HomePageSports from "./pages/Home/index.jsx";
import TrainingCampsPage from "./pages/TrainingCamps/index.jsx";
import AcademiesPage from "./pages/Academies/index.jsx";
import EventsPage from "./pages/Events/index.jsx";
import AthletesPage from "./pages/Athletes/index.jsx";
import SpecialisedServicesPage from "./pages/SpecialisedServices/index.jsx";
import EducationPage from "./pages/Education/index.jsx";
import LeisureSportsTourismPage from "./pages/LeisureSportsTourism/index.jsx";
import DisciplinesPage from "./pages/Disciplines/index.jsx";
import InfrastructuresPage from "./pages/Infrastructures/index.jsx";
import LogisticsPage from "./pages/Logistics/index.jsx";
import ConsultancyPage from "./pages/Consultancy/index.jsx";
import ContactsPage from "./pages/Contacts/index.jsx";

export default function sportsRoutes() {
  return (
    <>
      {/* ===== Submarca — Sports ===== */}

      {/* Grupo 1: HOME (back → Sunlive Group) */}
      <Route path="/sunlive-group/sports" element={<SportsShellHome />}>
        <Route index element={<HomePageSports />} />
      </Route>

      {/* Grupo 2: Restantes páginas (back → Menu Sports) */}
      <Route path="/sunlive-group/sports" element={<SportsShellInner />}>
        <Route path="training-camps" element={<TrainingCampsPage />} />
        <Route path="academies" element={<AcademiesPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="sunlive-athletes" element={<AthletesPage />} />
        <Route
          path="specialised-services"
          element={<SpecialisedServicesPage />}
        />
        <Route path="education" element={<EducationPage />} />
        <Route
          path="leisure-sports-tourism"
          element={<LeisureSportsTourismPage />}
        />
        <Route path="sports-disciplines" element={<DisciplinesPage />} />
        <Route path="infrastructures" element={<InfrastructuresPage />} />
        <Route path="logistics" element={<LogisticsPage />} />
        <Route path="consultancy" element={<ConsultancyPage />} />
        <Route path="contacts" element={<ContactsPage />} />

        {/* Qualquer sub-rota inválida dentro de /sports → home de Sports */}
        <Route
          path="*"
          element={<Navigate to="/sunlive-group/sports" replace />}
        />
      </Route>
    </>
  );
}
