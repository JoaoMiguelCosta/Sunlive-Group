import styles from "./ProgramsSection.module.css";
import ProgramSportCard from "./ProgramSportCard.jsx";
import OtherSportsPanel from "./OtherSportsPanel.jsx";
import useInView from "../../../shared/hooks/useInView.js";

export default function ProgramsSection({ data }) {
  if (!data) return null;

  const intro = data.sectionIntro ?? null;
  const items = Array.isArray(data.items) ? data.items : [];
  const otherSports = data.otherSports ?? null;

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.18,
    once: true,
  });

  const { ref: otherSportsRef, inView: otherSportsInView } = useInView({
    threshold: 0.12,
    once: true,
  });

  if (!items.length) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="training-camps-programs-title"
    >
      <div className={styles.inner}>
        {intro ? (
          <header
            ref={headerRef}
            className={`${styles.sectionHeader} ${styles.reveal} ${
              headerInView ? styles.isVisible : ""
            }`}
          >
            {intro.eyebrow ? (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            ) : null}

            {intro.title ? (
              <h2 id="training-camps-programs-title" className={styles.title}>
                {intro.title}
              </h2>
            ) : null}

            {intro.description ? (
              <p className={styles.description}>{intro.description}</p>
            ) : null}
          </header>
        ) : null}

        <div className={styles.cards}>
          {items.map((item, index) => (
            <ProgramSportCard
              key={item.key || `${item.sport}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        {otherSports ? (
          <div
            ref={otherSportsRef}
            className={`${styles.otherSportsWrap} ${styles.reveal} ${
              otherSportsInView ? styles.isVisible : ""
            }`}
          >
            <OtherSportsPanel data={otherSports} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
