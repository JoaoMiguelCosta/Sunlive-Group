// src/brands/hotel/pages/HotelAbout/sections/TheBairradaRegion/HotelAboutRegionBairrada.jsx
import HotelSectionDescription from "../../../../../shared/components/Hotel/HotelSectionDescription/HotelSectionDescription.jsx";
import styles from "./HotelAboutRegionBairrada.module.css";

/**
 * Bloco de texto da secção "A Região da Bairrada"
 *
 * Espera um objeto `description` vindo do config:
 *  {
 *    align?: "center" | "left";
 *    text?: string;
 *    paragraphs?: string[];
 *  }
 */
export default function HotelAboutRegionBairrada({ description }) {
  if (!description) return null;

  const { align = "center", text, paragraphs = [] } = description;

  // Se vier `text` usa-se diretamente, caso contrário junta os parágrafos.
  const content = text ?? paragraphs.join(" ");

  if (!content) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionDescription align={align}>{content}</HotelSectionDescription>
    </div>
  );
}
