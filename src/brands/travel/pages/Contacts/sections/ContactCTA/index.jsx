import styles from "./ContactCTASection.module.css";
import contactCTA from "../../../../config/sections/contacts/contactCTA.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import { resolveTravelIcon } from "../../../../config/core/iconKeyMap.js";

import ContactIntroPanel from "./ContactIntroPanel.jsx";
import ContactPanelIntro from "./ContactPanelIntro.jsx";
import QuoteRequestChecklist from "./QuoteRequestChecklist.jsx";
import ContactChannels from "./ContactChannels.jsx";

function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function hasHeroContent(hero) {
  return Boolean(
    hero?.eyebrow ||
      hero?.title ||
      hero?.lead ||
      hero?.supportingText ||
      (Array.isArray(hero?.trustPoints) && hero.trustPoints.length > 0) ||
      (Array.isArray(hero?.stats) && hero.stats.length > 0),
  );
}

function hasPanelIntro(panel) {
  return Boolean(panel?.eyebrow || panel?.title || panel?.description);
}

export default function ContactCTASection() {
  const section = contactCTA;
  if (!section) return null;

  const sectionId = section?.id ?? "contactar";
  const sectionLabel =
    section?.ui?.sectionAriaLabel ?? "Secção de contacto Sunlive Travel";

  const hero = section?.conversionHero ?? {};
  const checklistPanel = section?.checklistPanel ?? {};
  const channelsPanel = section?.channelsPanel ?? {};

  const checklist = getValidArray(section?.checklist).filter(
    (item) => item?.label,
  );

  const channels = getValidArray(section?.channels)
    .filter((item) => item?.label && item?.href)
    .map((item) => ({
      ...item,
      Icon: resolveTravelIcon(ICONS, item.iconKey),
    }));

  const hasHero = hasHeroContent(hero);
  const hasChecklist = checklist.length > 0;
  const hasChannels = channels.length > 0;

  if (!hasHero && !hasChecklist && !hasChannels) return null;

  const checklistTitleId = `${sectionId}-checklist-title`;
  const channelsTitleId = `${sectionId}-channels-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="contact-cta"
    >
      <div className={styles.inner}>
        {hasHero ? <ContactIntroPanel hero={hero} /> : null}

        {hasChecklist || hasChannels ? (
          <div className={styles.contentGrid}>
            {hasChecklist ? (
              <section
                className={styles.panel}
                aria-labelledby={checklistTitleId}
              >
                {hasPanelIntro(checklistPanel) ? (
                  <ContactPanelIntro
                    id={checklistTitleId}
                    eyebrow={checklistPanel?.eyebrow}
                    title={checklistPanel?.title}
                    description={checklistPanel?.description}
                  />
                ) : null}

                <QuoteRequestChecklist
                  checklist={checklist}
                  ariaLabel={
                    section?.ui?.checklistAriaLabel ??
                    "Informação necessária para preparar uma proposta"
                  }
                />
              </section>
            ) : null}

            {hasChannels ? (
              <section
                className={`${styles.panel} ${styles.channelsPanel}`}
                aria-labelledby={channelsTitleId}
              >
                {hasPanelIntro(channelsPanel) ? (
                  <ContactPanelIntro
                    id={channelsTitleId}
                    eyebrow={channelsPanel?.eyebrow}
                    title={channelsPanel?.title}
                    description={channelsPanel?.description}
                  />
                ) : null}

                <ContactChannels
                  channels={channels}
                  ariaLabel={
                    section?.ui?.channelsAriaLabel ??
                    "Canais de contacto Sunlive Travel"
                  }
                />
              </section>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
