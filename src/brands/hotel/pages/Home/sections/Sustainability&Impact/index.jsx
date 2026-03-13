import hotelBrand from "../../../../config/index.js";

import HotelInlineActionButton from "../../../../shared/ui/HotelInlineActionButton//HotelInlineActionButton.jsx";
import HotelSustainabilityHeader from "./HotelSustainabilityHeader.jsx";
import HotelSustainabilityStats from "./HotelSustainabilityStats.jsx";

import styles from "./Sustainability&Impact.module.css";

export default function SustainabilityAndImpactSection() {
  const section =
    hotelBrand?.pages?.home?.sections?.sustainabilityImpact ?? null;

  if (!section) return null;

  const { id, header, intro, cta, stats } = section;

  const sectionId = id ?? "hotel-sustainability-impact";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <HotelSustainabilityHeader label={header?.label} titleId={titleId} />

        {intro?.title || intro?.text || cta?.href ? (
          <div className={styles.introBox}>
            {intro?.title ? (
              <h3 className={styles.introTitle}>{intro.title}</h3>
            ) : null}

            {intro?.text ? (
              <p className={styles.introText}>{intro.text}</p>
            ) : null}

            {cta?.href ? (
              <div className={styles.ctaWrap}>
                <HotelInlineActionButton
                  href={cta.href}
                  label={cta.label}
                  ariaLabel={cta.ariaLabel ?? cta.label}
                  className={styles.ctaButton}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        <HotelSustainabilityStats stats={stats ?? []} />
      </div>
    </section>
  );
}
