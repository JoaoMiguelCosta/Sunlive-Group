import hotelBrand from "../../../../config/index.js";
import HotelSectionShell from "../../../../shared/ui/HotelSectionShell/HotelSectionShell.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./HotelHeroBanner.module.css";

export default function HotelHeroBanner() {
  const section = hotelBrand?.pages?.home?.sections?.heroBanner ?? null;
  if (!section) return null;

  const logoSrc = section.logo?.src ?? "";
  const logoAlt = section.logo?.alt ?? "Estalagem de Sangalhos";

  const cta = section.cta ?? null;
  const videoSrc = section.video?.src ?? "";
  const videoPoster = section.video?.poster ?? "";

  if (!cta?.href || !cta?.label) return null;

  return (
    <section className={styles.masthead} aria-label="Banner principal do hotel">
      <HotelSectionShell contentClassName={styles.inner}>
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
          </div>
        </div>
      </HotelSectionShell>
    </section>
  );
}
