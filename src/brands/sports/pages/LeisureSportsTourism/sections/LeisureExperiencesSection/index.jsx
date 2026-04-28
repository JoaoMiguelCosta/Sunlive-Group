import LeisureInteractiveShowcase from "../_shared/LeisureInteractiveShowcase";

export default function LeisureExperiencesSection({ data }) {
  return (
    <LeisureInteractiveShowcase
      data={data}
      variant="experiences"
      defaultSectionId="leisure-sports-tourism-experiences"
      itemType="experience"
      listKey="experiences"
      listAriaFallback="Selecionar experiência em destaque"
    />
  );
}
