// src/brands/group/routes.jsx
import React from "react";
import { Route } from "react-router-dom";

import GroupHome from "./pages/GroupHome.jsx";
import GroupLogos from "./pages/GroupLogos.jsx";

export default function groupRoutes() {
  return (
    <>
      {/* Home + Página Mãe */}
      <Route path="/" element={<GroupHome />} />
      <Route path="/sunlive-group" element={<GroupHome />} />

      {/* Subpágina — Logos dos Parceiros */}
      <Route path="/sunlive-group/logos" element={<GroupLogos />} />
    </>
  );
}
