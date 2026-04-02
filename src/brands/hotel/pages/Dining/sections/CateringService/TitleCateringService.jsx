import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./CateringService.module.css";

export default function TitleCateringService({
  titleId = "restaurant-catering-title",
}) {
  const content = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const label = String(content?.headerLabel ?? "").trim();

  if (!label) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={label}
      className={styles.sectionTitle}
    />
  );
}
