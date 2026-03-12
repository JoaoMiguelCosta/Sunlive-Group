import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function SustainabilityDescription() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
