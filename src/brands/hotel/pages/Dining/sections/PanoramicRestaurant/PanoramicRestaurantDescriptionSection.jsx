import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import hotelBrand from "../../../../config/index.js";

const splitParagraphs = (text) =>
  String(text)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function PanoramicRestaurantDescriptionSection() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const text = section?.descriptionSecondary;

  if (!text) return null;

  const paragraphs = splitParagraphs(text);

  return (
    <div aria-label="Descrição complementar do restaurante">
      <HotelSectionDescription as="div" align="center">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </HotelSectionDescription>
    </div>
  );
}
