import TestimonialsSection from "./sections/Testimonials/index.jsx";
import LocationSection from "./sections/Location/index.jsx";

export default function InformationPageHotel() {
  return (
    <main id="informacoes" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <TestimonialsSection />
      <LocationSection />
    </main>
  );
}
