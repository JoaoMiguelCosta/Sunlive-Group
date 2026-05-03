import styles from "./GroupHub.module.css";

import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function getTelHref(phone) {
  return isValidText(phone) ? phone.replace(/\s+/g, "") : "";
}

function ContactRow({ href, label, value, mutedLabel, Icon }) {
  const hasValue = isValidText(value);

  if (!hasValue) {
    return (
      <span className={styles.row} aria-label={mutedLabel} aria-disabled="true">
        <Icon className={styles.icon} width={20} height={20} />
        <span className={styles.muted}>—</span>
      </span>
    );
  }

  return (
    <a href={href} className={styles.row} aria-label={label}>
      <Icon className={styles.icon} width={20} height={20} />
      <span>{value}</span>
    </a>
  );
}

export default function GroupHub({ data }) {
  const hasData = isValidObject(data);
  const title = isValidText(data?.title) ? data.title : "Sunlive Group";
  const email = data?.email ?? "";
  const phone = data?.phone ?? "";
  const telHref = getTelHref(phone);

  const { isOpen, toggle } = useDisclosure(Boolean(data?.defaultOpen));

  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#unit-(.+)$/,
    items: hasData ? [{ key: "group" }] : [],
    isOpen: (key) => key === "group" && isOpen,
    toggle: (key) => {
      if (key === "group" && !isOpen) toggle();
    },
  });

  if (!hasData) return null;

  return (
    <div className={styles.wrap} id="unit-group">
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="grouphub-panel"
      >
        <span className={styles.pillText}>{title}</span>
        <span className={styles.caret} aria-hidden="true">
          ➜
        </span>
      </button>

      {isOpen ? (
        <div
          id="grouphub-panel"
          className={styles.card}
          role="region"
          aria-label={`${title} contacts`}
        >
          <ContactRow
            href={`mailto:${email}`}
            label={`Email ${email}`}
            mutedLabel="Email not available"
            value={email}
            Icon={MailIcon}
          />

          <ContactRow
            href={`tel:${telHref}`}
            label={`Call ${phone}`}
            mutedLabel="Phone not available"
            value={phone}
            Icon={PhoneIcon}
          />
        </div>
      ) : null}
    </div>
  );
}
