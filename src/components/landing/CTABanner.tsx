import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32" id="contact">
      <div className="section-padding">
        <Reveal>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center text-zinc-900 dark:text-white border border-black/5 dark:border-white/5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-xl"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-t from-studz-brand/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Ready to Learn Smarter?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                Start your free account today and see how studzAi can accelerate student progress,
                support educators, and improve learning outcomes at scale.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-studz-brand hover:bg-studz-brandDark text-white font-semibold transition-all hover:scale-[1.01] shadow-md"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
