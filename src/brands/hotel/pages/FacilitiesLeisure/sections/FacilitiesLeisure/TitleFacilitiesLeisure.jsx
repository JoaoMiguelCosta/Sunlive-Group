import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleFacilitiesLeisure() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
