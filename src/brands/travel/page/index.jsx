// src/brands/travel/page/index.jsx
import styles from "./TravelPage.module.css";

import TravelHeaderNav from "../components/TravelHeaderNav";
import LogisticsSolutionsSection from "../components/LogisticsSolutionsSection";
import DomesticDestinationsSection from "../components/DomesticDestinationsSection";
import InternationalDestinationsSection from "../components/InternationalDestinationsSection";
import PartnerHotelsSection from "../components/PartnerHotelsSection";
import TravelPartnersSection from "../components/TravelPartnersSection";
import TestimonialsAndMetricsSection from "../components/TestimonialsAndMetricsSection";
import ContactCTASection from "../components/ContactCTASection";

import TravelFooter from "../components/TravelFooter";

// ✅ melhor: resolve para ../brand/index.js automaticamente
import travelBrand from "../brand";

// ✅ mantém (ou migra depois)
import { footer as groupFooter } from "../../group/config/ConfigGroup.jsx";

// ✅ paths corretos para shared (a partir de src/brands/travel/page/)
import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

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
