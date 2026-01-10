import styles from "./StayPolicies.module.css";

import TitleStayPolicies from "./TitleStayPolicies.jsx";
import DescriptionStayPolicies from "./DescriptionStayPolicies.jsx";
import StayPoliciesAccordion from "./StayPoliciesAccordion.jsx";

import hotelBrand from "../../../configHotel.jsx";

export default function StayPolicies() {
  const content = hotelBrand?.pages?.estadia?.sections?.stayPolicies ?? null;
  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];

  return (
    <section
      id={content.id}
      className={styles.section}
      aria-label={content.headerLabel || "Política de Estadia"}
    >
      <div className={styles.inner}>
        <TitleStayPolicies label={content.headerLabel} />
        <DescriptionStayPolicies>{content.description}</DescriptionStayPolicies>

        <StayPoliciesAccordion items={items} allowMultiple={false} />
      </div>
    </section>
  );
}
