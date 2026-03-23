import { useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelSectionShell from "../../../../shared/ui/HotelSectionShell/HotelSectionShell.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./HotelHeroBanner.module.css";

function preloadSceneImages(scenes) {
  scenes.forEach((scene) => {
    if (!scene?.imageSrc) return;

    const img = new Image();
    img.src = scene.imageSrc;
  });
}

export default function HotelHeroBanner() {
  const section = hotelBrand?.pages?.home?.sections?.heroBanner ?? null;

  const scenes = useMemo(
    () => (Array.isArray(section?.scenes) ? section.scenes : []),
    [section?.scenes],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!scenes.length) return;
    preloadSceneImages(scenes);
  }, [scenes]);

  useEffect(() => {
    if (!scenes.length) return;

    setActiveIndex((currentIndex) =>
      currentIndex >= scenes.length ? 0 : currentIndex,
    );
  }, [scenes]);

  if (!section || !scenes.length) return null;

  const logoSrc = section?.logo?.src ?? "";
  const logoAlt = section?.logo?.alt ?? "Estalagem de Sangalhos";
  const eyebrow = section?.eyebrow ?? "";
  const cta = section?.cta ?? null;
  const exploreAction = section?.exploreAction ?? null;

  const activeScene = scenes[activeIndex] ?? scenes[0];
  const isFirstScene = activeIndex === 0;
  const isLastScene = activeIndex === scenes.length - 1;

  const goToScene = (index) => {
    if (index < 0 || index >= scenes.length) return;
    setActiveIndex(index);
  };

  const handleAdvance = () => {
    if (isLastScene) return;

    setActiveIndex((currentIndex) =>
      Math.min(currentIndex + 1, scenes.length - 1),
    );
  };

  const handleBack = () => {
    if (isFirstScene) return;

    setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  return (
    <section className={styles.masthead} aria-label="Banner principal do hotel">
      <HotelSectionShell contentClassName={styles.inner}>
        <div className={styles.mediaLayer} aria-hidden="true">
          {scenes.map((scene, index) => {
            const isActive = index === activeIndex;
            const isSceneLast = index === scenes.length - 1;

            return (
              <div
                key={scene.id}
                className={[
                  styles.sceneLayer,
                  isActive ? styles.sceneLayerActive : "",
                  isSceneLast ? styles.sceneLayerFinal : "",
                ].join(" ")}
              >
                <img
                  src={scene.imageSrc}
                  alt=""
                  className={styles.sceneImage}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
              </div>
            );
          })}
        </div>

        <div
          className={[
            styles.overlay,
            isLastScene ? styles.overlayFinal : "",
          ].join(" ")}
          aria-hidden="true"
        />

        <div
          className={[styles.glow, isLastScene ? styles.glowFinal : ""].join(
            " ",
          )}
          aria-hidden="true"
        />

        <div
          className={[
            styles.contentShell,
            isLastScene ? styles.contentShellFinal : "",
          ].join(" ")}
        >
          <div className={styles.topMeta}>
            {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
          </div>

          {!isLastScene && logoSrc ? (
            <div className={styles.logoWrap}>
              <img
                src={logoSrc}
                alt={logoAlt}
                className={styles.logo}
                loading="eager"
                decoding="async"
              />
            </div>
          ) : null}

          <div
            className={[
              styles.copyBlock,
              isLastScene ? styles.copyBlockFinal : "",
            ].join(" ")}
          >
            {activeScene?.accentLabel ? (
              <span
                className={[
                  styles.sceneLabel,
                  isLastScene ? styles.sceneLabelFinal : "",
                ].join(" ")}
              >
                {activeScene.accentLabel}
              </span>
            ) : null}

            {activeScene?.title ? (
              <h1 className={styles.title}>{activeScene.title}</h1>
            ) : null}

            {activeScene?.description ? (
              <p
                className={[
                  styles.description,
                  isLastScene ? styles.descriptionFinal : "",
                ].join(" ")}
              >
                {activeScene.description}
              </p>
            ) : null}
          </div>

          <div
            className={[
              styles.actions,
              isLastScene ? styles.actionsFinal : "",
            ].join(" ")}
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
            ) : exploreAction?.href && exploreAction?.label ? (
              <a
                href={exploreAction.href}
                aria-label={exploreAction.ariaLabel ?? exploreAction.label}
                className={styles.journeyButton}
              >
                <span>{exploreAction.label}</span>
              </a>
            ) : null}

            {cta?.href && cta?.label ? (
              <CTAButton
                href={cta.href}
                label={cta.label}
                ariaLabel={cta.ariaLabel ?? cta.label}
                icon="phone"
                blink={false}
                compact={false}
                variant="hotel"
                tone="strong"
                className={styles.ctaButton}
              />
            ) : null}
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
                    className={[
                      styles.dot,
                      isActive ? styles.dotActive : "",
                    ].join(" ")}
                    onClick={() => goToScene(index)}
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
