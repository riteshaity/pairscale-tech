import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const values = [
  {
    label: "01",
    title: "Project-First Design",
    description: "Built for how software agencies actually work — deals that become projects, not just sales.",
    gradient: "from-[#2f8ee8] to-[#14b8a6]",
  },
  {
    label: "02",
    title: "Margin Protection",
    description: "Every feature designed to prevent scope creep, track changes, and show real project economics.",
    gradient: "from-[#14b8a6] to-[#0d9488]",
  },
  {
    label: "03",
    title: "Team Alignment",
    description: "Connect sales promises with delivery reality, so everyone knows scope, timeline, and budget.",
    gradient: "from-[#0d9488] to-[#2f8ee8]",
  },
];

const founders = [
  {
    name: "Jakkula Sravya",
    role: "Co-founder, CEO",
    initials: "JS",
    gradient: "from-[#2f8ee8] to-[#14b8a6]",
    description: "Leading product vision, go-to-market strategy, and growth for PairScale Tech.",
  },
  {
    name: "Aity Ritesh Raj",
    role: "Co-founder, CTO",
    initials: "AR",
    gradient: "from-[#14b8a6] to-[#0d9488]",
    description: "Architecting the platform, engineering culture, and technical roadmap.",
  },
  {
    name: "Anand Tandi",
    role: "COO",
    initials: "AT",
    gradient: "from-[#0d9488] to-[#2f8ee8]",
    description: "Driving operations, client partnerships, and delivery excellence at scale.",
  },
];

const heroStats = [
  { value: "50+", label: "Software agencies" },
  { value: "7", label: "Core modules" },
  { value: "100%", label: "Project lifecycle" },
];

export default function About() {
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
              About PairScale Tech
            </span>
            <h1 className="mx-auto mb-6 mt-5 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Building the CRM software companies{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                actually need.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We saw the disconnect between sales, delivery, and revenue in software agencies. So we built a CRM that manages the entire project lifecycle — from deal to delivery to profit.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Mission ───────────────────────────────────────────────── */}
      <Section className="bg-[#f6f9fc]" animate={false}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              Our Mission
            </p>
            <h2 className="mb-6 text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Solving the software project{" "}
              <span className="bg-gradient-to-r from-[#1f70c7] to-[#0d9488] bg-clip-text text-transparent">
                management crisis.
              </span>
            </h2>
            <p className="mb-4 text-lg leading-8 text-slate-600">
              Small software companies lose money on projects because sales, scope, delivery, and billing live in disconnected tools. We built Software Project CRM to connect everything in one system.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Our product continues after the deal closes — tracking delivery, managing changes, and showing real project economics so agencies can protect margins and scale profitably.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6]" />
            <div className="text-5xl font-display font-bold bg-gradient-to-r from-[#10294b] to-[#1f70c7] bg-clip-text text-transparent text-center">
              50+
            </div>
            <p className="mt-3 text-center text-lg font-semibold text-slate-700">
              Software agencies using our CRM
            </p>
            <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">
              {["Scope Protection", "Margin Tracking", "Delivery Alignment"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3 text-slate-700">
                  <CheckIcon />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ── Team ──────────────────────────────────────────────────── */}
      <Section className="bg-white" animate={false}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Our Team
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Founders with{" "}
            <span className="bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6] bg-clip-text text-transparent">
              software agency experience.
            </span>
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            We've built software products and run agencies. We know the pain of disconnected tools and lost margins.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${founder.gradient}`} />
              <div className={`mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br ${founder.gradient} text-xl font-bold text-white shadow-lg`}>
                {founder.initials}
              </div>
              <h3 className="mb-1 text-xl font-display font-bold text-[#10294b]">
                {founder.name}
              </h3>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0d9488]">
                {founder.role}
              </p>
              <p className="text-sm leading-6 text-slate-500">{founder.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Approach ──────────────────────────────────────────────── */}
      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Our Approach
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Principles that make our{" "}
            <span className="bg-gradient-to-r from-[#1f70c7] to-[#0d9488] bg-clip-text text-transparent">
              CRM different.
            </span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${value.gradient}`} />
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} text-sm font-bold text-white shadow-md`}>
                {value.label}
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                {value.title}
              </h3>
              <p className="leading-7 text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section className="bg-[#030711] text-white" animate={false}>
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1b2e] to-[#030711] p-10 shadow-[0_24px_64px_rgba(3,7,17,0.60)]"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#14b8a6]/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/4 translate-y-1/3 rounded-full bg-[#2f8ee8]/12 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-display font-bold">
              Ready to stop losing money on{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                software projects?
              </span>
            </h2>
            <p className="mx-auto max-w-xl leading-7 text-slate-300">
              Join the software agencies protecting margins and scaling profitably with our CRM.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-3.5 font-bold text-white shadow-[0_12px_32px_rgba(13,148,136,0.32)] transition hover:bg-[#0d9488] hover:shadow-[0_16px_44px_rgba(13,148,136,0.44)]"
            >
              Get started
              <ArrowIcon />
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
