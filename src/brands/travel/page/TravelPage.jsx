// Sunlive Travel — Página principal (alinhada ao layout “Performance Prestige”)

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

// Normalizador partilhado do footer
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

export default function TravelPage() {
  // Compensa header/linha fixa (ajusta se necessário)
  useScrollToHash(24);

  // Base do footer (Travel)
  const rawFooter = travelBrand.sections?.footer ?? {};

  // Normalização centralizada (helper reutilizável)
  const footerData = buildFooterData(rawFooter, groupFooter, "footer-travel");

  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main className={styles.inner} aria-label="Sunlive Travel — Home">
        <div className={styles.sections}>
          {/* Header utilitário / navegação */}
          <TravelHeaderNav />

          {/* Secções principais */}
          <LogisticsSolutionsSection />
          <DomesticDestinationsSection />
          <InternationalDestinationsSection />
          <PartnerHotelsSection />
          <TravelPartnersSection />
          <TestimonialsAndMetricsSection />
          <ContactCTASection />
        </div>
      </main>

      {/* Footer colado ao bloco anterior */}
      <TravelFooter data={footerData} flushTop />
    </div>
  );
}
