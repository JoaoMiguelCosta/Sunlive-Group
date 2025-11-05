// src/shared/components/FooterGroup/LinkDirectory.jsx
import styles from "./LinkDirectory.module.css";
import { contacts } from "../../../brands/group/ConfigGroup.jsx";

import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";
import PillLink from "./PillLink.jsx";
import { buildFlagMap, getFlagComp, modClassFor } from "./utils/flagHelpers";

export default function LinkDirectory({ data }) {
  if (!data) return null;
  const { left, right } = data;

  const { handleSmartAnchorClick: toLogos } = useSmartAnchorNav({
    targetPath: "/sunlive-group/logos",
    offset: 24,
  });
  const { handleSmartAnchorClick: toGroup } = useSmartAnchorNav({
    targetPath: "/sunlive-group",
    offset: 24,
  });

  const flagMap = buildFlagMap(contacts?.regionalOffices || []);

  return (
    <section className={styles.sectionWrap} aria-label="Footer — Quick Links">
      <div className={styles.inner}>
        <div className={styles.block}>
          {left?.title && (
            <h3 className={`${styles.sectionTitle} ${styles.sectionTitleLeft}`}>
              {left.title}
            </h3>
          )}

          <div className={styles.gridLeft}>
            {(left?.columns || []).map((col) => (
              <div key={col.key} className={styles.col}>
                {(col.items || []).map((item) => {
                  const { key, label, href, disabled } = item;
                  const Flag = getFlagComp(flagMap, item);
                  const mod = modClassFor(styles, key);

                  // agora 'units' e 'countries' usam toGroup (mesma página)
                  const onSmartClick =
                    col.key === "countries" || col.key === "units"
                      ? toGroup
                      : undefined;

                  return (
                    <PillLink
                      key={key}
                      href={href}
                      disabled={disabled}
                      className={`${styles.pill} ${mod} ${disabled ? styles.disabled : ""}`}
                      onSmartClick={onSmartClick}
                    >
                      <span className={styles.pillContent}>
                        {Flag && (
                          <span className={styles.flagBox}>
                            <Flag />
                          </span>
                        )}
                        <span className={styles.pillLabel}>{label}</span>
                      </span>
                    </PillLink>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* -------- Bloco Direito -------- */}
        <div className={styles.block}>
          {right?.title && (
            <h3
              className={`${styles.sectionTitle} ${styles.sectionTitleRight}`}
            >
              {right.title}
            </h3>
          )}

          <div className={styles.gridRight}>
            {(right?.items || []).map(({ key, label, href, disabled }) => (
              <PillLink
                key={key}
                href={href}
                disabled={disabled}
                className={`${styles.pill} ${disabled ? styles.disabled : ""}`}
                onSmartClick={toLogos}
              >
                <span className={styles.pillContent}>
                  <span className={styles.pillLabel}>{label}</span>
                </span>
              </PillLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}