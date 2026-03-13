import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import HotelMilestoneCard from "../../../../shared/ui/HotelMilestoneCard/HotelMilestoneCard.jsx";
import styles from "./OurStoryMilestonesContent.module.css";

/**
 * OurStoryMilestonesContent
 * Layout:
 * - coluna esquerda: texto editorial + pill
 * - coluna direita: timeline premium com milestones
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

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        <div className={styles.copy}>
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`} className={styles.paragraph}>
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

      <div className={styles.timelineCol}>
        <div className={styles.timelinePanel}>
          <div className={styles.timelineRail} aria-hidden="true" />

          <div className={styles.timelineStack}>
            {milestones.map((item, index) => (
              <div
                key={item.id ?? `${item.label}-${index}`}
                className={styles.timelineItem}
              >
                <span className={styles.timelineDot} aria-hidden="true" />
                <HotelMilestoneCard
                  title={item.label}
                  subtitle={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
