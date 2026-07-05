import { motion } from "framer-motion";
import { BarChart3, Check, MessageSquare, ClipboardList } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const showcases = [
  {
    id: "teachers",
    badge: "For teachers",
    title: "Teacher dashboard & class insights",
    description:
      "Monitor student performance, spot struggling learners early, and view class-wide learning trends—all in one place.",
    bullets: [
      "Student performance analytics",
      "Highlight at-risk students",
      "Class-wide trend visualization",
      "Generate and assign quizzes",
    ],
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
    reverse: false,
  },
  {
    badge: "AI quizzes",
    title: "Auto-generated quizzes that adapt",
    description:
      "Create multiple-choice and short-answer quizzes on any topic. Difficulty adjusts to match your class level.",
    bullets: [
      "Topic-based question generation",
      "Multiple-choice & short answer",
      "Adjustable difficulty levels",
      "Aligned with curriculum standards",
    ],
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1434030214721-735608b966f7?w=900&q=80",
    reverse: true,
  },
  {
    badge: "Interactive learning",
    title: "Learn by thinking, not memorizing",
    description:
      "The AI asks reflective questions, encourages reasoning, and guides interactive conversations that build real understanding.",
    bullets: [
      "Reflective questioning",
      "Reasoning-based responses",
      "Interactive AI conversations",
      "Critical thinking over copy-paste",
    ],
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
    reverse: false,
  },
];

export function ShowcaseAlternating() {
  return (
    <section className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="Deep dive"
          title="Tools that support every role"
          subtitle="Students get personalized AI help. Teachers get actionable insights. Admins keep everything secure."
        />

        <div className="space-y-24 lg:space-y-32">
          {showcases.map((item) => (
            <Reveal key={item.title} delay={0.1}>
              <div
                id={item.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  item.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={item.reverse ? "lg:[direction:ltr]" : ""}>
                  <span className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-medium">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
                  <ul className="mt-8 space-y-4">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600/20 border border-violet-500/30">
                          <Check className="h-3.5 w-3.5 text-violet-400" />
                        </span>
                        <span className="text-zinc-700 dark:text-zinc-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`relative rounded-2xl overflow-hidden glass ${
                    item.reverse ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 p-4 rounded-xl glass">
                      <item.icon className="h-8 w-8 text-violet-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
