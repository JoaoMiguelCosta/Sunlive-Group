import storyMilestones from "../../../../config/sections/about/storyMilestones.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./OurStoryMilestonesHeader.module.css";

export default function OurStoryMilestonesHeader({ titleId }) {
  const section = storyMilestones;

  if (!section?.headerLabel) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader
        id={titleId}
        label={section.headerLabel}
        as="h2"
        align="center"
      />
    </div>
  );
}
