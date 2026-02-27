import EventsCelebrationsSection from "./sections/EventsCelebrations/index.jsx";
import CustomizedQuotesSection from "./sections/CustomizedQuotes/index.jsx";

export default function EventsPageHotel() {
  return (
    <main id="eventos" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <EventsCelebrationsSection />
      <CustomizedQuotesSection />
    </main>
  );
}
