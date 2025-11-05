// src/brands/travel/pages/TravelPage.jsx
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

export default function TravelPage() {
  // Compensa o header fixo (ajusta o valor se necessário)
  useScrollToHash(24);

  // Base do footer (Travel)
  const rawFooter = travelBrand.sections?.footer ?? {};

  // Normalizar InfoHeader (Travel config usa "InfoHeader")
  const { InfoHeader, infoHeader, acknowledgements, id, ...rest } = rawFooter;

  const footerData = {
    ...rest,
    id: id || "footer-travel",
    infoHeader: infoHeader ?? InfoHeader ?? null,
    acknowledgements: acknowledgements ?? groupFooter?.acknowledgements ?? null,
  };

  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          <section className={styles.section}>
            <TravelHeaderNav />
          </section>

          <section id="logistica" className={styles.section}>
            <LogisticsSolutionsSection />
          </section>

          <section id="destinos-nacionais" className={styles.section}>
            <DomesticDestinationsSection />
          </section>

          <section id="destinos-internacionais" className={styles.section}>
            <InternationalDestinationsSection />
          </section>

          <section id="hoteis-parceiros" className={styles.section}>
            <PartnerHotelsSection />
          </section>

          <section id="parceiros-viagens" className={styles.section}>
            <TravelPartnersSection />
          </section>

          <section id="testemunhos" className={styles.section}>
            <TestimonialsAndMetricsSection />
          </section>

          <section className={styles.section}>
            <ContactCTASection />
          </section>
        </div>
      </main>

      {/* Footer colado ao bloco anterior */}
      <TravelFooter data={footerData} flushTop />
    </div>
  );
}
