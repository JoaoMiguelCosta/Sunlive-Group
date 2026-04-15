import { useMemo } from "react";

import CuratedSpotlightCollection from "../../../../shared/ui/CuratedSpotlightCollection/CuratedSpotlightCollection.jsx";

function normalizePartners(partners = []) {
  if (!Array.isArray(partners)) return [];

  return partners
    .filter((item) => item?.key)
    .map((item, index) => ({
      ...item,
      anchorId:
        item?.anchorId ||
        item?.id ||
        item?.key ||
        `travel-partner-${index + 1}`,
    }));
}

export default function TravelPartnersNetworkPanel({
  network = {},
  partners = [],
}) {
  const normalizedPartners = useMemo(
    () => normalizePartners(partners),
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
