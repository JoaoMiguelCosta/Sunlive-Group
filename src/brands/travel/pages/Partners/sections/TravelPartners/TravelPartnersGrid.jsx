import styles from "./TravelPartnersGrid.module.css";

export default function TravelPartnersGrid({ network = {}, partners = [] }) {
  const safePartners = Array.isArray(partners) ? partners : [];

  const hasContent = network?.title || safePartners.length > 0;

  if (!hasContent) return null;

  return (
    <div className={styles.wrap}>
      {network?.title ? (
        <h2 className={styles.title}>{network.title}</h2>
      ) : null}

      {safePartners.length > 0 ? (
        <ul className={styles.grid}>
          {safePartners.map((partner) => {
            const CardTag = partner?.href ? "a" : "div";
            const cardLinkProps = partner?.href
              ? {
                  href: partner.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <li
                key={partner.key}
                id={partner.anchorId}
                className={styles.item}
              >
                <CardTag className={styles.card} {...cardLinkProps}>
                  {partner?.picture?.src ? (
                    <div className={styles.mediaWrap}>
                      <img
                        src={partner.picture.src}
                        alt={partner?.picture?.alt ?? partner.name}
                        className={styles.media}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}

                  <div className={styles.cardBody}>
                    {partner?.type ? (
                      <p className={styles.cardType}>{partner.type}</p>
                    ) : null}

                    <h3 className={styles.cardTitle}>{partner.name}</h3>

                    {partner?.specialty ? (
                      <p className={styles.cardSpecialty}>
                        {partner.specialty}
                      </p>
                    ) : null}

                    {partner?.description ? (
                      <p className={styles.cardDescription}>
                        {partner.description}
                      </p>
                    ) : null}
                  </div>
                </CardTag>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
