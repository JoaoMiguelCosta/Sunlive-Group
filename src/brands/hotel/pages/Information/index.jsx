// src/brands/hotel/pages/Information/index.jsx
// Estalagem de Sangalhos — InformationPage

import information from "../../config/pages/information.js";
import styles from "../../layouts/HotelPageLayout.module.css";

import TestimonialsSection from "./sections/Testimonials/index.jsx";
import LocationSection from "./sections/Location/index.jsx";
import ContactsSection from "./sections/Contacts/index.jsx";

export default function InformationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id={information.id}
        className={styles.inner}
        aria-label={information.ui.pageAriaLabel}
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
