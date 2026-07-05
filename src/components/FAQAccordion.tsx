import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "../data/faqData";
import { Reveal } from "./Reveal";

type FAQAccordionProps = {
  items: FaqItem[];
  defaultOpen?: number | null;
};

export function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-zinc-200/80 dark:divide-white/10 rounded-2xl glass overflow-hidden">
      {items.map((faq, i) => (
        <Reveal key={faq.q} delay={i * 0.04}>
          <div>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-zinc-100/50 dark:hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-medium text-zinc-800 dark:text-zinc-100">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
