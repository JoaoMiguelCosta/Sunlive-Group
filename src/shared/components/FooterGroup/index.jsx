import styles from "./FooterGroup.module.css";

// sub-blocos
import InfoHeader from "./InfoHeader.jsx";
import LinkDirectory from "./LinkDirectory.jsx";
import Acknowledgements from "./Acknowledgements.jsx";
import PoliciesBar from "./PoliciesBar.jsx";

export default function FooterGroup({
  data,
  flushTop = false,
  variant = "default",
  ...rest
}) {
  if (!data) return null;

  // ⚠️ NÃO usar "InfoHeader" aqui, para não colidir com o componente importado
  const {
    infoHeader: infoHeaderData, // <- alias claro
    linkDirectory,
    acknowledgements,
    policiesBar,
    id = "footer",
  } = data;

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
      aria-label="Footer — Sunlive Group"
      {...rest}
    >
      <div className={styles.frame}>
        {infoHeaderData && <InfoHeader data={infoHeaderData} />}
        {linkDirectory && <LinkDirectory data={linkDirectory} />}
        {acknowledgements && <Acknowledgements data={acknowledgements} />}
        {policiesBar && <PoliciesBar data={policiesBar} />}
      </div>
    </footer>
  );
}
