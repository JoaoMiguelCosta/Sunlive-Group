// src/brands/hotel/pages/home/sections/Sustainability&Impact/index.jsx
import hotelBrand from "../../../../configHotel.jsx";

import HotelSustainabilityHeader from "./HotelSustainabilityHeader.jsx";
import HotelSustainabilityStats from "./HotelSustainabilityStats.jsx";

import styles from "./Sustainability&Impact.module.css";

export default function SustainabilityAndImpactSection() {
  const section = hotelBrand?.pages?.home?.sections?.sustainabilityImpact;

  if (!section) return null;

  const { id, header, intro, stats } = section;

  return (
    <section id={id} className={styles.section}>
      {/* 1) Barra “Sustentabilidade” via wrapper */}
      <HotelSustainabilityHeader id={`${id}-header`} label={header?.label} />

      <div className={styles.inner}>
        {/* 2) Caixa central da 3ª imagem */}
        <div className={styles.introBox}>
          <h3 className={styles.introTitle}>{intro?.title}</h3>
          <p className={styles.introText}>{intro?.text}</p>
        </div>

        {/* 3) Grelha de métricas via wrapper */}
        <HotelSustainabilityStats stats={stats} />
      </div>
    </section>
  );
}
