// src/brands/sports/pages/Logistics/LogisticsClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Logística.
 * Lê os dados de `logistics.closingPanel` no configSports.
 */
export default function LogisticsClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
