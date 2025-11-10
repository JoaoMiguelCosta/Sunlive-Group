// src/app/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

/* Group */
import GroupPage from "../../brands/group/pages/GroupPage.jsx";
import PartnersLogosPage from "../../brands/group/pages/PartnersLogosPage.jsx";

/* Travel */
import TravelPage from "../../brands/travel/page/TravelPage.jsx";

/* Sports (13 páginas) */
import SportsHomePage from "../../brands/sports/pages/HomePage.jsx";
import TrainingCamps from "../../brands/sports/pages/TrainingCamps.jsx";
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

      {/* Submarca — Sports (13 páginas) */}
      <Route path="/sunlive-group/sports" element={<SportsHomePage />} />
      <Route
        path="/sunlive-group/sports/training-camps"
        element={<TrainingCamps />}
      />
      <Route path="/sunlive-group/sports/academies" element={<Academies />} />
      <Route path="/sunlive-group/sports/events" element={<Events />} />
      <Route
        path="/sunlive-group/sports/sunlive-athletes"
        element={<SunliveAthletes />}
      />
      <Route
        path="/sunlive-group/sports/specialised-services"
        element={<SpecialisedServices />}
      />
      <Route path="/sunlive-group/sports/education" element={<Education />} />
      <Route
        path="/sunlive-group/sports/leisure-sports-tourism"
        element={<LeisureSportsTourism />}
      />
      <Route
        path="/sunlive-group/sports/sports-disciplines"
        element={<SportsDisciplines />}
      />
      <Route
        path="/sunlive-group/sports/infrastructures"
        element={<Infrastructures />}
      />
      <Route path="/sunlive-group/sports/logistics" element={<Logistics />} />
      <Route
        path="/sunlive-group/sports/consultancy"
        element={<Consultancy />}
      />
      <Route path="/sunlive-group/sports/gallery" element={<Gallery />} />

      {/* Redirects legacy/temporários */}
      <Route
        path="/sunlive-group-logos"
        element={<Navigate to="/sunlive-group/logos" replace />}
      />
      {/* Qualquer rota inválida dentro de /sports → home do Sports */}
      <Route
        path="/sunlive-group/sports/*"
        element={<Navigate to="/sunlive-group/sports" replace />}
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
