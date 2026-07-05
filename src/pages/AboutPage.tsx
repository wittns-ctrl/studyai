import { motion } from "framer-motion";
import { Heart, Globe, Target, Users } from "lucide-react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

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

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader
        badge="About studzAi"
        title="Improving education through adaptive AI"
        subtitle="An intelligent learning platform that makes quality personalized support accessible to every student."
      />

      <div className="section-padding pb-24 max-w-4xl mx-auto space-y-12">
        <Reveal>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gradient">Our mission</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              studzAi exists to design an AI-powered educational platform that supports personalized
              learning for students, assists teachers in monitoring progress, and improves
              understanding of educational content through adaptive explanations, summaries, and
              interactive learning tools.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl font-bold text-gradient">What we solve</h2>
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
            <Reveal key={g.title} delay={0.15 + i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl glass glass-hover">
                <g.icon className="h-8 w-8 text-studz-brand dark:text-studz-brandLight mb-3" />
                <h3 className="font-semibold text-lg">{g.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{g.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="p-8 rounded-2xl glass border-studz-brand/20">
            <h2 className="text-xl font-bold">Product perspective</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              studzAi is a standalone web platform integrating MongoDB for data, Gemini/OpenAI for
              intelligent responses, a NestJS backend, and a responsive React frontend—ensuring
              privacy, security, and accessibility for real educational environments worldwide.
            </p>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}
