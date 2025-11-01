// src/brands/travel/pages/TravelPage.jsx
import styles from "./TravelPage.module.css";
import TravelHeaderNav from "../components/TravelHeaderNav/index.jsx";
import LogisticsSolutionsSection from "../components/LogisticsSolutionsSection/index.jsx";
import DomesticDestinationsSection from "../components/DomesticDestinationsSection/index.jsx";
import InternationalDestinationsSection from "../components/InternationalDestinationsSection/index.jsx";

export default function TravelPage() {
  return (
    <main className={styles.page}>
      {/* Secção 1: Header numa só linha */}
      <TravelHeaderNav />

      {/* Secção 2: Soluções de Logística */}
      <LogisticsSolutionsSection />

      {/* Secção 3: Destinos Nacionais */}
      <DomesticDestinationsSection />

      {/* Secção 4: Destinos Internacionais */}
      <InternationalDestinationsSection />
    </main>
  );
}
