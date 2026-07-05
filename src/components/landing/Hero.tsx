import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { HeroGlow } from "./HeroGlow";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(124,58,237,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(124,58,237,0.18),transparent)]" />

      <div className="section-padding relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-sm font-medium"
        >
          <span className="flex items-center justify-center bg-zinc-800 dark:bg-zinc-800 text-white rounded-full px-2 py-0.5 text-xs mr-1">
            <span className="text-studz-brand mr-1">★</span> 4.9/5
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">10k+ applications</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-white"
        >
          Automate <span className="text-studz-brand">Intelligence.</span><br />
          Accelerate <span className="text-studz-brand">Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          studzAi helps students and educators move faster with AI-assisted lessons, smart notes,
          progress tracking, and a dashboard built for real learning outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/register" className="btn-accent !px-8 !py-4 text-base">
            Get Started
          </Link>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </motion.div>
      </div>

      <HeroGlow />
    </section>
  );
}
