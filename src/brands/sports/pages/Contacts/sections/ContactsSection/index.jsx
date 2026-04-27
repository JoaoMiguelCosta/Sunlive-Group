import styles from "./ContactsSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}

function getValidActions(actions) {
  return Array.isArray(actions)
    ? actions.filter(
        (action) =>
          isValidObject(action) &&
          isValidText(action.key) &&
          isValidText(action.label) &&
          isValidText(action.href),
      )
    : [];
}

function getValidSocials(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.label) &&
          isValidText(item.href),
      )
    : [];
}

function getDisplayValue(value) {
  if (isValidText(value)) return value;

  if (isValidObject(value)) {
    return (
      value.label ||
      value.title ||
      value.name ||
      value.address ||
      value.value ||
      ""
    );
  }

  return "";
}

function getIconComponent(iconSet, iconKey) {
  if (!isValidObject(iconSet) || !isValidText(iconKey)) return null;

  return iconSet[iconKey] || iconSet[`${iconKey}Icon`] || null;
}

function getSectionTitleId(sectionId, hasTitle) {
  return isValidText(sectionId) && hasTitle ? `${sectionId}-title` : undefined;
}

function getSectionLeadId(sectionId, hasLead) {
  return isValidText(sectionId) && hasLead ? `${sectionId}-lead` : undefined;
}

function IntroHeader({ intro, titleId, leadId }) {
  const hasEyebrow = isValidText(intro?.eyebrow);
  const hasTitle = isValidText(intro?.title);
  const hasLead = isValidText(intro?.lead);
  const hasSupportingText = isValidText(intro?.supportingText);

  if (!hasEyebrow && !hasTitle && !hasLead && !hasSupportingText) return null;

  return (
    <header className={styles.header}>
      {hasEyebrow ? <p className={styles.eyebrow}>{intro.eyebrow}</p> : null}

      {hasTitle ? (
        <h1 id={titleId} className={styles.title}>
          {intro.title}
        </h1>
      ) : null}

      {hasLead ? (
        <p id={leadId} className={styles.lead}>
          {intro.lead}
        </p>
      ) : null}

      {hasSupportingText ? (
        <p className={styles.supportingText}>{intro.supportingText}</p>
      ) : null}
    </header>
  );
}

function ActionLink({ action, iconSet }) {
  const Icon = getIconComponent(iconSet, action.iconKey);

  return (
    <a
      className={styles.action}
      href={action.href}
      aria-label={action.ariaLabel}
      data-variant={action.variant}
    >
      {Icon ? (
        <span className={styles.actionIcon} aria-hidden="true">
          <Icon />
        </span>
      ) : null}

      <span>{action.label}</span>
    </a>
  );
}

function PrimaryContactPanel({ data, iconSet }) {
  if (!data) return null;

  const actions = getValidActions(data.actions);

  return (
    <article
      className={styles.primaryPanel}
      aria-label={data.eyebrow || data.title}
    >
      <span className={styles.primaryGlow} aria-hidden="true" />

      <div className={styles.primaryContent}>
        {isValidText(data.eyebrow) ? (
          <p className={styles.panelEyebrow}>{data.eyebrow}</p>
        ) : null}

        {isValidText(data.title) ? (
          <h2 className={styles.panelTitle}>{data.title}</h2>
        ) : null}

        {isValidText(data.description) ? (
          <p className={styles.panelDescription}>{data.description}</p>
        ) : null}

        {actions.length > 0 ? (
          <div className={styles.actions}>
            {actions.map((action) => (
              <ActionLink key={action.key} action={action} iconSet={iconSet} />
            ))}
          </div>
        ) : null}
      </div>

      {isValidText(data.note) ? (
        <aside className={styles.primaryNote}>
          <span className={styles.noteMarker} aria-hidden="true" />
          <p>{data.note}</p>
        </aside>
      ) : null}
    </article>
  );
}

