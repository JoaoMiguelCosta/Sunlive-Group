import { useMemo } from "react";

import CuratedSpotlightCollection from "../../../../shared/ui/CuratedSpotlightCollection/CuratedSpotlightCollection.jsx";
import { normalizeCollectionItems } from "../../../../shared/utils/normalizeCollectionItems.js";

export default function PartnerHotelsCuratedCollection({
  collection = {},
  hotels = [],
}) {
  const normalizedHotels = useMemo(
    () => normalizeCollectionItems(hotels, { fallbackPrefix: "partner-hotel" }),
    [hotels],
  );

  return (
    <CuratedSpotlightCollection
      collection={{
        ...collection,
        selectorLabel:
          collection?.selectorLabel ??
          collection?.railLabel ??
          "Hotéis disponíveis",
        selectorAriaLabel:
          collection?.selectorAriaLabel ??
          collection?.railAriaLabel ??
          "Selecionar hotel em destaque",
        selectorCountSuffix:
          collection?.selectorCountSuffix ??
          collection?.railCountSuffix ??
          "hotéis selecionados",
        selectorCountSingularSuffix:
          collection?.selectorCountSingularSuffix ?? "hotel selecionado",
        overviewLabel:
          collection?.overviewLabel ??
          collection?.summaryLabel ??
          "Visão da unidade",
        primaryMetaLabel: collection?.primaryMetaLabel ?? "Localização",
        ctaFallbackLabel:
          collection?.ctaFallbackLabel ?? collection?.ctaLabel ?? "Saiba mais",
      }}
      items={normalizedHotels}
      sectionKey="partner-hotels-collection"
      scrollOffset={92}
      getItemTitle={(item) => item?.city ?? ""}
      getItemSummary={(item) => item?.summary ?? ""}
      getItemPrimaryMeta={(item) => item?.location ?? ""}
      getItemBadge={(item) => item?.badge ?? ""}
      getItemImage={(item) => item?.picture ?? null}
    />
  );
}
