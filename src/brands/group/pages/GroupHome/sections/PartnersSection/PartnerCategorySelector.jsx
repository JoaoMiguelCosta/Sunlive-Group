import styles from "./PartnerCategorySelector.module.css";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.key)
    : [];
}

function getGridCountClass(count) {
  if (count === 1) return styles.countOne;
  if (count === 2) return styles.countTwo;
  if (count === 4) return styles.countFour;
  if (count === 5) return styles.countFive;

  return "";
}

/**
 * PartnerCategorySelector — grelha de botões de categoria da secção
 * Parceiros. Não conhece rotas nem hashes — recebe os itens já
 * resolvidos, a chave ativa e um callback de seleção.
 */
export default function PartnerCategorySelector({
  items = [],
  activeKey,
  onSelect,
}) {
  const validItems = getValidItems(items);

  if (!validItems.length) return null;

  const gridClassName = [styles.grid, getGridCountClass(validItems.length)]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassName} role="list" data-count={validItems.length}>
      {validItems.map((item) => {
        const label = isValidText(item.label) ? item.label : item.key;
        const isActive = item.key === activeKey;

        return (
          <button
            key={item.key}
            type="button"
            role="listitem"
            className={`${styles.card}${isActive ? ` ${styles.active}` : ""}`}
            aria-pressed={isActive}
            onClick={() => onSelect?.(item)}
          >
            <span className={styles.label}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
