import styles from "./TravelLinkDirectory.module.css";
import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";

function resolveFlagIcon(flags, flagKey) {
  if (!flagKey) return null;
  return flags?.[flagKey] ?? null;
}

function resolveHref(itemHref, targetPath) {
  if (!itemHref || typeof itemHref !== "string") return "#";
  if (itemHref.startsWith("#")) return `${targetPath}${itemHref}`;
  return itemHref;
}

function renderPillItems({
  items,
  targetPath,
  toTravel,
  flags,
  showFlags = false,
  extraClassName = "",
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return items.map(({ key, label, href, disabled, flagKey }) => {
    const finalHref = resolveHref(href, targetPath);
    const FlagIcon = showFlags ? resolveFlagIcon(flags, flagKey ?? key) : null;

    return (
      <PillLink
        key={key}
        href={finalHref}
        disabled={disabled}
        onSmartClick={toTravel}
        className={[
          styles.pill,
          extraClassName,
          disabled ? styles.disabled : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={styles.pillContent}>
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
  if (!data) return null;

  const { left, partners, meta } = data;

  const anchors = meta?.anchors ?? {};
  const flags = meta?.flags ?? {};

  const targetPath = anchors.targetPath ?? "/sunlive-group/travel";
  const offset = typeof anchors.offset === "number" ? anchors.offset : 72;

  const { handleSmartAnchorClick: toTravel } = useSmartAnchorNav({
    offset,
  });

  const leftColumns = Array.isArray(left?.columns) ? left.columns : [];
  const hasPartners = Boolean(partners?.hotels || partners?.trips);

  return (
    <div
      className={styles.sectionWrap}
      aria-label={meta?.ariaLabel ?? "Footer — Quick Links (Travel)"}
    >
      <div className={styles.inner}>
        {leftColumns.length > 0 ? (
          <div className={styles.columns}>
            {leftColumns.map((column) => {
              const isInternational = column.key === "international";
              const items = Array.isArray(column.items) ? column.items : [];

              return (
                <section key={column.key} className={styles.col}>
                  {column.title ? (
                    <h3 className={styles.sectionTitle}>{column.title}</h3>
                  ) : null}

                  <div className={styles.colList}>
                    {renderPillItems({
                      items,
                      targetPath,
                      toTravel,
                      flags,
                      showFlags: isInternational,
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        ) : null}

        {hasPartners ? (
          <div
            className={styles.partnersWrap}
            role="group"
            aria-label={partners?.ariaLabel ?? "Parceiros"}
          >
            {partners?.hotels ? (
              <section className={styles.partnerBlock}>
                <h3 className={styles.partnerTitle}>
                  <span className={styles.partnerTitleText}>
                    {partners.hotels.title || "Alojamentos em colaboração"}
                  </span>
                </h3>

                <div className={styles.partnerPills}>
                  {renderPillItems({
                    items: partners.hotels.items || [],
                    targetPath,
                    toTravel,
                    flags,
                    extraClassName: styles.partnerPill,
                  })}
                </div>
              </section>
            ) : null}

            {partners?.trips ? (
              <section className={styles.partnerBlock}>
                <h3 className={styles.partnerTitle}>
                  <span className={styles.partnerTitleText}>
                    {partners.trips.title || "Viagens em colaboração"}
                  </span>
                </h3>

                <div className={styles.partnerPills}>
                  {renderPillItems({
                    items: partners.trips.items || [],
                    targetPath,
                    toTravel,
                    flags,
                    extraClassName: styles.partnerPill,
                  })}
                </div>
              </section>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
