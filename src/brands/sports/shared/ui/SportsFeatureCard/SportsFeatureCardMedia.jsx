import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useVideoDialogBehavior } from "../../hooks/useVideoDialogBehavior.js";
import styles from "./SportsFeatureCardMedia.module.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const VIDEO_VIEW_THRESHOLD = 0.35;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getPreviewSrc(media) {
  return media?.previewSrc || media?.preview || media?.src || null;
}

function getPosterSrc(media) {
  if (typeof media?.poster === "string") return media.poster;
  return media?.poster?.src || null;
}

function getPosterAlt(media) {
  if (typeof media?.poster === "object") return media.poster?.alt || "";
  return media?.posterAlt || media?.alt || "";
}

function getFullSrc(media) {
  return media?.fullSrc || media?.href || media?.src || null;
}

function getVideoType(src) {
  if (!isValidText(src)) return "video/mp4";

  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".ogg") || src.endsWith(".ogv")) return "video/ogg";

  return "video/mp4";
}

function VideoFrame({ isOpen, media, titleId, onClose }) {
  const videoRef = useRef(null);
  const dialogRef = useRef(null);

  const posterSrc = getPosterSrc(media);
  const fullSrc = getFullSrc(media);
  const title = media?.modalTitle || media?.title || "Vídeo da academia";
  const closeLabel = media?.closeLabel || "Fechar vídeo";

  // Comportamento partilhado: scroll lock, Escape, focus trap, autoplay, handleClose
  const { handleClose } = useVideoDialogBehavior(isOpen, videoRef, onClose, dialogRef);

  if (!isOpen || !isValidText(fullSrc)) return null;

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        ref={dialogRef}
        className={styles.modalFrame}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalHeading}>
            <p className={styles.modalEyebrow}>Academia Sunlive</p>

            <h3 id={titleId} className={styles.modalTitle}>
              {title}
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

        <div className={styles.modalVideoShell}>
          <video
            ref={videoRef}
            className={styles.modalVideo}
            controls
            playsInline
            preload="metadata"
            poster={posterSrc || undefined}
          >
            <source src={fullSrc} type={getVideoType(fullSrc)} />
          </video>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function SportsFeatureCardMedia({ media }) {
  const modalTitleId = useId();
  const previewVideoRef = useRef(null);
  const mediaFrameRef = useRef(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const previewSrc = getPreviewSrc(media);
  const posterSrc = getPosterSrc(media);
  const posterAlt = getPosterAlt(media);
  const fullSrc = getFullSrc(media);

  useEffect(() => {
    if (!previewSrc || !previewVideoRef.current || !mediaFrameRef.current) {
      return undefined;
    }

    const video = previewVideoRef.current;
    const frame = mediaFrameRef.current;
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    function pauseVideo() {
      video.pause();
    }

    function playVideo() {
      if (motionQuery.matches || isVideoOpen) {
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
  }, [previewSrc, isVideoOpen]);

  if (!media) return null;

  const badgeLabel = media?.badgeLabel || media?.label || "Academia";
  const ctaLabel = media?.ctaLabel || media?.actionLabel || "Ver vídeo";
  const ariaLabel =
    media?.ariaLabel ||
    `${ctaLabel}: ${media?.modalTitle || media?.title || "academia"}`;

  function handleOpenVideo() {
    if (!isValidText(fullSrc)) return;

    if (previewVideoRef.current) {
      previewVideoRef.current.pause();
    }

    setIsVideoOpen(true);
  }

  function handleCloseVideo() {
    setIsVideoOpen(false);

    // Retoma o preview após fechar o dialog — comportamento específico desta card
    window.requestAnimationFrame(() => {
      if (previewVideoRef.current) {
        const playPromise = previewVideoRef.current.play();

        if (playPromise?.catch) {
          playPromise.catch(() => {});
        }
      }
    });
  }

  return (
    <>
      <div className={styles.mediaWrap}>
        <div ref={mediaFrameRef} className={styles.mediaFrame}>
          {previewSrc ? (
            <video
              ref={previewVideoRef}
              className={styles.video}
              src={previewSrc}
              poster={posterSrc || undefined}
              muted
              loop
              playsInline
              preload="none"
            />
          ) : posterSrc ? (
            <img
              className={styles.posterImage}
              src={posterSrc}
              alt={posterAlt}
              loading="lazy"
              decoding="async"
            />
          ) : null}

          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.mediaUi}>
            <span className={styles.badge}>{badgeLabel}</span>

            {fullSrc ? (
              <button
                type="button"
                className={styles.playButton}
                onClick={handleOpenVideo}
                aria-label={ariaLabel}
              >
                <span className={styles.playIcon} aria-hidden="true" />
                <span>{ctaLabel}</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <VideoFrame
        isOpen={isVideoOpen}
        media={media}
        titleId={modalTitleId}
        onClose={handleCloseVideo}
      />
    </>
  );
}
