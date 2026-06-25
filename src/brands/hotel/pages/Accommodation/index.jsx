import accommodation from "../../config/pages/accommodation.js";
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
        id={accommodation.id}
        className={styles.inner}
        aria-label={accommodation.ui.pageAriaLabel}
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
