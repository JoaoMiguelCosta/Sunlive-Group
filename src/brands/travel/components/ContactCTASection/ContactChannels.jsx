import styles from "./ContactChannels.module.css";
import travelBrand, { resolveTravelIcon } from "../../config/index.js";

export default function ContactChannels() {
  const { sections, icons } = travelBrand;

  const channels = sections?.contactCTA?.channels ?? [];
  if (!Array.isArray(channels) || channels.length === 0) return null;

  const validChannels = channels.filter(
    (channel) => channel?.href && channel?.label,
  );

  if (validChannels.length === 0) return null;

  return (
    <nav className={styles.wrap} aria-label="Canais de contacto">
      <ul className={styles.list} role="list">
        {validChannels.map(
          ({ key, iconKey, label, href, ariaLabel }, index) => {
            const Icon = resolveTravelIcon(icons, iconKey);
            const isExternal =
              typeof href === "string" && /^https?:\/\//.test(href);

            return (
              <li key={key || `${label}-${index}`} className={styles.item}>
                <a
                  className={styles.link}
                  href={href}
                  aria-label={ariaLabel || label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {Icon ? (
                    <Icon className={styles.icon} width={20} height={20} />
                  ) : null}

                  <span className={styles.label}>{label}</span>
                </a>
              </li>
            );
          },
        )}
      </ul>
    </nav>
  );
}
