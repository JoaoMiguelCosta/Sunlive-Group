import styles from "./EducationBilingualPanel.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getPanelVariant(item) {
  if (item?.key === "portuguese") return "portuguese";
  if (item?.key === "dualDiploma") return "dualDiploma";
  return "default";
}

function getPanelTag(item) {
  if (item?.key === "portuguese") return "Sistema Português";
  if (item?.key === "dualDiploma") return "Diploma Duplo";
  return item?.title || "Modelo académico";
}

export default function EducationBilingualPanel({ item }) {
  const variant = getPanelVariant(item);

  const panelClassName = [
    styles.panel,
    variant === "portuguese" ? styles.panelPortuguese : "",
    variant === "dualDiploma" ? styles.panelDualDiploma : "",
  ]
    .filter(Boolean)
    .join(" ");

  const panelTagClassName = [
    styles.panelTag,
    variant === "portuguese" ? styles.panelTagPortuguese : "",
    variant === "dualDiploma" ? styles.panelTagDualDiploma : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={panelClassName} aria-label={item.title}>
      <div className={styles.panelTop}>
        <span className={panelTagClassName}>{getPanelTag(item)}</span>
      </div>

      <div className={styles.panelBody}>
        {item.title ? (
          <h3 className={styles.panelTitle}>{item.title}</h3>
        ) : null}

        {item.description ? (
          <p className={styles.panelDescription}>{item.description}</p>
        ) : null}

        {hasItems(item.features) ? (
          <div className={styles.group}>
            <p className={styles.groupLabel}>
              {item.featuresLabel || "Vantagens:"}
            </p>

            <ul className={styles.featureList}>
              {item.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.emphasis ? (
          <div className={styles.emphasisBox}>
            <p className={styles.emphasisText}>{item.emphasis}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
