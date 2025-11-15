// src/brands/sports/pages/Consultancy/ConsultancyClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Consultoria.
 * Lê os dados de `consultancy.closingPanel` no configSports.
 */
export default function ConsultancyClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
