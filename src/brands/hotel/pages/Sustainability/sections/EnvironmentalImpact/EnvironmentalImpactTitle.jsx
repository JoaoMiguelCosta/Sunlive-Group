import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function EnvironmentalImpactTitle({ titleId }) {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.environmentalImpact ?? null;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
