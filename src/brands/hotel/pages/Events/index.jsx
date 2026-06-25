// src/brands/hotel/pages/Events/index.jsx

import events from "../../config/pages/events.js";
import styles from "../../layouts/HotelPageLayout.module.css";

import EventsCelebrationsSection from "./sections/EventsCelebrations/index.jsx";
import CustomizedQuotesSection from "./sections/CustomizedQuotes/index.jsx";

export default function EventsPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id={events.id}
        className={styles.inner}
        aria-label={events.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <EventsCelebrationsSection />
          <CustomizedQuotesSection />
        </div>
      </section>
    </div>
  );
}
