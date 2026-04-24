import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand, { resolveSportsIcon } from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import LogisticsServicesSection from "./sections/LogisticsServicesSection/index.jsx";

export default function LogisticsPage() {
  const data = sportsBrand.sections?.logistics;

  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data.id}
        className={styles.inner}
        role="region"
        aria-label={data.ui?.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id={data.hero?.id}
              eyebrow={data.hero?.eyebrow}
              secondaryLine={data.hero?.secondaryLine}
              title={data.hero?.title}
              description={data.hero?.description}
              supportingText={data.hero?.supportingText}
              proofPoints={data.hero?.proofPoints}
              stats={data.hero?.stats}
              ui={data.hero?.ui}
            />
          </header>

          <div className={styles.sections}>
            <LogisticsServicesSection
              data={data.logisticsServices}
              iconSet={sportsBrand.icons}
              resolveIcon={resolveSportsIcon}
            />

            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
