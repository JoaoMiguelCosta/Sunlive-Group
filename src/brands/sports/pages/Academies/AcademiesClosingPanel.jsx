// src/brands/sports/pages/Academies/AcademiesClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Academias.
 * Lê os dados de `academies.closingPanel` no configSports.
 */
export default function AcademiesClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
