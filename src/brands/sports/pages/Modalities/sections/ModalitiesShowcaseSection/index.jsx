import { useEffect, useMemo, useRef, useState } from "react";

import sportsBrand, { resolveSportsIcon } from "../../../../config/index.js";

import { mapAcademiesToFeatureCards } from "../../../../shared/utils/mapAcademyToFeatureCard.js";

import styles from "./ModalitiesShowcaseSection.module.css";

const MODALITY_SELECT_EVENT = "sunlive:modalities-select";
const MOBILE_SCROLL_QUERY = "(max-width: 860px)";
const DESKTOP_SCROLL_OFFSET = 112;
const MOBILE_SCROLL_OFFSET = 82;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}

function getValidProjectItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.type),
      )
    : [];
}

function getValidCompactHighlights(highlights) {
  if (!Array.isArray(highlights)) return [];

  return highlights
    .map((highlight) => {
      if (isValidText(highlight)) return highlight;
      if (isValidText(highlight?.label)) return highlight.label;
      if (isValidText(highlight?.title)) return highlight.title;
      if (isValidText(highlight?.text)) return highlight.text;
      if (isValidText(highlight?.value)) return highlight.value;

      return null;
    })
    .filter(isValidText)
    .slice(0, 4);
}

function getValidActions(actions) {
  return Array.isArray(actions)
    ? actions.filter(
        (action) =>
          action &&
          typeof action === "object" &&
          isValidText(action.href) &&
          isValidText(action.label),
      )
    : [];
}

function toDomSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function getModalityId(item) {
  if (isValidText(item?.id)) return item.id;
  if (isValidText(item?.key)) return `modalities-${toDomSafeId(item.key)}`;

  return undefined;
}

function getInitialActiveKey(items, preferredKey) {
  const hasPreferredItem = items.some((item) => item.key === preferredKey);

  if (hasPreferredItem) return preferredKey;

  return items[0]?.key || null;
}

function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;

  return resolveSportsIcon(sportsBrand.icons, iconKey);
}

function getAcademiesConfig() {
  const candidates = [
    sportsBrand.sections?.academies?.cards,
    sportsBrand.pages?.academies?.sections?.cards,
    sportsBrand.pages?.academies?.sections?.academiesCards,
    sportsBrand.pages?.academies?.cards,
  ];

  return (
    candidates.find((candidate) => Array.isArray(candidate?.cards)) || null
  );
}

function getAcademyFeatureCard(academyKey) {
  if (!isValidText(academyKey)) return null;

  const academiesConfig = getAcademiesConfig();

  const academy = academiesConfig?.cards?.find(
    (card) => card.key === academyKey,
  );

  if (!academy) return null;

  const [mappedAcademy] = mapAcademiesToFeatureCards([academy], {
    cardAriaLabelPrefix: academiesConfig.cardAriaLabelPrefix,
    ui: academiesConfig.ui,
    books: sportsBrand.books,
  });

  return mappedAcademy || null;
}

function resolveBookHref(bookKey) {
  if (!isValidText(bookKey)) return null;

  const book = sportsBrand.books?.[bookKey];

  if (typeof book === "string") return book;
  if (isValidText(book?.href)) return book.href;
  if (isValidText(book?.url)) return book.url;

  return null;
}

function isExternalHref(href) {
  return isValidText(href) && /^https?:\/\//i.test(href);
}

function getProjectActionAriaLabel(project) {
  if (isValidText(project.bookAriaLabel)) return project.bookAriaLabel;

  const label = project.bookLabel || "Abrir Book";

  if (isValidText(project.title)) return `${label} — ${project.title}`;

  return label;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

function getScrollOffset() {
  return isMobileViewport() ? MOBILE_SCROLL_OFFSET : DESKTOP_SCROLL_OFFSET;
}

function scrollElementIntoView(element) {
  if (!element || typeof window === "undefined") return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - getScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function getHashTargetId() {
  if (typeof window === "undefined") return null;

  const rawHash = window.location.hash;

  if (!isValidText(rawHash) || rawHash.length <= 1) return null;

  try {
    return decodeURIComponent(rawHash.slice(1));
  } catch {
    return rawHash.slice(1);
  }
}

function findItemByKeyOrId(items, key, targetId) {
  return items.find((item) => {
    const itemId = getModalityId(item);

    return item.key === key || itemId === targetId;
  });
}

function IconRenderer({ Icon, className }) {
  if (!Icon) return null;

  return <Icon className={className} focusable="false" />;
}

function ProjectCard({ project }) {
  const Icon = getIconComponent(project.iconKey);
  const bookHref = resolveBookHref(project.bookKey);

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectGlow} aria-hidden="true" />

      <header className={styles.projectHeader}>
        <span className={styles.projectIconWrap} aria-hidden="true">
          <IconRenderer Icon={Icon} className={styles.projectIcon} />
        </span>

        {isValidText(project.title) ? (
          <h4 className={styles.projectTitle}>{project.title}</h4>
        ) : null}
      </header>

      {isValidText(project.description) ? (
        <p className={styles.projectDescription}>{project.description}</p>
      ) : null}

      {bookHref ? (
        <a
          className={styles.projectAction}
          href={bookHref}
          target={isExternalHref(bookHref) ? "_blank" : undefined}
          rel={isExternalHref(bookHref) ? "noreferrer" : undefined}
          aria-label={getProjectActionAriaLabel(project)}
        >
          {project.bookLabel || "Abrir Book"}
        </a>
      ) : null}
    </article>
  );
}

