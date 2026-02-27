// src/brands/hotel/components/About/OurStoryMilestones/OurStoryMilestonesHeader.jsx
import hotelBrand from "../../../../configHotel.jsx";
import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./OurStoryMilestonesHeader.module.css";

/**
 * OurStoryMilestonesHeader
 * Header da secção "A nossa História" na página Sobre.
 *
 * Usa:
 *  - pages.sobre.sections.ourStoryMilestones (configHotel)
 */
export default function OurStoryMilestonesHeader() {
  const section =
    hotelBrand?.pages?.sobre?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const { id, headerLabel } = section;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader id={id} label={headerLabel} as="h2" align="center" />
    </div>
  );
}
