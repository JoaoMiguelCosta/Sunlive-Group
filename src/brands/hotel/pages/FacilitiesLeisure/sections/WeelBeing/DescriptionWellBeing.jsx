import wellBeing from "../../../../config/sections/facilities/wellBeing.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionWellBeing() {
  const content = wellBeing;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
