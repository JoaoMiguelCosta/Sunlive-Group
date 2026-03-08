import styles from "./LeisureBenefitsGrid.module.css";

import LeisureExperienceCard from "../../../shared/ui/LeisureExperienceCard/LeisureExperienceCard.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

export default function LeisureBenefitsGrid({ data, iconSet }) {
  if (!data) return null;

  const items = data.items;
  if (!items?.length) return null;

  const icons = iconSet || sportsBrand.icons;

  return (
    <section className={styles.section} aria-label={data.title}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item) => {
            const Icon = resolveSportsIcon(icons, item.iconKey);

            return (
              <LeisureExperienceCard
                key={item.key}
                icon={Icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