function AcademyProjectCard({ academyKey }) {
  const item = getAcademyFeatureCard(academyKey);

  if (!item) return null;

  const highlights = getValidCompactHighlights(item.highlights);
  const actions = getValidActions(item.actions).slice(0, 2);

  return (
    <article
      className={styles.academyCompactCard}
      aria-label={item.ariaLabel || item.title}
    >
      <header className={styles.academyCompactHeader}>
        {isValidText(item.logo?.src) ? (
          <span className={styles.academyCompactLogoWrap} aria-hidden="true">
            <img
              src={item.logo.src}
              alt=""
              className={styles.academyCompactLogo}
              loading="lazy"
              decoding="async"
            />
          </span>
        ) : null}

        <div className={styles.academyCompactHeading}>
          {isValidText(item.eyebrow) ? (
            <p className={styles.academyCompactEyebrow}>{item.eyebrow}</p>
          ) : null}

          {isValidText(item.title) ? (
            <h4 className={styles.academyCompactTitle}>{item.title}</h4>
          ) : null}
        </div>
      </header>

      {isValidText(item.summary) ? (
        <p className={styles.academyCompactSummary}>{item.summary}</p>
      ) : null}

      {highlights.length > 0 ? (
        <ul className={styles.academyCompactHighlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      {actions.length > 0 ? (
        <div className={styles.academyCompactActions}>
          {actions.map((action, index) => (
            <a
              key={`${item.id || item.title}-action-${index}`}
              href={action.href}
              className={
                index === 0
                  ? styles.academyCompactActionSecondary
                  : styles.academyCompactAction
              }
              target={isExternalHref(action.href) ? "_blank" : undefined}
              rel={isExternalHref(action.href) ? "noreferrer" : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function ModalitiesPanel({ title, iconKey, children }) {
  const Icon = getIconComponent(iconKey);

  return (
    <div className={styles.panel}>
      <header className={styles.panelHeader}>
        <span className={styles.panelIconWrap} aria-hidden="true">
          <IconRenderer Icon={Icon} className={styles.panelIcon} />
        </span>

        {isValidText(title) ? (
          <h3 className={styles.panelTitle}>{title}</h3>
        ) : null}
      </header>

      {children}
    </div>
  );
}

function HighlightPanel({ data }) {
  if (!data || !isValidText(data.title)) return null;

  const Icon = getIconComponent(data.iconKey);
  const bookHref = resolveBookHref(data.bookKey);
  const hasInstagram = isValidText(data.instagramHref);

  return (
    <aside id={data.id} className={styles.highlight}>
      <div className={styles.highlightIconWrap} aria-hidden="true">
        <IconRenderer Icon={Icon} className={styles.highlightIcon} />
      </div>

      <div className={styles.highlightContent}>
        <h3 className={styles.highlightTitle}>{data.title}</h3>

        {isValidText(data.description) ? (
          <p className={styles.highlightDescription}>{data.description}</p>
        ) : null}
      </div>

      <div className={styles.highlightActions}>
        {hasInstagram ? (
          <a
            className={styles.highlightAction}
            href={data.instagramHref}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        ) : null}

        {bookHref ? (
          <a
            className={styles.highlightActionPrimary}
            href={bookHref}
            target={isExternalHref(bookHref) ? "_blank" : undefined}
            rel={isExternalHref(bookHref) ? "noreferrer" : undefined}
          >
            {data.bookLabel || "Abrir Book"}
          </a>
        ) : null}
      </div>
    </aside>
  );
}

function ModalityBlock({ item, index, ui, panelRef }) {
  const Icon = getIconComponent(item.iconKey);
  const panelId = getModalityId(item);
  const headingId = `${panelId}-title`;

  const disciplines = getValidItems(item.disciplines?.items);
  const projects = getValidProjectItems(item.projects?.items);

  return (
    <article
      ref={panelRef}
      id={panelId}
      className={styles.modality}
      aria-labelledby={headingId}
      tabIndex={-1}
    >
      <div className={styles.modalityAside}>
        <span className={styles.modalityIndex}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={styles.modalityIconWrap} aria-hidden="true">
          <IconRenderer Icon={Icon} className={styles.modalityIcon} />
        </span>
      </div>

      <div className={styles.modalityBody}>
        <header className={styles.modalityHeader}>
          <h3 id={headingId} className={styles.modalityTitle}>
            {item.title}
          </h3>

          {isValidText(item.lead) ? (
            <p className={styles.modalityLead}>{item.lead}</p>
          ) : null}
        </header>

        <div className={styles.modalityContent}>
          <HighlightPanel data={item.highlight} />

          {disciplines.length > 0 ? (
            <ModalitiesPanel
              title={item.disciplines.heading || ui?.disciplinesLabel}
              iconKey={item.disciplines.headingIconKey}
            >
              <div className={styles.disciplinesGrid}>
                {disciplines.map((discipline) => (
                  <article
                    key={discipline.key}
                    className={styles.disciplineCard}
                  >
                    <h4 className={styles.disciplineTitle}>
                      {discipline.title}
                    </h4>

                    {isValidText(discipline.description) ? (
                      <p className={styles.disciplineDescription}>
                        {discipline.description}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </ModalitiesPanel>
          ) : null}

          {projects.length > 0 ? (
            <ModalitiesPanel
              title={item.projects.heading || ui?.projectsLabel}
              iconKey={item.projects.headingIconKey}
            >
              <div className={styles.projectsGrid}>
                {projects.map((project) => {
                  if (project.type === "academy-card") {
                    return (
                      <div
                        key={project.key}
                        className={styles.academyCardShell}
                      >
                        <AcademyProjectCard academyKey={project.academyKey} />
                      </div>
                    );
                  }

                  return <ProjectCard key={project.key} project={project} />;
                })}
              </div>
            </ModalitiesPanel>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function ModalitiesShowcaseSection({ data }) {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

  const sectionId = data?.id || "modalities-showcase";

  const items = useMemo(() => getValidItems(data?.items), [data?.items]);

  const initialActiveKey = useMemo(
    () => getInitialActiveKey(items, data?.ui?.defaultActiveKey),
    [items, data?.ui?.defaultActiveKey],
  );

  const [activeKey, setActiveKey] = useState(initialActiveKey);

  useEffect(() => {
    if (!initialActiveKey) {
      setActiveKey(null);
      return;
    }

    const hasActiveItem = items.some((item) => item.key === activeKey);

    if (!hasActiveItem) {
      setActiveKey(initialActiveKey);
    }
  }, [activeKey, initialActiveKey, items]);

  useEffect(() => {
    const targetId = getHashTargetId();

    if (!targetId) return;

    const targetItem = findItemByKeyOrId(items, null, targetId);

    if (!targetItem) return;

    setActiveKey(targetItem.key);
  }, [items]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    function handleExternalModalitySelect(event) {
      const targetKey = event.detail?.key;
      const targetId = event.detail?.targetId;
      const shouldScroll = Boolean(event.detail?.shouldScroll);

      const targetItem = findItemByKeyOrId(items, targetKey, targetId);

      if (!targetItem) return;

      shouldScrollAfterSelectRef.current = shouldScroll;
      setActiveKey(targetItem.key);

      if (shouldScroll && targetItem.key === activeKey) {
        window.requestAnimationFrame(() => {
          scrollElementIntoView(panelRef.current || sectionRef.current);
        });
      }
    }

    window.addEventListener(
      MODALITY_SELECT_EVENT,
      handleExternalModalitySelect,
    );

    return () => {
      window.removeEventListener(
        MODALITY_SELECT_EVENT,
        handleExternalModalitySelect,
      );
    };
  }, [activeKey, items]);

  useEffect(() => {
    if (!shouldScrollAfterSelectRef.current) return undefined;
    if (typeof window === "undefined") return undefined;

    shouldScrollAfterSelectRef.current = false;

    const frameId = window.requestAnimationFrame(() => {
      scrollElementIntoView(panelRef.current || sectionRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeKey]);

  if (!data) return null;

  const intro = data.intro;

  if (!intro && items.length === 0) return null;

  const activeIndex = Math.max(
    items.findIndex((item) => item.key === activeKey),
    0,
  );

  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  const titleId = isValidText(intro?.title) ? `${sectionId}-title` : undefined;
  const leadId = isValidText(intro?.lead) ? `${sectionId}-lead` : undefined;

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
    >
      <div className={styles.inner}>
        {intro ? (
          <header className={styles.header}>
            {isValidText(intro.eyebrow) ? (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            ) : null}

            {isValidText(intro.title) ? (
              <h2 id={titleId} className={styles.title}>
                {intro.title}
              </h2>
            ) : null}

            {isValidText(intro.lead) ? (
              <p id={leadId} className={styles.lead}>
                {intro.lead}
              </p>
            ) : null}
          </header>
        ) : null}

        <div className={styles.stack}>
          <ModalityBlock
            key={activeItem.key}
            item={activeItem}
            index={activeIndex}
            ui={data.ui}
            panelRef={panelRef}
          />
        </div>
      </div>
    </section>
  );
}
