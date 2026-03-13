import hotelBrand from "../../../../config/index.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./HotelHeroBanner.module.css";

export default function HotelHeroBanner({ onContactClick }) {
  const section = hotelBrand?.pages?.home?.sections?.heroBanner ?? null;
  if (!section) return null;

  const logoSrc = section.logo?.src ?? "";
  const logoAlt = section.logo?.alt ?? "Estalagem de Sangalhos";

  const cta = section.cta ?? null;
  const videoSrc = section.video?.src ?? "";
  const videoPoster = section.video?.poster ?? "";

  if (!cta?.href) return null;

  const handleClick = (event) => {
    if (!onContactClick) return;

    event.preventDefault();
    onContactClick();
  };

  return (
    <section className={styles.masthead} aria-label="Banner principal do hotel">
      <div className={styles.inner}>
        <div className={styles.mediaLayer} aria-hidden="true">
          {videoSrc ? (
            <video
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={videoPoster || undefined}
            >
              <source src={videoSrc} />
            </video>
          ) : (
            <div className={styles.videoFallback} />
          )}
        </div>

        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.contentShell}>
          <div className={styles.logoWrap}>
            {logoSrc ? (
              <img src={logoSrc} alt={logoAlt} className={styles.logo} />
            ) : null}
          </div>

          <div className={styles.content}>
            <CTAButton
              cta={cta}
              icon={cta.iconKey ?? "phone"}
              variant="hotel"
              tone={cta.tone ?? "strong"}
              className={styles.cta}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
