import styles from "./RelatedAreas.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

import ModalityActions from "./ModalityActions.jsx";
import ModalityIconFrame from "./ModalityIconFrame.jsx";

const PROJECT_GRID_TYPE = "project-grid";

function getValidProjects(items) {
  return getValidArray(items).filter((item) => isValidText(item?.title));
}

function getValidActionLinks(links) {
  return getValidArray(links).filter(
    (link) => isValidText(link?.href) && isValidText(link?.label),
  );
}

function hasValidProjectActions(project) {
  return (
    isValidText(project?.websiteHref) ||
    isValidText(project?.instagramHref) ||
    isValidText(project?.facebookHref) ||
    isValidText(project?.bookKey) ||
    getValidActionLinks(project?.links).length > 0
  );
}

function getProjectKey(project, index) {
  if (isValidText(project?.key)) return project.key;
  if (isValidText(project?.title)) return project.title;

  return `related-project-${index + 1}`;
}

function getBlockKey(block, index) {
  if (isValidText(block?.key)) return block.key;
  if (isValidText(block?.heading)) return block.heading;

  return `related-block-${index + 1}`;
}

function getProjectLayout(projectsCount) {
  if (projectsCount <= 1) return "single";
  if (projectsCount === 2) return "duo";
  if (projectsCount === 3) return "trio";

  return "grid";
}

function isRenderableBlock(block) {
  if (!block || typeof block !== "object") return false;

  if (block.type === PROJECT_GRID_TYPE) {
    return getValidProjects(block.items).length > 0;
  }

  return false;
}

function ProjectCard({ project }) {
  const hasMeta = isValidText(project.meta);
  const hasDescription = isValidText(project.description);
  const hasActions = hasValidProjectActions(project);

  return (
    <article className={styles.projectCard} role="listitem">
      <div className={styles.projectTop}>
        <div className={styles.projectHeading}>
          {hasMeta ? (
            <span className={styles.projectMeta}>{project.meta}</span>
          ) : null}

          <h5 className={styles.projectTitle}>
            {project.shortTitle || project.title}
          </h5>
        </div>

        <ModalityIconFrame
          iconKey={project.iconKey}
          className={styles.projectIcon}
          size="sm"
        />
      </div>

      {hasDescription ? (
        <p className={styles.projectDescription}>{project.description}</p>
      ) : null}

      {hasActions ? (
        <div className={styles.projectActions}>
          <ModalityActions
            title={project.title}
            websiteHref={project.websiteHref}
            websiteLabel={project.websiteLabel}
            websiteAriaLabel={project.websiteAriaLabel}
            bookKey={project.bookKey}
            bookLabel={project.bookLabel}
            instagramHref={project.instagramHref}
            facebookHref={project.facebookHref}
            links={project.links}
          />
        </div>
      ) : null}
    </article>
  );
}

function ProjectGridBlock({ block }) {
  const projects = getValidProjects(block?.items);

  if (projects.length === 0) return null;

  const hasHeading = isValidText(block.heading);
  const projectLayout = getProjectLayout(projects.length);

  const gridAriaLabel = hasHeading
    ? block.heading
    : "Projetos associados à modalidade";

  return (
    <article
      className={styles.projectPanel}
      data-project-count={projects.length}
      data-project-layout={projectLayout}
    >
      {hasHeading ? (
        <header className={styles.projectPanelHeader}>
          <h4 className={styles.blockTitle}>{block.heading}</h4>
        </header>
      ) : null}

      <div
        className={styles.projectGrid}
        role="list"
        aria-label={gridAriaLabel}
        data-project-layout={projectLayout}
      >
        {projects.map((project, index) => (
          <ProjectCard key={getProjectKey(project, index)} project={project} />
        ))}
      </div>
    </article>
  );
}

export default function RelatedAreas({ relatedAreas }) {
  const blocks = getValidArray(relatedAreas?.blocks).filter(isRenderableBlock);

  const hasEyebrow = isValidText(relatedAreas?.eyebrow);
  const hasHeading = isValidText(relatedAreas?.heading);
  const hasDescription = isValidText(relatedAreas?.description);

  if (!hasEyebrow && !hasHeading && !hasDescription && blocks.length === 0) {
    return null;
  }

  const panelId = isValidText(relatedAreas?.id) ? relatedAreas.id : undefined;
  const titleId = panelId && hasHeading ? `${panelId}-title` : undefined;
  const descriptionId =
    panelId && hasDescription ? `${panelId}-description` : undefined;

  const fallbackAriaLabel =
    relatedAreas?.heading || "Frentes associadas à modalidade";

  return (
    <article
      id={panelId}
      className={styles.panel}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-label={titleId ? undefined : fallbackAriaLabel}
    >
      {hasEyebrow || hasHeading || hasDescription ? (
        <header className={styles.panelHeader}>
          <span className={styles.panelKicker}>
            {hasEyebrow ? relatedAreas.eyebrow : "Frentes associadas"}
          </span>

          {hasHeading ? (
            <h3 id={titleId} className={styles.panelTitle}>
              {relatedAreas.heading}
            </h3>
          ) : null}

          {hasDescription ? (
            <p id={descriptionId} className={styles.panelLead}>
              {relatedAreas.description}
            </p>
          ) : null}
        </header>
      ) : null}

      {blocks.length > 0 ? (
        <div className={styles.relatedStack}>
          {blocks.map((block, index) => {
            if (block.type === PROJECT_GRID_TYPE) {
              return (
                <ProjectGridBlock
                  key={getBlockKey(block, index)}
                  block={block}
                />
              );
            }

            return null;
          })}
        </div>
      ) : null}
    </article>
  );
}
