import CuratedSpotlightCollection from "../../shared/ui/CuratedSpotlightCollection.jsx/CuratedSpotlightCollection.jsx";

export default function TravelPartnersNetworkPanel({
  network = {},
  partners = [],
}) {
  return (
    <CuratedSpotlightCollection
      collection={{
        ...network,
        overviewLabel: network?.overviewLabel ?? "Visão do item",
        primaryMetaLabel: network?.roleLabel ?? "Posicionamento",
        ctaFallbackLabel: network?.ctaFallbackLabel ?? "Saiba mais",
        selectorCountSuffix:
          network?.selectorCountSuffix ?? "itens selecionados",
        selectorCountSingularSuffix:
          network?.selectorCountSingularSuffix ?? "item selecionado",
      }}
      items={partners}
      sectionKey="travel-partners-network"
      scrollOffset={92}
      getItemTitle={(item) => item?.city ?? ""}
      getItemSummary={(item) => item?.summary ?? ""}
      getItemPrimaryMeta={(item) => item?.role ?? ""}
      getItemBadge={(item) => item?.badge ?? ""}
      getItemImage={(item) => item?.picture ?? null}
    />
  );
}
