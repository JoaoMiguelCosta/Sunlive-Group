import destinations from "../../../../config/pages/destinations.js";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function DestinationsActionPanelSection() {
  const section = destinations.sections.destinationsActionPanel;

  if (!section) return null;

  return (
    <TravelActionPanel
      panel={section?.actionPanel}
      cta={section?.cta}
      sectionKey="destinations-action-panel"
      tone="lightForest"
    />
  );
}
