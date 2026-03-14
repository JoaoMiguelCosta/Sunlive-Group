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
        <TitleEventsCelebrations titleId="events-celebrations-title" />
        <DescriptionEventsCelebrations />
        <EventsCelebrationsBanner />
        <EventsTypes />
      </div>
    </section>
  );
}
