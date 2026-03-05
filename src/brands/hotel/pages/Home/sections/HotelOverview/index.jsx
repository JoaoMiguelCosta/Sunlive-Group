import styles from "./HotelOverviewSection.module.css";

import hotelBrand from "../../../../config/registry/index.js";
import HotelOverviewHeader from "./HotelOverviewHeader.jsx";
import HotelOverviewContent from "./HotelOverviewContent.jsx";

export default function HotelOverviewSection() {
  const section = hotelBrand?.pages?.home?.sections?.overview ?? null;
  if (!section) return null;

  const sectionId = section.id ?? "hotel-overview";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <HotelOverviewHeader label={section.headerLabel} titleId={titleId} />
      <HotelOverviewContent section={section} />
    </section>
  );
}
