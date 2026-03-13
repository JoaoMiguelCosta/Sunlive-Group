import styles from "./ForWhom.module.css";

import TitleForWhom from "./TitleForWhom.jsx";
import DescriptionForWhom from "./DescriptionForWhom.jsx";
import ForWhomHero from "./ForWhomHero.jsx";
import ForWhomProfilesGrid from "./ForWhomProfilesGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function ForWhom() {
  const content = hotelBrand?.pages?.accommodation?.sections?.forWhom ?? null;

  if (!content) return null;

  const sectionId = content.id ?? "accommodation-for-whom";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleForWhom id={titleId} label={content.headerLabel} />
        <DescriptionForWhom>{content.description}</DescriptionForWhom>

        <div className={styles.heroWrap}>
          <ForWhomHero />
        </div>

        <div className={styles.gridWrap}>
          <ForWhomProfilesGrid />
        </div>
      </div>
    </section>
  );
}
