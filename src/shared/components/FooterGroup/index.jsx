// src/shared/components/FooterGroup/index.jsx
import styles from "./FooterGroup.module.css";
import DefaultInfoHeader from "./InfoHeader.jsx";
import DefaultLinkDirectory from "./LinkDirectory.jsx";
import DefaultAcknowledgements from "./Acknowledgements.jsx";
import DefaultPoliciesBar from "./PoliciesBar.jsx";

export default function FooterGroup({
  data,
  flushTop = false,
  variant = "default",
  footerAccent,
  components = {}, // 👈 overrides opcionais
  ...rest
}) {
  if (!data) return null;

  const {
    infoHeader: infoHeaderData,
    linkDirectory,
    acknowledgements,
    policiesBar,
    id = "footer",
  } = data;

  const InfoHeader = components.InfoHeader || DefaultInfoHeader;
  const LinkDirectory = components.LinkDirectory || DefaultLinkDirectory;
  const Acknowledgements =
    components.Acknowledgements || DefaultAcknowledgements;
  const PoliciesBar = components.PoliciesBar || DefaultPoliciesBar;

  const classes = [
    styles.footerWrap,
    flushTop ? styles.flushTop : "",
    variant === "wide" ? styles.wide : "",
  ]
    .filter(Boolean)
    .join(" ");

  const styleVar = footerAccent
    ? { "--footer-accent": footerAccent }
    : undefined;

  return (
    <footer
      id={id}
      className={classes}
      role="contentinfo"
      aria-label="Footer — Sunlive Group"
      style={styleVar}
      {...rest}
    >
      <div
        className={`${styles.frame} ${infoHeaderData ? styles.noTopRule : ""}`}
      >
        {infoHeaderData && <InfoHeader data={infoHeaderData} />}
        {linkDirectory && <LinkDirectory data={linkDirectory} />}
        {acknowledgements && <Acknowledgements data={acknowledgements} />}
        {policiesBar && <PoliciesBar data={policiesBar} />}
      </div>
    </footer>
  );
}
