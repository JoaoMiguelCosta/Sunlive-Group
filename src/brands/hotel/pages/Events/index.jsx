import EventsCelebrationsSection from "../../components/Events/EventsCelebrations";
import CustomizedQuotesSection from "../../components/Events/CustomizedQuotes";

export default function EventsPageHotel() {
  return (
    <main id="eventos" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <EventsCelebrationsSection />
      <CustomizedQuotesSection />
    </main>
  );
}
