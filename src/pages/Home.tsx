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
    title: "Web Development",
    description: "Modern web products with fast interfaces, clean architecture, and room to scale.",
  },
  {
    id: "02",
    title: "AI Solutions",
    description: "Useful AI workflows that automate repeatable work and support better decisions.",
  },
  {
    id: "03",
    title: "Data Analytics",
    description: "Dashboards and pipelines that turn business data into confident action.",
  },
  {
    id: "04",
    title: "IoT Monitoring",
    description: "Connected systems for real-time visibility, alerts, and operational control.",
  },
];

const features = [
  "Performance-led engineering",
  "Secure architecture",
  "Clear product strategy",
  "Scalable delivery",
  "Business-focused metrics",
  "Long-term support",
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
            PairScale Tech
          </motion.p>
          <motion.h1
            className="mx-auto max-w-4xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Build sharper digital systems for the next stage of growth.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
            variants={itemVariants}
          >
            We help teams turn web, AI, analytics, and connected operations into practical technology that feels refined, reliable, and ready to scale.
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
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              What we build
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Complete technology support across product, data, and operations.
            </h2>
          </div>
          <Link
            to="/solutions"
          className="inline-flex w-fit items-center justify-center rounded-lg bg-[#10294b] px-5 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-[#1b5aa2]"
          >
            View all solutions
          </Link>
        </div>

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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            Why teams choose us
          </p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            Premium work is calm, clear, and dependable.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            We keep delivery focused on the parts that make products feel better in real use: speed, structure, security, and measurable business value.
          </p>
        </div>

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
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_56px_rgba(8,24,39,0.28)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold">
                Ready to shape your next digital system?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
                Bring us the business goal. We will help translate it into a practical, polished technology roadmap.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#14b8a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]"
            >
              Contact us
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
