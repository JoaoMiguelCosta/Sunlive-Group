import TravelCuratedShowcase from "../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";

export default function InternationalDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  return (
    <TravelCuratedShowcase
      showcase={showcase}
      items={destinations}
      sectionKey="international-destinations-showcase"
    />
  );
}
