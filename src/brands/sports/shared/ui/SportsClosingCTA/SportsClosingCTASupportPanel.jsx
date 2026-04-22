import styles from "./SportsClosingCTASupportPanel.module.css";

export default function SportsClosingCTASupportPanel({
  supportPanel,
  items = [],
  extraItems = [],
}) {
  const hasContent = Boolean(
    supportPanel?.eyebrow ||
      supportPanel?.title ||
      items.length > 0 ||
      supportPanel?.extraTitle ||
      extraItems.length > 0,
  );

  if (!hasContent) return null;

  return (
    <aside className={styles.supportPanel}>
      {supportPanel?.eyebrow ? (
        <p className={styles.supportEyebrow}>{supportPanel.eyebrow}</p>
      ) : null}

      {supportPanel?.title ? (
        <h3 className={styles.supportTitle}>{supportPanel.title}</h3>
      ) : null}

      {items.length ? (
        <ul
          className={styles.supportList}
          aria-label={supportPanel?.listAriaLabel || "Âmbitos de apoio"}
        >
          {items.map((item) => (
            <li key={item} className={styles.supportItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {supportPanel?.extraTitle || extraItems.length > 0 ? (
        <div className={styles.supportExtra}>
          <div className={styles.supportDivider} aria-hidden="true" />

          {supportPanel?.extraTitle ? (
            <p className={styles.supportExtraTitle}>
              {supportPanel.extraTitle}
            </p>
          ) : null}

          {extraItems.length ? (
            <ul
              className={styles.supportMiniList}
              aria-label={
                supportPanel?.extraListAriaLabel ||
                supportPanel?.extraTitle ||
                "Apoio incluído"
              }
            >
              {extraItems.map((item) => (
                <li key={item} className={styles.supportMiniItem}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </aside>
  );
}
