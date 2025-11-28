// src/brands/sports/pages/Disciplines/CyclingHighlightSection.jsx
import styles from "./CyclingHighlightSection.module.css";

import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

// mapa de iconKeys para componentes
const HIGHLIGHT_ICONS = {
  bike: ICONS.BikeIcon,
};

/**
 * Secção highlight de Ciclismo na página de Modalidades.
 * Usa o bloco disciplines.cyclingHighlight do configSports.
 */
export default function CyclingHighlightSection({ data }) {
  const section = data?.cyclingHighlight;
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
  const HighlightIcon = iconKey ? HIGHLIGHT_ICONS[iconKey] : null;

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
