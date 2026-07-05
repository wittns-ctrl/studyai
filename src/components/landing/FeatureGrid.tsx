import { motion } from "framer-motion";
import { Hexagon, Wrench } from "lucide-react";
import { Reveal } from "../Reveal";

const gridFeatures = [
  {
    title: "Adaptive Learning Paths",
    text: "Generate personalized study plans based on performance, confidence level, and target exams so each learner moves at the right pace.",
  },
  {
    title: "AI Lesson Explanations",
    text: "Break difficult topics into clear, level-appropriate explanations with examples, step-by-step guidance, and key takeaways.",
  },
  {
    title: "Smart Notes & Summaries",
    text: "Transform long lessons into clean summaries and revision sheets students can actually use before tests.",
  },
  {
    title: "Teacher Insights",
    text: "Monitor class progress, identify struggling students early, and generate targeted quizzes with data-backed recommendations.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 lg:py-32 relative" id="services">
      <div className="section-padding relative max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              Designed for Learners.<br />
              Powered by <span className="text-studz-brand">AI.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              studzAi combines intelligent guidance, practical tools, and clear progress tracking
              in one learning platform built for students, teachers, and schools.
            </p>
          </div>
          <div className="hidden md:block">
            <Hexagon className="w-32 h-32 text-zinc-200 dark:text-zinc-800 stroke-[0.5]" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {gridFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-2xl glass glass-hover relative overflow-hidden group"
              >
                <div className="flex justify-between items-start mb-16">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pr-12">{f.text}</p>
                  <div className="w-10 h-10 rounded-full bg-studz-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-studz-brand/30 transition-colors">
                    <Wrench className="w-5 h-5 text-studz-brand" />
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-zinc-900 dark:text-white">{f.title}</h4>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial/Bridge Text */}
        <div className="max-w-4xl mx-auto text-center border-l-2 border-studz-brand pl-6 md:pl-0 md:border-l-0 md:border-t-2 md:pt-10 border-opacity-30">
          <p className="text-xl sm:text-2xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
            "From homework support to classroom analytics, studzAi makes learning more structured,
            more personalized, and more measurable for everyone involved."
          </p>
        </div>

      </div>
    </section>
  );
}
