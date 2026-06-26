import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { GROUP_BASE_PATH } from "./config/core/paths.js";

const GroupShell = lazy(() => import("./layouts/GroupShell.jsx"));
const GroupHome = lazy(() => import("./pages/GroupHome/index.jsx"));
const GroupLogos = lazy(() => import("./pages/GroupLogos/index.jsx"));
export const groupRoutes = [
  <Route
    key="root"
    path="/"
    element={<Navigate to="/sunlive-group" replace />}
  />,
  <Route key="group-shell" path={GROUP_BASE_PATH} element={<GroupShell />}>
    <Route index element={<GroupHome />} />
    <Route path="logos" element={<GroupLogos />} />
  </Route>,
];
