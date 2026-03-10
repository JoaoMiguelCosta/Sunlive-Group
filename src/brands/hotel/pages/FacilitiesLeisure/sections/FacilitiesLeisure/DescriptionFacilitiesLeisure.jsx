import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionFacilitiesLeisure() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription>{content.description}</HotelSectionDescription>
  );
}
