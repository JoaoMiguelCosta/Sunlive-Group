// src/brands/sports/pages/LeisureSportsTourism/LeisureSportsTourismClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Turismo Desportivo Lúdico.
 * Lê os dados de `leisureSportsTourism.closingPanel` no configSports.
 */
export default function LeisureSportsTourismClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
