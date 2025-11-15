// src/brands/travel/components/TravelFooter/TravelLinkDirectory.jsx
import styles from "./TravelLinkDirectory.module.css";
import PillLink from "../../../../shared/components/FooterGroup/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import { FLAGS } from "../../../../shared/config/BrandDefault.jsx"; // 👈 usa FLAGS partilhadas

export default function TravelLinkDirectory({ data }) {
  if (!data) return null;

  const { left, partners } = data;

  const { handleSmartAnchorClick: toTravel } = useSmartAnchorNav({
    targetPath: "/sunlive-group/travel",
    offset: 72,
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

  const resolveFlagIcon = (flagKey) => FLAGS?.[flagKey] || null;

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
                          href={`/sunlive-group/travel${colHash}`}
                          disabled={disabled}
                          onSmartClick={toTravel}
                          className={`${styles.pill} ${disabled ? styles.disabled : ""}`}
                        >
                          <span
                            className={`${styles.pillContent} ${isIntl ? styles.intl : ""}`}
                          >
                            {FlagIcon && (
                              <span
                                className={styles.flagWrap}
                                aria-hidden="true"
                              >
                                <FlagIcon
                                  className={styles.flagSvg}
                                  focusable="false"
                                />
                              </span>
                            )}
                            <span className={styles.pillLabel}>{label}</span>
                          </span>
                        </PillLink>
                      );
                    }
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
          {partners?.hotels && (
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
                      href={`/sunlive-group/travel#parceiros-hoteis`}
                      disabled={disabled}
                      onSmartClick={toTravel}
                      className={`${styles.pill} ${styles.partnerPill} ${disabled ? styles.disabled : ""}`}
                    >
                      <span className={styles.pillContent}>
                        <span className={styles.pillLabel}>{label}</span>
                      </span>
                    </PillLink>
                  )
                )}
              </div>
            </div>
          )}

          {partners?.trips && (
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
                      href={`/sunlive-group/travel#parceiros-viagens`}
                      disabled={disabled}
                      onSmartClick={toTravel}
                      className={`${styles.pill} ${styles.partnerPill} ${disabled ? styles.disabled : ""}`}
                    >
                      <span className={styles.pillContent}>
                        <span className={styles.pillLabel}>{label}</span>
                      </span>
                    </PillLink>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
