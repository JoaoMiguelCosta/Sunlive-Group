import TravelCuratedShowcase from "../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";

export default function TravelPartnersNetworkPanel({
  network = {},
  partners = [],
}) {
  return (
    <TravelCuratedShowcase
      showcase={{
        ...network,
        railAriaLabel:
          network?.railAriaLabel ??
          network?.selectorAriaLabel ??
          "Selecionar parceiro em destaque",
      }}
      items={partners}
      sectionKey="travel-partners-network"
    />
  );
}
