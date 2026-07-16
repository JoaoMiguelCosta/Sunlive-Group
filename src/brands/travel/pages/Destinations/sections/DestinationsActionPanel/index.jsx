import destinations from "../../../../config/pages/destinations.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function DestinationsActionPanelSection() {
  const section = destinations.sections.destinationsActionPanel;

  if (!section) return null;

  return (
    <ScrollReveal>
      <TravelActionPanel
        panel={section?.actionPanel}
        cta={section?.cta}
        sectionKey="destinations-action-panel"
      />
    </ScrollReveal>
  );
}
