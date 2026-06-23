import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useVideoDialogBehavior } from "../../../../shared/hooks/useVideoDialogBehavior.js";
import styles from "./ProgramSportCardMedia.module.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const VIDEO_VIEW_THRESHOLD = 0.35;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getVideoType(src) {
  if (!isValidText(src)) return "video/mp4";

  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".ogg") || src.endsWith(".ogv")) return "video/ogg";

  return "video/mp4";
}

function getMediaData(item) {
  const media = item?.media;

  if (media?.type === "video" && isValidText(media.previewSrc)) {
    return {
      type: "video",
      previewSrc: media.previewSrc,
      fullSrc: media.fullSrc,
      poster: media.poster,
      alt: media.alt || item?.sport || "",
      actionLabel: media.actionLabel || "Ver vídeo",
      closeLabel: media.closeLabel || "Fechar vídeo",
      modalTitle: media.modalTitle || item?.sport || "Vídeo",
    };
  }

  if (isValidText(item?.image?.src)) {
    return {
      type: "image",
      src: item.image.src,
      alt: item.image.alt || "",
    };
  }

  return {
    type: "placeholder",
    alt: item?.sport || "",
  };
}

function VideoDialog({ isOpen, media, sport, titleId, onClose }) {
  const videoRef = useRef(null);

  // Comportamento partilhado: scroll lock, Escape, autoplay, handleClose
  const { handleClose } = useVideoDialogBehavior(isOpen, videoRef, onClose);

  if (!isOpen || !isValidText(media?.fullSrc)) return null;

  // Overlay click chama onClose directamente (preserva comportamento original)
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleGroup}>
            <p className={styles.modalEyebrow}>Training Camp</p>

            <h3 id={titleId} className={styles.modalTitle}>
              {media.modalTitle || sport}
            </h3>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label={media.closeLabel}
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
            poster={media.poster}
          >
            <source src={media.fullSrc} type={getVideoType(media.fullSrc)} />
          </video>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function ProgramSportCardMedia({ item, className = "" }) {
  const previewVideoRef = useRef(null);
  const mediaPanelRef = useRef(null);
  const modalTitleId = useId();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const media = getMediaData(item);

  const hasVideo = media.type === "video";
  const hasImage = media.type === "image";
  const hasPlaceholder = media.type === "placeholder";
  const hasFullVideo = hasVideo && isValidText(media.fullSrc);
  const hasVisibleMedia = hasVideo || hasImage;

  // IntersectionObserver de preview — threshold e lógica de pausa específicos deste card
  useEffect(() => {
    if (!hasVideo || !previewVideoRef.current || !mediaPanelRef.current) {
      return undefined;
    }

    const video = previewVideoRef.current;
    const target = mediaPanelRef.current;
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    function pauseVideo() {
      video.pause();
    }

    function playVideo() {
      if (motionQuery.matches || isDialogOpen) {
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

    observer.observe(target);

    return () => {
      observer.disconnect();
      pauseVideo();
    };
  }, [hasVideo, isDialogOpen]);

  function handleOpenDialog() {
    if (!hasFullVideo) return;

    if (previewVideoRef.current) {
      previewVideoRef.current.pause();
    }

    setIsDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
  }

  return (
    <div
      ref={mediaPanelRef}
      className={[styles.mediaPanel, className].filter(Boolean).join(" ")}
      aria-hidden={hasVisibleMedia ? undefined : "true"}
    >
      {hasVideo ? (
        <>
          <figure className={styles.figure}>
            <video
              ref={previewVideoRef}
              className={styles.video}
              muted
              loop
              playsInline
              preload="metadata"
              poster={media.poster}
              aria-label={media.alt}
            >
              <source
                src={media.previewSrc}
                type={getVideoType(media.previewSrc)}
              />
            </video>

            <span className={styles.mediaOverlay} aria-hidden="true" />
            <span className={styles.mediaSheen} aria-hidden="true" />

            {item?.sport ? (
              <span className={styles.mediaBadge}>{item.sport}</span>
            ) : null}

            {hasFullVideo ? (
              <button
                type="button"
                className={styles.playButton}
                onClick={handleOpenDialog}
                aria-label={`${media.actionLabel}: ${item?.sport || media.alt}`}
              >
                <span className={styles.playIcon} aria-hidden="true" />
                <span>{media.actionLabel}</span>
              </button>
            ) : null}
          </figure>

          <VideoDialog
            isOpen={isDialogOpen}
            media={media}
            sport={item?.sport}
            titleId={modalTitleId}
            onClose={handleCloseDialog}
          />
        </>
      ) : null}

      {hasImage ? (
        <figure className={styles.figure}>
          <img
            src={media.src}
            alt={media.alt}
            className={styles.image}
            loading="lazy"
          />

          <span className={styles.mediaOverlay} aria-hidden="true" />
          <span className={styles.mediaSheen} aria-hidden="true" />

          {item?.sport ? (
            <span className={styles.mediaBadge}>{item.sport}</span>
          ) : null}
        </figure>
      ) : null}

      {hasPlaceholder ? (
        <div className={styles.placeholder}>
          <div className={styles.placeholderGlow} />
          <span className={styles.placeholderSport}>{item?.sport}</span>
          <span className={styles.placeholderMeta}>{item?.focusLabel}</span>
        </div>
      ) : null}
    </div>
  );
}
