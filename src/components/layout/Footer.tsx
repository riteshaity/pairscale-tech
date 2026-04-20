import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: "in" },
  { name: "Twitter", icon: "X" },
  { name: "GitHub", icon: "GH" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 1, y: 12 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
      className="border-t border-white/10 bg-[#081827]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4 mb-12">
          <div>
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                PairScale
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scalable technology solutions for modern teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#a7f3e1] transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#a7f3e1] transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#a7f3e1] transition">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#a7f3e1] transition">
                  Data Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center text-xs font-bold text-gray-100 hover:bg-[#14b8a6] hover:text-white hover:border-transparent transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent my-8" />

        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-300 md:flex-row">
          <p>Copyright {currentYear} PairScale Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#a7f3e1] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#a7f3e1] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
