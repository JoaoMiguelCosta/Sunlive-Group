// src/shared/ui/icons/FruitBasket.jsx
export default function FruitBasketIcon({
  size = 26,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#e4bf07"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "lucide",
        "lucide-fruit-basket-icon",
        "lucide-fruit-basket",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M8 9a4 4 0 0 1 8 0" />
      <path d="M5 10.5h14" />
      <path d="M6.2 10.5l1 6.1A2 2 0 0 0 9.18 18.5h5.64a2 2 0 0 0 1.98-1.9l1-6.1" />
      <path d="M9 13.5v2.5" />
      <path d="M12 13.5v2.5" />
      <path d="M15 13.5v2.5" />
      <path d="M7.5 18.5h9" />
    </svg>
  );
}
