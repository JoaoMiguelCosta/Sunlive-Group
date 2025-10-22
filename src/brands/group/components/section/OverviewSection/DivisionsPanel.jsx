// OverviewSection/DivisionsPanel.jsx
import styles from "./DivisionsPanel.module.css";
import { overview } from "../../../config";

export default function DivisionsPanel() {
  const divisions = overview?.divisions ?? [];
  const home = overview?.homeCard ?? { renderAs: "text", href: "/" };

  return (
    <section className={styles.sectionWrap} aria-label="Divisões Sunlive Group">
      {/* Painel com moldura fica por cima do “tapete” de gradiente */}
      <div className={styles.panel}>
        <div className={styles.row}>
          {divisions.map((d) => {
            const isImg = d.renderAs === "image" && d.imageSrc;
            const isDisabled = Boolean(d.disabled);
            const label = `${d.label}${d.sub ? ` — ${d.sub}` : ""}`;

            if (isDisabled) {
              return (
                <div
                  key={d.key}
                  className={`${styles.card} ${styles.cardDisabled}`}
                  aria-label={`${label} (desativado)`}
                  aria-disabled="true"
                >
                  {/* badge “Brevemente” */}
                  <span
                    className={styles.badge}
                    aria-hidden="true"
                    title="Brevemente"
                  >
                    Brevemente
                  </span>

                  {isImg ? (
                    <img
                      src={d.imageSrc}
                      alt={`${d.label} ${d.sub ?? ""}`.trim()}
                      className={styles.cardImg}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <>
                      <span className={styles.cardTitle}>{d.label}</span>
                      {d.sub && (
                        <small className={styles.cardSub}>{d.sub}</small>
                      )}
                    </>
                  )}
                </div>
              );
            }

            // normal (ativo)
            return (
              <a
                key={d.key}
                href={d.href}
                className={styles.card}
                aria-label={label}
              >
                {isImg ? (
                  <img
                    src={d.imageSrc}
                    alt={`${d.label} ${d.sub ?? ""}`.trim()}
                    className={styles.cardImg}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <span className={styles.cardTitle}>{d.label}</span>
                    {d.sub && <small className={styles.cardSub}>{d.sub}</small>}
                  </>
                )}
              </a>
            );
          })}
        </div>

        <div className={styles.homeRow}>
          <a
            href={home.href ?? "/"}
            className={`${styles.card} ${styles.homeCard}`}
            aria-label={home.label ?? "Our Home"}
          >
            {home.renderAs === "image" && home.imageSrc ? (
              <img
                src={home.imageSrc}
                alt={home.label ?? "Our Home"}
                className={styles.cardImg}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <>
                <span className={styles.cardTitle}>
                  {home.label ?? "Our Home"}
                </span>
                {home.sub && (
                  <small className={styles.cardSub}>{home.sub}</small>
                )}
              </>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
