import hotelBrand from "../../../../config/registry/index.js";
import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./OurStoryMilestonesHeader.module.css";

/**
 * OurStoryMilestonesHeader
 * Header da secção "A nossa História" na página About.
 */
export default function OurStoryMilestonesHeader() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const { headerLabel } = section;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader label={headerLabel} as="h2" align="center" />
    </div>
  );
}
