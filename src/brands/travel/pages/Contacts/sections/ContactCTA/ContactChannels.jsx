import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import styles from "./ContactChannels.module.css";

function isExternalUrl(href) {
  return (
    typeof href === "string" &&
    (href.startsWith("http://") || href.startsWith("https://"))
  );
}

export default function ContactChannels({
  channels = [],
  ariaLabel = "Canais de contacto Sunlive Travel",
}) {
  if (!Array.isArray(channels) || channels.length === 0) return null;

  const validItems = channels.filter((item) => item?.label && item?.href);
  if (validItems.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <ul className={styles.list} role="list" aria-label={ariaLabel}>
        {validItems.map((channel, index) => {
          const Icon = channel?.Icon ?? channel?.icon ?? null;
          const href = channel.href;
          const isExternal = isExternalUrl(href);

          return (
            <ScrollReveal
              as="li"
              key={channel.key || `${channel.label}-${index}`}
              className={styles.item}
              staggerIndex={index}
            >
              <a
                href={href}
                className={styles.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                aria-label={channel?.ariaLabel || channel.label}
              >
                {Icon ? (
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </span>
                ) : null}

                <span className={styles.content}>
                  <span className={styles.label}>{channel.label}</span>

                  {channel?.description ? (
                    <span className={styles.helper}>{channel.description}</span>
                  ) : null}
                </span>

                <span className={styles.chevron} aria-hidden="true" />
              </a>
            </ScrollReveal>
          );
        })}
      </ul>
    </div>
  );
}
