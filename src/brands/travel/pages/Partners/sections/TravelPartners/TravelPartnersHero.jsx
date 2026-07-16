import TravelFeaturePanel from "../../../../shared/ui/TravelFeaturePanel/TravelFeaturePanel.jsx";

export default function TravelPartnersHero({ hero = {} }) {
  return (
    <TravelFeaturePanel
      eyebrow={hero?.eyebrow}
      title={hero?.title}
      description={hero?.lead}
      supportingText={hero?.supportingText}
      items={hero?.insights}
      sectionKey="travel-partners-feature-panel"
    />
  );
}
