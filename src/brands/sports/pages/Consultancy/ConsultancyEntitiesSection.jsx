import styles from "./ConsultancyEntitiesSection.module.css";

/**
 * Secção "Entidades com quem colaboramos"
 *
 * Uso:
 *   <ConsultancyEntitiesSection data={data} />
 * onde data é o objeto "consultancy" do configSports.
 */
export default function ConsultancyEntitiesSection({ data }) {
  if (!data) return null;

  const { entities } = data;
  if (!entities || !Array.isArray(entities.items) || !entities.items.length) {
    return null;
  }

  const {
    id = "consultancy-entities",
    title = "Entidades com quem colaboramos:",
    items,
  } = entities;

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        </header>

        <div className={styles.grid}>
          {items.map((label, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden="true">
                <span className={styles.iconCheck}>✓</span>
              </span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
