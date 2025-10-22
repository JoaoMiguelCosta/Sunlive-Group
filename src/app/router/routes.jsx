// src/app/router/routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import GroupPage from "../../brands/group/pages/GroupPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GroupPage />} />
      <Route path="/sunlive-group" element={<GroupPage />} />

      {/* Rotas ainda sem página → redirect para Home */}
      <Route
        path="/sunlive-group-logos"
        element={<Navigate to="/sunlive-group" replace />}
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

      <Route path="*" element={<Navigate to="/sunlive-group" replace />} />
    </Routes>
  );
}
