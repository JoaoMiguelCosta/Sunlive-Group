import styles from "./TravelFooter.module.css";

import InfoHeader from "../../../../shared/components/FooterGroup/InfoHeader.jsx";
import Acknowledgements from "../../../../shared/components/FooterGroup/Acknowledgements.jsx";
import PoliciesBar from "../../../../shared/components/FooterGroup/PoliciesBar.jsx";

// Variante Travel do LinkDirectory
import TravelLinkDirectory from "./TravelLinkDirectory.jsx";

/**
 * TravelFooter — compõe o footer para a marca Travel
 * Props esperadas: `data` vindo de travelBrand.sections.footer
 */
export default function TravelFooter({
  data,
  flushTop = false,
  variant = "default",
  ...rest
}) {
  if (!data) return null;

  // ⚠️ Nunca uses "InfoHeader" aqui (colide com o componente importado)
  const {
    InfoHeader: infoHeaderFromConfig, // Travel config (maiúsculas)
    infoHeader, // fallback (minúsculas)
    linkDirectory,
    acknowledgements,
    policiesBar,
    id = "footer-travel",
  } = data;

  // Normalizar a fonte dos dados do bloco InfoHeader
  const infoHeaderData = infoHeader ?? infoHeaderFromConfig ?? null;

  const classes = [
    styles.footerWrap,
    flushTop ? styles.flushTop : "",
    variant === "wide" ? styles.wide : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer
      id={id}
      className={classes}
      role="contentinfo"
      aria-label="Footer — Sunlive Travel"
      {...rest}
    >
      <div className={styles.frame}>
        {infoHeaderData && <InfoHeader data={infoHeaderData} />}

        {linkDirectory && <TravelLinkDirectory data={linkDirectory} />}

        {/* Mantém os mesmos sub-blocos do Group */}
        {acknowledgements && <Acknowledgements data={acknowledgements} />}
        {policiesBar && <PoliciesBar data={policiesBar} />}
      </div>
    </footer>
  );
}
