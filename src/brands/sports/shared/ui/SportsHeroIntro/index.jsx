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
          <SportsHeroIntroHeader
            eyebrow={eyebrow}
            secondaryLine={secondaryLine}
            title={title}
            description={description}
            supportingText={supportingText}
          />

          <SportsHeroIntroProofList
            items={validProofPoints}
            ariaLabel={ui?.proofListAriaLabel || "Pontos-chave"}
          />

          <SportsHeroIntroStatsGrid
            items={validStats}
            ariaLabel={ui?.statsAriaLabel || "Destaques da secção"}
          />
        </div>
      </div>
    </section>
  );
}
