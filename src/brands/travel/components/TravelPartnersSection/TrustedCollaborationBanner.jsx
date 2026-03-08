import styles from "./TrustedCollaborationBanner.module.css";
import travelBrand, { resolveTravelIcon } from "../../config/index.js";

export default function TrustedCollaborationBanner({
  title: titleProp = "Parceiros de Viagem Sunlive Travel",
  subtitle:
    subtitleProp = "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes.",
  className = "",
}) {
  const cfg = travelBrand?.sections?.travelPartners?.trustedBanner ?? {};
  const Title = cfg?.title ?? titleProp;
  const Lead = cfg?.lead ?? subtitleProp;

  const icons = travelBrand?.icons ?? {};
  const Icon =
    resolveTravelIcon(icons, cfg?.iconKey) || icons.HandshakeIcon || null;

  return (
    <section className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.iconWrap} aria-hidden="true">
          {Icon ? <Icon className={styles.icon} /> : null}
          <span className={styles.ring} />
        </div>

        <div className={styles.textBlock}>
          <h3 className={styles.title}>{Title}</h3>
          {Lead ? <p className={styles.subtitle}>{Lead}</p> : null}
        </div>
      </div>
    </section>
  );
}
