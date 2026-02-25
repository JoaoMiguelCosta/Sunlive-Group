// src/brands/group/pages/GroupPage.jsx
import styles from "./GroupPages.module.css";

import OverviewSection from "../components/Sections/Group/OverviewSection/index.jsx";
import PeopleSection from "../components/Sections/Group/PeopleSection/index.jsx";
import PresenceSection from "../components/Sections/Group/PresenceSection/index.jsx";
import ContactsSection from "../components/Sections/Group/ContactsSection/index.jsx";
import PartnersSection from "../components/Sections/Group/PartnersSection/index.jsx";
import BookSection from "../components/Sections/Group/BookSection/index.jsx";

import GroupFooter from "../layout/GroupFooter/GroupFooter.jsx";
import { footer as footerConfig } from "../config/ConfigGroup.jsx";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function GroupPage() {
  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          <OverviewSection />
          <PeopleSection />
          <PresenceSection />
          <ContactsSection />
          <PartnersSection />
          <BookSection />
        </div>
      </main>

      <GroupFooter data={footerConfig} flushTop />
    </div>
  );
}
