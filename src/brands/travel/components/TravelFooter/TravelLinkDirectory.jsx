import styles from "./TravelLinkDirectory.module.css";
import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";

export default function TravelLinkDirectory({ data }) {
  if (!data) return null;

  const { left, partners, meta } = data;

  const anchors = meta?.anchors || {};
  const targetPath = anchors.targetPath || "/sunlive-group/travel";
  const offset = typeof anchors.offset === "number" ? anchors.offset : 72;

  const flags = meta?.flags || {};

  const { handleSmartAnchorClick: toTravel } = useSmartAnchorNav({
    targetPath,
    offset,
  });

  const hashForCol = (colKey) => {
    switch (colKey) {
      case "logistics":
        return "#logistica";
      case "domestic":
        return "#destinos-nacionais";
      case "international":
        return "#destinos-internacionais";
      default:
        return "#";
    }
  };

  const resolveFlagIcon = (flagKey) => {
    if (!flagKey) return null;
    return flags?.[flagKey] || null;
  };

  return (
    <section
      className={styles.sectionWrap}
      aria-label="Footer — Quick Links (Travel)"
    >
      <div className={styles.inner}>
        {/* ===== 3 COLUNAS (TOPO) ===== */}
        <div className={styles.columns}>
          {(left?.columns || []).map((col) => {
            const colHash = hashForCol(col.key);
            const isIntl = col.key === "international";

            return (
              <div key={col.key} className={styles.col}>
                {col.title && (
                  <h3 className={styles.sectionTitle}>{col.title}</h3>
                )}

                <div className={styles.colList}>
                  {(col.items || []).map(
                    ({ key, label, disabled, flagKey }) => {
                      const FlagIcon = isIntl
                        ? resolveFlagIcon(flagKey || key)
                        : null;

                      return (
                        <PillLink
                          key={key}
                          href={`${targetPath}${colHash}`}
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
                              isIntl ? styles.intl : "",
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
                    },
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== PARCEIROS ===== */}
        <div
          className={styles.partnersWrap}
          role="group"
          aria-label="Parceiros"
        >
          {partners?.hotels ? (
            <div className={styles.partnerBlock}>
              <div className={styles.partnerTitle}>
                <span className={styles.partnerTitleText}>
                  {partners.hotels.title || "Alojamentos em colaboração com:"}
                </span>
              </div>

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
              <div className={styles.partnerTitle}>
                <span className={styles.partnerTitleText}>
                  {partners.trips.title || "Viagens em colaboração com:"}
                </span>
              </div>

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
      </div>
    </section>
  );
}
