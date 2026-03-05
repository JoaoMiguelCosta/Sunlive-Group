// src/brands/travel/page/index.jsx
import styles from "./TravelPage.module.css";

import TravelHeaderNav from "../components/TravelHeaderNav/index.jsx";
import LogisticsSolutionsSection from "../components/LogisticsSolutionsSection/index.jsx";
import DomesticDestinationsSection from "../components/DomesticDestinationsSection/index.jsx";
import InternationalDestinationsSection from "../components/InternationalDestinationsSection/index.jsx";
import PartnerHotelsSection from "../components/PartnerHotelsSection/index.jsx";
import TravelPartnersSection from "../components/TravelPartnersSection/index.jsx";
import TestimonialsAndMetricsSection from "../components/TestimonialsAndMetricsSection/index.jsx";
import ContactCTASection from "../components/ContactCTASection/index.jsx";

import TravelFooter from "../components/TravelFooter/index.jsx";

// ✅ melhor: resolve para ../brand/index.js automaticamente
import travelBrand from "../config/registry/index.js";

// ✅ mantém (ou migra depois)
import { footer as groupFooter } from "../config/registry/index.js";

// ✅ paths corretos para shared (a partir de src/brands/travel/page/)
import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";
import { buildFooterData } from "../../../shared/utils/buildFooterData.js";

export default function TravelPage() {
  useScrollToHash(24);

  const rawFooter = travelBrand.sections?.footer ?? {};
  const footerData = buildFooterData(rawFooter, groupFooter, "footer-travel");

  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main className={styles.inner} aria-label="Sunlive Travel — Home">
        <div className={styles.sections}>
          <TravelHeaderNav />

          <LogisticsSolutionsSection />
          <DomesticDestinationsSection />
          <InternationalDestinationsSection />
          <PartnerHotelsSection />
          <TravelPartnersSection />
          <TestimonialsAndMetricsSection />
          <ContactCTASection />
        </div>
      </main>

      <TravelFooter data={footerData} flushTop />
    </div>
  );
}
