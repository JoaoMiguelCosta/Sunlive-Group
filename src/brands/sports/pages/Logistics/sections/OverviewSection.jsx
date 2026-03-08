import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../shared/ui/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../shared/ui/ValuePillsBar/ValuePillsBar.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

export default function OverviewSection({ data }) {
  if (!data) return null;

  const { overview, pillars } = data;
  const icons = sportsBrand.icons;

  const pillItems =
    pillars?.items?.map((item) => ({
      key: item.key,
      label: item.label,
      Icon: resolveSportsIcon(icons, item.iconKey),
    })) ?? [];

  return (
    <section className={styles.wrap} aria-label="Logística — Sunlive Sports">
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
