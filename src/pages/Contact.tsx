import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contactCards = [
  {
    label: "EMAIL",
    title: "Email us",
    value: "pairscaletech@gmail.com",
    href: "mailto:pairscaletech@gmail.com",
    gradient: "from-[#2f8ee8] to-[#14b8a6]",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "VISIT",
    title: "Our office",
    value: "T-Hub, Raidurgam, Knowledge City Rd, Hyderabad, Telangana 500032",
    href: "https://maps.google.com/?q=T-Hub+Hyderabad",
    gradient: "from-[#14b8a6] to-[#0d9488]",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#14b8a6] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#14b8a6]/12";

export default function Contact() {
  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden bg-[#030711] px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(47,142,232,0.18) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto max-w-4xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a7f3e1] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14b8a6]" />
              Contact
            </span>
            <h1 className="mx-auto mb-6 mt-5 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Tell us what you want to{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                build next.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Share your goals, challenges, or early idea. We'll help you shape the right next step with clarity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 grid gap-6 md:grid-cols-2"
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${card.gradient}`} />
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-md`}>
                {card.icon}
              </div>
              <div className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                {card.label}
              </div>
              <h3 className="mb-2 text-lg font-display font-bold text-[#10294b]">{card.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{card.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form section */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl bg-[#10294b] p-8 text-white shadow-[0_22px_56px_rgba(8,24,39,0.18)]"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#14b8a6]/15 blur-2xl" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#a7f3e1]">
              Start here
            </p>
            <h2 className="text-2xl font-display font-bold">
              A useful first conversation is simple.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Tell us what you are trying to improve, what already exists, and what timeline matters. We'll respond with a clear next step.
            </p>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              {["Business goal", "Current system", "Timeline or urgency"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#14b8a6]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
          >
            <h2 className="mb-6 text-2xl font-display font-bold text-[#10294b]">
              Send us a message
            </h2>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              <input type="hidden" name="access_key" value="d3b89573-19eb-4795-855c-008399e54003" />

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className={inputClass}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="A little context about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.012, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl bg-gradient-to-r from-[#1f70c7] to-[#0d9488] px-6 py-3.5 font-bold text-white shadow-[0_12px_32px_rgba(13,148,136,0.28)] transition hover:shadow-[0_16px_44px_rgba(13,148,136,0.38)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
