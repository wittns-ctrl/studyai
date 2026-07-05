import { FAQAccordion } from "../FAQAccordion";
import { SectionHeading } from "../SectionHeading";
import { faqItems } from "../../data/faqData";

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="section-padding max-w-3xl mx-auto">
        <SectionHeading
          badge=""
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about using studzAi for smarter learning and teaching."
        />
        <FAQAccordion items={faqItems} defaultOpen={0} />
      </div>
    </section>
  );
}
