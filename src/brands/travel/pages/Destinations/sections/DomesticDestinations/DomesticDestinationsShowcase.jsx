import { useMemo } from "react";

import TravelCuratedShowcase from "../../../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";
import { normalizeCollectionItems } from "../../../../shared/utils/normalizeCollectionItems.js";

export default function DomesticDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  const normalizedDestinations = useMemo(
    () => normalizeCollectionItems(destinations, { fallbackPrefix: "domestic-destination" }),
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
