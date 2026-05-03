import { Route, Navigate } from "react-router-dom";

import GroupShell from "./layout/GroupShell.jsx";

import GroupHome from "./pages/GroupHome.jsx";
import GroupLogos from "./pages/GroupLogos.jsx";

export const groupRoutes = [
  <Route
    key="root"
    path="/"
    element={<Navigate to="/sunlive-group" replace />}
  />,

  <Route key="group-shell" path="/sunlive-group" element={<GroupShell />}>
    <Route index element={<GroupHome />} />
    <Route path="logos" element={<GroupLogos />} />
  </Route>,
];
