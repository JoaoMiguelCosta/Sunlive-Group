import sustainabilityImpact from "../../../../config/sections/home/sustainabilityImpact.js";
import HotelInlineActionButton from "../../../../shared/ui/HotelInlineActionButton/HotelInlineActionButton.jsx";
import HotelSustainabilityHeader from "./HotelSustainabilityHeader.jsx";
import HotelSustainabilityStats from "./HotelSustainabilityStats.jsx";

import styles from "./SustainabilityAndImpact.module.css";

export default function SustainabilityAndImpactSection() {
  const section = sustainabilityImpact;

  if (!section) return null;

  const { id, header, intro, cta, stats } = section;

  const sectionId = id ?? "hotel-sustainability-impact";
  const titleId = `${sectionId}-title`;

  const hasIntroContent =
    intro?.eyebrow ||
    intro?.title ||
    intro?.text ||
    intro?.noteTitle ||
    intro?.noteText ||
    cta?.href;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <HotelSustainabilityHeader label={header?.label} titleId={titleId} />

        {hasIntroContent ? (
          <div className={styles.introBox}>
            <div className={styles.introMain}>
              {intro?.eyebrow ? (
                <p className={styles.introEyebrow}>{intro.eyebrow}</p>
              ) : null}

              {intro?.title ? (
                <h3 className={styles.introTitle}>{intro.title}</h3>
              ) : null}

              {intro?.text ? (
                <p className={styles.introText}>{intro.text}</p>
              ) : null}

              {cta?.href && cta?.label ? (
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

            {intro?.noteTitle || intro?.noteText ? (
              <aside className={styles.noteBox} aria-label="Nota editorial">
                {intro?.noteTitle ? (
                  <p className={styles.noteTitle}>{intro.noteTitle}</p>
                ) : null}

                {intro?.noteText ? (
                  <p className={styles.noteText}>{intro.noteText}</p>
                ) : null}
              </aside>
            ) : null}

            <div className={styles.introGlow} aria-hidden="true" />
            <div className={styles.introHighlightLine} aria-hidden="true" />
          </div>
        ) : null}

        <HotelSustainabilityStats stats={stats ?? []} />
      </div>
    </section>
  );
}
