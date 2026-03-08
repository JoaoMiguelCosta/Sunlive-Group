import styles from "./CyclingHighlightSection.module.css";

import SportsAcademyCard from "../../../shared/ui/SportsAcademyCard/SportsAcademyCard.jsx";
import { ICONS, resolveSportsIcon } from "../../../config/index.js";

export default function CyclingHighlightSection({ data }) {
  const section = data;
  if (!section) return null;

  const {
    id,
    title,
    description,
    instagramHref,
    bookHref,
    bookLabel,
    iconKey,
  } = section;

  const panelId = `${id}-panel`;
  const HighlightIcon = resolveSportsIcon(ICONS, iconKey);

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Explorar o universo Ciclismo Sunlive"
    >
      <div id={panelId} className={styles.panelBody}>
        <div className={styles.inner}>
          <SportsAcademyCard
            icon={HighlightIcon}
            title={title}
            description={description}
            instagramHref={instagramHref}
            bookHref={bookHref}
            bookLabel={bookLabel}
          />
        </div>
      </div>
    </section>
  );
}
