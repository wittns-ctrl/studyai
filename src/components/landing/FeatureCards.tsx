import { motion } from "framer-motion";
import { BookOpen, Route, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const features = [
  {
    icon: Route,
    title: "Personalized learning",
    description:
      "Adapts difficulty, learning paths, and explanations based on your level, behavior, and progress over time.",
  },
  {
    icon: Sparkles,
    title: "AI lesson explanations",
    description:
      "Complex topics broken into simple language with step-by-step breakdowns—basic, detailed, or exam-focused styles.",
  },
  {
    icon: BookOpen,
    title: "Smart notes & summaries",
    description:
      "Generate concise, structured notes from any topic. Summaries tuned to your education level and curriculum.",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="Core capabilities"
          title="Everything you need to learn better"
          subtitle="An intelligent platform that supports students at their own pace while giving teachers the insights they need."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full p-8 rounded-2xl glass glass-hover"
              >
                <div className="h-12 w-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-6 transition-colors">
                  <f.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
