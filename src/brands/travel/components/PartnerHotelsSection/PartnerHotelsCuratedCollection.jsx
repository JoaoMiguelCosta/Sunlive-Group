import TravelCuratedShowcase from "../../shared/ui/TravelCuratedShowcase/TravelCuratedShowcase.jsx";

export default function PartnerHotelsCuratedCollection({
  collection = {},
  hotels = [],
}) {
  return (
    <TravelCuratedShowcase
      showcase={{
        ...collection,
        railAriaLabel:
          collection?.railAriaLabel ??
          collection?.selectorAriaLabel ??
          "Selecionar hotel em destaque",
      }}
      items={hotels}
      sectionKey="partner-hotels-collection"
    />
  );
}
