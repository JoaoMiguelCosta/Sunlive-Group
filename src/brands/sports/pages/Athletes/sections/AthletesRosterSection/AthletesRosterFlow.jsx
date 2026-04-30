import AthletesModalityBlock from "./AthletesModalityBlock.jsx";

import styles from "./AthletesRosterFlow.module.css";

export default function AthletesRosterFlow({ modalities, ui }) {
  if (modalities.length === 0) return null;

  return (
    <div className={styles.rosterFlow}>
      {modalities.map((modality) => (
        <AthletesModalityBlock key={modality.key} modality={modality} ui={ui} />
      ))}
    </div>
  );
}
