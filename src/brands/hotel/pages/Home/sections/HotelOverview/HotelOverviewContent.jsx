// src/brands/hotel/pages/HotelHome/sections/HotelOverview/HotelOverviewContent.jsx
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./HotelOverviewContent.module.css";

export default function HotelOverviewContent({ section }) {
  if (!section) return null;

  const { introPrefix, introHighlight, introSuffix, bodyText, cta } = section;

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <p className={styles.lead}>
          {introPrefix}
          <span className={styles.highlight}>{introHighlight}</span>
          {introSuffix}
        </p>

        <p className={styles.body}>{bodyText}</p>

        {cta?.href ? (
          <div className={styles.ctaWrap}>
            <CTAButton
              cta={cta}
              icon={cta.iconKey ?? "phone"}
              variant="hotel"
              className={styles.ctaButton}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
