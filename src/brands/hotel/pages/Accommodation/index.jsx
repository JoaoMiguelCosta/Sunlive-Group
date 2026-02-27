// src/brands/hotel/pages/Accommodation/index.jsx
// Estalagem de Sangalhos — AccommodationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import Accommodations from "./sections/Accommodations/index.jsx";
import Amenities from "./sections/Amenities/index.jsx";
import StayPolicies from "./sections/StayPolicies/index.jsx";
import ForWhom from "./sections/ForWhom/index.jsx";
import WhyChooseUs from "./sections/WhyChooseUs/index.jsx";

export default function AccommodationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Alojamento"
      >
        {/* ✅ Secção: Accommodations */}
        <Accommodations />

        {/* ✅ Secção: Amenities */}
        <Amenities />

        {/* ✅ Secção: Stay Policies */}
        <StayPolicies />

        {/* ✅ Secção: For Whom */}
        <ForWhom />

        {/* ✅ Secção: Why Choose Us */}
        <WhyChooseUs />
      </main>
    </div>
  );
}