function ChannelCard({ item, iconSet }) {
  const Icon = getIconComponent(iconSet, item.iconKey);
  const value = getDisplayValue(item.value);
  const hasHref = isValidText(item.href);

  const content = (
    <>
      <div className={styles.channelHeader}>
        {Icon ? (
          <span className={styles.channelIcon} aria-hidden="true">
            <Icon />
          </span>
        ) : null}

        <div className={styles.channelHeading}>
          {isValidText(item.label) ? (
            <span className={styles.channelLabel}>{item.label}</span>
          ) : null}

          <h3 className={styles.channelTitle}>{item.title}</h3>
        </div>
      </div>

      {isValidText(value) ? (
        <p className={styles.channelValue}>{value}</p>
      ) : null}

      {isValidText(item.description) ? (
        <p className={styles.channelDescription}>{item.description}</p>
      ) : null}
    </>
  );

  return (
    <li className={styles.channelItem}>
      {hasHref ? (
        <a
          href={item.href}
          aria-label={item.ariaLabel}
          className={styles.channelCard}
        >
          {content}
        </a>
      ) : (
        <div className={styles.channelCard}>{content}</div>
      )}
    </li>
  );
}

function RequestTypeCard({ item, index }) {
  const number = isValidText(item.number)
    ? item.number
    : String(index + 1).padStart(2, "0");

  return (
    <li className={styles.requestItem}>
      <div className={styles.requestTopline}>
        <span className={styles.requestNumber} aria-hidden="true">
          {number}
        </span>

        {isValidText(item.meta) ? (
          <span className={styles.requestMeta}>{item.meta}</span>
        ) : null}
      </div>

      <h3 className={styles.requestTitle}>{item.title}</h3>

      {isValidText(item.description) ? (
        <p className={styles.requestDescription}>{item.description}</p>
      ) : null}
    </li>
  );
}

function BriefingItem({ item }) {
  return (
    <li className={styles.briefingItem}>
      <span className={styles.briefingDot} aria-hidden="true" />

      <div className={styles.briefingContent}>
        <h3 className={styles.briefingTitle}>{item.title}</h3>

        {isValidText(item.description) ? (
          <p className={styles.briefingDescription}>{item.description}</p>
        ) : null}
      </div>
    </li>
  );
}

function ProcessStep({ item, index }) {
  const number = isValidText(item.number)
    ? item.number
    : String(index + 1).padStart(2, "0");

  return (
    <li className={styles.processStep}>
      <span className={styles.processNumber} aria-hidden="true">
        {number}
      </span>

      <div className={styles.processContent}>
        <h3 className={styles.processTitle}>{item.title}</h3>

        {isValidText(item.description) ? (
          <p className={styles.processDescription}>{item.description}</p>
        ) : null}
      </div>
    </li>
  );
}

