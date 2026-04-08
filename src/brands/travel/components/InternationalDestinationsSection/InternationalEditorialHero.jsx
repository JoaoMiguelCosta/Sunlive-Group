import TravelShowcaseHero from "../../shared/ui/TravelShowcaseHero/TravelShowcaseHero.jsx";
export default function InternationalEditorialHero({ hero = {} }) {
  return (
    <TravelShowcaseHero
      content={hero}
      sectionKey="international-destinations"
    />
  );
}
