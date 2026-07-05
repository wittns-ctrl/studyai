import { motion } from "framer-motion";
import { Heart, Globe, Target, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const goals = [
  {
    icon: Target,
    title: "Personalized pace",
    text: "Help students learn at their own speed with adaptive content and explanations.",
  },
  {
    icon: Users,
    title: "Support teachers",
    text: "Provide analytics, quiz tools, and insights—AI assists educators, never replaces them.",
  },
  {
    icon: Globe,
    title: "Equity in education",
    text: "Designed for schools and self-learners in resource-limited educational contexts.",
  },
  {
    icon: Heart,
    title: "Ethical AI",
    text: "Promote critical thinking, human oversight, and responsible use of AI in classrooms.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="section-padding max-w-4xl mx-auto">
        <SectionHeading
          badge="About studzAi"
          title="Improving education through adaptive AI"
          subtitle="An intelligent learning platform that makes quality personalized support accessible to every student."
        />

        <div className="space-y-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-gradient">Our mission</h3>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              studzAi exists to design an AI-powered educational platform that supports
              personalized learning for students, assists teachers in monitoring progress, and
              improves understanding of educational content through adaptive explanations,
              summaries, and interactive learning tools.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="text-2xl font-bold text-gradient">What we solve</h3>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>• Differences in learning speed across classrooms</li>
              <li>• Lack of personalized support outside school hours</li>
              <li>• Difficulty understanding complex lessons</li>
              <li>• Limited access to simplified learning materials</li>
              <li>• Teachers needing better visibility into student progress</li>
            </ul>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={0.12 + i * 0.06}>
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl glass glass-hover">
                  <g.icon className="h-8 w-8 text-studz-brand dark:text-studz-brandLight mb-3" />
                  <h4 className="font-semibold text-lg">{g.title}</h4>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{g.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="p-8 rounded-2xl glass border-studz-brand/20">
              <h3 className="text-xl font-bold">Product perspective</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                studzAi is a standalone web platform integrating MongoDB for data, Gemini/OpenAI
                for intelligent responses, a NestJS backend, and a responsive React frontend—
                ensuring privacy, security, and accessibility for real educational environments
                worldwide.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
