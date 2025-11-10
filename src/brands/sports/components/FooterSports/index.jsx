import styles from "./FooterSports.module.css";

import InfoHeader from "../../../../shared/components/FooterGroup/InfoHeader.jsx";
import Acknowledgements from "../../../../shared/components/FooterGroup/Acknowledgements.jsx";
import PoliciesBar from "../../../../shared/components/FooterGroup/PoliciesBar.jsx";

import SportsLinkDirectory from "./SportsLinkDirectory.jsx";

/**
 * FooterSports — compõe o footer para a marca Sports
 * Props: `data` vindo de sportsBrand.sections.footer
 */
export default function FooterSports({
  data,
  flushTop = false,
  variant = "default",
  ...rest
}) {
  if (!data) return null;

  // ⚠️ Nunca uses "InfoHeader" como variável local
  const {
    InfoHeader: infoHeaderFromConfig, // maiúsculas (compat Travel)
    infoHeader, // minúsculas (fallback)
    linkDirectory,
    acknowledgements,
    policiesBar,
    id = "footer-sports",
  } = data;

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
      aria-label="Footer — Sunlive Sports"
      {...rest}
    >
      <div className={styles.frame}>
        {infoHeaderData && <InfoHeader data={infoHeaderData} />}

        {linkDirectory && <SportsLinkDirectory data={linkDirectory} />}

        {acknowledgements && <Acknowledgements data={acknowledgements} />}
        {policiesBar && <PoliciesBar data={policiesBar} />}
      </div>
    </footer>
  );
}
