import hotelBrand from "../../../../config/index.js";

import TitleMobility from "./TitleMobility.jsx";
import DescriptionMobility from "./DescriptionMobility.jsx";
import MobilityBikesIntro from "./MobilityBikesIntro.jsx";
import MobilityBikesHighlights from "./MobilityBikesHighlights.jsx";
import MobilityParkingIntro from "./MobilityParkingIntro.jsx";
import MobilityParkingHighlights from "./MobilityParkingHighlights.jsx";

import styles from "./Mobility.module.css";

export default function MobilitySection() {
  const mobility = hotelBrand?.pages?.facilities?.sections?.mobility ?? null;

  if (!mobility) return null;

  const sectionId = mobility.id ?? "mobility";
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
          <TitleMobility titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <DescriptionMobility />
          </div>
        </header>

        <div className={styles.contentStack}>
          <section
            className={styles.subsection}
            aria-labelledby={`${sectionId}-bikes-title`}
          >
            <MobilityBikesIntro titleId={`${sectionId}-bikes-title`} />
            <MobilityBikesHighlights />
          </section>

          <section
            className={styles.subsection}
            aria-labelledby={`${sectionId}-parking-title`}
          >
            <MobilityParkingIntro titleId={`${sectionId}-parking-title`} />
            <MobilityParkingHighlights />
          </section>
        </div>
      </div>
    </section>
  );
}
