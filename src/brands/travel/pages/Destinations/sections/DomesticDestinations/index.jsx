import destinationsPage from "../../../../config/pages/destinations.js";
import TravelCollectionSection from "../../../../shared/ui/TravelCollectionSection/TravelCollectionSection.jsx";

export default function DomesticDestinationsSection() {
  const section = destinationsPage.sections.domesticDestinations;

  if (!section) return null;

  const items = Array.isArray(section?.destinations)
    ? section.destinations
    : [];

  const hasContent =
    section?.title || section?.description || items.length > 0;

  if (!hasContent) return null;

  const sectionId = section?.id ?? "destinos-nacionais";
  const sectionLabel = section?.ariaLabel ?? section?.title ?? "Viagens em Portugal";

  return (
    <section
      id={sectionId}
      data-section="domestic-destinations"
      aria-label={sectionLabel}
    >
      <TravelCollectionSection
        eyebrow={section?.eyebrow}
        title={section?.title}
        description={section?.description}
        items={items}
        sectionKey="domestic-destinations"
      />
    </section>
  );
}
