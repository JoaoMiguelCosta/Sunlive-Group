import { useMemo } from "react";

import CuratedSpotlightCollection from "../../../../shared/ui/CuratedSpotlightCollection/CuratedSpotlightCollection.jsx";
import { normalizeCollectionItems } from "../../../../shared/utils/normalizeCollectionItems.js";

export default function TravelPartnersNetworkPanel({
  network = {},
  partners = [],
}) {
  const normalizedPartners = useMemo(
    () => normalizeCollectionItems(partners, { fallbackPrefix: "travel-partner" }),
    [partners],
  );

  return (
    <CuratedSpotlightCollection
      collection={network}
      items={normalizedPartners}
      sectionKey="travel-partners-network"
      scrollOffset={92}
      getItemTitle={(item) => item?.city ?? ""}
      getItemSummary={(item) => item?.summary ?? ""}
      getItemPrimaryMeta={(item) => item?.role ?? ""}
      getItemBadge={(item) => item?.badge ?? ""}
      getItemImage={(item) => item?.picture ?? null}
      getItemGallery={(item) => item?.gallery ?? []}
      getItemSpotlightTitle={(item) => item?.spotlightTitle ?? ""}
      getItemSpotlightDescription={(item) => item?.spotlightDescription ?? ""}
    />
  );
}
