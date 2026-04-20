import { useState } from "react";
import { motion } from "framer-motion";
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

const contactCards = [
  {
    label: "EMAIL",
    title: "Email",
    value: "contact@pairscale.com",
  },
  {
    label: "PHONE",
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    label: "VISIT",
    title: "Address",
    value: "123 Tech Street, Silicon Valley, CA",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              Contact
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-display font-bold leading-tight text-white sm:text-6xl">
              Tell us what you want to build next.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Share your goals, challenges, or early idea. We will help you shape the right next step with clarity.
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
          className="mb-12 grid gap-6 md:grid-cols-3"
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 54px rgba(8,24,39,0.16)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                {card.label}
              </div>
              <h3 className="mb-2 text-xl font-display font-bold text-[#10294b]">
                {card.title}
              </h3>
              <p className="leading-7 text-slate-600">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 text-center lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-lg bg-[#10294b] p-7 text-center text-white shadow-[0_22px_56px_rgba(8,24,39,0.18)] sm:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#a7f3e1]">
              Start here
            </p>
            <h2 className="text-3xl font-display font-bold">
              A useful first conversation is simple.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Tell us what you are trying to improve, what already exists, and what timeline matters. We will respond with a clear next step.
            </p>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              {["Business goal", "Current system", "Timeline or urgency"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3 text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200/80 bg-white p-6 text-center shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
          >
            <h2 className="mb-8 text-2xl font-display font-bold text-[#10294b] sm:text-3xl">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-center font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center transition focus:border-[#14b8a6] focus:outline-none focus:ring-4 focus:ring-[#14b8a6]/15"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-center font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center transition focus:border-[#14b8a6] focus:outline-none focus:ring-4 focus:ring-[#14b8a6]/15"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-center font-semibold text-slate-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center transition focus:border-[#14b8a6] focus:outline-none focus:ring-4 focus:ring-[#14b8a6]/15"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="mb-2 block text-center font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-center transition focus:border-[#14b8a6] focus:outline-none focus:ring-4 focus:ring-[#14b8a6]/15"
                  placeholder="A little context about your project..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.012, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#1f70c7] to-[#0d9488] px-6 py-3 font-bold text-white shadow-[0_16px_38px_rgba(13,148,136,0.24)] transition hover:shadow-[0_18px_44px_rgba(13,148,136,0.32)]"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
