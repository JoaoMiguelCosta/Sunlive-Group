// src/brands/group/pages/PartnersLogosPage.jsx
import styles from "./GroupPage.module.css";

import HeaderUtilityBar from "../components/SectionLogos/HeaderUtilityBar";
import Committees from "../components/SectionLogos/Committees";
import PortugueseFederations from "../components/SectionLogos/PortugueseFederations";
import InternationalFederations from "../components/SectionLogos/InternationalFederations";
import Teams from "../components/SectionLogos/Teams";
import Associations from "../components/SectionLogos/Associations";

import FooterGroup from "../../../shared/components/FooterGroup";
import { footer as footerConfig } from "../ConfigGroup";

// Hook para scroll suave até ao hash (#id)
import useScrollToHash from "../../../shared/hooks/useScrollToHash.js";

export default function PartnersLogosPage() {
  // o módulo de Logos trabalha com este inset (é o que usas nas linhas)
  const logosInset = "clamp(16px, 3.5vw, 44px)";

  // Ajusta o offset se tiveres header/linha fixa no topo
  useScrollToHash(24);

  return (
    <div className={styles.pageWrap}>
      <main className={styles.inner}>
        <div className={styles.sections}>
          <HeaderUtilityBar />
          <Committees />
          <PortugueseFederations />
          <InternationalFederations />
          <Teams />
          <Associations />
        </div>
      </main>

      {/* cola ao bloco anterior e força o MESMO inset das Logos */}
      <FooterGroup
        data={footerConfig}
        flushTop
        /* garante que o cálculo do frame = container − 2×inset
           bate exatamente nos limites da gold rule acima */
        style={{
          "--section-inset": logosInset, // usado pelo footer
          "--sl-line-inset": logosInset, // fallback caso o CSS use esta var
        }}
      />
    </div>
  );
}
