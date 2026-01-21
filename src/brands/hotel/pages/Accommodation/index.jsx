// src/brands/hotel/pages/Accommodation/index.jsx
// Estalagem de Sangalhos — AccommodationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import Accommodations from "../../components/Acommodation/Accommodations/index.jsx";
import Amenities from "../../components/Acommodation/Amenities/index.jsx";
import StayPolicies from "../../components/Acommodation/StayPolicies/index.jsx";
import ForWhom from "../../components/Acommodation/ForWhom/index.jsx";
import WhyChooseUs from "../../components/Acommodation/WhyChooseUs/index.jsx"; // ✅ novo

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
