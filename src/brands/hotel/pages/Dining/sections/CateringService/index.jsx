import catering from "../../../../config/sections/dining/catering.js";
import TitleCateringService from "./TitleCateringService.jsx";
import DescriptionCateringService from "./DescriptionCateringService.jsx";
import CateringProcessSteps from "./CateringProcessSteps.jsx";
import CateringInfoLists from "./CateringInfoLists.jsx";

import styles from "./CateringService.module.css";

export default function CateringServiceSection() {
  const section = catering;

  if (!section) return null;

  const sectionId = section?.id ?? "restaurante-catering";
  const titleId = `${sectionId}-title`;
  const introEyebrow = String(section?.introEyebrow ?? "").trim();

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          {introEyebrow ? (
            <p className={styles.eyebrow}>{introEyebrow}</p>
          ) : null}

          <TitleCateringService titleId={titleId} />
          <DescriptionCateringService />
        </div>

        <div className={styles.contentStack}>
          <CateringProcessSteps />
          <CateringInfoLists />
        </div>
      </div>
    </section>
  );
}
