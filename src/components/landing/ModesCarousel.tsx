import { motion } from "framer-motion";
import { Compass, GraduationCap, RefreshCw } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const modes = [
  {
    icon: GraduationCap,
    title: "Exam preparation",
    badge: "Popular",
    description: "Focused explanations, practice quizzes, and exam-style breakdowns.",
    gradient: "from-violet-600 to-purple-900",
  },
  {
    icon: Compass,
    title: "Exploration",
    badge: "New",
    description: "Discover new topics through interactive AI conversations.",
    gradient: "from-indigo-600 to-violet-900",
  },
  {
    icon: RefreshCw,
    title: "Revision",
    badge: null,
    description: "Smart summaries and targeted review of your weak areas.",
    gradient: "from-purple-600 to-fuchsia-900",
  },
  {
    icon: GraduationCap,
    title: "Homework session",
    badge: null,
    description: "Step-by-step guidance with hints when you get stuck.",
    gradient: "from-violet-700 to-indigo-900",
  },
  {
    icon: Compass,
    title: "Quick recap",
    badge: "Pro",
    description: "Five-minute AI summaries before class or tests.",
    gradient: "from-fuchsia-600 to-violet-900",
  },
];

export function ModesCarousel() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="section-padding mb-12">
        <SectionHeading
          badge="Learning modes"
          title="Study the way that fits right now"
          subtitle="Switch between exam prep, exploration, and revision—or focus on homework help when you need it."
        />
      </div>

      <div className="flex gap-5 px-4 sm:px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
        {modes.map((mode, i) => (
          <Reveal key={mode.title} delay={i * 0.08} className="snap-center shrink-0">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative w-[220px] sm:w-[260px] h-[340px] rounded-2xl overflow-hidden glass glass-hover"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${mode.gradient} opacity-75 backdrop-blur-xl border border-white/10`}
              />
              <div className="relative h-full p-6 flex flex-col justify-between">
                {mode.badge && (
                  <span className="self-start px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-violet-500/30 border border-violet-400/40 text-violet-200">
                    {mode.badge}
                  </span>
                )}
                {!mode.badge && <span />}
                <div>
                  <mode.icon className="h-10 w-10 text-white/90 mb-4" />
                  <h4 className="text-lg font-bold">{mode.title}</h4>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
