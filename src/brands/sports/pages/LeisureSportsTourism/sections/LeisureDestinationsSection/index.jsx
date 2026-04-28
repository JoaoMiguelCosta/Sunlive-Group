import LeisureInteractiveShowcase from "../_shared/LeisureInteractiveShowcase";

export default function LeisureDestinationsSection({ data }) {
  return (
    <LeisureInteractiveShowcase
      data={data}
      variant="destinations"
      defaultSectionId="leisure-sports-tourism-destinations"
      itemType="destination"
      listKey="highlights"
      listAriaFallback="Selecionar destino em destaque"
    />
  );
}
