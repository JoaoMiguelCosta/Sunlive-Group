// src/brands/travel/components/TravelPartnersSection/TrustedCollaborationBanner.jsx
import styles from "./TrustedCollaborationBanner.module.css";
import travelBrand from "../../ConfigTravel.jsx";

/* Ícones disponíveis (adiciona aqui mais se precisares) */
import { ShieldIcon, HandshakeIcon } from "../../../../shared/ui/icons";

const ICON_BY_KEY = {
  handshake: HandshakeIcon,
  shield: ShieldIcon,
};

export default function TrustedCollaborationBanner({
  title: titleProp = "Parceiros de Viagem Sunlive Travel",
  subtitle:
    subtitleProp = "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes.",
  className = "",
}) {
  const cfg = travelBrand?.sections?.travelPartners?.trustedBanner ?? {};
  const Title = cfg?.title ?? titleProp;
  const Lead = cfg?.lead ?? subtitleProp;

  const Icon =
    (cfg?.iconKey && ICON_BY_KEY[cfg.iconKey.toLowerCase()]) || ShieldIcon;

  return (
    <section className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.iconWrap} aria-hidden="true">
          <Icon className={styles.icon} />
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
