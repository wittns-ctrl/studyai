import { Link } from "react-router-dom";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="Home"
    >
      <div className={`${iconSizes[size]} flex-shrink-0 relative`}>
        <img
          src="/studz-logo.svg"
          alt="studzAi Logo"
          className="w-full h-full relative z-10 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-studz-brand/20 rounded-full blur-md group-hover:bg-studz-brand/40 transition-colors" />
      </div>

      {showText && (
        <span className={`font-bold tracking-tight ${textSizes[size]}`}>
          <span className="text-zinc-900 dark:text-white">studz</span>
          <span className="text-studz-brand">Ai</span>
        </span>
      )}
    </Link>
  );
}
