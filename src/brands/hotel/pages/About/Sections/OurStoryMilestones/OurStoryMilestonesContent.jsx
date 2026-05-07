import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import HotelMilestoneCard from "../../../../shared/ui/HotelMilestoneCard/HotelMilestoneCard.jsx";

import styles from "./OurStoryMilestonesContent.module.css";

function getValidParagraphs(paragraphs) {
  return Array.isArray(paragraphs)
    ? paragraphs.filter(
        (paragraph) =>
          typeof paragraph === "string" && paragraph.trim().length > 0,
      )
    : [];
}

function getValidMilestones(milestones) {
  return Array.isArray(milestones)
    ? milestones.filter(
        (milestone) =>
          milestone &&
          typeof milestone === "object" &&
          (milestone.label || milestone.description),
      )
    : [];
}

export default function OurStoryMilestonesContent() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const paragraphs = getValidParagraphs(section?.text?.paragraphs);
  const highlightText = section?.text?.highlightPill?.text ?? "";
  const milestones = getValidMilestones(section?.milestones);

  const [firstParagraph, ...otherParagraphs] = paragraphs;

  return (
    <div className={styles.content}>
      <div className={styles.intro}>
        <div className={styles.copy}>
          {firstParagraph ? (
            <p className={`${styles.paragraph} ${styles.lead}`}>
              {firstParagraph}
            </p>
          ) : null}

          {otherParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {highlightText ? (
          <div className={styles.highlightWrap}>
            <HotelHighlightPill className={styles.highlightPill}>
              {highlightText}
            </HotelHighlightPill>
          </div>
        ) : null}
      </div>

      {milestones.length ? (
        <div className={styles.timelineStage}>
          <div className={styles.timelineTrack} aria-hidden="true" />

          <ol className={styles.timelineGrid} aria-label="Marcos da história">
            {milestones.map((item, index) => {
              const isFeatured = index === milestones.length - 1;

              return (
                <li
                  key={item.id ?? `${item.label}-${index}`}
                  className={[
                    styles.timelineItem,
                    isFeatured ? styles.timelineItemFeatured : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className={styles.timelineDot} aria-hidden="true" />

                  <HotelMilestoneCard
                    title={item.label}
                    subtitle={item.description}
                    featured={isFeatured}
                    className={[
                      styles.milestoneCard,
                      isFeatured ? styles.milestoneCardFeatured : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
