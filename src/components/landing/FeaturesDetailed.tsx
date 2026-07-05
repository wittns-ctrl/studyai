import { motion } from "framer-motion";
import { capabilities } from "../../data/capabilities";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function FeaturesDetailed() {
  return (
    <section id="capabilities" className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="System capabilities"
          title="Everything studzAi can do"
          subtitle="Functional requirements from our platform specification—built for students, teachers, and administrators."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-6 rounded-2xl glass glass-hover"
              >
                <cap.icon className="h-8 w-8 text-studz-brand dark:text-studz-brandLight mb-4" />
                <span className="text-xs text-studz-brand dark:text-studz-brandLight font-mono">
                  {cap.section}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
