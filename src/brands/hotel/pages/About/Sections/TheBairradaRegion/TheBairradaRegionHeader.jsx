import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./TheBairradaRegionHeader.module.css";

export default function TheBairradaRegionHeader({ header, titleId }) {
  if (!header) return null;

  const { title, label, headerLabel, align = "center", as = "h2" } = header;
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
