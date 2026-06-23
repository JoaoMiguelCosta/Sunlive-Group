import consultancy from "../../config/pages/consultancy.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import SportsAreasShowcase from "../../shared/ui/SportsAreasShowcase/index.jsx";
import ConsultancyEntitiesSection from "./sections/ConsultancyEntitiesSection/index.jsx";
import { resolveSportsAreaIcon } from "../../shared/utils/resolveSportsAreaIcon.jsx";
import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";
export default function ConsultancyPage() {
  useScrollToHash(96);
  const data = consultancy;
  const sections = data?.sections;
  if (!sections) return null;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id={data.ui?.pageId || data.id}
        className={styles.inner}
        aria-label={data.ui?.pageAriaLabel}
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header>
            {" "}
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
            />{" "}
          </header>{" "}
          <ConsultancyEntitiesSection data={sections.consultancyEntities} />{" "}
          <SportsAreasShowcase
            id={sections.areas?.id}
            intro={sections.areas?.intro}
            areas={sections.areas?.items}
            ui={sections.areas?.ui}
            resolveIcon={resolveSportsAreaIcon}
          />{" "}
          <SportsClosingCTA data={sections.cta} />{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
