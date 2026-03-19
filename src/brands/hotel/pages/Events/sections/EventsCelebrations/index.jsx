import TitleEventsCelebrations from "./TitleEventsCelebrations.jsx";
import DescriptionEventsCelebrations from "./DescriptionEventsCelebrations.jsx";
import EventsCelebrationsBanner from "./EventsCelebrationsBanner.jsx";
import EventsTypes from "./EventsTypes.jsx";

import styles from "./EventsCelebrations.module.css";

export default function EventsCelebrationsSection() {
  return (
    <section
      id="events-types"
      className={styles.section}
      aria-labelledby="events-celebrations-title"
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleEventsCelebrations titleId="events-celebrations-title" />

          <div className={styles.descriptionWrap}>
            <DescriptionEventsCelebrations />
          </div>
        </div>

        <div className={styles.contentStack}>
          <EventsCelebrationsBanner />
          <EventsTypes />
        </div>
      </div>
    </section>
  );
}
