import styles from "./StayPolicies.module.css";

import TitleStayPolicies from "./TitleStayPolicies.jsx";
import DescriptionStayPolicies from "./DescriptionStayPolicies.jsx";
import StayPoliciesAccordion from "./StayPoliciesAccordion.jsx";

import stayPolicies from "../../../../config/sections/accommodation/stayPolicies.js";

export default function StayPolicies() {
  const content = stayPolicies;

  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];
  const sectionId = content.id ?? "accommodation-stay-policies";
  const titleId = `${sectionId}-title`;
  const descriptionId = content.description
    ? `${sectionId}-description`
    : undefined;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleStayPolicies id={titleId} label={content.headerLabel} />

          <DescriptionStayPolicies
            id={descriptionId}
            className={styles.descriptionPanel}
          >
            {content.description}
          </DescriptionStayPolicies>
        </div>

        <div className={styles.accordionWrap}>
          <StayPoliciesAccordion
            items={items}
            allowMultiple={false}
            ui={content.ui ?? {}}
          />
        </div>
      </div>
    </section>
  );
}
