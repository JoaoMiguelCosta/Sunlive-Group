import dining from "../../../../config/pages/dining.js";
const sundayBuffet = dining.sections.sundayBuffet;
import TitleSundayBuffet from "./TitleSundayBuffet.jsx";
import DescriptionSundayBuffet from "./DescriptionSundayBuffet.jsx";
import SundayBuffetGalleryCta from "./SundayBuffetGalleryCta.jsx";

import styles from "./SundayBuffet.module.css";

function normalizeHighlights(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          id: `sunday-buffet-highlight-${index}`,
          label: item.trim(),
        };
      }

      if (!item || typeof item !== "object") return null;

      const label = String(item.label ?? "").trim();
      if (!label) return null;

      return {
        id: item.id ?? `sunday-buffet-highlight-${index}`,
        label,
      };
    })
    .filter(Boolean);
}

export default function SundayBuffetSection() {
  const section = sundayBuffet;

  if (!section) return null;

  const sectionId = section?.id ?? "restaurant-buffet";
  const titleId = `${sectionId}-title`;
  const introEyebrow = String(section?.introEyebrow ?? "").trim();

  const highlights = normalizeHighlights(section?.highlights?.items);
  const highlightsAriaLabel =
    section?.highlights?.ariaLabel ?? "Destaques do buffet de domingo";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introShell}>
          {introEyebrow ? (
            <p className={styles.eyebrow}>{introEyebrow}</p>
          ) : null}

          <div className={styles.headerBlock}>
            <TitleSundayBuffet titleId={titleId} />
            <DescriptionSundayBuffet />
          </div>

          {highlights.length ? (
            <ul
              className={styles.highlightsList}
              aria-label={highlightsAriaLabel}
            >
              {highlights.map((item) => (
                <li key={item.id} className={styles.highlightItem}>
                  <span className={styles.highlightPill}>{item.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={styles.contentStack}>
          <SundayBuffetGalleryCta />
        </div>
      </div>
    </section>
  );
}
