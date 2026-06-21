import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
const GroupShell = lazy(() => import("./layout/GroupShell.jsx"));
const GroupHome = lazy(() => import("./pages/GroupHome.jsx"));
const GroupLogos = lazy(() => import("./pages/GroupLogos.jsx"));
export const groupRoutes = [
  <Route
    key="root"
    path="/"
    element={<Navigate to="/sunlive-group" replace />}
  />,
  <Route key="group-shell" path="/sunlive-group" element={<GroupShell />}>
    {" "}
    <Route index element={<GroupHome />} />{" "}
    <Route path="logos" element={<GroupLogos />} />{" "}
  </Route>,
];
