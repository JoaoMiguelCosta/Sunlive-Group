// src/brands/sports/pages/Disciplines/OverviewSection.jsx
import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../../shared/components/Sports/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../../shared/components/Sports/ValuePillsBar/ValuePillsBar.jsx";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

const PILL_ICONS = {
  athlete: ICONS.AthleteBarbellIcon,
  brush: ICONS.BrushCleaningIcon,
  shield: ICONS.ShieldIcon,
};

/**
 * Secção "Mais do que modalidades" + barra de pilares.
 */
export default function OverviewSection({ data }) {
  if (!data) return null;

  const { overview, pillars } = data;

  const pillItems =
    pillars?.items?.map((item) => ({
      key: item.key,
      label: item.label,
      Icon:
        item.iconKey && PILL_ICONS[item.iconKey]
          ? PILL_ICONS[item.iconKey]
          : null,
    })) ?? [];

  return (
    <section className={styles.wrap} aria-label="Modalidades — Sunlive Sports">
      <TextMediaSection
        id={overview?.id}
        eyebrow={overview?.eyebrow}
        title={overview?.title}
        paragraphs={overview?.paragraphs}
        imageSide="right"
        image={overview?.image}
      />

      {pillItems.length > 0 && (
        <div className={styles.pillsRow}>
          <ValuePillsBar items={pillItems} align="center" />
        </div>
      )}
    </section>
  );
}
