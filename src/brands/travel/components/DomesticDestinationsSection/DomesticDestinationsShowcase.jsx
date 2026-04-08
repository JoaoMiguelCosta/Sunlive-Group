import TravelCuratedShowcase from "../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";

export default function DomesticDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  return (
    <TravelCuratedShowcase
      showcase={showcase}
      items={destinations}
      sectionKey="domestic-destinations-showcase"
    />
  );
}
