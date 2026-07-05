export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Is studzAi free for students?",
    a: "studzAi is designed for schools and self-learners in resource-limited settings. You can get started free and explore all core learning modes. Institutional access may be offered through your school.",
  },
  {
    q: "Does AI replace teachers?",
    a: "No. AI supports learning—it does not replace teachers. Educators remain responsible for guidance, and students are encouraged to think critically rather than copy answers (SRS §5.15).",
  },
  {
    q: "How accurate are AI explanations?",
    a: "We use Gemini and OpenAI with structured prompts and validation. AI responses may contain errors; always verify important facts with your teacher or curriculum materials.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes. Sensitive data is encrypted, communication uses HTTPS, access is role-based (Student, Teacher, Admin), and personal learning data is only visible to authorized users (SRS §3.14, §5.3).",
  },
  {
    q: "Does it work on slow internet?",
    a: "The platform is optimized for modern browsers and low-end devices. Some AI features require internet; we handle API failures gracefully with clear messages and fallback responses.",
  },
  {
    q: "What roles can register?",
    a: "Students, teachers, and administrators each get tailored dashboards. Registration includes role selection with JWT-authenticated permissions enforced across the platform.",
  },
  {
    q: "What learning modes are available?",
    a: "Exam preparation, exploration, and revision modes let you switch study styles anytime. Each mode adapts content, quizzes, and summaries to your goal.",
  },
  {
    q: "How does homework help work?",
    a: "The AI provides hints and step-by-step guidance rather than only final answers, explains mistakes, and helps you understand the solution process.",
  },
  {
    q: "Can teachers create quizzes?",
    a: "Yes. Teachers can use the AI quiz generator for multiple-choice and short-answer questions, adjust difficulty, and monitor class performance from the dashboard.",
  },
  {
    q: "Which languages are supported?",
    a: "studzAi supports multilingual learning and simple language mode, with text-to-speech for accessibility (SRS §3.13). More languages are planned in future releases.",
  },
];
