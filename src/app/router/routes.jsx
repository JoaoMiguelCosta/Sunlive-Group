// src/app/router/routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import GroupPage from "../../brands/group/pages/GroupPage.jsx";
import PartnersLogosPage from "../../brands/group/pages/PartnersLogosPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home + Página Mãe */}
      <Route path="/" element={<GroupPage />} />
      <Route path="/sunlive-group" element={<GroupPage />} />

      {/* Subpágina — Logos dos Parceiros */}
      <Route path="/sunlive-group/logos" element={<PartnersLogosPage />} />

      {/* Redirects legacy/temporários */}
      <Route
        path="/sunlive-group-logos"
        element={<Navigate to="/sunlive-group/logos" replace />}
      />
      <Route
        path="/sunlive-group/travel"
        element={<Navigate to="/sunlive-group" replace />}
      />
      <Route
        path="/sunlive-group/sports/*"
        element={<Navigate to="/sunlive-group" replace />}
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
