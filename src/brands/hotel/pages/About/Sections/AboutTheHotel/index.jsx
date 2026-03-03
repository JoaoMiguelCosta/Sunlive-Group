// src/brands/hotel/components/About/AboutTheHotel/index.jsx
import hotelBrand from "../../../../config/index.js";
import AboutTheHotelHeader from "./AboutTheHotelHeader.jsx";
import AboutTheHotelContent from "./AboutTheHotelContent.jsx";
import styles from "./AboutTheHotel.module.css";

export default function AboutTheHotel() {
  const aboutSection =
    hotelBrand?.pages?.about?.sections?.aboutTheHotel ?? null;

  if (!aboutSection) return null;

  const sectionProps = aboutSection?.id ? { id: aboutSection.id } : {};

  return (
    <section {...sectionProps} className={styles.section}>
      <div className={styles.inner}>
        <AboutTheHotelHeader />
        <AboutTheHotelContent />
      </div>
    </section>
  );
}

export { AboutTheHotelHeader, AboutTheHotelContent };
