// src/brands/sports/pages/TrainingCamps/TrainingCampsClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Training Camps.
 * Lê os dados de `trainingCamps.closingPanel` no configSports.
 */
export default function TrainingCampsClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
