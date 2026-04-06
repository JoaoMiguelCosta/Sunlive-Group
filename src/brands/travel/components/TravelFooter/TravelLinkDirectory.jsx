import styles from "./TravelLinkDirectory.module.css";
import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";

function getColumnHash(columnKey) {
  switch (columnKey) {
    case "logistics":
      return "#logistica";
    case "domestic":
      return "#destinos-nacionais";
    case "international":
      return "#destinos-internacionais";
    default:
      return "#";
  }
}

function resolveFlagIcon(flags, flagKey) {
  if (!flagKey) return null;
  return flags?.[flagKey] ?? null;
}

export default function TravelLinkDirectory({ data }) {
  if (!data) return null;

  const { left, partners, meta } = data;

  const anchors = meta?.anchors ?? {};
  const flags = meta?.flags ?? {};

  const targetPath = anchors.targetPath ?? "/sunlive-group/travel";
  const offset = typeof anchors.offset === "number" ? anchors.offset : 72;

  const { handleSmartAnchorClick: toTravel } = useSmartAnchorNav({
    targetPath,
    offset,
  });

  const leftColumns = Array.isArray(left?.columns) ? left.columns : [];

  return (
    <section
      className={styles.sectionWrap}
      aria-label="Footer — Quick Links (Travel)"
    >
      <div className={styles.inner}>
        {leftColumns.length > 0 ? (
          <div className={styles.columns}>
            {leftColumns.map((column) => {
              const columnHash = getColumnHash(column.key);
              const isInternational = column.key === "international";
              const items = Array.isArray(column.items) ? column.items : [];

              return (
                <div key={column.key} className={styles.col}>
                  {column.title ? (
                    <h3 className={styles.sectionTitle}>{column.title}</h3>
                  ) : null}

                  <div className={styles.colList}>
                    {items.map(({ key, label, disabled, flagKey }) => {
                      const FlagIcon = isInternational
                        ? resolveFlagIcon(flags, flagKey ?? key)
                        : null;

                      return (
                        <PillLink
                          key={key}
                          href={`${targetPath}${columnHash}`}
                          disabled={disabled}
                          onSmartClick={toTravel}
                          className={[
                            styles.pill,
                            disabled ? styles.disabled : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          <span
                            className={[
                              styles.pillContent,
                              isInternational ? styles.intl : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            {FlagIcon ? (
                              <span
                                className={styles.flagWrap}
                                aria-hidden="true"
                              >
                                <FlagIcon
                                  className={styles.flagSvg}
                                  focusable="false"
                                />
                              </span>
                            ) : null}

                            <span className={styles.pillLabel}>{label}</span>
                          </span>
                        </PillLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {partners?.hotels || partners?.trips ? (
          <div
            className={styles.partnersWrap}
            role="group"
            aria-label="Parceiros"
          >
            {partners?.hotels ? (
              <div className={styles.partnerBlock}>
                <h3 className={styles.partnerTitle}>
                  <span className={styles.partnerTitleText}>
                    {partners.hotels.title || "Alojamentos em colaboração com:"}
                  </span>
                </h3>

                <div className={styles.partnerPills}>
                  {(partners.hotels.items || []).map(
                    ({ key, label, disabled }) => (
                      <PillLink
                        key={key}
                        href={`${targetPath}#parceiros-hoteis`}
                        disabled={disabled}
                        onSmartClick={toTravel}
                        className={[
                          styles.pill,
                          styles.partnerPill,
                          disabled ? styles.disabled : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span className={styles.pillContent}>
                          <span className={styles.pillLabel}>{label}</span>
                        </span>
                      </PillLink>
                    ),
                  )}
                </div>
              </div>
            ) : null}

            {partners?.trips ? (
              <div className={styles.partnerBlock}>
                <h3 className={styles.partnerTitle}>
                  <span className={styles.partnerTitleText}>
                    {partners.trips.title || "Viagens em colaboração com:"}
                  </span>
                </h3>

                <div className={styles.partnerPills}>
                  {(partners.trips.items || []).map(
                    ({ key, label, disabled }) => (
                      <PillLink
                        key={key}
                        href={`${targetPath}#parceiros-viagens`}
                        disabled={disabled}
                        onSmartClick={toTravel}
                        className={[
                          styles.pill,
                          styles.partnerPill,
                          disabled ? styles.disabled : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span className={styles.pillContent}>
                          <span className={styles.pillLabel}>{label}</span>
                        </span>
                      </PillLink>
                    ),
                  )}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
