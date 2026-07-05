import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHeader
        badge="Contact"
        title="We're here to help"
        subtitle="Questions about studzAi, partnerships, or school onboarding—reach out to our team."
      />

      <div className="section-padding pb-24 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Reveal>
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-xl glass">
              <Mail className="h-6 w-6 text-studz-brand shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  support@studzai.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl glass">
              <MessageCircle className="h-6 w-6 text-studz-brand shrink-0" />
              <div>
                <h3 className="font-semibold">Response time</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl glass">
              <MapPin className="h-6 w-6 text-studz-brand shrink-0" />
              <div>
                <h3 className="font-semibold">Built for</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Schools, universities, and self-learners globally.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl glass text-center"
            >
              <p className="text-lg font-semibold text-studz-brand dark:text-studz-brandLight">
                Thank you for reaching out!
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                We&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50 text-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50 text-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-1.5">
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50 text-zinc-900 dark:text-white"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Administrator</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50 text-zinc-900 dark:text-white resize-none"
                />
              </div>
              <button type="submit" className="w-full btn-accent !py-3.5">
                <Send className="h-4 w-4" />
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Layout>
  );
}
