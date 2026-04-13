import travelBrand from "../../../../config/index.js";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function DestinationsActionPanelSection() {
  const section =
    travelBrand?.pages?.destinations?.sections?.actionPanel ?? null;

  if (!section) return null;

  return (
    <TravelActionPanel
      panel={section?.actionPanel}
      cta={section?.cta}
      sectionKey="destinations-action-panel"
    />
  );
}
