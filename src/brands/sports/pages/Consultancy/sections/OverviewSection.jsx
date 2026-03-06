// src/brands/sports/pages/Consultancy/sections/OverviewSection.jsx
import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../shared/ui/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../shared/ui/ValuePillsBar/ValuePillsBar.jsx";

import { BRAND_ICONS } from "../../../config/icons.public.js";

/**
 * Mapa de ícones para os pilares da Consultoria.
 * Se algum não existir, o componente de pills ignora o ícone.
 */
const PILL_ICONS = {
  experience: BRAND_ICONS.ConsultingExperienceIcon,
  eye: BRAND_ICONS.EyeIcon,
  chart: BRAND_ICONS.ChartIcon,
};

/**
 * Secção "Consultoria que faz a diferença" + barra de pilares
 */
export default function OverviewSection({ data }) {
  if (!data) return null;

  const { overview, pillars } = data;

  const pillItems =
    pillars?.items?.map((item) => ({
      key: item.key,
      label: item.label,
      Icon: item.iconKey ? PILL_ICONS[item.iconKey] || null : null,
    })) ?? [];

  return (
    <section
      className={styles.wrap}
      aria-label="Consultoria Sunlive — Visão geral"
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
