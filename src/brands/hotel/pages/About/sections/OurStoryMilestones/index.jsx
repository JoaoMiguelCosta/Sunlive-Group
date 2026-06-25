import about from "../../../../config/pages/about.js";
const storyMilestones = about.sections.storyMilestones;

import OurStoryMilestonesHeader from "./OurStoryMilestonesHeader.jsx";
import OurStoryMilestonesContent from "./OurStoryMilestonesContent.jsx";

import styles from "./OurStoryMilestones.module.css";

export default function OurStoryMilestonesSection() {
  const section = storyMilestones;

  if (!section) return null;

  const sectionId = section.id ?? "our-story-milestones";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <OurStoryMilestonesHeader titleId={titleId} />
        <OurStoryMilestonesContent />
      </div>
    </section>
  );
}
