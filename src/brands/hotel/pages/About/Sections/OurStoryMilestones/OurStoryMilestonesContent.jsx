import hotelBrand from "../../../../config/registry/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import HotelMilestoneCard from "../../../../shared/ui/HotelMilestoneCard/HotelMilestoneCard.jsx";

import styles from "./OurStoryMilestonesContent.module.css";

/**
 * OurStoryMilestonesContent
 * Layout:
 *  - Coluna esquerda: texto + pill de destaque
 *  - Coluna direita: linha vertical + cards de marcos cronológicos
 */
export default function OurStoryMilestonesContent() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourStoryMilestones ?? null;

  if (!section) return null;

  const paragraphs = section.text?.paragraphs ?? [];
  const highlightText = section.text?.highlightPill?.text ?? "";
  const milestones = section.milestones ?? [];

  return (
    <div
      className={styles.section}
      aria-labelledby={section.id || "sobre-historia"}
    >
      <div className={styles.content}>
        {/* Coluna esquerda — texto da história */}
        <div className={styles.textCol}>
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          {highlightText && (
            <HotelHighlightPill className={styles.highlightWrap}>
              {highlightText}
            </HotelHighlightPill>
          )}
        </div>

        {/* Coluna direita — marcos cronológicos */}
        <div className={styles.timelineCol}>
          <div className={styles.timelineStack}>
            {milestones.map((item) => (
              <HotelMilestoneCard
                key={item.id}
                title={item.label}
                subtitle={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
