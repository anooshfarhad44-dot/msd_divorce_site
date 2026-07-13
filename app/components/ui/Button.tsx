import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-amber-500 hover:bg-amber-600 text-white",
  secondary: "bg-slate-800 hover:bg-slate-900 text-white",
  outline: "border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {label}
    </button>
  );
}
