import { Link } from "react-router-dom";

type HashLink = { label: string; href: string; to?: never };
type RouteLink = { label: string; to: string; href?: never };

const links: (HashLink | RouteLink)[] = [
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-1 sm:gap-0 ${className}`}
      aria-label="Legal and help"
    >
      {links.map((link, i) => (
        <span key={link.label} className="inline-flex items-center">
          {i > 0 && <span className="link-divider" aria-hidden />}
          {link.to ? (
            <Link to={link.to} className="legal-link px-3 py-1.5 text-sm">
              {link.label}
            </Link>
          ) : (
            <a href={link.href} className="legal-link px-3 py-1.5 text-sm">
              {link.label}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
