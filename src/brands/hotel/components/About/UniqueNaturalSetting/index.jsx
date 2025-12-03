// src/brands/hotel/pages/HotelAbout/sections/UniqueNaturalSetting/index.jsx
import hotelBrand from "../../../configHotel.jsx";
import HotelHighlightPill from "../../../../../shared/components/Hotel/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./UniqueNaturalSetting.module.css";

export default function UniqueNaturalSetting() {
  const section = hotelBrand?.pages?.sobre?.sections?.uniqueNaturalSetting;

  const pillText = section?.highlightPill?.text;

  if (!section || !pillText) return null;

  return (
    <section
      id={section.id ?? "sobre-envolvente-natural"}
      className={styles.section}
      aria-label="Envolvente natural da Estalagem"
    >
      <div className={styles.inner}>
        <HotelHighlightPill>{pillText}</HotelHighlightPill>
      </div>
    </section>
  );
}
