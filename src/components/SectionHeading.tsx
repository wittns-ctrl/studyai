import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-14 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full glass text-studz-brand dark:text-studz-brandLight">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
