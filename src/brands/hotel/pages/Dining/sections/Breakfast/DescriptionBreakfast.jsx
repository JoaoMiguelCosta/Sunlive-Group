import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

const splitParagraphs = (text) =>
  String(text)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function DescriptionBreakfast() {
  const content = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;

  if (!content?.description) return null;

  const paragraphs = splitParagraphs(content.description);

  return (
    <HotelSectionDescription as="div">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </HotelSectionDescription>
  );
}
