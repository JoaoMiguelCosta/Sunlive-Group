import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useVideoDialogBehavior } from "../../../../shared/hooks/useVideoDialogBehavior.js";
import styles from "./EventsModalitiesVideoHighlights.module.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const VIDEO_VIEW_THRESHOLD = 0.32;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getVideoType(src) {
  if (!isValidText(src)) return "video/mp4";

  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".ogg") || src.endsWith(".ogv")) return "video/ogg";

  return "video/mp4";
}

function getValidVideos(items) {
  return hasItems(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.title) &&
          isValidText(item.media?.previewSrc) &&
          isValidText(item.media?.poster),
      )
    : [];
}

function VideoModal({ isOpen, item, titleId, ui, onClose }) {
  const videoRef = useRef(null);

  const media = item?.media;
  const fullSrc = media?.fullSrc;
  const poster = media?.poster;
  const closeLabel = media?.closeLabel || ui?.fallbackCloseLabel || "Fechar";
  const modalTitle =
    media?.modalTitle || item?.title || ui?.fallbackModalTitle || "Vídeo";
  const modalEyebrow = media?.modalEyebrow || ui?.modalEyebrow;

  // Comportamento partilhado: scroll lock, Escape, autoplay, handleClose
  const { handleClose } = useVideoDialogBehavior(isOpen, videoRef, onClose);

  if (!isOpen || !isValidText(fullSrc) || typeof document === "undefined") {
    return null;
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modalFrame}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalHeading}>
            {modalEyebrow ? (
              <p className={styles.modalEyebrow}>{modalEyebrow}</p>
            ) : null}

            <h3 id={titleId} className={styles.modalTitle}>
              {modalTitle}
            </h3>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label={closeLabel}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className={styles.modalVideoFrame}>
          <video
            ref={videoRef}
            className={styles.modalVideo}
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={fullSrc} type={getVideoType(fullSrc)} />
          </video>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function VideoCard({ item, index, ui }) {
  const previewRef = useRef(null);
  const frameRef = useRef(null);
  const modalTitleId = useId();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const media = item.media;
  const actionLabel =
    media.actionLabel || ui?.fallbackActionLabel || "Ver vídeo";
  const badgeLabel = media.badgeLabel || item.eyebrow || ui?.videoBadgeLabel;
  const cardLabel = `${actionLabel}: ${item.title}`;

  // IntersectionObserver de preview — threshold 0.32 específico desta secção
  useEffect(() => {
    if (!previewRef.current || !frameRef.current) return undefined;
    if (typeof window === "undefined") return undefined;

    const video = previewRef.current;
    const frame = frameRef.current;
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    function pauseVideo() {
      video.pause();
    }

    function playVideo() {
      if (motionQuery.matches || isModalOpen) {
        pauseVideo();
        return;
      }

      const playPromise = video.play();

      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    }

    if (motionQuery.matches) {
      pauseVideo();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: VIDEO_VIEW_THRESHOLD },
    );

    observer.observe(frame);

    return () => {
      observer.disconnect();
      pauseVideo();
    };
  }, [isModalOpen]);

  function handleOpenModal() {
    if (!isValidText(media.fullSrc)) return;

    if (previewRef.current) {
      previewRef.current.pause();
    }

    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <article
        className={styles.videoCard}
        data-index={index}
        aria-label={item.title}
      >
        <div className={styles.videoCopy}>
          {item.eyebrow ? (
            <p className={styles.videoEyebrow}>{item.eyebrow}</p>
          ) : null}

          <h4 className={styles.videoTitle}>{item.title}</h4>

          {item.description ? (
            <p className={styles.videoDescription}>{item.description}</p>
          ) : null}
        </div>

        <div ref={frameRef} className={styles.videoFrame}>
          <video
            ref={previewRef}
            className={styles.previewVideo}
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.poster}
            aria-label={media.alt || item.title}
          >
            <source
              src={media.previewSrc}
              type={getVideoType(media.previewSrc)}
            />
          </video>

          <span className={styles.videoOverlay} aria-hidden="true" />

          <div className={styles.videoControls}>
            {badgeLabel ? (
              <span className={styles.videoBadge}>{badgeLabel}</span>
            ) : null}

            {media.fullSrc ? (
              <button
                type="button"
                className={styles.playButton}
                onClick={handleOpenModal}
                aria-label={cardLabel}
              >
                <span className={styles.playIcon} aria-hidden="true" />
                <span>{actionLabel}</span>
              </button>
            ) : null}
          </div>
        </div>
      </article>

      <VideoModal
        isOpen={isModalOpen}
        item={item}
        titleId={modalTitleId}
        ui={ui}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default function EventsModalitiesVideoHighlights({ data, sectionId }) {
  const items = getValidVideos(data?.items);
  const ui = data?.ui || {};

  if (!items.length) return null;

  const blockId = data?.id || `${sectionId}-video-highlights`;
  const titleId = data?.title ? `${blockId}-title` : undefined;
  const hasHeader = data?.eyebrow || data?.title || data?.description;

  return (
    <div
      id={blockId}
      className={styles.block}
      role="group"
      aria-labelledby={titleId}
      aria-label={!titleId ? data?.ariaLabel || undefined : undefined}
    >
      {hasHeader ? (
        <header className={styles.header}>
          {data.eyebrow ? (
            <p className={styles.eyebrow}>{data.eyebrow}</p>
          ) : null}

          {data.title ? (
            <h3 id={titleId} className={styles.title}>
              {data.title}
            </h3>
          ) : null}

          {data.description ? (
            <p className={styles.description}>{data.description}</p>
          ) : null}
        </header>
      ) : null}

      <div className={styles.grid}>
        {items.map((item, index) => (
          <VideoCard key={item.key} item={item} index={index} ui={ui} />
        ))}
      </div>
    </div>
  );
}
