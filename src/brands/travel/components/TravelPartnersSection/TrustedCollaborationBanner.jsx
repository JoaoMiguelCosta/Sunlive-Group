// src/brands/travel/components/TravelPartnersSection/TrustedCollaborationBanner.jsx
import styles from "./TrustedCollaborationBanner.module.css";
import travelBrand from "../../ConfigTravel.jsx";

export default function TrustedCollaborationBanner({
  title: titleProp = "Parceiros de Viagem Sunlive Travel",
  subtitle:
    subtitleProp = "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes.",
  className = "",
}) {
  const cfg = travelBrand?.sections?.travelPartners?.trustedBanner ?? {};
  const Title = cfg?.title ?? titleProp;
  const Lead = cfg?.lead ?? subtitleProp;

  // Ícones obtidos da brand (evita imports diretos no componente)
  const icons = travelBrand?.icons || {};
  const fallbackIcon = icons.shield || icons.handshake || null;
  const Icon =
    (cfg?.iconKey && icons[cfg.iconKey]) ||
    (cfg?.iconKey && icons[cfg.iconKey.toLowerCase?.()]) ||
    fallbackIcon;

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
