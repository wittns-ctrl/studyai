import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const modes = [
  {
    icon: GraduationCap,
    title: "Exam preparation",
    description: "Focused study for tests and national exams.",
    features: [
      "Exam-style AI explanations",
      "Auto-generated practice quizzes",
      "Topic-based revision paths",
      "Performance tracking by subject",
    ],
    highlight: true,
  },
  {
    icon: Compass,
    title: "Exploration",
    description: "Discover and learn new topics at your own pace.",
    features: [
      "Interactive AI conversations",
      "Reflective questioning",
      "Curiosity-driven learning paths",
      "Examples matched to your level",
    ],
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Revision",
    description: "Revisit and strengthen what you have already learned.",
    features: [
      "Smart notes & summaries",
      "Weak-topic recommendations",
      "Spaced review suggestions",
      "Quick recap before class",
    ],
    highlight: false,
  },
];

export function LearningModes() {
  return (
    <section id="modes" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(124,58,237,0.15),transparent)]" />
      <div className="section-padding relative">
        <SectionHeading
          badge="How you learn"
          title="Choose your learning mode"
          subtitle="No subscriptions—pick the mode that matches your goal and switch anytime."
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {modes.map((mode, i) => (
            <Reveal key={mode.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative flex flex-col h-full p-8 rounded-2xl glass glass-hover ${
                  mode.highlight
                    ? "border-violet-500/40 shadow-md"
                    : ""
                }`}
              >
                {mode.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold rounded-full bg-violet-600 text-white">
                    Most used
                  </span>
                )}
                <mode.icon className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold">{mode.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{mode.description}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-violet-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`mt-8 inline-flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all ${
                    mode.highlight
                      ? "bg-violet-600 hover:bg-violet-500 shadow-sm"
                      : "glass glass-hover text-zinc-200"
                  }`}
                >
                  Try this mode
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
