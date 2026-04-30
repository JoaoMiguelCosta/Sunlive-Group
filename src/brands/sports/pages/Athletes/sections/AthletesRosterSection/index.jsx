import AthletesModalityNav from "./AthletesModalityNav.jsx";
import AthletesRosterFlow from "./AthletesRosterFlow.jsx";
import AthletesRosterHeader from "./AthletesRosterHeader.jsx";
import AthletesRosterMarkers from "./AthletesRosterMarkers.jsx";

import {
  getSummaryItems,
  getValidMarkers,
  getValidModalities,
  isValidText,
} from "./athletesRoster.helpers.js";

import styles from "./AthletesRosterSection.module.css";

export default function AthletesRosterSection({ data }) {
  if (!data || typeof data !== "object") return null;

  const sectionId = data.id;
  const modalities = getValidModalities(data.modalities);

  if (!isValidText(sectionId) || modalities.length === 0) return null;

  const ui = data.ui || {};
  const intro = data.intro || {};
  const markers = getValidMarkers(intro.markers);
  const summaryItems = getSummaryItems(data.summary, modalities);

  const titleId = `${sectionId}-title`;
  const leadId = `${sectionId}-lead`;

  const hasTitle = isValidText(intro.title);
  const hasLead = isValidText(intro.lead);
  const hasSectionLabel = isValidText(ui.sectionAriaLabel);

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={hasTitle ? titleId : undefined}
      aria-describedby={hasLead ? leadId : undefined}
      aria-label={
        !hasTitle && hasSectionLabel ? ui.sectionAriaLabel : undefined
      }
    >
      <div className={styles.shell}>
        <AthletesRosterHeader
          intro={intro}
          summaryItems={summaryItems}
          ui={ui}
          titleId={titleId}
          leadId={leadId}
        />

        <AthletesRosterMarkers markers={markers} />

        <AthletesModalityNav modalities={modalities} ui={ui} />

        <AthletesRosterFlow modalities={modalities} ui={ui} />
      </div>
    </section>
  );
}
