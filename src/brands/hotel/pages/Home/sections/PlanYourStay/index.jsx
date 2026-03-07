// src/brands/hotel/components/Home/PlanYourStay/index.jsx
import hotelBrand from "../../../../config/index.js";
import styles from "./PlanYourStay.module.css";

export default function PlanYourStaySection() {
  const section = hotelBrand?.pages?.home?.sections?.planYourStay ?? null;
  if (!section) return null;

  const { id, boxTitle, boxSubtitle, actions } = section;

  const sectionId = id ?? "hotel-plan-your-stay";
  const titleId = `${sectionId}-title`;

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

          <div className={styles.actions}>
            {(actions ?? []).map((action) => {
              const Icon = action.Icon;

              return (
                <a
                  key={action.id}
                  href={action.href}
                  className={styles.actionButton}
                >
                  {Icon ? (
                    <span className={styles.iconWrap}>
                      <Icon className={styles.icon} aria-hidden="true" />
                    </span>
                  ) : null}

                  <span className={styles.label}>{action.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
