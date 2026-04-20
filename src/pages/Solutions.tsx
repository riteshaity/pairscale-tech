import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const solutions = [
  {
    id: 1,
    title: "Deal & Scope Capture",
    description: "Capture structured project scope during sales: features, milestones, estimates, assumptions, and timeline.",
    icon: "01",
    accent: "from-[#2f8ee8] to-[#1b5aa2]",
    items: ["Feature breakdown", "Milestone planning", "Cost estimation"],
  },
  {
    id: 2,
    title: "Delivery Tracking",
    description: "Track execution vs plan: milestone status, progress, delays, and blockers in real-time.",
    icon: "02",
    accent: "from-[#14b8a6] to-[#1f70c7]",
    items: ["Progress monitoring", "Timeline tracking", "Blocker alerts"],
  },
  {
    id: 3,
    title: "Scope Change Management",
    description: "Log and monetize changes: change requests, effort impact, cost impact, approval, and billing status.",
    icon: "03",
    accent: "from-[#0d9488] to-[#115e59]",
    items: ["Change requests", "Impact assessment", "Approval workflow"],
  },
  {
    id: 4,
    title: "Project Financials",
    description: "Live project economics: planned revenue, delivered value, billed amount, cost, and margin tracking.",
    icon: "04",
    accent: "from-[#e89b0c] to-[#0d9488]",
    items: ["Revenue tracking", "Cost monitoring", "Margin analysis"],
  },
];

const strengths = [
  {
    label: "MARGIN",
    title: "Protect Profits",
    description: "Track every change, bill for scope creep, and show real project economics.",
  },
  {
    label: "ALIGN",
    title: "Team Coordination",
    description: "Connect sales promises with delivery reality, so everyone knows scope and budget.",
  },
  {
    label: "SCALE",
    title: "Repeat Revenue",
    description: "Manage client relationships, upsell opportunities, and expansion projects.",
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
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative overflow-hidden bg-[#081827] px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-28"
      >
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(47,142,232,0.28),transparent_44%,rgba(20,184,166,0.18))] bg-[length:180%_180%]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a7f3e1]">
              Software Project CRM
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Complete project management for software agencies.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              From deal to delivery to revenue — one CRM that manages the entire lifecycle of software projects.
            </p>
          </motion.div>

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
                className="rounded-lg border border-white/12 bg-white/[0.08] px-5 py-4 backdrop-blur"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Grid */}
      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              Core Modules
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Everything software agencies need to manage projects profitably.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[#10294b] px-5 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-[#1b5aa2]"
          >
            Discuss a project
            <span className="ml-2" aria-hidden="true">-&gt;</span>
          </Link>
        </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                className="group overflow-hidden rounded-lg border border-slate-200/80 bg-white text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all"
              >
                <div className={`h-1.5 bg-gradient-to-r ${solution.accent}`} />
                <div className="p-7">
                  <div className="mb-6 flex flex-col items-center justify-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${solution.accent} text-sm font-bold text-white shadow-elevation-1`}>
                      {solution.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      PairScale
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                    {solution.title}
                  </h3>
                  <p className="mb-6 min-h-28 text-sm leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <ul className="space-y-3 border-t border-slate-100 pt-5">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center justify-center gap-3 text-sm font-medium text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 px-7 py-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center text-sm font-bold text-[#0d9488] transition group-hover:text-[#10294b]"
                  >
                    Learn more
                    <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white" animate={false}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              Why Our CRM
            </p>
          <motion.h2
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-[#10294b]"
          >
            Built for software project businesses.
          </motion.h2>
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
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                className="rounded-lg border border-slate-200 bg-[#f8fafc] p-7 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-5 inline-flex rounded-full bg-[#ecfdf9] px-3 py-1 text-xs font-bold tracking-[0.14em] text-[#0d9488]">
                  {strength.label}
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                  {strength.title}
                </h3>
                <p className="leading-7 text-slate-600">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-14 rounded-lg bg-[#10294b] p-6 text-white shadow-[0_22px_56px_rgba(8,24,39,0.22)] sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div>
                <h3 className="text-2xl font-display font-bold">
                  Ready to manage software projects like a pro?
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  See how our CRM can protect your margins and align your sales and delivery teams.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-[#14b8a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]"
              >
                Start a conversation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
      </Section>
    </Layout>
  );
}


