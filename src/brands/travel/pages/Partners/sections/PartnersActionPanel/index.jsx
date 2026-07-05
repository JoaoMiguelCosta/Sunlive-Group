import partners from "../../../../config/pages/partners.js";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function PartnersActionPanelSection() {
  const section = partners.sections.partnersActionPanel;

  if (!section) return null;

  return (
    <TravelActionPanel
      panel={section?.actionPanel}
      cta={section?.cta}
      sectionKey="partners-action-panel"
    />
  );
}
