import styles from "./Footer.module.css";
import DefaultInfoHeader from "./InfoHeader.jsx";
import DefaultAcknowledgements from "./Acknowledgements.jsx";
import DefaultPoliciesBar from "./PoliciesBar.jsx";

export default function Footer({
  data,
  flushTop = false,
  variant = "default",
  ariaLabel,
  components = {},
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

  // LinkDirectory é “slot”
  const LinkDirectory = components.LinkDirectory || null;

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

  return (
    <footer
      id={id}
      className={classes}
      role="contentinfo"
      aria-label={ariaLabel || "Footer"}
      {...rest}
    >
      <div
        className={`${styles.frame} ${infoHeaderData ? styles.noTopRule : ""}`}
      >
        {infoHeaderData && <InfoHeader data={infoHeaderData} />}

        {linkDirectory && LinkDirectory ? (
          <LinkDirectory data={linkDirectory} />
        ) : null}

        {acknowledgements && <Acknowledgements data={acknowledgements} />}
        {policiesBar && <PoliciesBar data={policiesBar} />}
      </div>
    </footer>
  );
}
