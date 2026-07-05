import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { LegalLinks } from "../LegalLinks";
import { Logo } from "../Logo";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Learning modes", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/5 pt-16 pb-8">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-2 md:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">
              Learn smarter. Grow faster. AI-powered personalized learning for students,
              teachers, and schools.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-zinc-800 dark:text-zinc-200">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-zinc-500 hover:text-studz-brand dark:hover:text-studz-brandLight transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legal-bar py-5 mb-8">
          <LegalLinks />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-200/80 dark:border-white/5">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} studzAi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-studz-brand dark:hover:text-studz-brandLight transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-studz-brand dark:hover:text-studz-brandLight transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="text-xs text-zinc-500 text-center max-w-2xl mx-auto">
          AI supports learning and does not replace teachers. Generated content may
          contain inaccuracies—always verify with your educator.
        </p>
      </div>
    </footer>
  );
}
