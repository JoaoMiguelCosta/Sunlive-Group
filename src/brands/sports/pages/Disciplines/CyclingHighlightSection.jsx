import styles from "./CyclingHighlightSection.module.css";

import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";

/**
 * Secção highlight de Ciclismo na página de Modalidades.
 * Usa o bloco disciplines.cyclingHighlight do configSports.
 */
export default function CyclingHighlightSection({ data }) {
  if (!data?.cyclingHighlight) return null;

  const { id, title, description, instagramHref, bookHref, bookLabel } =
    data.cyclingHighlight;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Explorar o universo Ciclismo Sunlive"
    >
      <div className={styles.inner}>
        <SportsAcademyCard
          title={title}
          description={description}
          instagramHref={instagramHref}
          bookHref={bookHref}
          bookLabel={bookLabel}
        />
      </div>
    </section>
  );
}
