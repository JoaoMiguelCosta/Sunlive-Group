import styles from "./SportsClosingCTA.module.css";
import useInView from "../../hooks/useInView.js";

function isExternalHref(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function SportsClosingCTA({ data }) {
  if (!data) return null;

  const {
    id,
    eyebrow,
    title,
    description,
    highlights = [],
    primaryAction,
    secondaryAction,
    supportPanel,
  } = data;

  const validHighlights = Array.isArray(highlights)
    ? highlights.filter(Boolean)
    : [];

  const validSupportItems = Array.isArray(supportPanel?.items)
    ? supportPanel.items.filter(Boolean)
    : [];

  const validSupportExtraItems = Array.isArray(supportPanel?.extraItems)
    ? supportPanel.extraItems.filter(Boolean)
    : [];

  const primaryIsExternal = isExternalHref(primaryAction?.href || "");
  const secondaryIsExternal = isExternalHref(secondaryAction?.href || "");

  const { ref, inView } = useInView({
    threshold: 0.16,
    once: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${
        inView ? styles.isVisible : ""
      }`}
      aria-labelledby={
        title ? `${id || "sports-closing-cta"}-title` : undefined
      }
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.copy}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

            {title ? (
              <h2
                id={`${id || "sports-closing-cta"}-title`}
                className={styles.title}
              >
                {title}
              </h2>
            ) : null}

            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}

            {validHighlights.length ? (
              <ul
                className={styles.highlights}
                aria-label="Pontos principais do CTA"
              >
                {validHighlights.map((item) => (
                  <li key={item} className={styles.highlightItem}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {primaryAction?.href || secondaryAction?.href ? (
              <div className={styles.actions}>
                {primaryAction?.href ? (
                  <a
                    href={primaryAction.href}
                    className={`${styles.action} ${styles.primaryAction}`}
                    aria-label={primaryAction.ariaLabel || primaryAction.label}
                    target={primaryIsExternal ? "_blank" : undefined}
                    rel={primaryIsExternal ? "noreferrer" : undefined}
                  >
                    {primaryAction.label}
                  </a>
                ) : null}

                {secondaryAction?.href ? (
                  <a
                    href={secondaryAction.href}
                    className={`${styles.action} ${styles.secondaryAction}`}
                    aria-label={
                      secondaryAction.ariaLabel || secondaryAction.label
                    }
                    target={secondaryIsExternal ? "_blank" : undefined}
                    rel={secondaryIsExternal ? "noreferrer" : undefined}
                  >
                    {secondaryAction.label}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {(supportPanel?.eyebrow ||
            supportPanel?.title ||
            validSupportItems.length > 0 ||
            supportPanel?.extraTitle ||
            validSupportExtraItems.length > 0) && (
            <aside className={styles.supportPanel}>
              {supportPanel?.eyebrow ? (
                <p className={styles.supportEyebrow}>{supportPanel.eyebrow}</p>
              ) : null}

              {supportPanel?.title ? (
                <h3 className={styles.supportTitle}>{supportPanel.title}</h3>
              ) : null}

              {validSupportItems.length ? (
                <ul
                  className={styles.supportList}
                  aria-label="Âmbitos de apoio"
                >
                  {validSupportItems.map((item) => (
                    <li key={item} className={styles.supportItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {(supportPanel?.extraTitle ||
                validSupportExtraItems.length > 0) && (
                <div className={styles.supportExtra}>
                  <div className={styles.supportDivider} aria-hidden="true" />

                  {supportPanel?.extraTitle ? (
                    <p className={styles.supportExtraTitle}>
                      {supportPanel.extraTitle}
                    </p>
                  ) : null}

                  {validSupportExtraItems.length ? (
                    <ul
                      className={styles.supportMiniList}
                      aria-label={supportPanel?.extraTitle || "Apoio incluído"}
                    >
                      {validSupportExtraItems.map((item) => (
                        <li key={item} className={styles.supportMiniItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
