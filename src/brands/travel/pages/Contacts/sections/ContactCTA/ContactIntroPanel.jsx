import TravelIntroPanel from "../../../../shared/ui/TravelIntroPanel/TravelIntroPanel.jsx";

function getValidPills(trustPoints) {
  return Array.isArray(trustPoints) ? trustPoints.filter(Boolean) : [];
}

function getValidStats(stats) {
  return Array.isArray(stats)
    ? stats.filter((item) => item?.value && item?.label)
    : [];
}

export default function ContactIntroPanel({ hero = {}, as = "header", titleAs = "h2" }) {
  const pills = getValidPills(hero?.trustPoints);
  const stats = getValidStats(hero?.stats);

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    pills.length > 0 ||
    stats.length > 0;

  if (!hasContent) return null;

  return (
    <TravelIntroPanel
      as={as}
      titleAs={titleAs}
      eyebrow={hero?.eyebrow}
      title={hero?.title}
      lead={hero?.lead}
      supportingText={hero?.supportingText}
      pills={pills}
      stats={stats}
      pillsAriaLabel={hero?.ui?.trustPointsAriaLabel ?? "Vantagens do contacto"}
      statsAriaLabel={hero?.ui?.statsAriaLabel ?? "Destaques do contacto"}
      tone="lightForest"
    />
  );
}
