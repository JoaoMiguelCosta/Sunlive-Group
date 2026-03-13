import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import styles from "./HotelAboutRegionBairrada.module.css";

/**
 * Bloco de descrição da secção "A Região da Bairrada"
 */
export default function HotelAboutRegionBairrada({ description }) {
  if (!description) return null;

  const { align = "center", text, paragraphs = [] } = description;

  const content =
    text ?? (Array.isArray(paragraphs) ? paragraphs.join(" ") : "");

  if (!content) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionDescription align={align} className={styles.descriptionCard}>
        {content}
      </HotelSectionDescription>
    </div>
  );
}
