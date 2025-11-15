// src/app/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

/* Group */
import GroupPage from "../../brands/group/pages/GroupPage.jsx";
import PartnersLogosPage from "../../brands/group/pages/PartnersLogosPage.jsx";

/* Travel */
import TravelPage from "../../brands/travel/page/TravelPage.jsx";

/* Sports — layouts */
import SportsShellHome from "../../brands/sports/layouts/SportsShellHome.jsx";
import SportsShellInner from "../../brands/sports/layouts/SportsShellInner.jsx";

/* Sports — páginas */
import HomePageSports from "../../brands/sports/pages/Home/index.jsx";
import TrainingCampsPage from "../../brands/sports/pages/TrainingCamps/index.jsx";

import AcademiesPage from "../../brands/sports/pages/Academies/index.jsx";
import EventsPage from "../../brands/sports/pages/Events/index.jsx";
import AthletesPage from "../../brands/sports/pages/Athletes/index.jsx";
import SpecialisedServicesPage from "../../brands/sports/pages/SpecialisedServices/index.jsx";
import EducationPage from "../../brands/sports/pages/Education/index.jsx";
import LeisureSportsTourismPage from "../../brands/sports/pages/LeisureSportsTourism/index.jsx";
import DisciplinesPage from "../../brands/sports/pages/Disciplines/index.jsx";
import InfrastructuresPage from "../../brands/sports/pages/Infrastructures/index.jsx";
import LogisticsPage from "../../brands/sports/pages/Logistics/index.jsx";
import ConsultancyPage from "../../brands/sports/pages/Consultancy/index.jsx";

/*


import Gallery from "../../brands/sports/pages/Gallery.jsx";
*/

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home + Página Mãe */}
      <Route path="/" element={<GroupPage />} />
      <Route path="/sunlive-group" element={<GroupPage />} />

      {/* Subpágina — Logos dos Parceiros */}
      <Route path="/sunlive-group/logos" element={<PartnersLogosPage />} />

      {/* Submarca — Travel */}
      <Route path="/sunlive-group/travel" element={<TravelPage />} />

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
        {/*


<Route path="gallery" element={<Gallery />} />
*/}
        {/* Qualquer sub-rota inválida dentro de /sports → home de Sports */}
        <Route
          path="*"
          element={<Navigate to="/sunlive-group/sports" replace />}
        />
      </Route>

      {/* Redirects legacy/temporários */}
      <Route
        path="/sunlive-group-logos"
        element={<Navigate to="/sunlive-group/logos" replace />}
      />
      <Route
        path="/sunlive-group/our-home/*"
        element={<Navigate to="/sunlive-group" replace />}
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
    </Routes>
  );
}
