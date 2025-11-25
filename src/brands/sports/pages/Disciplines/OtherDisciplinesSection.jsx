// src/brands/sports/pages/Disciplines/OtherDisciplinesSection.jsx
import styles from "./OtherDisciplinesSection.module.css";

/**
 * Outras Modalidades — bloco compacto em “escadinha”
 * Estático por agora: Andebol, Judo, Esgrima, Voleibol, Surf.
 *
 * Se quiseres depois, dá para receber estes items por props/config.
 */

const OTHER_DISCIPLINES = [
  { key: "handball", label: "Andebol" },
  { key: "judo", label: "Judo" },
  { key: "fencing", label: "Esgrima" },
  { key: "volleyball", label: "Voleibol" },
  { key: "surf", label: "Surf" },
];

export default function OtherDisciplinesSection() {
  const topRow = OTHER_DISCIPLINES.slice(0, 3);
  const bottomRow = OTHER_DISCIPLINES.slice(3);

  return (
    <section
      className={styles.section}
      aria-label="Outras Modalidades Sunlive Sports"
    >
      <div className={styles.inner}>
        <div className={styles.cluster} role="list">
          {/* Linha de cima: 3 cartões */}
          <div className={`${styles.row} ${styles.rowTop}`}>
            {topRow.map((item) => (
              <div key={item.key} className={styles.card} role="listitem">
                <span className={styles.iconCircle} aria-hidden="true">
                  <span className={styles.iconLetter}>{item.label[0]}</span>
                </span>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Linha de baixo: 2 cartões, centrados e “encaixados” */}
          <div className={`${styles.row} ${styles.rowBottom}`}>
            {bottomRow.map((item) => (
              <div key={item.key} className={styles.card} role="listitem">
                <span className={styles.iconCircle} aria-hidden="true">
                  <span className={styles.iconLetter}>{item.label[0]}</span>
                </span>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
