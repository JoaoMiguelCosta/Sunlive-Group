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
import Academies from "../../brands/sports/pages/Academies.jsx";
import Events from "../../brands/sports/pages/Events.jsx";
import SunliveAthletes from "../../brands/sports/pages/SunliveAthletes.jsx";
import SpecialisedServices from "../../brands/sports/pages/SpecialisedServices.jsx";
import Education from "../../brands/sports/pages/Education.jsx";
import LeisureSportsTourism from "../../brands/sports/pages/LeisureSportsTourism.jsx";
import SportsDisciplines from "../../brands/sports/pages/SportsDisciplines.jsx";
import Infrastructures from "../../brands/sports/pages/Infrastructures.jsx";
import Logistics from "../../brands/sports/pages/Logistics.jsx";
import Consultancy from "../../brands/sports/pages/Consultancy.jsx";
import Gallery from "../../brands/sports/pages/Gallery.jsx";

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
        <Route path="academies" element={<Academies />} />
        <Route path="events" element={<Events />} />
        <Route path="sunlive-athletes" element={<SunliveAthletes />} />
        <Route path="specialised-services" element={<SpecialisedServices />} />
        <Route path="education" element={<Education />} />
        <Route
          path="leisure-sports-tourism"
          element={<LeisureSportsTourism />}
        />
        <Route path="sports-disciplines" element={<SportsDisciplines />} />
        <Route path="infrastructures" element={<Infrastructures />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="consultancy" element={<Consultancy />} />
        <Route path="gallery" element={<Gallery />} />

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
