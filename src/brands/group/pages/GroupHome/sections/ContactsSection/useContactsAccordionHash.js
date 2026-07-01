import { useMemo } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import {
  getAnchorHashKey,
  findItemByAnchorHashKey,
} from "./contactsAnchorHash.js";

export default function useContactsAccordionHash({
  items,
  prefix,
  routePath,
}) {
  const hashItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        key: getAnchorHashKey(item, prefix),
      })),
    [items, prefix],
  );

  const { isOpen, toggle } = useAccordion(items, { allowMultiple: true });

  useOpenFromHash({
    routePath,
    regex: new RegExp(`^#${prefix}(.+)$`),
    items: hashItems,
    isOpen: (hashKey) => {
      const item = findItemByAnchorHashKey(items, hashKey, prefix);

      return item ? isOpen(item.key) : false;
    },
    toggle: (hashKey) => {
      const item = findItemByAnchorHashKey(items, hashKey, prefix);

      if (item) toggle(item.key);
    },
  });

  return { isOpen, toggle };
}
