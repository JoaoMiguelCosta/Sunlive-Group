import hotelBrand from "../../../../config/registry/index.js";
import OurStoryMilestonesHeader from "./OurStoryMilestonesHeader.jsx";
import OurStoryMilestonesContent from "./OurStoryMilestonesContent.jsx";
import styles from "./OurStoryMilestones.module.css";

/**
 * OurStoryMilestonesSection
 * Wrapper da secção "A nossa História" na página About.
 *
 * - Garante alinhamento com o container global
 * - Usa header + content já criados
 */
export default function OurStoryMilestonesSection() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const { id, headerLabel } = section;

  return (
    <section id={id} className={styles.section} aria-label={headerLabel}>
      <div className={styles.inner}>
        <OurStoryMilestonesHeader />
        <OurStoryMilestonesContent />
      </div>
    </section>
  );
}
