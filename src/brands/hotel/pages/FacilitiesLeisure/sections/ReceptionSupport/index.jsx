import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const receptionSupport = facilitiesLeisurePage.sections.receptionSupport;

import TitleReceptionSupport from "./TitleReceptionSupport.jsx";
import DescriptionReceptionSupport from "./DescriptionReceptionSupport.jsx";
import ReceptionSupportServices from "./ReceptionSupportServices.jsx";
import ReceptionSupportAvailability from "./ReceptionSupportAvailability.jsx";

import styles from "./ReceptionSupport.module.css";

export default function ReceptionSupportSection() {
  const section = receptionSupport;

  if (!section) return null;

  const sectionId = "instalacoes-rececao";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowSecondary} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.introBlock}>
          <TitleReceptionSupport titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <DescriptionReceptionSupport />
          </div>
        </header>

        <div className={styles.contentStack}>
          <ReceptionSupportServices />
          <ReceptionSupportAvailability />
        </div>
      </div>
    </section>
  );
}
