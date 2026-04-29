import styles from "./RelatedAreas.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

import ModalityActions from "./ModalityActions.jsx";
import ModalityIconFrame from "./ModalityIconFrame.jsx";

function ProjectGridBlock({ block }) {
  const projects = getValidArray(block?.items).filter((item) =>
    isValidText(item?.title),
  );

  if (projects.length === 0) return null;

  return (
    <article className={styles.projectPanel}>
      <div className={styles.projectPanelHeader}>
        {isValidText(block.heading) ? (
          <h4 className={styles.blockTitle}>{block.heading}</h4>
        ) : null}
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article
            key={project.key || project.title}
            className={styles.projectCard}
          >
            <div className={styles.projectTop}>
              <div className={styles.projectHeading}>
                {isValidText(project.meta) ? (
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

            {isValidText(project.description) ? (
              <p className={styles.projectDescription}>{project.description}</p>
            ) : null}

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
          </article>
        ))}
      </div>
    </article>
  );
}

export default function RelatedAreas({ relatedAreas }) {
  const blocks = getValidArray(relatedAreas?.blocks);

  if (
    !isValidText(relatedAreas?.heading) &&
    !isValidText(relatedAreas?.description) &&
    blocks.length === 0
  ) {
    return null;
  }

  return (
    <article
      className={styles.panel}
      aria-label={relatedAreas?.heading || "Frentes associadas à modalidade"}
    >
      <div className={styles.panelHeader}>
        <span className={styles.panelKicker}>Frentes associadas</span>

        {isValidText(relatedAreas.heading) ? (
          <h3 className={styles.panelTitle}>{relatedAreas.heading}</h3>
        ) : null}

        {isValidText(relatedAreas.description) ? (
          <p className={styles.panelLead}>{relatedAreas.description}</p>
        ) : null}
      </div>

      {blocks.length > 0 ? (
        <div className={styles.relatedStack}>
          {blocks.map((block) => {
            if (block.type === "project-grid") {
              return <ProjectGridBlock key={block.key} block={block} />;
            }

            return null;
          })}
        </div>
      ) : null}
    </article>
  );
}
