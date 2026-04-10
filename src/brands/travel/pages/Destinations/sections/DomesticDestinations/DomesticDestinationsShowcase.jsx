import { useMemo } from "react";

import TravelCuratedShowcase from "../../../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";

function normalizeDestinations(destinations = []) {
  if (!Array.isArray(destinations)) return [];

  return destinations
    .filter((item) => item?.city)
    .map((item, index) => ({
      ...item,
      anchorId:
        item?.anchorId ||
        item?.id ||
        item?.key ||
        `domestic-destination-${index + 1}`,
    }));
}

export default function DomesticDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  const normalizedDestinations = useMemo(
    () => normalizeDestinations(destinations),
    [destinations],
  );

  return (
    <TravelCuratedShowcase
      showcase={showcase}
      items={normalizedDestinations}
      sectionKey="domestic-destinations-showcase"
    />
  );
}
