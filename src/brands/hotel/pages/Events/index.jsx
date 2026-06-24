// src/brands/hotel/pages/Events/index.jsx

import styles from "../../layouts/HotelPageLayout.module.css";

import EventsCelebrationsSection from "./sections/EventsCelebrations/index.jsx";
import CustomizedQuotesSection from "./sections/CustomizedQuotes/index.jsx";

export default function EventsPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="events-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Events"
      >
        <div className={styles.contentFlow}>
          <EventsCelebrationsSection />
          <CustomizedQuotesSection />
        </div>
      </section>
    </div>
  );
}
