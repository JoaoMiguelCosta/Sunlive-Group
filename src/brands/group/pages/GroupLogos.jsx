import styles from "./GroupPages.module.css";

import LogosUtilityBar from "../layout/LogosUtilityBar.jsx";

import Committees from "../components/Sections/GroupLogos/Committees/index.jsx";
import PortugueseFederations from "../components/Sections/GroupLogos/PortugueseFederations/index.jsx";
import InternationalFederations from "../components/Sections/GroupLogos/InternationalFederations/index.jsx";
import Teams from "../components/Sections/GroupLogos/Teams/index.jsx";
import Associations from "../components/Sections/GroupLogos/Associations/index.jsx";

import GroupFooter from "../layout/GroupFooter/GroupFooter.jsx";
import groupBrand from "../config/registry/index.js";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function PartnersLogosPage() {
  const logosInset = "clamp(16px, 3.5vw, 44px)";

  useScrollToHash(24);

  const footerConfig = groupBrand.sections?.footer;

  return (
    <div className={styles.pageWrap}>
      <LogosUtilityBar />

      <main className={styles.inner}>
        <div className={styles.sections}>
          <Committees />
          <PortugueseFederations />
          <InternationalFederations />
          <Teams />
          <Associations />
        </div>
      </main>

      <GroupFooter
        data={footerConfig}
        flushTop
        style={{ "--section-inset": logosInset, "--sl-line-inset": logosInset }}
      />
    </div>
  );
}
