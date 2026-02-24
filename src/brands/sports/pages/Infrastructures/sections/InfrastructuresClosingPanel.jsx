// src/brands/sports/pages/Infrastructures/sections/InfrastructuresClosingPanel.jsx
import SportsClosingPanel from "../../../shared/ui/SportsClosingPanel/SportsClosingPanel.jsx";

export default function InfrastructuresClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
