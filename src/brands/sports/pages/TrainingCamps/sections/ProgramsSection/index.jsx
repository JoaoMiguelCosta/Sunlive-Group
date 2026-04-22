import styles from "./ProgramsSection.module.css";

import ProgramsSectionHeader from "./ProgramsSectionHeader.jsx";
import ProgramsCardsGrid from "./ProgramsCardsGrid.jsx";
import OtherSportsPanel from "./OtherSportsPanel.jsx";

export default function ProgramsSection({ data }) {
  if (!data) return null;

  const intro = data.sectionIntro ?? null;
  const items = Array.isArray(data.items) ? data.items : [];
  const otherSports = data.otherSports ?? null;

  const titleId = intro?.title ? "training-camps-programs-title" : undefined;

  if (!items.length) return null;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <ProgramsSectionHeader intro={intro} titleId={titleId} />
        <ProgramsCardsGrid items={items} />

        {otherSports ? (
          <div className={styles.otherSportsWrap}>
            <OtherSportsPanel data={otherSports} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
