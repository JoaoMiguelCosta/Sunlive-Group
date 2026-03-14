import TitleMobility from "./TitleMobility.jsx";
import DescriptionMobility from "./DescriptionMobility.jsx";
import MobilityBikesIntro from "./MobilityBikesIntro.jsx";
import MobilityBikesHighlights from "./MobilityBikesHighlights.jsx";
import MobilityParkingIntro from "./MobilityParkingIntro.jsx";
import MobilityParkingHighlights from "./MobilityParkingHighlights.jsx";

import styles from "./Mobility.module.css";

export default function MobilitySection() {
  return (
    <section
      id="facilities-mobility"
      className={styles.section}
      aria-label="Mobilidade"
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleMobility />
          <div className={styles.descriptionWrap}>
            <DescriptionMobility />
          </div>
        </div>

        <div className={styles.subsection}>
          <MobilityBikesIntro />
          <MobilityBikesHighlights />
        </div>

        <div className={styles.subsection}>
          <MobilityParkingIntro />
          <MobilityParkingHighlights />
        </div>
      </div>
    </section>
  );
}
