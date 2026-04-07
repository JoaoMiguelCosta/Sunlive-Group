import { useMemo, useState } from "react";
import styles from "./InternationalDestinationsShowcase.module.css";

function normalizeDestinations(destinations = []) {
  if (!Array.isArray(destinations)) return [];

  return destinations
    .filter((item) => item?.city)
    .map((item, index) => ({
      ...item,
      key: item?.key || `destination-${index}`,
    }));
}

export default function InternationalDestinationsShowcase({
  showcase = {},
  destinations = [],
  flags = {},
}) {
  const safeDestinations = useMemo(
    () => normalizeDestinations(destinations),
    [destinations],
  );

  const initialKey =
    safeDestinations.find((item) => item.key === showcase?.initialKey)?.key ??
    safeDestinations[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialKey);

  const activeDestination =
    safeDestinations.find((item) => item.key === activeKey) ??
    safeDestinations[0] ??
    null;

  const secondaryDestinations = safeDestinations.filter(
    (item) => item.key !== activeDestination?.key,
  );

  if (!activeDestination) return null;

  const FlagIcon = activeDestination?.flagKey
    ? flags?.[activeDestination.flagKey]
    : null;

  const highlightItems = Array.isArray(activeDestination?.highlights)
    ? activeDestination.highlights.filter(Boolean)
    : [];

  const railAriaLabel =
    showcase?.railAriaLabel ?? "Selecionar destino internacional em destaque";

  const spotlightLabel = showcase?.spotlightLabel ?? "Destino em destaque";
  const highlightsLabel = showcase?.highlightsLabel ?? "Pontos de interesse";
  const durationLabel = showcase?.durationLabel ?? "Formato do programa";
  const railLabel = showcase?.railLabel ?? "Seleção internacional";

  return (
    <section className={styles.section} aria-label={showcase?.ariaLabel}>
      <div className={styles.shell}>
        <div className={styles.spotlight}>
          <div className={styles.spotlightMedia}>
            {activeDestination?.picture?.src ? (
              <img
                src={activeDestination.picture.src}
                alt={activeDestination?.picture?.alt ?? activeDestination.city}
                className={styles.spotlightImage}
                style={{
                  objectPosition: activeDestination?.imagePosition ?? "center",
                  objectFit: activeDestination?.imageFit ?? "cover",
                }}
                loading="lazy"
              />
            ) : null}

            <div className={styles.spotlightOverlay} aria-hidden="true" />

            <div className={styles.spotlightMeta}>
              <span className={styles.spotlightBadge}>{spotlightLabel}</span>

              <div className={styles.spotlightTitleRow}>
                {FlagIcon ? (
                  <span className={styles.flagWrap} aria-hidden="true">
                    <FlagIcon className={styles.flagIcon} />
                  </span>
                ) : null}

                <h3 className={styles.spotlightTitle}>
                  {activeDestination.city}
                </h3>
              </div>

              {activeDestination?.badge ? (
                <p className={styles.spotlightLocation}>
                  {activeDestination.badge}
                </p>
              ) : null}
            </div>
          </div>

          <div className={styles.spotlightBody}>
            <div className={styles.editorialHead}>
              {showcase?.kicker ? (
                <p className={styles.kicker}>{showcase.kicker}</p>
              ) : null}

              {showcase?.title ? (
                <h3 className={styles.editorialTitle}>{showcase.title}</h3>
              ) : null}

              {showcase?.description ? (
                <p className={styles.editorialDescription}>
                  {showcase.description}
                </p>
              ) : null}
            </div>

            <div className={styles.destinationBody}>
              {activeDestination?.summary ? (
                <p className={styles.summary}>{activeDestination.summary}</p>
              ) : null}

              {activeDestination?.duration ? (
                <div className={styles.detailBlock}>
                  <p className={styles.detailLabel}>{durationLabel}</p>
                  <p className={styles.detailValue}>
                    {activeDestination.duration}
                  </p>
                </div>
              ) : null}

              {highlightItems.length > 0 ? (
                <div className={styles.detailBlock}>
                  <p className={styles.detailLabel}>{highlightsLabel}</p>

                  <ul
                    className={styles.highlights}
                    aria-label={`Destaques de ${activeDestination.city}`}
                  >
                    {highlightItems.map((item) => (
                      <li key={item} className={styles.highlight}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className={styles.rail} aria-label={railAriaLabel}>
          <div className={styles.railHead}>
            <p className={styles.railLabel}>{railLabel}</p>
            <p className={styles.railCount}>
              {safeDestinations.length} destinos disponíveis
            </p>
          </div>

          <div
            className={styles.railList}
            role="tablist"
            aria-label={railAriaLabel}
          >
            {safeDestinations.map((destination) => {
              const isActive = destination.key === activeDestination.key;
              const ItemFlagIcon = destination?.flagKey
                ? flags?.[destination.flagKey]
                : null;

              return (
                <button
                  key={destination.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    styles.railItem,
                    isActive ? styles.railItemActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveKey(destination.key)}
                >
                  <span className={styles.railItemTop}>
                    <span className={styles.railItemBadge}>
                      {destination?.badge ?? destination.city}
                    </span>

                    {destination?.duration ? (
                      <span className={styles.railItemMeta}>
                        {destination.duration}
                      </span>
                    ) : null}
                  </span>

                  <span className={styles.railItemTitleRow}>
                    {ItemFlagIcon ? (
                      <span className={styles.railFlagWrap} aria-hidden="true">
                        <ItemFlagIcon className={styles.railFlagIcon} />
                      </span>
                    ) : null}

                    <span className={styles.railItemTitle}>
                      {destination.city}
                    </span>
                  </span>

                  {destination?.summary ? (
                    <span className={styles.railItemSummary}>
                      {destination.summary}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </aside>

        {secondaryDestinations.length > 0 ? (
          <div className={styles.secondaryGrid}>
            {secondaryDestinations.map((destination) => {
              const ItemFlagIcon = destination?.flagKey
                ? flags?.[destination.flagKey]
                : null;

              return (
                <article key={destination.key} className={styles.secondaryCard}>
                  <div className={styles.secondaryMediaWrap}>
                    {destination?.picture?.src ? (
                      <img
                        src={destination.picture.src}
                        alt={destination?.picture?.alt ?? destination.city}
                        className={styles.secondaryImage}
                        style={{
                          objectPosition:
                            destination?.imagePosition ?? "center",
                          objectFit: destination?.imageFit ?? "cover",
                        }}
                        loading="lazy"
                      />
                    ) : null}

                    <div
                      className={styles.secondaryOverlay}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.secondaryContent}>
                    <div className={styles.secondaryTop}>
                      <span className={styles.secondaryBadge}>
                        {destination?.badge ?? destination.city}
                      </span>

                      <div className={styles.secondaryTitleRow}>
                        {ItemFlagIcon ? (
                          <span
                            className={styles.secondaryFlagWrap}
                            aria-hidden="true"
                          >
                            <ItemFlagIcon
                              className={styles.secondaryFlagIcon}
                            />
                          </span>
                        ) : null}

                        <h4 className={styles.secondaryTitle}>
                          {destination.city}
                        </h4>
                      </div>
                    </div>

                    {destination?.summary ? (
                      <p className={styles.secondarySummary}>
                        {destination.summary}
                      </p>
                    ) : null}

                    <button
                      type="button"
                      className={styles.secondaryButton}
                      onClick={() => setActiveKey(destination.key)}
                    >
                      Explorar destino
                    </button>
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
