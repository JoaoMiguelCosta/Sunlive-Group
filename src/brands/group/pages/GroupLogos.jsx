// src/brands/group/pages/PartnersLogosPage.jsx
import styles from "./GroupPages.module.css";

import HeaderUtilityBar from "../components/Sections/GroupLogos/HeaderUtilityBar/index.jsx";
import Committees from "../components/Sections/GroupLogos/Committees/index.jsx";
import PortugueseFederations from "../components/Sections/GroupLogos/PortugueseFederations/index.jsx";
import InternationalFederations from "../components/Sections/GroupLogos/InternationalFederations/index.jsx";
import Teams from "../components/Sections/GroupLogos/Teams/index.jsx";
import Associations from "../components/Sections/GroupLogos/Associations/index.jsx";

import GroupFooter from "../layout/GroupFooter/GroupFooter.jsx";
import { footer as footerConfig } from "../config/ConfigGroup.jsx";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function PartnersLogosPage() {
  const logosInset = "clamp(16px, 3.5vw, 44px)";

  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          <HeaderUtilityBar />
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
