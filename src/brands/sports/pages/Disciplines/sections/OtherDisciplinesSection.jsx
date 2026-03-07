// src/brands/sports/pages/Disciplines/OtherDisciplinesSection.jsx
import styles from "./OtherDisciplinesSection.module.css";

import { ICONS } from "../../../config/index.js";

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
          <div className={`${styles.row} ${styles.rowTop}`}>
            {topRow.map(renderCard)}
          </div>

          <div className={`${styles.row} ${styles.rowBottom}`}>
            {bottomRow.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
