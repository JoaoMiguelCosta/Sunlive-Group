import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./SundayBuffet.module.css";

const splitParagraphs = (text) =>
  String(text)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function DescriptionSundayBuffet() {
  const content = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;
  const description = String(content?.description ?? "").trim();

  if (!description) return null;

  const paragraphs = splitParagraphs(description);

  return (
    <HotelSectionDescription
      as="div"
      align="center"
      className={styles.sectionDescription}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={`sunday-buffet-description-${index}`}>{paragraph}</p>
      ))}
    </HotelSectionDescription>
  );
}
