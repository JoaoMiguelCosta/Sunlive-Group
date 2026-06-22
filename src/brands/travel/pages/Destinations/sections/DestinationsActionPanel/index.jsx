import destinationsActionPanel from "../../../../config/sections/destinations/destinationsActionPanel.js";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function DestinationsActionPanelSection() {
  const section = destinationsActionPanel;

  if (!section) return null;

  return (
    <TravelActionPanel
      panel={section?.actionPanel}
      cta={section?.cta}
      sectionKey="destinations-action-panel"
    />
  );
}
