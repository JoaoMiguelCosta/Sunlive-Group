import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import TravelFeaturePanel from "../../../../shared/ui/TravelFeaturePanel/TravelFeaturePanel.jsx";

export default function PartnerHotelsHero({ hero = {} }) {
  return (
    <ScrollReveal>
      <TravelFeaturePanel
        eyebrow={hero?.eyebrow}
        title={hero?.title}
        description={hero?.lead}
        supportingText={hero?.supportingText}
        items={hero?.insights}
        sectionKey="partner-hotels-feature-panel"
        titleAs="h1"
        itemTitleAs="h2"
      />
    </ScrollReveal>
  );
}