function SocialLink({ item, iconSet }) {
  const Icon = getIconComponent(iconSet, item.iconKey || item.key);

  return (
    <li className={styles.socialItem}>
      <a
        className={styles.socialLink}
        href={item.href}
        aria-label={item.ariaLabel || item.label}
        target="_blank"
        rel="noreferrer"
      >
        {Icon ? (
          <span className={styles.socialIcon} aria-hidden="true">
            <Icon />
          </span>
        ) : null}

        <span>{item.label}</span>
      </a>
    </li>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  if (
    !isValidText(eyebrow) &&
    !isValidText(title) &&
    !isValidText(description)
  ) {
    return null;
  }

  return (
    <header className={styles.blockHeader}>
      {isValidText(eyebrow) ? (
        <p className={styles.blockEyebrow}>{eyebrow}</p>
      ) : null}

      {isValidText(title) ? (
        <h2 className={styles.blockTitle}>{title}</h2>
      ) : null}

      {isValidText(description) ? (
        <p className={styles.blockDescription}>{description}</p>
      ) : null}
    </header>
  );
}

export default function ContactsSection({ data, iconSet }) {
  if (!data) return null;

  const requestTypes = getValidItems(data.requestTypes);
  const channels = getValidItems(data.channels);
  const briefingItems = getValidItems(data.briefing?.items);
  const processSteps = getValidItems(data.responseProcess?.steps);
  const socials = getValidSocials(data.socials?.items);

  const hasTitle = isValidText(data.intro?.title);
  const hasLead = isValidText(data.intro?.lead);

  const titleId = getSectionTitleId(data.id, hasTitle);
  const leadId = getSectionLeadId(data.id, hasLead);

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
    >
      <div className={styles.surface}>
        <span className={styles.edgeLine} aria-hidden="true" />
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.noise} aria-hidden="true" />

        <div className={styles.heroGrid}>
          <IntroHeader intro={data.intro} titleId={titleId} leadId={leadId} />

          <PrimaryContactPanel data={data.primaryContact} iconSet={iconSet} />
        </div>

        {channels.length > 0 ? (
          <ul
            className={styles.channels}
            aria-label={data.ui?.channelsAriaLabel}
          >
            {channels.map((item) => (
              <ChannelCard key={item.key} item={item} iconSet={iconSet} />
            ))}
          </ul>
        ) : null}

        {requestTypes.length > 0 ? (
          <div className={styles.requestBlock}>
            <ul
              className={styles.requestGrid}
              aria-label={data.ui?.requestTypesAriaLabel}
            >
              {requestTypes.map((item, index) => (
                <RequestTypeCard key={item.key} item={item} index={index} />
              ))}
            </ul>
          </div>
        ) : null}

        {briefingItems.length > 0 || processSteps.length > 0 ? (
          <div className={styles.supportGrid}>
            {briefingItems.length > 0 ? (
              <article
                className={styles.supportPanel}
                aria-label={data.ui?.briefingAriaLabel}
              >
                <SectionHeader
                  eyebrow={data.briefing?.eyebrow}
                  title={data.briefing?.title}
                  description={data.briefing?.description}
                />

                <ul className={styles.briefingList}>
                  {briefingItems.map((item) => (
                    <BriefingItem key={item.key} item={item} />
                  ))}
                </ul>
              </article>
            ) : null}

            {processSteps.length > 0 ? (
              <article
                className={styles.supportPanel}
                aria-label={data.ui?.responseProcessAriaLabel}
              >
                <SectionHeader
                  eyebrow={data.responseProcess?.eyebrow}
                  title={data.responseProcess?.title}
                  description={data.responseProcess?.description}
                />

                <ol className={styles.processList}>
                  {processSteps.map((item, index) => (
                    <ProcessStep key={item.key} item={item} index={index} />
                  ))}
                </ol>
              </article>
            ) : null}
          </div>
        ) : null}

        {socials.length > 0 || data.closingNote ? (
          <footer className={styles.footerPanel}>
            {data.closingNote ? (
              <div className={styles.closingNote}>
                {isValidText(data.closingNote.title) ? (
                  <h2 className={styles.closingTitle}>
                    {data.closingNote.title}
                  </h2>
                ) : null}

                {isValidText(data.closingNote.description) ? (
                  <p className={styles.closingDescription}>
                    {data.closingNote.description}
                  </p>
                ) : null}
              </div>
            ) : null}

            {socials.length > 0 ? (
              <div className={styles.socials}>
                <SectionHeader
                  eyebrow={data.socials?.eyebrow}
                  title={data.socials?.title}
                  description={data.socials?.description}
                />

                <ul
                  className={styles.socialList}
                  aria-label={data.ui?.socialsAriaLabel}
                >
                  {socials.map((item) => (
                    <SocialLink key={item.key} item={item} iconSet={iconSet} />
                  ))}
                </ul>
              </div>
            ) : null}
          </footer>
        ) : null}
      </div>
    </section>
  );
}
