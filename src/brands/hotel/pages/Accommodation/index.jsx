import styles from "../../layouts/HotelPageLayout.module.css";

import Accommodations from "./sections/Accommodations/index.jsx";
import Amenities from "./sections/Amenities/index.jsx";
import StayPolicies from "./sections/StayPolicies/index.jsx";
import ForWhom from "./sections/ForWhom/index.jsx";
import WhyChooseUs from "./sections/WhyChooseUs/index.jsx";

export default function AccommodationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="accommodation-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Accommodation"
      >
        <div className={styles.contentFlow}>
          <Accommodations />
          <Amenities />
          <StayPolicies />
          <ForWhom />
          <WhyChooseUs />
        </div>
      </section>
    </div>
  );
}
