import complementaryServices from "../../../../config/sections/facilities/complementaryServices.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionComplementaryServices() {
  const content = complementaryServices;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
