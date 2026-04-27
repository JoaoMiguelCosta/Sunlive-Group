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

    <Route path="training-camps" element={<TrainingCampsPage />} />
    <Route path="academies" element={<AcademiesPage />} />
    <Route path="events" element={<EventsPage />} />
    <Route path="sunlive-athletes" element={<AthletesPage />} />
    <Route path="specialised-services" element={<SpecialisedServicesPage />} />
    <Route path="education" element={<EducationPage />} />

    <Route
      path="leisure-sports-tourism"
      element={<LeisureSportsTourismPage />}
    />

    <Route path="modalities" element={<ModalitiesPage />} />

    <Route
      path="sports-modalities"
      element={<Navigate to="/sunlive-group/sports/modalities" replace />}
    />

    <Route path="infrastructures" element={<InfrastructuresPage />} />
    <Route path="logistics" element={<LogisticsPage />} />
    <Route path="consultancy" element={<ConsultancyPage />} />
    <Route path="contacts" element={<ContactsPage />} />

    <Route path="*" element={<Navigate to="/sunlive-group/sports" replace />} />
  </Route>,
];
