import TravelShowcaseHero from "../../shared/ui/TravelShowcaseHero/TravelShowcaseHero.jsx";

export default function PartnerHotelsHero({ hero = {} }) {
  return <TravelShowcaseHero content={hero} sectionKey="partner-hotels" />;
}
