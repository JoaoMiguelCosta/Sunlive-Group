import receptionSupport from "../../../../config/sections/facilities/receptionSupport.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionReceptionSupport() {
  const content = receptionSupport;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
