import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useVideoDialogBehavior } from "../../hooks/useVideoDialogBehavior.js";
import styles from "./SportsFeatureCardMedia.module.css";

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

  const posterSrc = getPosterSrc(media);
  const fullSrc = getFullSrc(media);
  const title = media?.modalTitle || media?.title || "Vídeo da academia";
  const closeLabel = media?.closeLabel || "Fechar vídeo";

  // Comportamento partilhado: scroll lock, Escape, autoplay, handleClose
  const { handleClose } = useVideoDialogBehavior(isOpen, videoRef, onClose);

  if (!isOpen || !isValidText(fullSrc)) return null;

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

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!media) return null;

  const previewSrc = getPreviewSrc(media);
  const posterSrc = getPosterSrc(media);
  const posterAlt = getPosterAlt(media);
  const fullSrc = getFullSrc(media);

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
        <div className={styles.mediaFrame}>
          {previewSrc ? (
            <video
              ref={previewVideoRef}
              className={styles.video}
              src={previewSrc}
              poster={posterSrc || undefined}
              autoPlay={media?.autoPlay ?? true}
              muted={media?.muted ?? true}
              loop={media?.loop ?? true}
              playsInline
              preload="metadata"
            />
          ) : posterSrc ? (
            <img
              className={styles.posterImage}
              src={posterSrc}
              alt={posterAlt}
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
