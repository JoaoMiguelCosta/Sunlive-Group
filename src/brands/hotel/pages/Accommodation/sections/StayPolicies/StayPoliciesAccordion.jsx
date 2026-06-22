import { useEffect, useMemo, useState } from "react";

import styles from "./StayPoliciesAccordion.module.css";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

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

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item?.key && item?.title)
    : [];
}

function getInitialActiveKey(items) {
  const defaultItem = items.find((item) => item?.defaultOpen);
  return defaultItem?.key ?? items[0]?.key ?? null;
}

function getInitialOpenKeys(items, allowMultiple) {
  if (!items.length) return [];

  if (!allowMultiple) {
    const activeKey = getInitialActiveKey(items);
    return activeKey ? [activeKey] : [];
  }

  const defaultOpenKeys = items
    .filter((item) => item?.defaultOpen)
    .map((item) => item.key);

  return defaultOpenKeys.length ? defaultOpenKeys : [items[0].key];
}

export default function StayPoliciesAccordion({
  items = [],
  allowMultiple = false,
  ui = {},
}) {
  const safeItems = useMemo(() => getValidItems(items), [items]);

  const initialActiveKey = useMemo(
    () => getInitialActiveKey(safeItems),
    [safeItems],
  );

  const initialOpenKeys = useMemo(
    () => getInitialOpenKeys(safeItems, allowMultiple),
    [safeItems, allowMultiple],
  );

  const [activeKey, setActiveKey] = useState(initialActiveKey);
  const [openKeys, setOpenKeys] = useState(initialOpenKeys);

  useEffect(() => {
    const validKeys = new Set(safeItems.map((item) => item.key));

    setActiveKey((currentKey) => {
      if (currentKey && validKeys.has(currentKey)) return currentKey;
      return getInitialActiveKey(safeItems);
    });

    setOpenKeys((currentKeys) => {
      const filteredKeys = currentKeys.filter((key) => validKeys.has(key));
      if (filteredKeys.length) return filteredKeys;

      return getInitialOpenKeys(safeItems, allowMultiple);
    });
  }, [safeItems, allowMultiple]);

  const activeItem = useMemo(() => {
    return (
      safeItems.find((item) => item.key === activeKey) ??
      safeItems.find((item) => openKeys.includes(item.key)) ??
      safeItems[0] ??
      null
    );
  }, [activeKey, openKeys, safeItems]);

  function handleToggle(key) {
    setActiveKey(key);

    setOpenKeys((currentKeys) => {
      if (!allowMultiple) return [key];

      const isOpen = currentKeys.includes(key);

      if (isOpen) {
        const nextKeys = currentKeys.filter((itemKey) => itemKey !== key);
        return nextKeys.length ? nextKeys : [key];
      }

      return [...currentKeys, key];
    });
  }

  if (!safeItems.length || !activeItem) return null;

  const SpotlightIcon = resolveHotelIcon(ICONS, activeItem.iconKey);

  return (
    <div className={styles.layout}>
      <aside
        className={styles.spotlight}
        aria-label={ui.spotlightAriaLabel ?? "Destaque da política selecionada"}
      >
        <div className={styles.spotlightDecor} aria-hidden="true" />

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

        {activeItem.body ? (
          <p className={styles.spotlightBody}>{activeItem.body}</p>
        ) : null}

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
          const open = openKeys.includes(item.key);
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
