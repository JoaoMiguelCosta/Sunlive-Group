import { useMemo } from "react";

import TravelCuratedShowcase from "../../../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";
import { normalizeCollectionItems } from "../../../../shared/utils/normalizeCollectionItems.js";

export default function InternationalDestinationsShowcase({
  showcase = {},
  destinations = [],
}) {
  const normalizedDestinations = useMemo(
    () => normalizeCollectionItems(destinations, { fallbackPrefix: "international-destination" }),
    [destinations],
  );

  return (
    <TravelCuratedShowcase
      showcase={showcase}
      items={normalizedDestinations}
      sectionKey="international-destinations-showcase"
    />
  );
}
