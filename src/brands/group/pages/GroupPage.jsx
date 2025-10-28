// src/brands/group/pages/GroupPage.jsx
import styles from "./GroupPage.module.css";

import Overviewsection from "../components/SectionGroup/OverviewSection";
import Peoplesection from "../components/SectionGroup/PeopleSection";
import Presencesection from "../components/SectionGroup/PresenceSection";
import ContactsSection from "../components/SectionGroup/ContactsSection";
import Partnerssection from "../components/SectionGroup/PartnersSection";
import Booksection from "../components/SectionGroup/BookSection";

// Footer compartilhado (casca que orquestra as 4 subsecções)
import FooterGroup from "../../../shared/components/FooterGroup";
// Config da própria brand (onde está a secção 7 — footer)
import { footer as footerConfig } from "../ConfigGroup";

// Hook para scroll suave quando a rota vem com #hash (ex.: #country-malta)
import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function GroupPage() {
  // Compensa header/linha fixa (ajusta se necessário)
  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          {/* section 1 — Overview */}
          <Overviewsection />

          {/* section 2 — People */}
          <Peoplesection />

          {/* section 3 — Presence */}
          <Presencesection />

          {/* section 4 — Contacts */}
          <ContactsSection />

          {/* section 5 — Partners */}
          <Partnerssection />

          {/* section 6 — Book (PDF) */}
          <Booksection />
        </div>
      </main>

      {/* section 7 — Footer (colado ao bloco anterior) */}
      <FooterGroup data={footerConfig} flushTop />
    </div>
  );
}
