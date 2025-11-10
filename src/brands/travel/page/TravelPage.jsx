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
import travelBrand from "../ConfigTravel.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";

// Scroll suave quando a rota vem com #hash (ex.: #destinos-nacionais)
import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

// 👇 NOVO: helper de normalização
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

export default function TravelPage() {
  // Compensa o header fixo (ajusta o valor se necessário)
  useScrollToHash(24);

  // Base do footer (Travel)
  const rawFooter = travelBrand.sections?.footer ?? {};

  // Normalização centralizada (helper reutilizável)
  const footerData = buildFooterData(rawFooter, groupFooter, "footer-travel");

  return (
    <div className={`${styles.pageWrap} ${styles.page}`}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          {/* Header pode ser <section> lá dentro ou <header>, aqui não embrulhamos */}
          <TravelHeaderNav />

          {/* Cada um já devolve <section id="…"> */}
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
