// src/brands/hotel/pages/Information/index.jsx
// Estalagem de Sangalhos — InformationPage

import styles from "../../layouts/HotelPageLayout.module.css";

import TestimonialsSection from "./sections/Testimonials/index.jsx";
import LocationSection from "./sections/Location/index.jsx";
import ContactsSection from "./sections/Contacts/index.jsx";

export default function InformationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="information-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Information"
      >
        <div className={styles.contentFlow}>
          <TestimonialsSection />
          <LocationSection />
          <ContactsSection />
        </div>
      </section>
    </div>
  );
}
