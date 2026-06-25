import styles from "./PresenceSection.module.css";

import PresenceHeadline from "./PresenceHeadline.jsx";
import GlobalPresencePanel from "./GlobalPresencePanel.jsx";
import MantraHeadline from "./MantraHeadline.jsx";

export default function PresenceSection() {
  return (
    <section id="presence" className={styles.section} aria-label="Presença">
      <div className={styles.inner}>
        <PresenceHeadline />

        <div className={styles.band}>
          <GlobalPresencePanel />
        </div>

        <MantraHeadline />
      </div>
    </section>
  );
}
