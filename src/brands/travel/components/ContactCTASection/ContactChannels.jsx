// src/brands/travel/components/ContactCTASection/ContactChannels.jsx
import styles from "./ContactChannels.module.css";
import travelBrand from "../../ConfigTravel.jsx";

export default function ContactChannels() {
  const channels = travelBrand?.sections?.contactCTA?.channels;
  if (!channels?.length) return null;

  return (
    <nav className={styles.wrap} aria-label="Canais de contacto">
      <ul className={styles.list} role="list">
        {channels.map(({ key, iconKey, label, href, ariaLabel }) => {
          const Icon = travelBrand?.icons?.[iconKey] || null;

          return (
            <li key={key} className={styles.item}>
              <a
                className={styles.link}
                href={href}
                aria-label={ariaLabel || label}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {Icon ? (
                  <Icon className={styles.icon} width={20} height={20} />
                ) : null}
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
