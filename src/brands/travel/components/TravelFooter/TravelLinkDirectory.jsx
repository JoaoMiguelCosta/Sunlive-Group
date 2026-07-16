import styles from "./TravelLinkDirectory.module.css";

import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import { TRAVEL_BASE_PATH } from "../../config/core/paths.js";

const DEFAULT_ANCHOR_OFFSET = 72;

const RETRY_DELAY_MS = 80;
const CROSS_PAGE_DELAY_MS = 650;

function resolveFlagIcon(flags, flagKey) {
  if (!flagKey) return null;

  return flags?.[flagKey] ?? null;
}

function resolveHref(itemHref, targetPath) {
  if (!itemHref || typeof itemHref !== "string") return "#";

  if (itemHref.startsWith("#")) {
    return `${targetPath}${itemHref}`;
  }

  return itemHref;
}

function renderPillItems({
  items,
  targetPath,
  navigateToTravel,
  flags,
  showFlags = false,
  extraClassName = "",
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return items
    .filter((item) => item?.key && item?.label)
    .map(({ key, label, href, disabled, flagKey }) => {
      const finalHref = resolveHref(href, targetPath);
      const FlagIcon = showFlags
        ? resolveFlagIcon(flags, flagKey ?? key)
        : null;

      return (
        <PillLink
          key={key}
          href={finalHref}
          disabled={disabled}
          onSmartClick={navigateToTravel}
          className={[
            styles.pill,
            extraClassName,
            disabled ? styles.disabled : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span
            className={[styles.pillContent, FlagIcon ? styles.pillContentFlagged : ""]
              .filter(Boolean)
              .join(" ")}
          >
            {FlagIcon ? (
              <span className={styles.flagWrap} aria-hidden="true">
                <FlagIcon className={styles.flagSvg} focusable="false" />
              </span>
            ) : null}

            <span className={styles.pillLabel}>{label}</span>
          </span>
        </PillLink>
      );
    });
}

export default function TravelLinkDirectory({ data }) {
  const { left, partners, meta } = data ?? {};

  const anchors = meta?.anchors ?? {};
  const flags = meta?.flags ?? {};

  const targetPath = anchors.targetPath ?? TRAVEL_BASE_PATH;
  const offset =
    typeof anchors.offset === "number" ? anchors.offset : DEFAULT_ANCHOR_OFFSET;

  const { handleSmartAnchorClick: navigateToTravel } = useSmartAnchorNav({
    targetPath,
    offset,
    retryDelayMs: RETRY_DELAY_MS,
    crossPageDelayMs: CROSS_PAGE_DELAY_MS,
  });

  if (!data) {
    return null;
  }

  const leftColumns = Array.isArray(left?.columns) ? left.columns : [];

  const hasLeftColumns = leftColumns.some(
    (column) =>
      column?.title ||
      (Array.isArray(column?.items) && column.items.length > 0),
  );

  const hasHotels =
    partners?.hotels?.title ||
    (Array.isArray(partners?.hotels?.items) &&
      partners.hotels.items.length > 0);

  const hasTrips =
    partners?.trips?.title ||
    (Array.isArray(partners?.trips?.items) && partners.trips.items.length > 0);

  const hasPartners = Boolean(hasHotels || hasTrips);

  if (!hasLeftColumns && !hasPartners) {
    return null;
  }

  return (
    <div
      className={styles.directory}
      aria-label={meta?.ariaLabel ?? "Footer — Links rápidos Travel"}
    >
      <div className={styles.inner}>
        {hasLeftColumns ? (
          <div className={styles.columns}>
            {leftColumns.map((column) => {
              const items = Array.isArray(column?.items) ? column.items : [];

              if (!column?.title && items.length === 0) {
                return null;
              }

              const isInternational = column.key === "international";

              return (
                <div key={column.key || column.title} className={styles.block}>
                  {column.title ? (
                    <h3 className={styles.blockTitle}>{column.title}</h3>
                  ) : null}

                  {items.length > 0 ? (
                    <div className={styles.pillsGrid}>
                      {renderPillItems({
                        items,
                        targetPath,
                        navigateToTravel,
                        flags,
                        showFlags: isInternational,
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}

        {hasPartners ? (
          <div
            className={styles.partnersWrap}
            role="group"
            aria-label={partners?.ariaLabel ?? "Parceiros Travel"}
          >
            {hasHotels ? (
              <div className={styles.partnerBlock}>
                {partners?.hotels?.title ? (
                  <h3 className={styles.blockTitle}>{partners.hotels.title}</h3>
                ) : null}

                {Array.isArray(partners?.hotels?.items) &&
                partners.hotels.items.length > 0 ? (
                  <div className={styles.pillsGrid}>
                    {renderPillItems({
                      items: partners.hotels.items,
                      targetPath,
                      navigateToTravel,
                      flags,
                      extraClassName: styles.partnerPill,
                    })}
                  </div>
                ) : null}
              </div>
            ) : null}

            {hasTrips ? (
              <div className={styles.partnerBlock}>
                {partners?.trips?.title ? (
                  <h3 className={styles.blockTitle}>{partners.trips.title}</h3>
                ) : null}

                {Array.isArray(partners?.trips?.items) &&
                partners.trips.items.length > 0 ? (
                  <div className={styles.pillsGrid}>
                    {renderPillItems({
                      items: partners.trips.items,
                      targetPath,
                      navigateToTravel,
                      flags,
                      extraClassName: styles.partnerPill,
                    })}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
