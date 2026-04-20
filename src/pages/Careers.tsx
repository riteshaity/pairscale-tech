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

const reasons = [
  {
    label: "01",
    title: "Meaningful Work",
    description: "Build real products across web, AI, data, and connected systems for teams with practical goals.",
  },
  {
    label: "02",
    title: "Room to Grow",
    description: "Learn through ownership, thoughtful feedback, and projects that stretch both product and engineering judgment.",
  },
  {
    label: "03",
    title: "Calm Collaboration",
    description: "Work with people who value clarity, accountability, and polished delivery over chaos.",
  },
];

const benefits = [
  { label: "PAY", title: "Competitive Salary", description: "Compensation designed to recognize strong craft and ownership." },
  { label: "CARE", title: "Health Insurance", description: "Health and wellness coverage for long-term sustainability." },
  { label: "LEARN", title: "Learning Budget", description: "Support for courses, books, and skill development." },
  { label: "HYBRID", title: "Remote Options", description: "Flexible work arrangements for focused delivery." },
  { label: "TEAM", title: "Team Events", description: "Regular moments to connect, review, and celebrate." },
  { label: "PTO", title: "Vacation Days", description: "Time away to rest properly and return sharp." },
];

const jobs = [
  { position: "Senior Full Stack Developer", location: "San Francisco, CA", type: "Full time" },
  { position: "AI/ML Engineer", location: "Remote", type: "Full time" },
  { position: "UX/UI Designer", location: "Austin, TX", type: "Contract" },
  { position: "Product Manager", location: "San Francisco, CA", type: "Full time" },
];

export default function Careers() {
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
              Careers
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Join a team that values craft, clarity, and momentum.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Help build premium digital systems with a team that cares about thoughtful work, practical outcomes, and steady growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Why join us
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            A workplace for people who like building things properly.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-sm font-bold text-white">
                {reason.label}
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-[#10294b]">
                {reason.title}
              </h3>
              <p className="leading-7 text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white" animate={false}>
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              Benefits
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Support that helps people do strong work sustainably.
            </h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="rounded-lg border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                {benefit.label}
              </div>
              <h3 className="mb-2 text-lg font-display font-bold text-[#10294b]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Open roles
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Current opportunities
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.position}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.005, boxShadow: "0 18px 40px rgba(8,24,39,0.10)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all"
            >
              <div className="flex flex-col items-center gap-5 text-center">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#10294b]">
                    {job.position}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {job.location} - {job.type}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#10294b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1b5aa2] sm:w-auto"
                >
                  Apply
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-[#081827] text-white" animate={false}>
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_56px_rgba(8,24,39,0.28)] backdrop-blur sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h2 className="text-3xl font-display font-bold">
                Think you would be a strong fit?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Send us a note with your role interest and a few examples of your work.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#14b8a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]"
            >
              Contact recruiting
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
