import { isValidText } from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsServicesIntro.module.css";

export default function LogisticsServicesIntro({ intro, titleId, hasIntro }) {
  if (!hasIntro) return null;

  return (
    <header className={styles.intro}>
      {isValidText(intro?.eyebrow) ? (
        <p className={styles.eyebrow}>{intro.eyebrow}</p>
      ) : null}

      {isValidText(intro?.title) ? (
        <h2 id={titleId} className={styles.title}>
          {intro.title}
        </h2>
      ) : null}

      {isValidText(intro?.lead) ? (
        <p className={styles.lead}>{intro.lead}</p>
      ) : null}
    </header>
  );
}
