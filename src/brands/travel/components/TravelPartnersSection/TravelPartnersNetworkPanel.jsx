import { useMemo, useState } from "react";
import styles from "./TravelPartnersNetworkPanel.module.css";

function normalizePartners(partners = []) {
  if (!Array.isArray(partners)) return [];

  return partners
    .filter((partner) => partner?.picture?.src && partner?.city)
    .map((partner, index) => ({
      ...partner,
      key: partner?.key || `partner-${index}`,
    }));
}

export default function TravelPartnersNetworkPanel({
  network = {},
  partners = [],
}) {
  const safePartners = useMemo(() => normalizePartners(partners), [partners]);

  const initialKey =
    safePartners.find((item) => item.key === network?.initialKey)?.key ??
    safePartners[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialKey);

  const activePartner =
    safePartners.find((item) => item.key === activeKey) ??
    safePartners[0] ??
    null;

  const remainingPartners = safePartners.filter(
    (item) => item.key !== activePartner?.key,
  );

  if (!activePartner) return null;

  const selectorAriaLabel =
    network?.selectorAriaLabel ?? "Selecionar parceiro em destaque";

  const spotlightLabel = network?.spotlightLabel ?? "Parceiro em destaque";
  const roleLabel = network?.roleLabel ?? "Posicionamento";
  const selectorLabel = network?.selectorLabel ?? "Parceiros disponíveis";

  const ctaLabel = activePartner?.ctaLabel ?? "Saiba Mais";
  const ctaHref = activePartner?.href ?? null;
  const isExternal =
    typeof ctaHref === "string" &&
    (ctaHref.startsWith("http://") || ctaHref.startsWith("https://"));

  return (
    <section className={styles.section} aria-label={network?.ariaLabel}>
      <div className={styles.shell}>
        <div className={styles.featuredPartner}>
          <div className={styles.featuredIdentity}>
            <div className={styles.featuredLogoWrap}>
              {activePartner?.picture?.src ? (
                <img
                  src={activePartner.picture.src}
                  alt={activePartner?.picture?.alt ?? activePartner.city}
                  className={styles.featuredLogo}
                  style={{
                    objectPosition: activePartner?.imagePosition ?? "center",
                    objectFit: activePartner?.imageFit ?? "contain",
                  }}
                  loading="lazy"
                />
              ) : null}
            </div>

            <div className={styles.featuredIdentityMeta}>
              <span className={styles.featuredBadge}>{spotlightLabel}</span>
              <h3 className={styles.featuredTitle}>{activePartner.city}</h3>
            </div>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.editorialHead}>
              {network?.kicker ? (
                <p className={styles.kicker}>{network.kicker}</p>
              ) : null}

              {network?.title ? (
                <h3 className={styles.editorialTitle}>{network.title}</h3>
              ) : null}

              {network?.description ? (
                <p className={styles.editorialDescription}>
                  {network.description}
                </p>
              ) : null}
            </div>

            <div className={styles.partnerBody}>
              {activePartner?.summary ? (
                <p className={styles.summary}>{activePartner.summary}</p>
              ) : null}

              {activePartner?.badge ? (
                <div className={styles.roleBlock}>
                  <p className={styles.roleLabel}>{roleLabel}</p>
                  <p className={styles.roleValue}>{activePartner.badge}</p>
                </div>
              ) : null}

              {ctaHref ? (
                <div className={styles.actionRow}>
                  <a
                    href={ctaHref}
                    className={styles.partnerLink}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    aria-label={`${ctaLabel} sobre ${activePartner.city}`}
                  >
                    <span>{ctaLabel}</span>
                    <span
                      className={styles.partnerLinkIcon}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className={styles.selectorPanel} aria-label={selectorAriaLabel}>
          <div className={styles.selectorHead}>
            <p className={styles.selectorLabel}>{selectorLabel}</p>
            <p className={styles.selectorCount}>
              {safePartners.length} parceiros disponíveis
            </p>
          </div>

          <div
            className={styles.selectorList}
            role="tablist"
            aria-label={selectorAriaLabel}
          >
            {safePartners.map((partner) => {
              const isActive = partner.key === activePartner.key;

              return (
                <button
                  key={partner.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    styles.selectorItem,
                    isActive ? styles.selectorItemActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveKey(partner.key)}
                >
                  <span className={styles.selectorItemTop}>
                    <span className={styles.selectorItemBadge}>
                      {partner?.badge ?? partner.city}
                    </span>
                  </span>

                  <span className={styles.selectorItemTitle}>
                    {partner.city}
                  </span>

                  {partner?.summary ? (
                    <span className={styles.selectorItemSummary}>
                      {partner.summary}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </aside>

        {remainingPartners.length > 0 ? (
          <div className={styles.partnerCards}>
            {remainingPartners.map((partner) => {
              const cardCtaLabel = partner?.ctaLabel ?? "Saiba Mais";
              const cardHref = partner?.href ?? null;
              const cardExternal =
                typeof cardHref === "string" &&
                (cardHref.startsWith("http://") ||
                  cardHref.startsWith("https://"));

              return (
                <article key={partner.key} className={styles.partnerCard}>
                  <div className={styles.partnerCardLogoWrap}>
                    {partner?.picture?.src ? (
                      <img
                        src={partner.picture.src}
                        alt={partner?.picture?.alt ?? partner.city}
                        className={styles.partnerCardLogo}
                        style={{
                          objectPosition: partner?.imagePosition ?? "center",
                          objectFit: partner?.imageFit ?? "contain",
                        }}
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  <div className={styles.partnerCardContent}>
                    <div className={styles.partnerCardTop}>
                      <span className={styles.partnerCardBadge}>
                        {partner?.badge ?? partner.city}
                      </span>

                      <h4 className={styles.partnerCardTitle}>
                        {partner.city}
                      </h4>
                    </div>

                    {partner?.summary ? (
                      <p className={styles.partnerCardSummary}>
                        {partner.summary}
                      </p>
                    ) : null}

                    <div className={styles.partnerCardActions}>
                      <button
                        type="button"
                        className={styles.partnerCardSelectButton}
                        onClick={() => setActiveKey(partner.key)}
                      >
                        Ver em destaque
                      </button>

                      {cardHref ? (
                        <a
                          href={cardHref}
                          className={styles.partnerCardLink}
                          target={cardExternal ? "_blank" : undefined}
                          rel={cardExternal ? "noreferrer noopener" : undefined}
                          aria-label={`${cardCtaLabel} sobre ${partner.city}`}
                        >
                          <span>{cardCtaLabel}</span>
                          <span
                            className={styles.partnerCardLinkIcon}
                            aria-hidden="true"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
