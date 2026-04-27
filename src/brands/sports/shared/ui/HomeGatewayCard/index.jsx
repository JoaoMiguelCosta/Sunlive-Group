import styles from "./HomeGatewayCard.module.css";

import {
  resolveLinkType,
  buildCardClassName,
} from "./homeGatewayCard.utils.js";

import HomeGatewayCardLink from "./HomeGatewayCardLink.jsx";
import HomeGatewayCardContent from "./HomeGatewayCardContent.jsx";
import HomeGatewayCardDecorations from "./HomeGatewayCardDecorations.jsx";

export default function HomeGatewayCard({
  item,
  index = 0,
  softenVisual = false,
}) {
  const href = item?.href ?? "#";
  const label = item?.label ?? `Entrada ${index + 1}`;
  const linkType = resolveLinkType(href);

  const isFeatured = Boolean(item?.featured);
  const isCta = item?.variant === "cta";

  const cardClassName = buildCardClassName({
    styles,
    isFeatured,
    isCta,
    softenVisual,
  });

  return (
    <article className={cardClassName}>
      <HomeGatewayCardLink href={href} linkType={linkType} label={label}>
        <HomeGatewayCardContent
          item={item}
          label={label}
          isFeatured={isFeatured}
        />

        <HomeGatewayCardDecorations />
      </HomeGatewayCardLink>
    </article>
  );
}
