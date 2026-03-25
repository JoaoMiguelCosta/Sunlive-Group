import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import HotelMilestoneCard from "../../../../shared/ui/HotelMilestoneCard/HotelMilestoneCard.jsx";
import styles from "./OurStoryMilestonesContent.module.css";

/**
 * OurStoryMilestonesContent
 * Layout:
 * - bloco editorial superior mais limpo
 * - timeline principal em grelha premium
 * - destaque final mais forte no último marco
 */
export default function OurStoryMilestonesContent() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const paragraphs = Array.isArray(section?.text?.paragraphs)
    ? section.text.paragraphs
    : [];

  const highlightText = section?.text?.highlightPill?.text ?? "";

  const milestones = Array.isArray(section?.milestones)
    ? section.milestones
    : [];

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

          {otherParagraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph}`}
              className={`${styles.paragraph} ${
                index === 0 ? styles.paragraphSecondary : ""
              }`}
            >
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

          <div className={styles.timelineGrid}>
            {milestones.map((item, index) => {
              const isFeatured = index === milestones.length - 1;

              return (
                <div
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
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
