import logistics from "../../config/pages/logistics.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import LogisticsServicesSection from "./sections/LogisticsServicesSection/index.jsx";

export default function LogisticsPage() {
  const data = logistics;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data.id}
        className={styles.inner}
        aria-label={data.ui?.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <header>
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
            <LogisticsServicesSection data={data.logisticsServices} />
            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
