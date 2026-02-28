import EventsCelebrationsSection from "./sections/EventsCelebrations/index.jsx";
import CustomizedQuotesSection from "./sections/CustomizedQuotes/index.jsx";

export default function EventsPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="events"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Events"
      >
        <EventsCelebrationsSection />
        <CustomizedQuotesSection />
      </main>
    </div>
  );
}
