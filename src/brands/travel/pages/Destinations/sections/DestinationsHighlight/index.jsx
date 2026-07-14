import destinationsPage from "../../../../config/pages/destinations.js";
import TravelFeaturePanel from "../../../../shared/ui/TravelFeaturePanel/TravelFeaturePanel.jsx";

export default function DestinationsHighlightSection() {
  const section = destinationsPage.sections.destinationsHighlight;

  if (!section) return null;

  const benefits = Array.isArray(section?.benefits) ? section.benefits : [];

  const hasContent =
    section?.eyebrow ||
    section?.title ||
    section?.description ||
    benefits.length > 0;

  if (!hasContent) return null;

  return (
    <section
      data-section="destinations-highlight"
      aria-label={section?.eyebrow || section?.title || "Destaque geral"}
    >
      <TravelFeaturePanel
        eyebrow={section?.eyebrow}
        title={section?.title}
        description={section?.description}
        items={benefits}
        sectionKey="destinations-highlight"
        titleAs="h1"
        itemTitleAs="h2"
      />
    </section>
  );
}
