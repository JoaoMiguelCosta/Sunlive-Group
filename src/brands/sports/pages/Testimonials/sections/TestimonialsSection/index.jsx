import { useEffect, useMemo, useRef, useState } from "react";

import TestimonialsFeatured from "./TestimonialsFeatured.jsx";
import TestimonialsSelector from "./TestimonialsSelector.jsx";
import TestimonialsSummary from "./TestimonialsSummary.jsx";

import {
  getDefaultActiveKey,
  getItemKey,
  getRenderableTestimonials,
  getScrollBehavior,
  getValidArray,
  isValidText,
  shouldScrollToFeatured,
} from "./testimonialsSection.utils.js";

import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection({ section }) {
  const featuredRef = useRef(null);

  const sectionId = section?.id || "sunlive-sports-testemunhos";
  const intro = section?.intro || {};
  const ui = section?.ui || {};
  const summaryItems = getValidArray(section?.summary?.items);

  const testimonials = useMemo(
    () => getRenderableTestimonials(section?.items),
    [section?.items],
  );

  const defaultActiveKey = useMemo(
    () => getDefaultActiveKey(testimonials, ui.defaultFeaturedKey),
    [testimonials, ui.defaultFeaturedKey],
  );

  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  useEffect(() => {
    if (!testimonials.length) return;

    const activeExists = testimonials.some(
      (item, index) => getItemKey(item, index) === activeKey,
    );

    if (!activeExists) {
      setActiveKey(defaultActiveKey);
    }
  }, [activeKey, defaultActiveKey, testimonials]);

  function handleSelectorClick(itemKey) {
    setActiveKey(itemKey);

    if (!shouldScrollToFeatured()) return;

    window.requestAnimationFrame(() => {
      featuredRef.current?.scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start",
      });
    });
  }

  if (!testimonials.length) return null;

  const activeIndex = testimonials.findIndex(
    (item, index) => getItemKey(item, index) === activeKey,
  );

  const resolvedActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeTestimonial = testimonials[resolvedActiveIndex];
  const activeItemKey = getItemKey(activeTestimonial, resolvedActiveIndex);

  const titleId = isValidText(intro.title) ? `${sectionId}-title` : undefined;
  const leadId = isValidText(intro.lead) ? `${sectionId}-lead` : undefined;

  const panelId = `${sectionId}-panel-${activeItemKey}`;
  const activeTabId = `${sectionId}-tab-${activeItemKey}`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
    >
      <div className={styles.header}>
        <div className={styles.headerCopy}>
          {isValidText(intro.eyebrow) && (
            <p className={styles.eyebrow}>{intro.eyebrow}</p>
          )}

          {isValidText(intro.title) && (
            <h2 id={titleId} className={styles.title}>
              {intro.title}
            </h2>
          )}

          {isValidText(intro.lead) && (
            <p id={leadId} className={styles.lead}>
              {intro.lead}
            </p>
          )}
        </div>

        <TestimonialsSummary items={summaryItems} />
      </div>

      <div className={styles.showcase}>
        <TestimonialsFeatured
          ref={featuredRef}
          testimonial={activeTestimonial}
          testimonialKey={activeItemKey}
          resolvedActiveIndex={resolvedActiveIndex}
          panelId={panelId}
          activeTabId={activeTabId}
          featuredAriaLabel={ui.featuredAriaLabel}
        />

        <TestimonialsSelector
          items={testimonials}
          sectionId={sectionId}
          panelId={panelId}
          activeItemKey={activeItemKey}
          cardActionLabel={ui.cardActionLabel}
          listAriaLabel={ui.listAriaLabel}
          onSelect={handleSelectorClick}
        />
      </div>
    </section>
  );
}
