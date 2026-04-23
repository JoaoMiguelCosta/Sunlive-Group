import styles from "./SportsHeroIntro.module.css";

import { getValidProofPoints, getValidStats } from "./sportsHeroIntro.utils.js";

import SportsHeroIntroHeader from "./SportsHeroIntroHeader.jsx";
import SportsHeroIntroProofList from "./SportsHeroIntroProofList.jsx";
import SportsHeroIntroStatsGrid from "./SportsHeroIntroStatsGrid.jsx";

export default function SportsHeroIntro({
  id,
  eyebrow,
  secondaryLine,
  title,
  description,
  supportingText,
  proofPoints = [],
  stats = [],
  ui = {},
}) {
  const validProofPoints = getValidProofPoints(proofPoints);
  const validStats = getValidStats(stats);

  const hasProofPoints = validProofPoints.length > 0;
  const hasStats = validStats.length > 0;

  if (!title && !description) return null;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label={ui?.ariaLabel || "Introdução da página Sunlive Sports"}
    >
      <div className={styles.surface}>
        <span className={styles.topRule} aria-hidden="true" />

        <div className={styles.glowOrb} aria-hidden="true" />
        <div className={styles.glowBeam} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />

        <div className={styles.inner}>
          <div className={styles.headerBlock}>
            <SportsHeroIntroHeader
              eyebrow={eyebrow}
              secondaryLine={secondaryLine}
              title={title}
              description={description}
              supportingText={supportingText}
            />
          </div>

          {hasProofPoints ? (
            <div className={styles.proofBlock}>
              <SportsHeroIntroProofList
                items={validProofPoints}
                ariaLabel={ui?.proofListAriaLabel || "Pontos-chave"}
              />
            </div>
          ) : null}

          {hasStats ? (
            <div className={styles.statsBlock}>
              <SportsHeroIntroStatsGrid
                items={validStats}
                ariaLabel={ui?.statsAriaLabel || "Destaques da secção"}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
