// src/brands/sports/pages/Athletes/AthletesClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Atletas Sunlive.
 * Lê os dados de `athletes.closingPanel` no configSports.
 */
export default function AthletesClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
