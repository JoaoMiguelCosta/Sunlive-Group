import HotelInlineActionButton from "../../../../shared/ui/HotelInlineActionButton//HotelInlineActionButton.jsx";
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
            <HotelInlineActionButton
              href={cta.href}
              label={cta.label}
              ariaLabel={cta.ariaLabel ?? cta.label}
              className={styles.ctaButton}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
