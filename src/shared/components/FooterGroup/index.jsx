import styles from "./FooterGroup.module.css";

// sub-blocos
import InfoHeader from "./InfoHedear.jsx"; // (mantive o nome do teu ficheiro)
import LinkDirectory from "./LinkDirectory.jsx";
import Acknowledgements from "./Acknowledgements.jsx";
import PoliciesBar from "./PoliciesBar.jsx";

/**
 * FooterGroup
 * Componente “casca” do footer que rende as 4 subdivisões quando existem dados.
 *
 * Props:
 *  - data: {
 *      infoHeader,        // obj (secção 7.1)
 *      linkDirectory,     // obj (secção 7.2)
 *      acknowledgements,  // obj (secção 7.3)
 *      policiesBar        // obj (secção 7.4)
 *    }
 *
 * Sugestão de uso:
 *  import { footer as footerConfig } from "../../../brands/group/pages/config";
 *  <FooterGroup data={footerConfig} />
 */
export default function FooterGroup({ data }) {
  if (!data) return null;

  const {
    infoHeader,
    linkDirectory,
    acknowledgements,
    policiesBar,
    id = "footer",
  } = data;

  return (
    <footer id={id} className={styles.footerWrap} role="contentinfo">
      {/* 7.1 */}
      {infoHeader && <InfoHeader data={infoHeader} />}

      {/* 7.2 */}
      {linkDirectory && <LinkDirectory data={linkDirectory} />}

      {/* 7.3 */}
      {acknowledgements && <Acknowledgements data={acknowledgements} />}

      {/* 7.4 */}
      {policiesBar && <PoliciesBar data={policiesBar} />}
    </footer>
  );
}
