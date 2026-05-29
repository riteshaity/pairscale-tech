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

const reasons = [
  {
    label: "01",
    title: "Meaningful Work",
    description: "Build real products across web, AI, data, and connected systems for teams with practical goals.",
    gradient: "from-[#2f8ee8] to-[#14b8a6]",
  },
  {
    label: "02",
    title: "Room to Grow",
    description: "Learn through ownership, thoughtful feedback, and projects that stretch both product and engineering judgment.",
    gradient: "from-[#14b8a6] to-[#0d9488]",
  },
  {
    label: "03",
    title: "Calm Collaboration",
    description: "Work with people who value clarity, accountability, and polished delivery over chaos.",
    gradient: "from-[#0d9488] to-[#2f8ee8]",
  },
];

export default function Careers() {
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
              Careers
            </span>
            <h1 className="mx-auto mb-6 mt-5 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Join a team that values{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                craft, clarity, and momentum.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Help build premium digital systems with a team that cares about thoughtful work, practical outcomes, and steady growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Why Join Us ───────────────────────────────────────────── */}
      <Section className="bg-[#f6f9fc]" animate={false}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Why join us
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            A workplace for people who like{" "}
            <span className="bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6] bg-clip-text text-transparent">
              building things properly.
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
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${reason.gradient}`} />
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} text-sm font-bold text-white shadow-md`}>
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

      {/* ── Open Roles ────────────────────────────────────────────── */}
      <Section className="bg-white" animate={false}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0d9488]">
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
          className="mx-auto max-w-2xl space-y-4"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(8,24,39,0.12)" }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-all"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6]" />
            <div className="p-8">
              {/* Header */}
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#10294b]">
                    LinkedIn Outreach Sales Intern
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#ecfdf9] px-3 py-1 text-xs font-bold text-[#0d9488]">
                      Internship
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-bold text-[#1f70c7]">
                      Remote
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#14b8a6]">$55–75</div>
                  <div className="text-xs text-slate-500">per hour</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {[
                      "LinkedIn outreach to software agencies",
                      "Lead research and qualification",
                      "Schedule discovery calls and demos",
                      "Track activities in CRM system",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#14b8a6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    About the role
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    Building CRM for software agencies to protect margins and align sales with delivery. You'll be on the front lines helping us reach our ideal customers.
                  </p>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Contact</p>
                    <a
                      href="mailto:sravyajakkula11@gmail.com"
                      className="mt-1 block text-sm font-medium text-[#0d9488] hover:underline"
                    >
                      sravyajakkula11@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <a
                href="mailto:sravyajakkula11@gmail.com?subject=Application for LinkedIn Outreach Sales Intern&body=Hi, I'm interested in the LinkedIn Outreach Sales Intern position."
                className="group inline-flex items-center gap-2 rounded-xl bg-[#10294b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1b5aa2]"
              >
                Apply now
                <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section className="bg-[#030711] text-white" animate={false}>
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#10294b]/80 to-[#081827] p-10 shadow-[0_24px_64px_rgba(8,24,39,0.50)]"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#14b8a6]/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/3 rounded-full bg-[#2f8ee8]/12 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-display font-bold">
              Think you would be a{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">
                strong fit?
              </span>
            </h2>
            <p className="mx-auto max-w-xl leading-7 text-slate-300">
              Send us a note with your role interest and a few examples of your work.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-3.5 font-bold text-white shadow-[0_12px_32px_rgba(13,148,136,0.32)] transition hover:bg-[#0d9488]"
            >
              Contact recruiting
              <ArrowIcon />
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
