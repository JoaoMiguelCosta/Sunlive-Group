import TitleReceptionSupport from "./TitleReceptionSupport.jsx";
import DescriptionReceptionSupport from "./DescriptionReceptionSupport.jsx";
import ReceptionSupportServices from "./ReceptionSupportServices.jsx";
import ReceptionSupportAvailability from "./ReceptionSupportAvailability.jsx";

import styles from "./ReceptionSupport.module.css";

export default function ReceptionSupportSection() {
  return (
    <section
      id="facilities-reception"
      className={styles.section}
      aria-label="Receção e Apoio"
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleReceptionSupport />
          <div className={styles.descriptionWrap}>
            <DescriptionReceptionSupport />
          </div>
        </div>

        <ReceptionSupportServices />
        <ReceptionSupportAvailability />
      </div>
    </section>
  );
}
