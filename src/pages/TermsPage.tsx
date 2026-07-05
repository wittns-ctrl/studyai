import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using studzAi, you agree to these Terms & Conditions. If you do not agree, do not use the platform. Schools may impose additional policies for their students and staff.",
  },
  {
    title: "Accounts & roles",
    body: "You must provide accurate information when registering. You are responsible for maintaining the confidentiality of your credentials. Role selection (Student, Teacher, Admin) determines feature access enforced by the system.",
  },
  {
    title: "Acceptable use",
    body: "Use studzAi for lawful educational purposes only. Do not attempt unauthorized access, abuse AI features to generate harmful content, harass others, or circumvent security controls. Violations may result in account suspension.",
  },
  {
    title: "AI-generated content disclaimer",
    body: "AI explanations, notes, quizzes, and homework assistance may contain inaccuracies. studzAi uses AI as a learning support tool—not a replacement for teachers (SRS §5.15). Users must verify important information with educators and curriculum materials.",
  },
  {
    title: "Intellectual property",
    body: "studzAi platform code, design, and branding are protected. User-submitted content remains yours; you grant studzAi a license to process it to provide services. Curriculum content may be subject to school or publisher rights.",
  },
  {
    title: "Termination",
    body: "We may suspend or terminate accounts that violate these terms or pose security risks. You may stop using studzAi at any time. Upon termination, data handling follows our Privacy Policy.",
  },
  {
    title: "Limitation of liability",
    body: "studzAi is provided 'as is' to the extent permitted by law. We are not liable for indirect damages arising from use of AI-generated content or service interruptions. Educational decisions remain the responsibility of students, teachers, and institutions.",
  },
];

export default function TermsPage() {
  return (
    <Layout>
      <PageHeader
        badge="Legal"
        title="Terms & Conditions"
        subtitle="Rules for using the studzAi AI-powered learning platform."
      />
      <div className="section-padding pb-24 max-w-3xl mx-auto space-y-8">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="p-6 rounded-2xl glass">
              <h2 className="text-lg font-semibold text-studz-brand dark:text-studz-brandLight">
                {s.title}
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Layout>
  );
}
