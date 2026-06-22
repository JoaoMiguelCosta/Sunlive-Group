import facilitiesLeisure from "../../../../config/sections/facilities/facilitiesLeisure.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionFacilitiesLeisure({ className = "" }) {
  const content = facilitiesLeisure;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center" className={className}>
      {content.description}
    </HotelSectionDescription>
  );
}
