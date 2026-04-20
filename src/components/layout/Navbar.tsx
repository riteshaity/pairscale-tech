import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 1, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#081827]/95 shadow-[0_12px_34px_rgba(8,24,39,0.22)] backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.025, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PS</span>
            </div>
            <span className="font-display font-bold text-xl text-white hidden sm:inline">
              PairScale
            </span>
          </Link>
        </motion.div>

        {/* Links */}
        <motion.div
          className="hidden md:flex gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                to={link.path}
                className={`relative font-medium text-sm tracking-wide transition duration-300 ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}

                {/* Underline Animation */}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 h-[3px] bg-[#14b8a6] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="md:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white text-2xl"
  >
    {isOpen ? "✕" : "☰"}
  </button>
</div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.025, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#1f70c7] to-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_12px_30px_rgba(13,148,136,0.24)] hover:shadow-[0_16px_38px_rgba(13,148,136,0.32)] transition duration-300"
            
          >
            Get Started
          </Link>
        </motion.div>
        

      </div>
      {isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-[#081827] border-t border-white/10 flex flex-col items-center py-6 gap-6 shadow-lg z-40">
    
    {navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className="text-white text-sm font-medium"
      >
        {link.name}
      </Link>
    ))}

    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="bg-gradient-to-r from-[#1f70c7] to-[#0d9488] px-5 py-2 rounded-lg text-white font-semibold"
    >
      Get Started
    </Link>

  </div>
)}
    </motion.nav>
  );
};

export default Navbar;
