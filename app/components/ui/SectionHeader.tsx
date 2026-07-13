interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-slate-800"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
