import styles from "./GroupLinkDirectory.module.css";
import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import {
  buildFlagMap,
  getFlagComp,
  modClassFor,
} from "../../../../shared/components/Footer/utils/flagHelpers.js";

export default function GroupLinkDirectory({ data }) {
  if (!data) return null;

  const { left, right, meta } = data;

  const anchors = meta?.anchors || {};
  const targetGroupPath = anchors.groupPath || "/sunlive-group";
  const targetLogosPath = anchors.logosPath || "/sunlive-group/logos";
  const offset = typeof anchors.offset === "number" ? anchors.offset : 24;

  const { handleSmartAnchorClick: toLogos } = useSmartAnchorNav({
    targetPath: targetLogosPath,
    offset,
  });

  const { handleSmartAnchorClick: toGroup } = useSmartAnchorNav({
    targetPath: targetGroupPath,
    offset,
  });

  const regionalOffices = meta?.regionalOffices || [];
  const flagMap = buildFlagMap(regionalOffices);

  return (
    <section className={styles.sectionWrap} aria-label="Footer — Quick Links">
      <div className={styles.inner}>
        {/* ------ Bloco Esquerdo ------ */}
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

                  const onSmartClick =
                    col.key === "countries" || col.key === "units"
                      ? toGroup
                      : undefined;

                  return (
                    <PillLink
                      key={key}
                      href={href}
                      disabled={disabled}
                      className={`${styles.pill} ${mod} ${
                        disabled ? styles.disabled : ""
                      }`}
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

        {/* ------ Bloco Direito ------ */}
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


