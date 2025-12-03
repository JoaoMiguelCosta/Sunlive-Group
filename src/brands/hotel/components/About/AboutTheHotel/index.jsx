// src/brands/hotel/components/About/AboutTheHotel/index.jsx
import AboutTheHotelHeader from "./AboutTheHotelHeader.jsx";
import AboutTheHotelContent from "./AboutTheHotelContent.jsx";
import styles from "./AboutTheHotel.module.css";

/**
 * AboutTheHotel
 * Secção completa "Sobre a Estalagem" na página Sobre.
 */
export default function AboutTheHotel() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AboutTheHotelHeader />
        <AboutTheHotelContent />
      </div>
    </section>
  );
}

export { AboutTheHotelHeader, AboutTheHotelContent };
