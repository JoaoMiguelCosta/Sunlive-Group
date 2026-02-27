import { Route, Navigate } from "react-router-dom";

import GroupHome from "./pages/GroupHome.jsx";
import GroupLogos from "./pages/GroupLogos.jsx";

export const groupRoutes = [
  <Route
    key="root"
    path="/"
    element={<Navigate to="/sunlive-group" replace />}
  />,
  <Route key="group-home" path="/sunlive-group" element={<GroupHome />} />,
  <Route
    key="group-logos"
    path="/sunlive-group/logos"
    element={<GroupLogos />}
  />,
];
