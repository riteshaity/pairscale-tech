import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";

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

const values = [
  {
    label: "01",
    title: "Project-First Design",
    description: "Built for how software agencies actually work — deals that become projects, not just sales.",
  },
  {
    label: "02",
    title: "Margin Protection",
    description: "Every feature designed to prevent scope creep, track changes, and show real project economics.",
  },
  {
    label: "03",
    title: "Team Alignment",
    description: "Connect sales promises with delivery reality, so everyone knows scope, timeline, and budget.",
  },
];

const founders = [
  {
    name: "Jakkula Sravya",
    role: "Co-founder, CEO",
    initials: "JS",
  },
  {
    name: "Aity Ritesh Raj",
    role: "Co-founder, CTO",
    initials: "AR",
  },
  {
    name: "Liam Adams",
    role: "COO",
    initials: "LA",
  },
];

export default function About() {
  return (
    <Layout>
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

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a7f3e1]">
              About PairScale Tech
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Building the CRM software companies actually need.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              We saw the disconnect between sales, delivery, and revenue in software agencies. So we built a CRM that manages the entire project lifecycle — from deal to delivery to profit.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 text-center md:grid-cols-[1.05fr_0.95fr] md:items-center"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              Our Mission
            </p>
            <h2 className="mb-6 text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Solving the software project management crisis.
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
            whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all sm:p-9"
          >
            <div className="text-5xl font-display font-bold text-[#10294b]">50+</div>
            <p className="mt-3 text-lg font-semibold text-slate-700">
              Software agencies using our CRM
            </p>
            <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">
              {["Scope Protection", "Margin Tracking", "Delivery Alignment"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Our Team
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Founders with software agency experience.
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
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-lg font-bold text-white">
                {founder.initials}
              </div>
              <h3 className="mb-2 text-xl font-display font-bold text-[#10294b]">
                {founder.name}
              </h3>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0d9488]">
                {founder.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white" animate={false}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Our Approach
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Principles that make our CRM different.
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
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200 bg-[#f8fafc] p-7 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-sm font-bold text-white">
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

      <Section className="bg-[#081827] text-white" animate={false}>
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_56px_rgba(8,24,39,0.28)] backdrop-blur sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center md:items-center md:justify-center">
            <div>
              <h2 className="text-3xl font-display font-bold">
                Ready to stop losing money on software projects?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Join the software agencies protecting margins and scaling profitably with our CRM.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#14b8a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]"
            >
              Get started
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
