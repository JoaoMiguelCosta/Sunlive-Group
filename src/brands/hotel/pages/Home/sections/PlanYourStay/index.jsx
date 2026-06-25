import home from "../../../../config/pages/home.js";
const planYourStay = home.sections.planYourStay;
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./PlanYourStay.module.css";

function getValidActions(actions) {
  return Array.isArray(actions)
    ? actions.filter(
        (action) =>
          action && typeof action === "object" && action.href && action.label,
      )
    : [];
}

export default function PlanYourStaySection() {
  const section = planYourStay;
  if (!section) return null;

  const {
    id,
    eyebrow,
    boxTitle,
    boxSubtitle,
    availability,
    supportNote,
    actions,
  } = section;

  const sectionId = id ?? "hotel-plan-your-stay";
  const titleId = `${sectionId}-title`;
  const actionItems = getValidActions(actions);

  const hasMeta =
    availability?.label ||
    availability?.value ||
    supportNote ||
    actionItems.length > 0;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.box}>
          <div className={styles.contentColumn}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

            {boxTitle ? (
              <h2 id={titleId} className={styles.title}>
                {boxTitle}
              </h2>
            ) : null}

            {boxSubtitle ? (
              <p className={styles.subtitle}>{boxSubtitle}</p>
            ) : null}

            <div className={styles.highlightLine} aria-hidden="true" />
          </div>

          {hasMeta ? (
            <div className={styles.contactPanel}>
              {availability?.label || availability?.value ? (
                <div className={styles.metaCard}>
                  {availability?.label ? (
                    <p className={styles.metaLabel}>{availability.label}</p>
                  ) : null}

                  {availability?.value ? (
                    <p className={styles.metaValue}>{availability.value}</p>
                  ) : null}
                </div>
              ) : null}

              {supportNote ? (
                <p className={styles.supportNote}>{supportNote}</p>
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
          ) : null}

          <div className={styles.glowOrb} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
