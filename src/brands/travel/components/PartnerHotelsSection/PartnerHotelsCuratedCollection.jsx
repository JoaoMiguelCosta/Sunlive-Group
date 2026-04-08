import CuratedSpotlightCollection from "../../shared/ui/CuratedSpotlightCollection.jsx/CuratedSpotlightCollection.jsx";

export default function PartnerHotelsCuratedCollection({
  collection = {},
  hotels = [],
}) {
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
      items={hotels}
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
