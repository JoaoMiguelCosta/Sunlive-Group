import styles from "./HomeHeroSection.module.css";
import travelBrand from "../../../../config/index.js";

function escapeRegExp(value = "") {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightBrand(text, brandName, className) {
  if (!text || !brandName) return text;

  const regex = new RegExp(`(${escapeRegExp(brandName)})`, "i");
  const parts = String(text).split(regex);

  let highlighted = false;

  return parts.map((part, index) => {
    if (!highlighted && part.toLowerCase() === brandName.toLowerCase()) {
      highlighted = true;
      return (
        <span key={`brand-${index}`} className={className}>
          {part}
        </span>
      );
    }

    return <span key={`text-${index}`}>{part}</span>;
  });
}

function renderAction(action, variant = "primary") {
  if (!action?.href || !action?.label) return null;

  const className =
    variant === "secondary" ? styles.secondaryAction : styles.primaryAction;

  return (
    <a
      href={action.href}
      className={className}
      aria-label={action.ariaLabel || action.label}
    >
      <span className={styles.actionLabel}>{action.label}</span>
    </a>
  );
}

export default function HomeHeroSection() {
  const section = travelBrand?.pages?.home?.sections?.homeHero ?? null;
  if (!section) return null;

  const cfg = section?.editorialHero ?? {};
  const sectionId = section?.id ?? "travel-home-hero";

  const trustPills = Array.isArray(cfg?.trustPills) ? cfg.trustPills : [];
  const quickLinks = Array.isArray(cfg?.quickLinks) ? cfg.quickLinks : [];
  const metrics = Array.isArray(cfg?.metrics) ? cfg.metrics : [];
  const insights = Array.isArray(cfg?.insights) ? cfg.insights : [];

  const metricsAriaLabel =
    cfg?.ui?.metricsAriaLabel ?? "Indicadores principais";
  const insightsAriaLabel =
    cfg?.ui?.insightsAriaLabel ?? "Princípios operacionais";
  const trustPillsAriaLabel =
    cfg?.ui?.trustPillsAriaLabel ?? "Pontos de confiança";
  const quickLinksAriaLabel =
    cfg?.ui?.quickLinksAriaLabel ?? "Atalhos rápidos da página";

  const sectionStyle = cfg?.backgroundImage
    ? { "--hero-bg-image": `url(${cfg.backgroundImage})` }
    : undefined;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={cfg?.title ?? "Sunlive Travel"}
      data-section="home-hero"
      style={sectionStyle}
    >
      <div className={styles.backdropGlow} aria-hidden="true" />
      <div className={styles.backdropOrbPrimary} aria-hidden="true" />
      <div className={styles.backdropOrbSecondary} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copyColumn}>
          <div className={styles.copyPanel}>
            <div className={styles.copyShell}>
              {cfg?.eyebrow ? (
                <p className={styles.eyebrow}>{cfg.eyebrow}</p>
              ) : null}

              {cfg?.title ? (
                <h1 className={styles.title}>{cfg.title}</h1>
              ) : null}

              {(cfg?.lead || cfg?.supportingText) && (
                <div className={styles.bodyCopy}>
                  {cfg?.lead ? <p className={styles.lead}>{cfg.lead}</p> : null}

                  {cfg?.supportingText ? (
                    <p className={styles.supportingText}>
                      {highlightBrand(
                        cfg.supportingText,
                        "Sunlive Travel",
                        styles.brandHighlight,
                      )}
                    </p>
                  ) : null}
                </div>
              )}

              {(cfg?.primaryAction || cfg?.secondaryAction) && (
                <div className={styles.actions}>
                  {renderAction(cfg?.primaryAction, "primary")}
                  {renderAction(cfg?.secondaryAction, "secondary")}
                </div>
              )}
            </div>

            {(trustPills.length || quickLinks.length) && (
              <div className={styles.supportRail}>
                {trustPills.length ? (
                  <ul
                    className={styles.trustPills}
                    aria-label={trustPillsAriaLabel}
                  >
                    {trustPills.map((item) => (
                      <li key={item} className={styles.trustPill}>
                        <span className={styles.trustPillText}>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {quickLinks.length ? (
                  <div className={styles.quickLinksWrap}>
                    {cfg?.quickLinksLabel ? (
                      <p className={styles.quickLinksLabel}>
                        {cfg.quickLinksLabel}
                      </p>
                    ) : null}

                    <nav
                      className={styles.quickLinks}
                      aria-label={quickLinksAriaLabel}
                    >
                      {quickLinks.map((item) => (
                        <a
                          key={item.key}
                          href={item.href}
                          className={styles.quickLink}
                          aria-label={item.ariaLabel || item.label}
                        >
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className={styles.sideColumn}>
          <div className={styles.sidePanel}>
            {metrics.length ? (
              <div className={styles.metricsWrap}>
                <div
                  className={styles.metricsGrid}
                  aria-label={metricsAriaLabel}
                >
                  {metrics.map((metric) => (
                    <article
                      key={`${metric.value}-${metric.label}`}
                      className={styles.metricCard}
                    >
                      <strong className={styles.metricValue}>
                        {metric.value}
                      </strong>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {insights.length ? (
              <div
                className={styles.insightsPanel}
                aria-label={insightsAriaLabel}
              >
                {insights.map((item) => (
                  <article key={item.key} className={styles.insightCard}>
                    <div className={styles.insightAccent} aria-hidden="true" />
                    <div className={styles.insightContent}>
                      <h2 className={styles.insightTitle}>{item.title}</h2>
                      <p className={styles.insightDescription}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
