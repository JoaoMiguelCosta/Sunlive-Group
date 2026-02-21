import TestimonialsSection from "../../components/Information/Testimonials";
import LocationSection from "../../components/Information/Location";

export default function InformationPageHotel() {
  return (
    <main id="informacoes" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <TestimonialsSection />
      <LocationSection />
    </main>
  );
}
