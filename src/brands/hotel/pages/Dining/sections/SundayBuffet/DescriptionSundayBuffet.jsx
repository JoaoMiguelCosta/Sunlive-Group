import dining from "../../../../config/pages/dining.js";
const sundayBuffet = dining.sections.sundayBuffet;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./SundayBuffet.module.css";

const splitParagraphs = (text) =>
  String(text)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function DescriptionSundayBuffet() {
  const content = sundayBuffet;
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
