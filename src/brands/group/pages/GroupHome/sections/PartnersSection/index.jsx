import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./PartnersSection.module.css";
import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";
import SectionDisclosureTrigger from "../_shared/SectionDisclosureTrigger.jsx";
import PartnerCategorySelector from "./PartnerCategorySelector.jsx";
import PartnerLogoGrid from "./PartnerLogoGrid.jsx";
import homePage from "../../../../config/pages/home.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

const partnersSection = homePage.sections.partners;
const CATEGORY_HASH_RE = /^#partners-(.+)$/;

function getValidCategories(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.key)
    : [];
}

export default function PartnersSection() {
  const { isOpen, toggle, open } = useDisclosure(false);
  const [activeKey, setActiveKey] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const partnersConfig = partnersSection;
  const id = isValidText(partnersConfig?.id) ? partnersConfig.id : "partners";
  const headline = partnersConfig?.headline;
  const categories = getValidCategories(partnersConfig?.categories);

  useEffect(() => {
    if (location.hash === "#partners") open();
  }, [location.hash, location.key, open]);

  // O hash é a única fonte de verdade da categoria ativa: quando deixa
  // de corresponder a uma categoria, a seleção local é limpa.
  useEffect(() => {
    if (location.pathname !== GROUP_BASE_PATH) return;
    if (!CATEGORY_HASH_RE.test(location.hash)) setActiveKey(null);
  }, [location.hash, location.pathname]);

  useOpenFromHash({
    routePath: GROUP_BASE_PATH,
    regex: CATEGORY_HASH_RE,
    items: categories,
    isOpen: (key) => activeKey === key,
    toggle: (key) => {
      open();
      setActiveKey(key);
    },
  });

  const handleSelectCategory = useCallback(
    (category) => {
      navigate(`${GROUP_BASE_PATH}#${category.hash}`);
    },
    [navigate],
  );

  if (!categories.length) return null;

  const triggerId = `${id}-btn`;
  const panelId = `${id}-panel`;
  const title = isValidText(headline?.title) ? headline.title : "Parceiros";
  const activeCategory =
    categories.find((category) => category.key === activeKey) ?? null;

  return (
    <section id={id} className={styles.section} aria-labelledby={triggerId}>
      <div className={styles.disclosureWrap}>
        <div
          className={`${styles.triggerCard}${isOpen ? ` ${styles.triggerCardOpen}` : ""}`}
        >
          <SectionDisclosureTrigger
            id={triggerId}
            label={title}
            panelId={panelId}
            isOpen={isOpen}
            onToggle={toggle}
          />
        </div>

        {isOpen && (
          <div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className={styles.panel}
          >
            <PartnerCategorySelector
              items={categories}
              activeKey={activeKey}
              onSelect={handleSelectCategory}
            />

            {activeCategory && (
              <div className={styles.gridWrap}>
                <PartnerLogoGrid
                  id={activeCategory.hash}
                  ariaLabel={activeCategory.label}
                  items={activeCategory.items}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
