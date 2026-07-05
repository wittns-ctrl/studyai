import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const testimonials = [
  {
    name: "Aline U.",
    role: "@aline_student",
    quote:
      "Homework help actually explains each step. I finally understand math instead of copying answers.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Jean Paul M.",
    role: "@jp_teacher",
    quote:
      "The teacher dashboard shows who is struggling before the test. Quiz generation saves me hours every week.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Grace N.",
    role: "@grace_s6",
    quote:
      "Smart notes turned a 40-page chapter into something I could revise in one evening. Exam mode is a game changer.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Eric T.",
    role: "@eric_admin",
    quote:
      "Role-based access and encrypted data give our school confidence. Students in low-bandwidth areas can still learn.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Mugisha W.",
    role: "@witness_dev",
    quote:
      "Built for resource-limited classrooms—AI supports learning without replacing teachers. Exactly what we needed.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Sarah K.",
    role: "@sarah_bio",
    quote:
      "The AI breaks down biology concepts with examples at my level. Revision mode focuses on my weak topics automatically.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="Community"
          title="Loved by students and teachers"
          subtitle="Real feedback from learners and educators using AI responsibly in the classroom."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-2xl glass glass-hover"
              >
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-violet-500/30"
                  />
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
