// src/brands/hotel/pages/Information/index.jsx
// Estalagem de Sangalhos — InformationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import TestimonialsSection from "./sections/Testimonials/index.jsx";
import LocationSection from "./sections/Location/index.jsx";

export default function InformationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="information"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Information"
      >
        <TestimonialsSection />
        <LocationSection />
      </main>
    </div>
  );
}
