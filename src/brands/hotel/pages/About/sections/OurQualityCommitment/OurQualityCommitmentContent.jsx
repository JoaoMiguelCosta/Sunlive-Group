import about from "../../../../config/pages/about.js";
const ourQualityCommitment = about.sections.qualityCommitment;
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";

import styles from "./OurQualityCommitmentContent.module.css";

function getValidParagraphs(paragraphs) {
  return Array.isArray(paragraphs)
    ? paragraphs.filter(
        (paragraph) =>
          typeof paragraph === "string" && paragraph.trim().length > 0,
      )
    : [];
}

function getValidCommitments(commitments) {
  return Array.isArray(commitments)
    ? commitments.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          typeof item.text === "string" &&
          item.text.trim().length > 0,
      )
    : [];
}

export default function OurQualityCommitmentContent() {
  const section = ourQualityCommitment;

  if (!section) return null;

  const paragraphs = getValidParagraphs(section?.text?.paragraphs);
  const pillText = section?.text?.highlightPill?.text ?? "";
  const commitmentItems = getValidCommitments(section?.commitments);

  const commitmentsPanel = section?.commitmentsPanel ?? null;

  const panelAriaLabel = commitmentsPanel?.ariaLabel ?? "";
  const panelKicker = commitmentsPanel?.kicker ?? "";
  const panelTitle = commitmentsPanel?.title ?? "";

  const [leadParagraph, ...otherParagraphs] = paragraphs;

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        <div className={styles.paragraphs}>
          {leadParagraph ? (
            <p className={`${styles.paragraph} ${styles.lead}`}>
              {leadParagraph}
            </p>
          ) : null}

          {otherParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {pillText ? (
          <div className={styles.pillWrap}>
            <HotelHighlightPill
              className={styles.pill}
              cardClassName={styles.pillCard}
              innerClassName={styles.pillInner}
              textClassName={styles.pillText}
            >
              {pillText}
            </HotelHighlightPill>
          </div>
        ) : null}
      </div>

      {commitmentItems.length > 0 ? (
        <aside
          className={styles.commitmentsCol}
          aria-label={panelAriaLabel || undefined}
        >
          <div className={styles.commitmentsInner}>
            <div className={styles.panelGlow} aria-hidden="true" />

            {(panelKicker || panelTitle) && (
              <header className={styles.commitmentsHeader}>
                {panelKicker ? (
                  <span className={styles.kicker}>{panelKicker}</span>
                ) : null}

                {panelTitle ? (
                  <h3 className={styles.commitmentsTitle}>{panelTitle}</h3>
                ) : null}
              </header>
            )}

            <ul className={styles.commitmentsList}>
              {commitmentItems.map((item, index) => (
                <li
                  key={item.id ?? `${item.text}-${index}`}
                  className={styles.commitmentItem}
                >
                  <span className={styles.checkMark} aria-hidden="true">
                    ✓
                  </span>

                  <span className={styles.commitmentText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
