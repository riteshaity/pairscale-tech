import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";
import { Link } from "react-router-dom";

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

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const solutions = [
  {
    id: 1,
    title: "Deal & Scope Capture",
    description: "Capture structured project scope during sales: features, milestones, estimates, assumptions, and timeline.",
    accent: "from-[#2f8ee8] to-[#1b5aa2]",
    items: ["Feature breakdown", "Milestone planning", "Cost estimation"],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Delivery Tracking",
    description: "Track execution vs plan: milestone status, progress, delays, and blockers in real-time.",
    accent: "from-[#14b8a6] to-[#1f70c7]",
    items: ["Progress monitoring", "Timeline tracking", "Blocker alerts"],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Scope Change Management",
    description: "Log and monetize changes: change requests, effort impact, cost impact, approval, and billing status.",
    accent: "from-[#0d9488] to-[#115e59]",
    items: ["Change requests", "Impact assessment", "Approval workflow"],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Project Financials",
    description: "Live project economics: planned revenue, delivered value, billed amount, cost, and margin tracking.",
    accent: "from-[#e89b0c] to-[#0d9488]",
    items: ["Revenue tracking", "Cost monitoring", "Margin analysis"],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const strengths = [
  {
    label: "MARGIN",
    title: "Protect Profits",
    description: "Track every change, bill for scope creep, and show real project economics in real time.",
    gradient: "from-[#2f8ee8] to-[#14b8a6]",
  },
  {
    label: "ALIGN",
    title: "Team Coordination",
    description: "Connect sales promises with delivery reality, so everyone knows scope and budget.",
    gradient: "from-[#14b8a6] to-[#0d9488]",
  },
  {
    label: "SCALE",
    title: "Repeat Revenue",
    description: "Manage client relationships, upsell opportunities, and expansion projects.",
    gradient: "from-[#0d9488] to-[#2f8ee8]",
  },
];

const stats = [
  { value: "7", label: "Core modules" },
  { value: "100%", label: "Project lifecycle" },
  { value: "End-to-end", label: "Revenue tracking" },
];

export default function Solutions() {
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
              Software Project CRM
            </span>
            <h1 className="mx-auto mb-6 mt-5 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Complete project management for{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                software agencies.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              From deal to delivery to revenue — one CRM that manages the entire lifecycle of software projects.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-6 py-5 backdrop-blur"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Solutions Grid ────────────────────────────────────────── */}
      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Core Modules
          </p>
          <h2 className="max-w-2xl text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Everything software agencies need to manage{" "}
            <span className="bg-gradient-to-r from-[#1f70c7] to-[#0d9488] bg-clip-text text-transparent">
              projects profitably.
            </span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#10294b] px-5 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-[#1b5aa2]"
          >
            Discuss a project
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 28px 60px rgba(8,24,39,0.13)" }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all"
            >
              <div className={`h-[3px] w-full bg-gradient-to-r ${solution.accent}`} />
              <div className="p-7">
                <div className="mb-5 flex flex-col items-center gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.accent} text-white shadow-md`}>
                    {solution.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-center text-lg font-display font-bold text-[#10294b]">
                  {solution.title}
                </h3>
                <p className="mb-6 min-h-24 text-center text-sm leading-7 text-slate-600">
                  {solution.description}
                </p>
                <ul className="space-y-3 border-t border-slate-100 pt-5">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${solution.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 px-7 py-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0d9488] transition group-hover:text-[#10294b]"
                >
                  Learn more
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Why Choose Us ─────────────────────────────────────────── */}
      <Section className="bg-white" animate={false}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Why Our CRM
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6] bg-clip-text text-transparent">
              software project businesses.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Unlike generic CRMs, ours understands that software deals become complex projects with scope, delivery, and financial tracking.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${strength.gradient}`} />
              <div className="mb-4 inline-flex rounded-full bg-[#ecfdf9] px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-[#0d9488]">
                {strength.label}
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                {strength.title}
              </h3>
              <p className="leading-7 text-slate-600">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Inline CTA */}
        <motion.div
          className="relative mt-14 overflow-hidden rounded-2xl bg-[#10294b] p-10 text-white shadow-[0_24px_64px_rgba(8,24,39,0.28)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#14b8a6]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/3 rounded-full bg-[#2f8ee8]/15 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <h3 className="text-2xl font-display font-bold">
              Ready to manage software projects like a pro?
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              See how our CRM can protect your margins and align your sales and delivery teams.
            </p>
            <Link
              to="/contact"
              className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(13,148,136,0.32)] transition hover:bg-[#0d9488]"
            >
              Start a conversation
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
