import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { GROUP_BASE_PATH } from "./config/core/paths.js";
import GroupLogosRedirect from "./layouts/GroupLogosRedirect.jsx";

const GroupShell = lazy(() => import("./layouts/GroupShell.jsx"));
const GroupHome = lazy(() => import("./pages/GroupHome/index.jsx"));

export const groupRoutes = [
  <Route
    key="root"
    path="/"
    element={<Navigate to="/sunlive-group" replace />}
  />,
  <Route
    key="group-logos-legacy"
    path="/sunlive-group-logos"
    element={<GroupLogosRedirect />}
  />,
  <Route key="group-shell" path={GROUP_BASE_PATH} element={<GroupShell />}>
    <Route index element={<GroupHome />} />
    <Route path="logos" element={<GroupLogosRedirect />} />
  </Route>,
];
