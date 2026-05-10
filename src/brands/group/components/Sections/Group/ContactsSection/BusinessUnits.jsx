import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

const GROUP_ROUTE_PATH = "/sunlive-group";
const BUSINESS_UNIT_ANCHOR_PREFIX = "unidade-";
const HASH_OPEN_DELAY = 220;
const HASH_SCROLL_OFFSET = 24;

const BUSINESS_UNIT_ORDER = [
  "travel",
  "sports",
  "hotel",
  "commercial",
  "international",
  "business",
];

const BUSINESS_UNIT_SLUGS_PT = {
  travel: "viagens",
  sports: "desporto",
  hotel: "hotel",
  commercial: "comercial",
  international: "internacional",
  business: "negocios",
};

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidItem(item) {
  return item && typeof item === "object" && isValidText(item.key);
}

function getOrderedItems(items) {
  const validItems = Array.isArray(items) ? items.filter(isValidItem) : [];
  const orderedKeys = new Set(BUSINESS_UNIT_ORDER);

  const orderedItems = BUSINESS_UNIT_ORDER.map((key) =>
    validItems.find((item) => item.key === key),
  ).filter(Boolean);

  const remainingItems = validItems.filter(
    (item) => !orderedKeys.has(item.key),
  );

  return [...orderedItems, ...remainingItems];
}

function getTelHref(phone) {
  return isValidText(phone) ? phone.replace(/\s+/g, "") : "";
}

function getItemSlug(item) {
  if (isValidText(item?.slug)) return item.slug;

  return BUSINESS_UNIT_SLUGS_PT[item.key] ?? item.key;
}

function getAnchorId(item) {
  if (isValidText(item?.anchorId)) return item.anchorId;

  return `${BUSINESS_UNIT_ANCHOR_PREFIX}${getItemSlug(item)}`;
}

function getHashKey(item) {
  const anchorId = getAnchorId(item);

  if (anchorId.startsWith(BUSINESS_UNIT_ANCHOR_PREFIX)) {
    return anchorId.slice(BUSINESS_UNIT_ANCHOR_PREFIX.length);
  }

  return getItemSlug(item);
}

function getItemByHashKey(items, hashKey) {
  if (!isValidText(hashKey)) return null;

  return (
    items.find((item) => getHashKey(item) === hashKey) ||
    items.find((item) => getItemSlug(item) === hashKey) ||
    null
  );
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

export default function BusinessUnits({ items = [] }) {
  const orderedItems = useMemo(() => getOrderedItems(items), [items]);

  const hashItems = useMemo(
    () =>
      orderedItems.map((item) => ({
        ...item,
        key: getHashKey(item),
      })),
    [orderedItems],
  );

  const { isOpen, toggle } = useAccordion(orderedItems, {
    allowMultiple: true,
  });

  useOpenFromHash({
    routePath: GROUP_ROUTE_PATH,
    regex: /^#unidade-(.+)$/,
    items: hashItems,
    isOpen: (hashKey) => {
      const item = getItemByHashKey(orderedItems, hashKey);

      return item ? isOpen(item.key) : false;
    },
    toggle: (hashKey) => {
      const item = getItemByHashKey(orderedItems, hashKey);

      if (item) toggle(item.key);
    },
    delay: HASH_OPEN_DELAY,
    offset: HASH_SCROLL_OFFSET,
  });

  if (!orderedItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={orderedItems.length}>
      {orderedItems.map((item) => {
        const open = isOpen(item.key);
        const anchorId = getAnchorId(item);
        const panelId = `bu-${item.key}`;
        const telHref = getTelHref(item.phone);

        return (
          <div
            key={item.key}
            role="listitem"
            className={styles.item}
            id={anchorId}
          >
            <button
              type="button"
              className={styles.pill}
              onClick={() => toggle(item.key)}
              aria-expanded={open}
              aria-controls={panelId}
            >
              <span className={styles.pillText}>{item.label}</span>

              <span className={styles.caret} aria-hidden="true">
                ⌄
              </span>
            </button>

            {open ? (
              <div
                id={panelId}
                className={styles.card}
                role="region"
                aria-label={`Contactos de ${item.label}`}
              >
                <ContactRow
                  href={`mailto:${item.email}`}
                  label={`Enviar email para ${item.email}`}
                  mutedLabel="Email indisponível"
                  value={item.email}
                  Icon={MailIcon}
                />

                <ContactRow
                  href={`tel:${telHref}`}
                  label={`Ligar para ${item.phone}`}
                  mutedLabel="Telefone indisponível"
                  value={item.phone}
                  Icon={PhoneIcon}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
