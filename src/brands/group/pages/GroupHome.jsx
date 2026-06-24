import styles from "../layouts/GroupPageLayout.module.css";

import OverviewSection from "../components/Sections/Group/OverviewSection/index.jsx";
import PeopleSection from "../components/Sections/Group/PeopleSection/index.jsx";
import PresenceSection from "../components/Sections/Group/PresenceSection/index.jsx";
import ContactsSection from "../components/Sections/Group/ContactsSection/index.jsx";
import PartnersSection from "../components/Sections/Group/PartnersSection/index.jsx";
import BookSection from "../components/Sections/Group/BookSection/index.jsx";

import GroupFooter from "../layouts/GroupFooter/GroupFooter.jsx";
import { groupFooter as footerConfig } from "../config/core/footer.js";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function GroupHome() {
  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main
        id="group-page"
        className={styles.inner}
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
