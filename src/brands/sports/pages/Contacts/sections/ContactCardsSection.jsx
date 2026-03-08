import styles from "./ContactCardsSection.module.css";
import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

export default function ContactCardsSection({ data }) {
  const icons = sportsBrand.icons;
  const cards = data?.items ?? [];

  if (!cards.length) return null;

  return (
    <section
      className={styles.section}
      aria-label="Contactos Sunlive Sports"
      data-brand="sports"
      id={data?.id || "sports-contact-cards"}
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map(({ key, title, iconKey, href, value }) => {
            const Icon = resolveSportsIcon(icons, iconKey);

            if (!href || !value) return null;

            return (
              <a
                key={key}
                href={href}
                className={styles.card}
                aria-label={`${title}: ${value}`}
              >
                <div className={styles.iconCircle}>
                  {Icon ? <Icon className={styles.icon} /> : null}
                </div>

                <div className={styles.titleBand}>
                  <span className={styles.title}>{title}</span>
                </div>

                <p className={styles.value}>{value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
