import { Layout } from "../components/Layout";
import { FAQAccordion } from "../components/FAQAccordion";
import { PageHeader } from "../components/PageHeader";
import { faqItems } from "../data/faqData";
import { Reveal } from "../components/Reveal";
import { Link } from "react-router-dom";

export default function FAQPage() {
  return (
    <Layout>
      <PageHeader
        badge="FAQ"
        title="Frequently asked questions"
        subtitle="Answers about studzAi, AI-assisted learning, privacy, and how the platform works."
      />
      <div className="section-padding pb-24 max-w-3xl mx-auto">
        <FAQAccordion items={faqItems} defaultOpen={0} />
        <Reveal className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Still have questions?{" "}
            <Link to="/contact" className="text-studz-brand dark:text-studz-brandLight hover:underline">
              Contact our team
            </Link>
          </p>
        </Reveal>
      </div>
    </Layout>
  );
}
