import styles from "./PartnerLogoGrid.module.css";
import PartnerLogoCard from "./PartnerLogoCard.jsx";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import {
  isValidText,
  isValidObject,
} from "../../../../shared/utils/contentGuards.js";

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.name) &&
          isValidText(item.src),
      )
    : [];
}

function getColumnCount(columnsMax) {
  const parsedColumns = Number(columnsMax);

  if (!Number.isFinite(parsedColumns)) return 4;

  return Math.max(1, Math.min(6, Math.round(parsedColumns)));
}

/**
 * PartnerLogoGrid — grelha de logótipos de uma categoria de
 * parceiros. Não conhece rotas nem categorias — recebe apenas os
 * itens já resolvidos e um id/aria-label para a região.
 */
export default function PartnerLogoGrid({
  id,
  ariaLabel,
  items = [],
  columnsMax = 4,
}) {
  const validItems = getValidItems(items);
  const cols = getColumnCount(columnsMax);

  if (!validItems.length) return null;

  return (
    <div id={id} className={styles.wrap} style={{ "--cols-max": cols }}>
      <div
        className={styles.grid}
        data-cols={cols}
        role="list"
        aria-label={ariaLabel}
      >
        {validItems.map((item, index) => (
          <ScrollReveal
            key={item.key}
            as="div"
            role="listitem"
            className={styles.cell}
            staggerIndex={index}
          >
            <PartnerLogoCard {...item} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
