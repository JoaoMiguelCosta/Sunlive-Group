import { useMemo, useState } from "react";
import styles from "./StayPoliciesAccordion.module.css";
import { ICONS, resolveHotelIcon } from "../../../../config/index.js";

function Chevron({ open }) {
  return (
    <span
      className={[styles.chevron, open ? styles.chevronOpen : ""]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          d="M7 10l5 5 5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function getInitialActiveKey(items = []) {
  const defaultItem = items.find((item) => item?.defaultOpen);
  return defaultItem?.key ?? items[0]?.key ?? null;
}

export default function StayPoliciesAccordion({
  items = [],
  allowMultiple = false,
  ui = {},
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const initialKey = getInitialActiveKey(safeItems);

  const [activeKey, setActiveKey] = useState(initialKey);

  const activeItem = useMemo(() => {
    return (
      safeItems.find((item) => item.key === activeKey) ?? safeItems[0] ?? null
    );
  }, [activeKey, safeItems]);

  function handleToggle(key) {
    if (allowMultiple) {
      setActiveKey((prev) => (prev === key ? null : key));
      return;
    }

    setActiveKey((prev) => (prev === key ? null : key));
  }

  if (!safeItems.length || !activeItem) return null;

  const SpotlightIcon = resolveHotelIcon(ICONS, activeItem.iconKey);

  return (
    <div className={styles.layout}>
      <aside
        className={styles.spotlight}
        aria-label={ui.spotlightAriaLabel ?? "Destaque da política selecionada"}
      >
        <div className={styles.spotlightTop}>
          <span className={styles.spotlightBadge}>
            {ui.spotlightBadge ?? "Informação Essencial"}
          </span>

          <div className={styles.spotlightHeading}>
            {SpotlightIcon ? (
              <span className={styles.spotlightIconCircle} aria-hidden="true">
                <SpotlightIcon className={styles.spotlightIcon} />
              </span>
            ) : null}

            <div className={styles.spotlightTitleWrap}>
              {activeItem.tag ? (
                <span className={styles.spotlightTag}>{activeItem.tag}</span>
              ) : null}

              <h3 className={styles.spotlightTitle}>{activeItem.title}</h3>
            </div>
          </div>
        </div>

        {activeItem.summary ? (
          <p className={styles.spotlightSummary}>{activeItem.summary}</p>
        ) : null}

        <p className={styles.spotlightBody}>{activeItem.body}</p>

        {Array.isArray(activeItem.highlights) &&
        activeItem.highlights.length ? (
          <div className={styles.highlights}>
            <span className={styles.highlightsTitle}>
              {ui.highlightsTitle ?? "Pontos-chave"}
            </span>

            <ul className={styles.highlightsList}>
              {activeItem.highlights.map((highlight, index) => (
                <li
                  key={`${activeItem.key}-${highlight}-${index}`}
                  className={styles.highlightItem}
                >
                  <span className={styles.highlightDot} aria-hidden="true" />
                  <span className={styles.highlightText}>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </aside>

      <div
        className={styles.accordion}
        aria-label={ui.accordionAriaLabel ?? "Lista de políticas de estadia"}
      >
        {safeItems.map((item) => {
          const open = item.key === activeKey;
          const panelId = `${item.key}-panel`;
          const triggerId = `${item.key}-trigger`;
          const Icon = resolveHotelIcon(ICONS, item.iconKey);

          return (
            <div
              key={item.key}
              className={[styles.item, open ? styles.itemOpen : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                id={triggerId}
                type="button"
                className={styles.trigger}
                onClick={() => handleToggle(item.key)}
                aria-expanded={open}
                aria-controls={panelId}
              >
                <span className={styles.triggerLeft}>
                  {Icon ? (
                    <span className={styles.iconCircle} aria-hidden="true">
                      <Icon className={styles.icon} />
                    </span>
                  ) : null}

                  <span className={styles.titleWrap}>
                    <span className={styles.title}>{item.title}</span>
                    {item.summary ? (
                      <span className={styles.inlineSummary}>
                        {item.summary}
                      </span>
                    ) : null}
                  </span>
                </span>

                <Chevron open={open} />
              </button>

              <div
                id={panelId}
                className={[
                  styles.panel,
                  open ? styles.panelOpen : styles.panelClosed,
                ]
                  .filter(Boolean)
                  .join(" ")}
                role="region"
                aria-labelledby={triggerId}
              >
                <div className={styles.panelInner}>
                  <div className={styles.accordionSummaryBlock}>
                    <span className={styles.accordionSummaryTitle}>
                      {ui.accordionSummaryTitle ?? "Resumo rápido"}
                    </span>

                    <p className={styles.body}>
                      {item.accordionBody ?? item.summary ?? item.body}
                    </p>

                    {Array.isArray(item.accordionPoints) &&
                    item.accordionPoints.length ? (
                      <ul className={styles.mobileHighlights}>
                        {item.accordionPoints.map((point, index) => (
                          <li
                            key={`${item.key}-accordion-${point}-${index}`}
                            className={styles.mobileHighlightItem}
                          >
                            <span
                              className={styles.mobileHighlightDot}
                              aria-hidden="true"
                            />
                            <span className={styles.mobileHighlightText}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
