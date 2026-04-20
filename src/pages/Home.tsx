import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
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

const services = [
  {
    id: "01",
    title: "Deal & Scope Capture",
    description: "Capture structured project scope during sales: features, milestones, estimates, assumptions, and timeline.",
  },
  {
    id: "02",
    title: "Delivery Tracking",
    description: "Track execution vs plan: milestone status, progress, delays, and blockers in real-time.",
  },
  {
    id: "03",
    title: "Scope Change Management",
    description: "Log and monetize changes: change requests, effort impact, cost impact, approval, and billing status.",
  },
  {
    id: "04",
    title: "Project Financials",
    description: "Live project economics: planned revenue, delivered value, billed amount, cost, and margin tracking.",
  },
];

const features = [
  "Protect margins",
  "Stop free work",
  "Align sales & delivery",
  "Improve billing",
  "Increase repeat revenue",
];

export default function Home() {
  return (
    <Layout>
      <motion.section
        className="relative flex min-h-[calc(100vh-74px)] items-center overflow-hidden bg-[#081827] px-4 py-20 text-white sm:px-6"
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(47,142,232,0.30),transparent_42%,rgba(20,184,166,0.20))] bg-[length:180%_180%]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a7f3e1]"
          >
            Software Project CRM
          </motion.p>
          <motion.h1
            className="mx-auto max-w-4xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            A CRM built specifically for software companies.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
            variants={itemVariants}
          >
            Connect sales, project delivery, scope, and revenue in one system. Manage the entire lifecycle of software projects — from deal to delivery to revenue.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-lg bg-[#14b8a6] px-6 py-3 font-bold text-white shadow-[0_16px_38px_rgba(13,148,136,0.30)] transition hover:bg-[#0d9488]"
            >
              Explore solutions
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Start a project
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        <motion.div
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <motion.p
              className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Core Modules
            </motion.p>
            <motion.h2
              className="max-w-2xl text-3xl font-display font-bold text-[#10294b] sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Everything you need to manage software projects end-to-end.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/solutions"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#10294b] px-5 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-[#1b5aa2]"
            >
              View all solutions
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-sm font-bold text-white">
                {service.id}
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                {service.title}
              </h3>
              <p className="leading-7 text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white" animate={false}>
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Value Proposition
          </motion.p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Stop losing money on software projects.
          </h2>
          <motion.p
            className="mt-4 leading-7 text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Connect sales, scope, delivery, and billing in one system. Prevent scope creep, align teams, and maximize margins on every project.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              whileHover={{ x: 4, backgroundColor: "#ffffff" }}
              transition={{ duration: 0.25 }}
              className="rounded-lg border border-slate-200 bg-[#f8fafc] p-5 text-center text-sm font-bold text-[#10294b]"
            >
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#14b8a6]" />
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-[#081827] text-white" animate={false}>
        <motion.div
          className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_56px_rgba(8,24,39,0.28)] backdrop-blur sm:p-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold">
                Ready to transform your software projects?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Join software agencies using our CRM to protect margins, align teams, and turn every deal into profitable delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-[#14b8a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]"
              >
                Contact us
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
