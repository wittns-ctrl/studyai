import { motion } from "framer-motion";
import { Logo } from "./Logo";

type PageHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28 pb-12 lg:pt-32 lg:pb-16 section-padding text-center"
    >
      <div className="flex justify-center mb-8">
        <Logo size="lg" />
      </div>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full glass text-studz-brand dark:text-studz-brandLight">
          {badge}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient max-w-3xl mx-auto">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
