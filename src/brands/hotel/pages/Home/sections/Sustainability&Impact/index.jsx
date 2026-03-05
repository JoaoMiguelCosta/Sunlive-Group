import hotelBrand from "../../../../config/registry/index.js";

import HotelSustainabilityHeader from "./HotelSustainabilityHeader.jsx";
import HotelSustainabilityStats from "./HotelSustainabilityStats.jsx";

import styles from "./Sustainability&Impact.module.css";

export default function SustainabilityAndImpactSection() {
  const section =
    hotelBrand?.pages?.home?.sections?.sustainabilityImpact ?? null;

  if (!section) return null;

  const { id, header, intro, stats } = section;

  const sectionId = id ?? "hotel-sustainability-impact";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {/* Barra “Sustentabilidade” */}
      <HotelSustainabilityHeader label={header?.label} titleId={titleId} />

      <div className={styles.inner}>
        {/* Caixa central */}
        <div className={styles.introBox}>
          {intro?.title ? (
            <h3 className={styles.introTitle}>{intro.title}</h3>
          ) : null}
          {intro?.text ? (
            <p className={styles.introText}>{intro.text}</p>
          ) : null}
        </div>

        {/* Grelha de métricas */}
        <HotelSustainabilityStats stats={stats ?? []} />
      </div>
    </section>
  );
}
