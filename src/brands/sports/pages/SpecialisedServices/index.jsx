import specialisedServices from "../../config/pages/specialisedServices.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import SportsAreasShowcase from "../../shared/ui/SportsAreasShowcase/index.jsx";
import { resolveSportsAreaIcon } from "../../shared/utils/resolveSportsAreaIcon.jsx";

export default function SpecialisedServicesPage() {
  const data = specialisedServices;
  const sections = data?.sections;

  if (!sections) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data.ui?.pageId || data.id}
        className={styles.inner}
        aria-label={data.ui?.pageAriaLabel || "Sunlive Sports — Serviços Especializados"}
      >
        <div className={styles.contentFlow}>
          <header>
            <SportsHeroIntro
              id={sections.hero?.id}
              eyebrow={sections.hero?.eyebrow}
              secondaryLine={sections.hero?.secondaryLine}
              title={sections.hero?.title}
              description={sections.hero?.description}
              supportingText={sections.hero?.supportingText}
              proofPoints={sections.hero?.proofPoints}
              stats={sections.hero?.stats}
              ui={sections.hero?.ui}
            />
          </header>

          <SportsAreasShowcase
            id={sections.areas?.id}
            intro={sections.areas?.intro}
            areas={sections.areas?.items}
            ui={sections.areas?.ui}
            resolveIcon={resolveSportsAreaIcon}
          />

          {sections.cta ? <SportsClosingCTA data={sections.cta} /> : null}
        </div>
      </main>
    </div>
  );
}
