import styles from "./GroupPages.module.css";

import GroupUtilityBar from "../layout/GroupUtilityBar.jsx";

import OverviewSection from "../components/Sections/Group/OverviewSection/index.jsx";
import PeopleSection from "../components/Sections/Group/PeopleSection/index.jsx";
import PresenceSection from "../components/Sections/Group/PresenceSection/index.jsx";
import ContactsSection from "../components/Sections/Group/ContactsSection/index.jsx";
import PartnersSection from "../components/Sections/Group/PartnersSection/index.jsx";
import BookSection from "../components/Sections/Group/BookSection/index.jsx";

import GroupFooter from "../layout/GroupFooter/GroupFooter.jsx";
import groupBrand from "../config/index.js";

import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function GroupPage() {
  useScrollToHash(24);

  const footerConfig = groupBrand.sections?.footer;

  return (
    <div className={styles.pageWrap}>
      <GroupUtilityBar />

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


