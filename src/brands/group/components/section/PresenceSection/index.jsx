import styles from "./PresenceSection.module.css";

import PresenceHeadline from "./PresenceHeadline";
import GlobalPresencePanel from "./GlobalPresencePanel";
import MantraHeadline from "./MantraHeadline";

export default function PresenceSection() {
  return (
    <section id="presence" className={styles.section} aria-label="Presence">
      <div className={styles.inner}>
        <PresenceHeadline />

        {/* faixa full-bleed com o gradiente do hero por trás do painel */}
        <div className={styles.band}>
          <GlobalPresencePanel />
        </div>

        <MantraHeadline />
      </div>
    </section>
  );
}
