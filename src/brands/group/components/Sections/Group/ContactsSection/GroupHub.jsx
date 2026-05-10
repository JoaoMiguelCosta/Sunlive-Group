import styles from "./GroupHub.module.css";

import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

const GROUP_ROUTE_PATH = "/sunlive-group";
const HASH_OPEN_DELAY = 220;
const HASH_SCROLL_OFFSET = 24;

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
  const anchorId = isValidText(data?.anchorId)
    ? data.anchorId
    : "unidade-grupo";

  const { isOpen, toggle } = useDisclosure(Boolean(data?.defaultOpen));

  useOpenFromHash({
    routePath: GROUP_ROUTE_PATH,
    regex: /^#unidade-(.+)$/,
    items: hasData ? [{ key: "grupo" }] : [],
    isOpen: (key) => key === "grupo" && isOpen,
    toggle: (key) => {
      if (key === "grupo" && !isOpen) toggle();
    },
    delay: HASH_OPEN_DELAY,
    offset: HASH_SCROLL_OFFSET,
  });

  if (!hasData) return null;

  return (
    <div className={styles.wrap} id={anchorId}>
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="grouphub-panel"
      >
        <span className={styles.pillText}>{title}</span>

        <span className={styles.caret} aria-hidden="true">
          ⌄
        </span>
      </button>

      {isOpen ? (
        <div
          id="grouphub-panel"
          className={styles.card}
          role="region"
          aria-label={`Contactos de ${title}`}
        >
          <ContactRow
            href={`mailto:${email}`}
            label={`Enviar email para ${email}`}
            mutedLabel="Email indisponível"
            value={email}
            Icon={MailIcon}
          />

          <ContactRow
            href={`tel:${telHref}`}
            label={`Ligar para ${phone}`}
            mutedLabel="Telefone indisponível"
            value={phone}
            Icon={PhoneIcon}
          />
        </div>
      ) : null}
    </div>
  );
}
