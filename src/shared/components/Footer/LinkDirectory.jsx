import { contacts } from "../../../brands/group/ConfigGroup.jsx";
import useSmartAnchorNav from "../../hooks/useSmartAnchorNav.js";

import PillLink from "./PillLink.jsx";
import styles from "./LinkDirectory.module.css";
import { buildFlagMap, getFlagComp, modClassFor } from "./utils/flagHelpers";

export default function LinkDirectory({ data }) {
  const { handleSmartAnchorClick: navigateToLogos } = useSmartAnchorNav({
    targetPath: "/sunlive-group/logos",
    offset: 24,
  });

  const { handleSmartAnchorClick: navigateToGroup } = useSmartAnchorNav({
    targetPath: "/sunlive-group",
    offset: 24,
  });

  if (!data) {
    return null;
  }

  const { left, right } = data;
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
            {(left?.columns || []).map((column) => (
              <div key={column.key} className={styles.col}>
                {(column.items || []).map((item) => {
                  const { key, label, href, disabled } = item;
                  const Flag = getFlagComp(flagMap, item);
                  const modifierClass = modClassFor(styles, key);

                  const handleSmartClick =
                    column.key === "countries" || column.key === "units"
                      ? navigateToGroup
                      : undefined;

                  return (
                    <PillLink
                      key={key}
                      href={href}
                      disabled={disabled}
                      className={`${styles.pill} ${modifierClass} ${
                        disabled ? styles.disabled : ""
                      }`}
                      onSmartClick={handleSmartClick}
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
                onSmartClick={navigateToLogos}
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
