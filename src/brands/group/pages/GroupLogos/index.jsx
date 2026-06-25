import logos from "../../config/pages/logos.js";
import styles from "../../layouts/GroupPageLayout.module.css";

import Committees from "./sections/Committees/index.jsx";
import PortugueseFederations from "./sections/PortugueseFederations/index.jsx";
import InternationalFederations from "./sections/InternationalFederations/index.jsx";
import Teams from "./sections/Teams/index.jsx";
import Associations from "./sections/Associations/index.jsx";

import GroupFooter from "../../components/GroupFooter/GroupFooter.jsx";
import { groupFooter as footerConfig } from "../../config/core/footer.js";

import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

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
        id={logos.id}
        className={styles.inner}
        aria-label={logos.ui.pageAriaLabel}
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
