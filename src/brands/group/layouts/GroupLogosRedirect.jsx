import { Navigate, useLocation } from "react-router-dom";

import { GROUP_BASE_PATH } from "../config/core/paths.js";

// Mapa de compatibilidade: hashes da antiga página de Logos para os
// novos hashes de categoria da secção Parceiros da homepage.
const LEGACY_LOGOS_HASH_MAP = {
  comites: "partners-committees",
  "federacoes-portuguesas": "partners-portuguese-federations",
  "federacoes-internacionais": "partners-international-federations",
  equipas: "partners-teams",
  associacoes: "partners-associations",
};

export default function GroupLogosRedirect() {
  const { hash } = useLocation();
  const legacyKey = hash ? hash.replace(/^#/, "") : "";
  const mappedHash = LEGACY_LOGOS_HASH_MAP[legacyKey] ?? "partners";

  return <Navigate to={`${GROUP_BASE_PATH}#${mappedHash}`} replace />;
}
