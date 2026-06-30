import styles from "./GroupHub.module.css";
import disclosureStyles from "./ContactDisclosure.module.css";
import OfficeCard from "./OfficeCard.jsx";

import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/core/contacts.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";

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

export default function GroupHub({ data }) {
  const hasData = isValidObject(data);
  const title = isValidText(data?.title) ? data.title : "Sunlive Group";
  const email = data?.email ?? "";
  const phone = data?.phone ?? "";
  const telHref = getTelHref(phone);
  const anchorId = isValidText(data?.anchorId)
    ? data.anchorId
    : "unidade-grupo";

  const { isOpen, toggle } = useDisclosure(Boolean(data?.defaultOpen));

  useOpenFromHash({
    routePath: GROUP_BASE_PATH,
    regex: /^#unidade-(.+)$/,
    items: hasData ? [{ key: "grupo" }] : [],
    isOpen: (key) => key === "grupo" && isOpen,
    toggle: (key) => {
      if (key === "grupo" && !isOpen) toggle();
    },
  });

  if (!hasData) return null;

  return (
    <div className={`${styles.wrap} ${disclosureStyles.featured}`} id={anchorId}>
      <button
        type="button"
        className={disclosureStyles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="grouphub-panel"
      >
        <span className={disclosureStyles.pillText}>{title}</span>

        <span className={disclosureStyles.caret} aria-hidden="true">
          ⌄
        </span>
      </button>

      {isOpen ? (
        <OfficeCard
          id="grouphub-panel"
          label={title}
          email={email}
          phone={phone}
          telHref={telHref}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
        />
      ) : null}
    </div>
  );
}
