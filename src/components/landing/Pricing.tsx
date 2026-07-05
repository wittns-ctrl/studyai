
import { Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../Reveal";

const plans = [
  {
    name: "Free",
    desc: "For individuals or small projects just starting out.",
    price: "0",
    features: [
      "10 AI generated assets",
      "Basic customization",
      "Standard templates",
      "Limited export capabilities",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    desc: "For professionals who need advanced tools.",
    price: "17",
    badge: "Save 20%",
    features: [
      "Unlimited AI assets",
      "Advanced customization",
      "Premium templates",
      "High-res export",
      "Custom watermarks",
      "Team workflows",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Team",
    desc: "For agencies and growing creative teams.",
    price: "37",
    badge: "Save 15%",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom brand integrations",
      "SLA support",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-20 lg:py-32 relative" id="pricing">
      <div className="section-padding relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Choose the Plan<br />
            That's Right for You
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Enjoy our basic or essential features across 1,000 credit actions. Upgrade to the Pro Plan to unlock powerful AI capabilities, smart syncing, and limitless auto sync of data & analytics.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billing === "monthly" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billing === "yearly" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative p-8 rounded-2xl transition-all ${
                  plan.highlight
                    ? "bg-white dark:bg-zinc-900 border-2 border-studz-brand shadow-[0_0_30px_rgba(255,94,20,0.15)] md:-mt-8"
                    : "glass border border-black/5 dark:border-white/5"
                }`}
              >
                {/* Pro Badge Glow */}
                {plan.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-b from-studz-brand/5 to-transparent rounded-2xl pointer-events-none" />
                )}
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 min-h-[40px]">{plan.desc}</p>
                  
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-white">${plan.price}</span>
                    <span className="text-zinc-500 mb-1">/month</span>
                    {plan.badge && (
                      <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-md bg-studz-brand/20 text-studz-brand border border-studz-brand/30">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 bg-zinc-200 dark:bg-zinc-800 rounded-full p-0.5">
                          <Check className={`w-3 h-3 ${plan.highlight ? "text-studz-brand" : "text-zinc-500 dark:text-zinc-400"}`} />
                        </div>
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3.5 rounded-xl font-medium transition-colors ${
                      plan.highlight
                        ? "bg-studz-brand hover:bg-studz-brandDark text-white"
                        : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white"
                    }`}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
