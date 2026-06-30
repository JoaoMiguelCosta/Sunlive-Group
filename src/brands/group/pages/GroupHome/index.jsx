import home from "../../config/pages/home.js";
import styles from "../../layouts/GroupPageLayout.module.css";

import OverviewSection from "./sections/OverviewSection/index.jsx";
import AboutSection from "./sections/AboutSection/index.jsx";
import DivisionsSection from "./sections/DivisionsSection/index.jsx";
import PeopleSection from "./sections/PeopleSection/index.jsx";
import PresenceSection from "./sections/PresenceSection/index.jsx";
import ContactsSection from "./sections/ContactsSection/index.jsx";
import PartnersSection from "./sections/PartnersSection/index.jsx";
import BookSection from "./sections/BookSection/index.jsx";

import GroupFooter from "../../components/GroupFooter/GroupFooter.jsx";
import { groupFooter as footerConfig } from "../../config/core/footer.js";

import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

export default function GroupHome() {
  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main
        id={home.id}
        className={styles.inner}
        aria-label={home.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <OverviewSection />
          <AboutSection />
          <DivisionsSection />

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
