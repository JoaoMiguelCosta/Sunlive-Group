// src/brands/sports/pages/Infrastructures/InfrastructuresClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Infraestruturas.
 * Lê os dados de `infrastructures.closingPanel` no configSports.
 */
export default function InfrastructuresClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
