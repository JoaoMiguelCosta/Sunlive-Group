import TitleEventsCelebrations from "./TitleEventsCelebrations.jsx";
import DescriptionEventsCelebrations from "./DescriptionEventsCelebrations.jsx";
import EventsCelebrationsBanner from "./EventsCelebrationsBanner.jsx";
import EventsTypes from "./EventsTypes.jsx";

import styles from "./EventsCelebrations.module.css";

export default function EventsCelebrationsSection() {
  return (
    <section id="events-types" className={styles.section}>
      <TitleEventsCelebrations />
      <DescriptionEventsCelebrations />
      <EventsCelebrationsBanner />
      <EventsTypes />
    </section>
  );
}
