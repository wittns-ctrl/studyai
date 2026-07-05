import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Logo } from "../Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border-b border-zinc-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-16 lg:h-20">
        <Logo size="md" />

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleNavClick}
              className="relative py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass glass-hover text-zinc-600 dark:text-zinc-400 mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/dashboard"
            className="px-4 py-2.5 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-studz-brand transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="btn-accent text-sm !px-8 !py-2.5 font-bold tracking-wide"
          >
            Login
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full glass text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="p-2 text-zinc-600 dark:text-zinc-400"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-zinc-200/60 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl"
        >
          <div className="section-padding py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleNavClick}
                className="py-3 font-medium text-zinc-600 dark:text-zinc-400 hover:text-studz-brand"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" className="mt-4 text-center btn-accent py-3">
              Login
            </Link>
            <Link
              to="/dashboard"
              className="text-center py-3 rounded-xl border border-white/10 text-zinc-700 dark:text-zinc-200"
            >
              Open dashboard
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
