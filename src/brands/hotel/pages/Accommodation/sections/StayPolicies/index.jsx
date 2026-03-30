import styles from "./StayPolicies.module.css";

import TitleStayPolicies from "./TitleStayPolicies.jsx";
import DescriptionStayPolicies from "./DescriptionStayPolicies.jsx";
import StayPoliciesAccordion from "./StayPoliciesAccordion.jsx";

import hotelBrand from "../../../../config/index.js";

export default function StayPolicies() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.stayPolicies ?? null;

  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];
  const sectionId = content.id ?? "accommodation-stay-policies";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleStayPolicies id={titleId} label={content.headerLabel} />
          <DescriptionStayPolicies>
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
