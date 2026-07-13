interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-100 p-6 ${hover ? "hover:shadow-md hover:-translate-y-1 transition-all duration-200" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
