import styles from "./ContactChannels.module.css";
import travelBrand from "../../config/index.js";

export default function ContactChannels() {
  const sectionCfg = travelBrand?.sections?.contactCTA ?? null;
  const channels = sectionCfg?.channels ?? [];
  const ariaLabel =
    sectionCfg?.ui?.channelsAriaLabel ?? "Canais de contacto Sunlive Travel";

  if (!Array.isArray(channels) || channels.length === 0) return null;

  const validItems = channels.filter((item) => item?.label && item?.href);
  if (validItems.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <ul className={styles.list} role="list" aria-label={ariaLabel}>
        {validItems.map((channel, index) => {
          const Icon = channel?.Icon ?? channel?.icon ?? null;
          const href = channel.href;
          const isExternal =
            typeof href === "string" &&
            (href.startsWith("http://") || href.startsWith("https://"));

          return (
            <li
              key={channel.key || `${channel.label}-${index}`}
              className={styles.item}
            >
              <a
                href={href}
                className={styles.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                aria-label={channel?.ariaLabel || channel.label}
              >
                {Icon ? (
                  <Icon className={styles.icon} aria-hidden="true" />
                ) : null}

                <span className={styles.content}>
                  <span className={styles.label}>{channel.label}</span>

                  {channel?.description ? (
                    <span className={styles.helper}>{channel.description}</span>
                  ) : null}
                </span>

                <span className={styles.chevron} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
