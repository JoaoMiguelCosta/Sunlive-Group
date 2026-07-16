import partners from "../../../../config/pages/partners.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function PartnersActionPanelSection() {
  const section = partners.sections.partnersActionPanel;

  if (!section) return null;

  return (
    <ScrollReveal>
      <TravelActionPanel
        panel={section?.actionPanel}
        cta={section?.cta}
        sectionKey="partners-action-panel"
      />
    </ScrollReveal>
  );
}
