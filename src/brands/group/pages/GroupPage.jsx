// src/brands/group/pages/GroupPage.jsx
import styles from "./GroupPage.module.css";
import OverviewSection from "../components/section/OverviewSection";
import PeopleSection from "../components/section/PeopleSection";
import PresenceSection from "../components/section/PresenceSection";

// 👉 mantém o índice da ContactsSection
import ContactsSection from "../components/section/ContactsSection/";

export default function GroupPage() {
  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          <OverviewSection />
          <PeopleSection />
          <PresenceSection />
          {/* Section 4 — Contacts */}
          <ContactsSection />
        </div>
      </main>
    </div>
  );
}
