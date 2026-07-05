import {
  Accessibility,
  BarChart3,
  BookOpen,
  Brain,
  ClipboardList,
  HelpCircle,
  Layers,
  MessageSquare,
  Route,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Capability = {
  icon: LucideIcon;
  title: string;
  section: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: Route,
    title: "Personalized learning",
    section: "§3.2",
    description:
      "Analyzes behavior and performance to adapt difficulty, recommend learning paths, and adjust explanations to your understanding.",
  },
  {
    icon: Sparkles,
    title: "AI lesson explanations",
    section: "§3.3",
    description:
      "Simple language, step-by-step breakdowns, and multiple styles—basic, detailed, or exam-focused—with real-world examples.",
  },
  {
    icon: HelpCircle,
    title: "Homework help",
    section: "§3.4",
    description:
      "Guided hints, clear solution steps, mistake identification, and corrections—without encouraging answer copying.",
  },
  {
    icon: BookOpen,
    title: "Smart notes & summaries",
    section: "§3.5",
    description:
      "Concise structured notes and summaries adjusted to your education level from any topic or long content.",
  },
  {
    icon: Layers,
    title: "Learning modes",
    section: "§3.6",
    description:
      "Exam preparation, exploration, and revision modes—switch anytime based on what you need right now.",
  },
  {
    icon: Brain,
    title: "Progress & recommendations",
    section: "§3.7–3.8",
    description:
      "Track completed lessons, strengths, weak topics, and receive study plans with practice suggestions.",
  },
  {
    icon: BarChart3,
    title: "Teacher dashboard",
    section: "§3.9",
    description:
      "Class analytics, struggling student alerts, learning trends, and tools to support your students effectively.",
  },
  {
    icon: ClipboardList,
    title: "AI quiz generator",
    section: "§3.10",
    description:
      "Multiple-choice and short-answer quizzes with adjustable difficulty, aligned to curriculum topics.",
  },
  {
    icon: MessageSquare,
    title: "Interactive learning",
    section: "§3.12",
    description:
      "Reflective questions and reasoning-based AI conversations that promote critical thinking.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    section: "§3.13",
    description:
      "Simple language mode, multilingual support, and text-to-speech for diverse learner needs.",
  },
  {
    icon: Shield,
    title: "Privacy & security",
    section: "§3.14",
    description:
      "Encrypted sensitive data, HTTPS, JWT authentication, and strict role-based access for all users.",
  },
];
