import aboutTheHotel from "../../../../config/sections/about/aboutTheHotel.js";
import AboutTheHotelHeader from "./AboutTheHotelHeader.jsx";
import AboutTheHotelContent from "./AboutTheHotelContent.jsx";

import styles from "./AboutTheHotel.module.css";

export default function AboutTheHotel() {
  const aboutSection = aboutTheHotel;

  if (!aboutSection) return null;

  const sectionId = aboutSection.id ?? "about-the-hotel";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <AboutTheHotelHeader titleId={titleId} />
        <AboutTheHotelContent />
      </div>
    </section>
  );
}

export { AboutTheHotelHeader, AboutTheHotelContent };
