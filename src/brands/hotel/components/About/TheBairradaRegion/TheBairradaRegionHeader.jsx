// src/brands/hotel/pages/HotelAbout/sections/TheBairradaRegion/TheBairradaRegionHeader.jsx
import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./TheBairradaRegionHeader.module.css";

/**
 * Header da secção "A Região da Bairrada"
 * Mapeia os dados do configHotel para o componente reutilizável HotelSectionHeader.
 *
 * Espera um objeto `header` vindo do config:
 *  {
 *    title?: string;
 *    label?: string;
 *    headerLabel?: string;
 *    align?: "center" | "left";
 *    as?: "h2" | "h3" | "h4";
 *  }
 */
export default function TheBairradaRegionHeader({ header, titleId }) {
  if (!header) return null;

  const { title, label, headerLabel, align = "center", as } = header;

  const resolvedLabel = label ?? title ?? headerLabel ?? "";

  if (!resolvedLabel) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader
        id={titleId}
        label={resolvedLabel}
        align={align}
        as={as}
      />
    </div>
  );
}
