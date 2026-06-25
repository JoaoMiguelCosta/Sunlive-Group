import styles from "./HotelOverviewSection.module.css";

import home from "../../../../config/pages/home.js";
const overview = home.sections.overview;
import HotelOverviewHeader from "./HotelOverviewHeader.jsx";
import HotelOverviewContent from "./HotelOverviewContent.jsx";

export default function HotelOverviewSection() {
  const section = overview;
  if (!section) return null;

  const sectionId = section.id ?? "hotel-overview";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <HotelOverviewHeader label={section.headerLabel} titleId={titleId} />
        <HotelOverviewContent section={section} />
      </div>
    </section>
  );
}
