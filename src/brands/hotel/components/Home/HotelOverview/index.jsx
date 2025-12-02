// src/brands/hotel/Home/HotelOverview/index.jsx
import styles from "./HotelOverviewSection.module.css";

import hotelBrand from "../../../configHotel.jsx"
import HotelOverviewHeader from "./HotelOverviewHeader.jsx";
import HotelOverviewContent from "./HotelOverviewContent.jsx";

export default function HotelOverviewSection() {
  const section = hotelBrand?.pages?.home?.sections?.overview;

  if (!section) return null;

  return (
    <section id={section.id} className={styles.section}>
      <HotelOverviewHeader label={section.headerLabel} />
      <HotelOverviewContent section={section} />
    </section>
  );
}
