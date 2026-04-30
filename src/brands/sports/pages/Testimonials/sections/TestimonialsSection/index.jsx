import { useEffect, useMemo, useState } from "react";

import styles from "./TestimonialsSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function getItemKey(item, index) {
  return item?.key || `testimonial-${index + 1}`;
}

function getDefaultActiveKey(items, preferredKey) {
  if (!items.length) return "";

  const preferredItem = items.find((item) => item?.key === preferredKey);

  return preferredItem?.key || getItemKey(items[0], 0);
}

function getRenderableTestimonials(items) {
  return getValidArray(items).filter(
    (item) => isValidText(item?.name) && item?.image?.src,
  );
}

function getScaleValue(scale, breakpoint, fallback = 1) {
  const value = scale?.[breakpoint];

  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function getOffsetValue(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return `${value}%`;
  }

  return isValidText(value) ? value : "0%";
}

function getImageStyle(image, variant = "featured") {
  const scale =
    variant === "thumb" ? image?.thumbScale || image?.scale : image?.scale;

  const offsetX =
    variant === "thumb"
      ? (image?.thumbOffsetX ?? image?.offsetX)
      : image?.offsetX;

  const offsetY =
    variant === "thumb"
      ? (image?.thumbOffsetY ?? image?.offsetY)
      : image?.offsetY;

  const desktopScale = getScaleValue(scale, "desktop", 1);
  const tabletScale = getScaleValue(scale, "tablet", desktopScale);
  const mobileScale = getScaleValue(scale, "mobile", tabletScale);

  return {
    "--testimonial-image-scale-desktop": desktopScale,
    "--testimonial-image-scale-tablet": tabletScale,
    "--testimonial-image-scale-mobile": mobileScale,
    "--testimonial-image-offset-x": getOffsetValue(offsetX),
    "--testimonial-image-offset-y": getOffsetValue(offsetY),
  };
}

export default function TestimonialsSection({ section }) {
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

  if (!testimonials.length) return null;

  const activeIndex = testimonials.findIndex(
    (item, index) => getItemKey(item, index) === activeKey,
  );

  const resolvedActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeTestimonial = testimonials[resolvedActiveIndex];

  const titleId = isValidText(intro.title) ? `${sectionId}-title` : undefined;
  const leadId = isValidText(intro.lead) ? `${sectionId}-lead` : undefined;

  const activeItemKey = getItemKey(activeTestimonial, resolvedActiveIndex);
  const panelId = `${sectionId}-panel-${activeItemKey}`;
  const activeTabId = `${sectionId}-tab-${activeItemKey}`;

  const activeDescription = getValidArray(activeTestimonial.description);
  const activeQuote = getValidArray(activeTestimonial.quote);

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

        {summaryItems.length > 0 && (
          <dl className={styles.summaryGrid}>
            {summaryItems.map((item, index) => (
              <div
                key={item?.key || `testimonial-summary-${index + 1}`}
                className={styles.summaryCard}
              >
                {isValidText(item?.value) && (
                  <dt className={styles.summaryValue}>{item.value}</dt>
                )}

                {isValidText(item?.label) && (
                  <dd className={styles.summaryLabel}>{item.label}</dd>
                )}
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className={styles.showcase}>
        <article
          id={panelId}
          className={styles.featured}
          role="tabpanel"
          aria-label={ui.featuredAriaLabel}
          aria-labelledby={activeTabId}
        >
          <div className={styles.mediaColumn}>
            <figure
              className={styles.portraitFrame}
              style={getImageStyle(activeTestimonial.image, "featured")}
            >
              <img
                src={activeTestimonial.image.src}
                alt={activeTestimonial.image.alt || activeTestimonial.name}
                className={styles.portrait}
                loading={resolvedActiveIndex === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          </div>

          <div className={styles.statementColumn}>
            <div className={styles.identity}>
              {isValidText(activeTestimonial.category) && (
                <p className={styles.category}>{activeTestimonial.category}</p>
              )}

              <h3 className={styles.name}>{activeTestimonial.name}</h3>

              {activeDescription.length > 0 && (
                <div className={styles.description}>
                  {activeDescription.map((line, index) => (
                    <p key={`${activeItemKey}-description-${index}`}>{line}</p>
                  ))}
                </div>
              )}
            </div>

            {activeQuote.length > 0 && (
              <blockquote className={styles.quote}>
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>

                <div className={styles.quoteText}>
                  {activeQuote.map((paragraph, index) => (
                    <p key={`${activeItemKey}-quote-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </blockquote>
            )}
          </div>
        </article>

        <aside className={styles.selectorPanel} aria-label={ui.listAriaLabel}>
          <div className={styles.selectorGrid} role="tablist">
            {testimonials.map((item, index) => {
              const itemKey = getItemKey(item, index);
              const isActive = itemKey === activeItemKey;
              const tabId = `${sectionId}-tab-${itemKey}`;

              return (
                <button
                  key={itemKey}
                  id={tabId}
                  type="button"
                  className={`${styles.selectorCard} ${
                    isActive ? styles.selectorCardActive : ""
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveKey(itemKey)}
                >
                  <span className={styles.selectorIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={styles.selectorMedia}
                    style={getImageStyle(item.image, "thumb")}
                    aria-hidden="true"
                  >
                    <img
                      src={item.image.src}
                      alt=""
                      className={styles.selectorImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>

                  <span className={styles.selectorContent}>
                    {isValidText(item.category) && (
                      <span className={styles.selectorCategory}>
                        {item.category}
                      </span>
                    )}

                    <span className={styles.selectorName}>{item.name}</span>

                    {isValidText(ui.cardActionLabel) && (
                      <span className={styles.selectorAction}>
                        {ui.cardActionLabel}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
