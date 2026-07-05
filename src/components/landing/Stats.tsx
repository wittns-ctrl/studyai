import { motion } from "framer-motion";

const stats = [
  { label: "Users", value: "120K+" },
  { label: "Projects", value: "150+" },
  { label: "Downloads", value: "32K+" },
];

export function Stats() {
  return (
    <section className="section-padding py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto border-t border-b border-zinc-200 dark:border-white/5 py-12 relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-studz-brand/5 to-transparent pointer-events-none" />
        
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col gap-2 relative z-10"
          >
            <span className="text-studz-brand font-semibold text-sm tracking-wider">{stat.label}</span>
            <span className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
