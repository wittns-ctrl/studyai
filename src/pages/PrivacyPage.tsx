import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

const sections = [
  {
    title: "Data we collect",
    body: "studzAi collects only data necessary for learning purposes: account information, role (Student, Teacher, Admin), learning progress, quiz results, and interactions with AI features. We do not sell personal data to third parties.",
  },
  {
    title: "Encryption & secure communication",
    body: "All communication between your browser and our servers uses HTTPS. Sensitive user data is encrypted at rest. Passwords are hashed using bcrypt before storage. API access is protected with JWT authentication where required.",
  },
  {
    title: "Role-based access",
    body: "Access to personal learning data is restricted by role. Students see their own progress; teachers see authorized class analytics; administrators manage users and system configuration. Unauthorized access attempts are prevented and logged.",
  },
  {
    title: "Student data confidentiality",
    body: "Student identities and performance data are not exposed to unauthorized users. Teachers access only data for their assigned classes. We align with privacy requirements in SRS §3.14 and §5.3.",
  },
  {
    title: "Third-party services",
    body: "studzAi integrates with MongoDB Atlas for data storage and Gemini/OpenAI APIs for AI features. These providers process data according to their policies; we minimize shared data to what is required for functionality.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal data subject to applicable law and school policies. Contact support@studzai.com for privacy-related requests.",
  },
];

export default function PrivacyPage() {
  return (
    <Layout>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        subtitle="How studzAi protects your data—last updated May 2026."
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
