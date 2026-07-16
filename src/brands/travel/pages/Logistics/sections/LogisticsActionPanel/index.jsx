import logistics from "../../../../config/pages/logistics.js";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function LogisticsActionPanelSection() {
  const section = logistics.sections.logisticsActionPanel;

  if (!section) return null;

  return (
    <TravelActionPanel
      panel={section?.actionPanel}
      cta={section?.cta}
      sectionKey="logistics-action-panel"
    />
  );
}
