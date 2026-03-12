import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function FutureGoalsDescription() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.futureGoals ?? null;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
