// src/brands/sports/pages/Education/sections/OverviewSection.jsx
import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../shared/ui/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../shared/ui/ValuePillsBar/ValuePillsBar.jsx";
import { ICONS } from "../../../../../shared/config/BrandDefault.jsx";

const PILL_ICONS = {
  GraduationCapIcon: ICONS.GraduationCapIcon,
  values: ICONS.HeartIcon,
  compass: ICONS.CompassIcon,
};

export default function OverviewSection({ data }) {
  if (!data) return null;

  const { overview, pillars } = data;

  const pillItems =
    pillars?.items?.map((item) => ({
      key: item.key,
      label: item.label,
      Icon: item.iconKey ? (PILL_ICONS[item.iconKey] ?? null) : null,
    })) ?? [];

  return (
    <section
      className={styles.wrap}
      aria-label="Educação + Desporto — Sunlive Sports"
    >
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
