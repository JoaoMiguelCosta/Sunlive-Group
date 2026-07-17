import logistics from "../../../../config/pages/logistics.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function LogisticsActionPanelSection() {
  const section = logistics.sections.logisticsActionPanel;

  if (!section) return null;

  return (
    <ScrollReveal>
      <TravelActionPanel
        panel={section?.actionPanel}
        cta={section?.cta}
        sectionKey="logistics-action-panel"
      />
    </ScrollReveal>
  );
}
