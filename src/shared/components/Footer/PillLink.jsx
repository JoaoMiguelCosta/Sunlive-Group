export default function PillLink({
  href,
  disabled = false,
  className = "",
  children,
  onSmartClick,
  target,
  rel,
  ...rest
}) {
  const isDisabled = Boolean(disabled);
  const resolvedHref = isDisabled ? undefined : href;

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onSmartClick?.(event, href, isDisabled);
  };

  const resolvedRel = target === "_blank" ? rel || "noopener noreferrer" : rel;

  return (
    <a
      className={className}
      href={resolvedHref}
      aria-disabled={isDisabled ? "true" : undefined}
      tabIndex={isDisabled ? -1 : 0}
      target={target}
      rel={resolvedRel}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
