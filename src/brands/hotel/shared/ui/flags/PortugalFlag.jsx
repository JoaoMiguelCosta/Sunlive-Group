export default function PortugalFlagIcon({
  size = 26,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={[
        "flag-icon",
        "flag-icon-portugal",
        "flag-portugal",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect width="512" height="512" fill="#ff0000" />
      <rect width="205" height="512" fill="#2eb34a" />

      <circle cx="205" cy="256" r="78" fill="#ffdf00" />

      <circle cx="205" cy="256" r="54" fill="#ff2b2b" />

      <rect x="177" y="225" width="56" height="44" rx="4" fill="#f5f5f5" />
      <path
        d="M177 225h56v20c0 18-12 34-28 34s-28-16-28-34z"
        fill="#f5f5f5"
      />

      <path
        d="M205 202v108M151 256h108M167 221l76 70M167 291l76-70"
        stroke="#2eb34a"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}