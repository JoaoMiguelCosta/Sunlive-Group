// src/brands/hotel/components/Home/PlanYourStay/index.jsx
import hotelBrand from "../../../configHotel.jsx";
import styles from "./PlanYourStay.module.css";

export default function PlanYourStaySection() {
  const section = hotelBrand?.pages?.home?.sections?.planYourStay;

  if (!section) return null;

  const { id, boxTitle, boxSubtitle, actions } = section;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.box}>
          <h2 className={styles.title}>{boxTitle}</h2>
          <p className={styles.subtitle}>{boxSubtitle}</p>

          <div className={styles.actions}>
            {actions?.map((action) => {
              const Icon = action.Icon;
              return (
                <a
                  key={action.id}
                  href={action.href}
                  className={styles.actionButton}
                >
                  {Icon && (
                    <span className={styles.iconWrap}>
                      <Icon className={styles.icon} aria-hidden="true" />
                    </span>
                  )}
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
