import TravelShowcaseHero from "../../../../shared/ui/TravelShowcaseHero/TravelShowcaseHero.jsx";

export default function DomesticEditorialHero({ hero = {} }) {
  return (
    <TravelShowcaseHero
      content={hero}
      sectionKey="domestic-destinations"
      titleAs="h1"
      insightTitleAs="h2"
    />
  );
}
