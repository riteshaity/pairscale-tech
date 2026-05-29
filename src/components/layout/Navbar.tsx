import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/20 bg-[#030711] shadow-[0_12px_40px_rgba(3,7,17,0.60)] backdrop-blur-2xl"
          : "border-white/10 bg-[#030711]/95 shadow-[0_4px_20px_rgba(3,7,17,0.25)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.96 }}>
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] shadow-[0_4px_14px_rgba(20,184,166,0.35)]">
              <span className="text-sm font-bold text-white">PS</span>
            </div>
            <span className="hidden font-display text-lg font-bold text-white sm:inline">
              PairScale
            </span>
          </Link>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition duration-200 ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1f70c7] to-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(13,148,136,0.28)] transition hover:shadow-[0_12px_32px_rgba(13,148,136,0.40)]"
          >
            Get Started
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — absolute overlay so it doesn't push page content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full w-full border-t border-white/10 bg-[#030711] shadow-[0_16px_40px_rgba(3,7,17,0.55)] md:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                      location.pathname === link.path
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-white/10 pt-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl bg-gradient-to-r from-[#1f70c7] to-[#0d9488] py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
