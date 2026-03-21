import hotelBrand from "../../../../config/index.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./PlanYourStay.module.css";

export default function PlanYourStaySection() {
  const section = hotelBrand?.pages?.home?.sections?.planYourStay ?? null;
  if (!section) return null;

  const { id, boxTitle, boxSubtitle, actions } = section;

  const sectionId = id ?? "hotel-plan-your-stay";
  const titleId = `${sectionId}-title`;
  const actionItems = Array.isArray(actions) ? actions : [];

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.box}>
          <h2 id={titleId} className={styles.title}>
            {boxTitle}
          </h2>

          {boxSubtitle ? (
            <p className={styles.subtitle}>{boxSubtitle}</p>
          ) : null}

          {actionItems.length > 0 ? (
            <div className={styles.actions}>
              {actionItems.map((action, index) => (
                <CTAButton
                  key={action.id ?? `${action.label}-${index}`}
                  href={action.href}
                  label={action.label}
                  ariaLabel={action.ariaLabel ?? action.label}
                  icon={action.iconKey ?? "phone"}
                  blink={false}
                  compact="auto"
                  variant="hotel"
                  tone={action.tone ?? (index === 0 ? "strong" : "soft")}
                  className={styles.actionButton}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
