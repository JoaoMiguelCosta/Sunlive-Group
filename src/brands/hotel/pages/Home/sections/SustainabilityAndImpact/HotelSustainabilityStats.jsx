import HotelStatsGrid from "../../../../shared/ui/HotelStatsGrid/HotelStatsGrid.jsx";

export default function HotelSustainabilityStats({ stats = [] }) {
  return (
    <HotelStatsGrid
      items={stats}
      ariaLabel="Indicadores de sustentabilidade"
      variant="compactBalanced"
    />
  );
}
