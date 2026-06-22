import styles from "../layouts/GroupPageLayout.module.css";

import Committees from "../components/Sections/GroupLogos/Committees/index.jsx";
import PortugueseFederations from "../components/Sections/GroupLogos/PortugueseFederations/index.jsx";
import InternationalFederations from "../components/Sections/GroupLogos/InternationalFederations/index.jsx";
import Teams from "../components/Sections/GroupLogos/Teams/index.jsx";
import Associations from "../components/Sections/GroupLogos/Associations/index.jsx";

import GroupFooter from "../layouts/GroupFooter/GroupFooter.jsx";
import { groupFooter as footerConfig } from "../config/core/footer.js";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

const LOGOS_INSET = "clamp(16px, 3.5vw, 44px)";

export default function GroupLogos() {
  useScrollToHash(24);

  return (
    <div
      className={styles.pageWrap}
      style={{
        "--section-inset": LOGOS_INSET,
        "--sl-line-inset": LOGOS_INSET,
      }}
    >
      <main
        id="partners-logos-page"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Group — Logos e parceiros"
      >
        <div className={`${styles.contentFlow} ${styles.contentFlowWithGap}`}>
          <Committees />
          <PortugueseFederations />
          <InternationalFederations />
          <Teams />
          <Associations />
        </div>
      </main>

      <GroupFooter data={footerConfig} flushTop />
    </div>
  );
}
