import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelSectionShell from "../../../../shared/ui/HotelSectionShell/HotelSectionShell.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./HotelHeroBanner.module.css";

function preloadSceneMedia(scenes) {
  scenes.forEach((scene) => {
    const imageSrc = scene?.imageSrc ?? scene?.posterSrc;

    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;
  });
}

function isInternalHref(href = "") {
  return href.startsWith("/") && !href.startsWith("//");
}

function isVideoScene(scene) {
  return scene?.mediaType === "video" && Boolean(scene?.videoSrc);
}

function getValidScenes(scenes) {
  if (!Array.isArray(scenes)) return [];

  return scenes.filter((scene) => {
    if (!scene?.id) return false;

    if (isVideoScene(scene)) {
      return Boolean(scene.videoSrc);
    }

    return Boolean(scene.imageSrc);
  });
}

function joinClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

export default function HotelHeroBanner() {
  const section = hotelBrand?.pages?.home?.sections?.heroBanner ?? null;

  const scenes = useMemo(
    () => getValidScenes(section?.scenes),
    [section?.scenes],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef({});

  useEffect(() => {
    if (!scenes.length) return;

    preloadSceneMedia(scenes);
  }, [scenes]);

  useEffect(() => {
    if (!scenes.length) return;

    setActiveIndex((currentIndex) =>
      currentIndex >= scenes.length ? 0 : currentIndex,
    );
  }, [scenes]);

  useEffect(() => {
    const registeredVideos = videoRefs.current;

    return () => {
      Object.values(registeredVideos).forEach((video) => {
        video.pause();
      });
    };
  }, []);

  if (!section || !scenes.length) return null;

  const logoSrc = section?.logo?.src ?? "";
  const logoAlt = section?.logo?.alt ?? "Estalagem de Sangalhos";
  const eyebrow = section?.eyebrow ?? "";
  const cta = section?.cta ?? null;
  const exploreAction = section?.exploreAction ?? null;

  const activeScene = scenes[activeIndex] ?? scenes[0];
  const activeSceneIsVideo = isVideoScene(activeScene);

  const isFirstScene = activeIndex === 0;
  const isLastScene = activeIndex === scenes.length - 1;

  const registerVideoRef = (sceneId) => (node) => {
    if (node) {
      videoRefs.current[sceneId] = node;
      return;
    }

    delete videoRefs.current[sceneId];
  };

  const pauseAllSceneVideos = () => {
    Object.values(videoRefs.current).forEach((video) => {
      video.pause();
    });
  };

  const playSceneVideo = (scene) => {
    if (!isVideoScene(scene)) return;

    const video = videoRefs.current[scene.id];

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 0.82;

    const playPromise = video.play();

    if (playPromise?.catch) {
      playPromise.catch(() => {
        video.muted = true;

        const mutedPlayPromise = video.play();

        if (mutedPlayPromise?.catch) {
          mutedPlayPromise.catch(() => {
            video.pause();
          });
        }
      });
    }
  };

  const activateScene = (index) => {
    if (index < 0 || index >= scenes.length) return;

    const nextScene = scenes[index];

    pauseAllSceneVideos();
    setActiveIndex(index);

    if (isVideoScene(nextScene)) {
      window.requestAnimationFrame(() => {
        playSceneVideo(nextScene);
      });
    }
  };

  const handleAdvance = () => {
    if (isLastScene) return;

    activateScene(activeIndex + 1);
  };

  const handleBack = () => {
    if (isFirstScene) return;

    activateScene(activeIndex - 1);
  };

  const renderExploreAction = () => {
    if (!isLastScene || !exploreAction?.href || !exploreAction?.label) {
      return null;
    }

    const ariaLabel = exploreAction.ariaLabel ?? exploreAction.label;

    if (isInternalHref(exploreAction.href)) {
      return (
        <Link
          to={exploreAction.href}
          aria-label={ariaLabel}
          className={styles.journeyButton}
        >
          <span>{exploreAction.label}</span>
        </Link>
      );
    }

    return (
      <a
        href={exploreAction.href}
        aria-label={ariaLabel}
        className={styles.journeyButton}
      >
        <span>{exploreAction.label}</span>
      </a>
    );
  };

  return (
    <section className={styles.masthead} aria-label="Banner principal do hotel">
      <HotelSectionShell contentClassName={styles.inner}>
        <div className={styles.mediaLayer} aria-hidden="true">
          {scenes.map((scene, index) => {
            const isActive = index === activeIndex;
            const isVideo = isVideoScene(scene);

            return (
              <div
                key={scene.id}
                className={joinClassNames(
                  styles.sceneLayer,
                  isVideo && styles.sceneLayerVideo,
                  isActive && styles.sceneLayerActive,
                )}
              >
                {isVideo ? (
                  <video
                    ref={registerVideoRef(scene.id)}
                    className={joinClassNames(
                      styles.sceneImage,
                      styles.sceneVideo,
                    )}
                    poster={scene.posterSrc}
                    playsInline
                    preload={isActive ? "auto" : "metadata"}
                    style={{
                      objectPosition: scene.imagePosition ?? "center center",
                    }}
                  >
                    <source src={scene.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={scene.imageSrc}
                    alt=""
                    className={styles.sceneImage}
                    style={{
                      objectPosition: scene.imagePosition ?? "center center",
                    }}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    draggable="false"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          className={joinClassNames(
            styles.overlay,
            activeSceneIsVideo && styles.overlayVideo,
          )}
          aria-hidden="true"
        />

        <div
          className={joinClassNames(
            styles.glow,
            activeSceneIsVideo && styles.glowVideo,
          )}
          aria-hidden="true"
        />

        <div
          className={joinClassNames(
            styles.contentShell,
            activeSceneIsVideo && styles.contentShellVideo,
          )}
        >
          <div className={styles.topMeta}>
            {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
          </div>

          <div
            className={joinClassNames(
              styles.centerStage,
              activeSceneIsVideo && styles.centerStageVideo,
            )}
          >
            {logoSrc ? (
              <div
                className={joinClassNames(
                  styles.logoWrap,
                  activeSceneIsVideo && styles.logoWrapVideo,
                )}
              >
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className={styles.logo}
                  loading="eager"
                  decoding="async"
                  draggable="false"
                />
              </div>
            ) : null}

            <div
              className={joinClassNames(
                styles.copyBlock,
                activeSceneIsVideo && styles.copyBlockVideo,
              )}
            >
              {activeScene?.accentLabel ? (
                <span
                  className={joinClassNames(
                    styles.sceneLabel,
                    activeSceneIsVideo && styles.sceneLabelVideo,
                  )}
                >
                  {activeScene.accentLabel}
                </span>
              ) : null}

              {activeScene?.title ? (
                <h1 className={styles.title}>{activeScene.title}</h1>
              ) : null}

              {activeScene?.description ? (
                <p
                  className={joinClassNames(
                    styles.description,
                    activeSceneIsVideo && styles.descriptionVideo,
                  )}
                >
                  {activeScene.description}
                </p>
              ) : null}
            </div>

            <div
              className={joinClassNames(
                styles.actions,
                activeSceneIsVideo && styles.actionsVideo,
              )}
            >
              {!isLastScene ? (
                <button
                  type="button"
                  className={styles.journeyButton}
                  onClick={handleAdvance}
                  aria-label={
                    activeScene?.actionLabel ?? "Avançar para a próxima vista"
                  }
                >
                  <span>{activeScene?.actionLabel ?? "Avançar"}</span>
                </button>
              ) : (
                renderExploreAction()
              )}

              {cta?.href && cta?.label ? (
                <CTAButton
                  href={cta.href}
                  label={cta.label}
                  ariaLabel={cta.ariaLabel ?? cta.label}
                  icon={cta.iconKey ?? "phone"}
                  blink={false}
                  compact={activeSceneIsVideo}
                  variant="hotel"
                  tone={cta.tone ?? "strong"}
                  className={styles.ctaButton}
                />
              ) : null}
            </div>
          </div>

          <div className={styles.bottomBar}>
            <div
              className={styles.sceneDots}
              role="tablist"
              aria-label="Navegação entre vistas do hero"
            >
              {scenes.map((scene, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={scene.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Mostrar ${
                      scene.accentLabel ?? `vista ${index + 1}`
                    }`}
                    className={joinClassNames(
                      styles.dot,
                      isActive && styles.dotActive,
                    )}
                    onClick={() => activateScene(index)}
                  />
                );
              })}
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.navButton}
                onClick={handleBack}
                disabled={isFirstScene}
                aria-label="Voltar à vista anterior"
              >
                Anterior
              </button>

              <button
                type="button"
                className={styles.navButton}
                onClick={handleAdvance}
                disabled={isLastScene}
                aria-label="Avançar para a próxima vista"
              >
                Seguinte
              </button>
            </div>
          </div>
        </div>
      </HotelSectionShell>
    </section>
  );
}
