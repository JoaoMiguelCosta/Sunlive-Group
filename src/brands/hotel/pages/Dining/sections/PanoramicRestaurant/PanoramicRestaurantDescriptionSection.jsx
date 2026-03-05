import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import hotelBrand from "../../../../config/registry/index.js";

const splitParagraphs = (text) =>
  String(text)
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

export default function PanoramicRestaurantDescriptionSection() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const text = section?.descriptionSecondary;

  if (!text) return null;

  const paragraphs = splitParagraphs(text);

  return (
    <HotelSectionDescription as="div" align="center">
      {paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </HotelSectionDescription>
  );
}
