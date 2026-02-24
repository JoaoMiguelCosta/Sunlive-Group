// src/brands/sports/pages/TrainingCamps/sections/TrainingCampsClosingPanel.jsx
import SportsClosingPanel from "../../../shared/ui/SportsClosingPanel/SportsClosingPanel.jsx";

export default function TrainingCampsClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
