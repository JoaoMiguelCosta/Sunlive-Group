import TravelShowcaseHero from "../../../../shared/ui/TravelShowcaseHero/TravelShowcaseHero.jsx";

export default function TravelPartnersHero({ hero = {} }) {
  return <TravelShowcaseHero content={hero} sectionKey="travel-partners" />;
}
