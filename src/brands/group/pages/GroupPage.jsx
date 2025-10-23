// src/brands/group/pages/GroupPage.jsx
import styles from "./GroupPage.module.css";

import OverviewSection from "../components/section/OverviewSection";
import PeopleSection from "../components/section/PeopleSection";
import PresenceSection from "../components/section/PresenceSection";
import ContactsSection from "../components/section/ContactsSection";
import PartnersSection from "../components/section/PartnersSection";
import BookSection from "../components/section/BookSection";

// Footer compartilhado (casca que orquestra as 4 subsecções)
import FooterGroup from "../../../shared/components/FooterGroup";
// Config da própria brand (onde está a secção 7 — footer)
import { footer as footerConfig } from "../config";

export default function GroupPage() {
  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          {/* Section 1 — Overview */}
          <OverviewSection />

          {/* Section 2 — People */}
          <PeopleSection />

          {/* Section 3 — Presence */}
          <PresenceSection />

          {/* Section 4 — Contacts */}
          <ContactsSection />

          {/* Section 5 — Partners */}
          <PartnersSection />

          {/* Section 6 — Book (PDF) */}
          <BookSection />
        </div>
      </main>

      {/* Section 7 — Footer */}
      <FooterGroup data={footerConfig} />
    </div>
  );
}
