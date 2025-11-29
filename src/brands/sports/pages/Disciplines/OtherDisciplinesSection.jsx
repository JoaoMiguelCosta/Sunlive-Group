// src/brands/sports/pages/Disciplines/OtherDisciplinesSection.jsx
import styles from "./OtherDisciplinesSection.module.css";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

/**
 * Outras Modalidades — bloco compacto em “escadinha”
 * Andebol, Judo, Esgrima, Voleibol, Surf.
 *
 * Agora com ícones vindos do mapa ICONS.
 */

const OTHER_DISCIPLINES = [
  { key: "handball", label: "Andebol", iconKey: "HandballIcon" },
  { key: "judo", label: "Judo", iconKey: "JudoIcon" },
  { key: "fencing", label: "Esgrima", iconKey: "FencingIcon" },
  { key: "volleyball", label: "Voleibol", iconKey: "VolleyballIcon" },
  { key: "surf", label: "Surf", iconKey: "SurfIcon" },
];

export default function OtherDisciplinesSection() {
  const topRow = OTHER_DISCIPLINES.slice(0, 3);
  const bottomRow = OTHER_DISCIPLINES.slice(3);

  const renderCard = (item) => {
    const Icon = ICONS[item.iconKey];

    return (
      <div key={item.key} className={styles.card} role="listitem">
        <span className={styles.iconCircle} aria-hidden="true">
          {Icon ? (
            <Icon className={styles.icon} />
          ) : (
            <span className={styles.iconLetter}>{item.label[0]}</span>
          )}
        </span>
        <span className={styles.label}>{item.label}</span>
      </div>
    );
  };

  return (
    <section
      className={styles.section}
      aria-label="Outras Modalidades Sunlive Sports"
    >
      <div className={styles.inner}>
        <div className={styles.cluster} role="list">
          {/* Linha de cima: 3 cartões */}
          <div className={`${styles.row} ${styles.rowTop}`}>
            {topRow.map(renderCard)}
          </div>

          {/* Linha de baixo: 2 cartões, centrados e “encaixados” */}
          <div className={`${styles.row} ${styles.rowBottom}`}>
            {bottomRow.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
