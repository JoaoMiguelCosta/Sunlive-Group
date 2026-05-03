import styles from "../layout/GroupPageLayout.module.css";

import OverviewSection from "../components/Sections/Group/OverviewSection/index.jsx";
import PeopleSection from "../components/Sections/Group/PeopleSection/index.jsx";
import PresenceSection from "../components/Sections/Group/PresenceSection/index.jsx";
import ContactsSection from "../components/Sections/Group/ContactsSection/index.jsx";
import PartnersSection from "../components/Sections/Group/PartnersSection/index.jsx";
import BookSection from "../components/Sections/Group/BookSection/index.jsx";

import GroupFooter from "../layout/GroupFooter/GroupFooter.jsx";
import groupBrand from "../config/index.js";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function GroupHome() {
  useScrollToHash(24);

  const footerConfig = groupBrand.sections?.footer;

  return (
    <div className={styles.pageWrap}>
      <main
        id="group-page"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Group"
      >
        <div className={styles.contentFlow}>
          <OverviewSection />
          <PeopleSection />
          <PresenceSection />
          <ContactsSection />

          <div className={styles.sectionGap}>
            <PartnersSection />
          </div>

          <div className={styles.sectionGap}>
            <BookSection />
          </div>
        </div>
      </main>

      <GroupFooter data={footerConfig} flushTop />
    </div>
  );
}
