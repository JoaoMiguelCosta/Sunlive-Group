export default function PillLink({
  href,
  disabled,
  className,
  children,
  onSmartClick,
}) {
  return (
    <a
      className={className}
      href={disabled ? undefined : href}
      aria-disabled={disabled ? "true" : "false"}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => onSmartClick?.(e, href, disabled)}
    >
      {children}
    </a>
  );
}
