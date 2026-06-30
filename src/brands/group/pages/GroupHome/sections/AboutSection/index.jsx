import { Link } from "react-router-dom";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import { ABOUT_SECTION } from "./aboutSection.config.js";
import styles from "./AboutSection.module.css";

function ArrowRight({ className }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M1 5h8M6 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function PanelParagraphs({ item }) {
  return (
    <div className={styles.panelBody}>
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.panelText}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PanelServices({ item }) {
  return (
    <div className={styles.panelBody}>
      <p className={styles.panelText}>{item.intro}</p>

      <div className={styles.servicesGrid}>
        {item.cards.map((card) => (
          <Link
            key={card.key}
            to={card.href}
            className={`${styles.infoCard} ${styles.serviceCardLink}`}
          >
            <p className={styles.cardTitle}>{card.title}</p>
            <p className={styles.cardBody}>{card.body}</p>
            <ArrowRight className={styles.cardArrow} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function PanelWhy({ item }) {
  return (
    <div className={styles.panelBody}>
      <div className={styles.whyGrid}>
        {item.cards.map((card) => (
          <div key={card.key} className={styles.infoCard}>
            <p className={styles.cardTitle}>{card.title}</p>
            <p className={styles.cardBody}>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelMission({ item }) {
  return (
    <div className={styles.panelBody}>
      <blockquote className={styles.missionBlock}>
        <p className={styles.missionText}>{item.statement}</p>
      </blockquote>
    </div>
  );
}

function PanelContent({ item }) {
  switch (item.type) {
    case "services":
      return <PanelServices item={item} />;

    case "why":
      return <PanelWhy item={item} />;

    case "mission":
      return <PanelMission item={item} />;

    default:
      return <PanelParagraphs item={item} />;
  }
}

export default function AboutSection() {
  const { isOpen, toggle } = useAccordion(ABOUT_SECTION.items);

  return (
    <section
      id={ABOUT_SECTION.id}
      className={styles.section}
      aria-label={ABOUT_SECTION.ariaLabel}
    >
      <div className={styles.inner}>
        <div className={styles.accordion}>
          {ABOUT_SECTION.items.map((item) => {
            const open = isOpen(item.key);
            const triggerId = `about-btn-${item.key}`;

            return (
              <div
                key={item.key}
                className={`${styles.item}${open ? ` ${styles.itemOpen}` : ""}`}
              >
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={item.panelId}
                  onClick={() => toggle(item.key)}
                >
                  <span className={styles.triggerLabel}>{item.label}</span>

                  <ChevronDown
                    className={`${styles.caret}${
                      open ? ` ${styles.caretOpen}` : ""
                    }`}
                  />
                </button>

                {open && (
                  <div
                    id={item.panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={styles.panel}
                  >
                    <PanelContent item={item} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
