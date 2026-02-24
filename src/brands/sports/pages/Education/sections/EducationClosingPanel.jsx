// src/brands/sports/pages/Education/sections/EducationClosingPanel.jsx
import SportsClosingPanel from "../../../shared/ui/SportsClosingPanel/SportsClosingPanel.jsx";
export default function EducationClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
