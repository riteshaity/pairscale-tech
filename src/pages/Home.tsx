import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/ui/Section";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 14 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Icon = ({ d, className = "h-3.5 w-3.5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const ICONS = {
  dashboard:  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  projects:   "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  deals:      "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  changes:    "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  financials: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  reports:    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  search:     "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  bell:       "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  plus:       "M12 4v16m8-8H4",
  lock:       "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  check:      "M5 13l4 4L19 7",
};

function DashboardMockup() {
  const nav = [
    { label: "Dashboard",    icon: ICONS.dashboard,  active: false, badge: 0 },
    { label: "Projects",     icon: ICONS.projects,   active: true,  badge: 0 },
    { label: "Deals",        icon: ICONS.deals,      active: false, badge: 0 },
    { label: "Scope Changes",icon: ICONS.changes,    active: false, badge: 3 },
    { label: "Financials",   icon: ICONS.financials, active: false, badge: 0 },
    { label: "Reports",      icon: ICONS.reports,    active: false, badge: 0 },
  ];
  const kpis = [
    { label: "Active Projects", value: "24", delta: "+3 this month",     dc: "text-emerald-600 bg-emerald-50", icon: ICONS.projects   },
    { label: "Billed (MTD)",    value: "$142K", delta: "↑ 18% vs last",  dc: "text-[#1f70c7] bg-[#eff8ff]",   icon: ICONS.financials },
    { label: "Avg Margin",      value: "34%",  delta: "↑ 4 pts vs Q3",   dc: "text-[#0d9488] bg-[#ecfdf9]",   icon: ICONS.reports    },
    { label: "Pending Changes", value: "3",    delta: "Awaiting approval",dc: "text-amber-600 bg-amber-50",    icon: ICONS.changes    },
  ];
  const projects = [
    { name: "Fintech Dashboard",  client: "Apex Corp",   stage: "Development", budget: "$85K", spent: "$58K", margin: "32%", status: "On Track", sc: "text-emerald-600 bg-emerald-50" },
    { name: "E-Commerce Rebuild", client: "ShopNow Inc", stage: "QA & Testing",budget: "$60K", spent: "$48K", margin: "28%", status: "At Risk",  sc: "text-amber-600 bg-amber-50"    },
    { name: "Data Pipeline v2",   client: "DataFlow",    stage: "Delivered",   budget: "$40K", spent: "$23K", margin: "41%", status: "Complete", sc: "text-[#0d9488] bg-[#ecfdf9]"   },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_32px_80px_rgba(0,0,0,0.28)]">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-0.5 text-[11px] text-slate-400">
          <Icon d={ICONS.lock} className="h-2.5 w-2.5" />
          app.pairscale.io/projects
        </div>
      </div>
      <div className="flex" style={{ height: 320 }}>
        <div className="flex w-44 flex-shrink-0 flex-col border-r border-slate-100 bg-[#f8fafc]">
          <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-[11px] font-bold text-white shadow-sm">PS</div>
            <span className="text-sm font-bold text-[#10294b]">PairScale</span>
          </div>
          <nav className="flex-1 space-y-0.5 p-2 pt-3">
            {nav.map((item) => (
              <div key={item.label} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${item.active ? "bg-[#eff8ff] text-[#1f70c7]" : "text-slate-500"}`}>
                <Icon d={item.icon} className={`h-3.5 w-3.5 flex-shrink-0 ${item.active ? "text-[#2f8ee8]" : "text-slate-400"}`} />
                <span className="flex-1 truncate">{item.label}</span>
                {item.badge > 0 && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-[9px] font-bold text-amber-600">{item.badge}</span>}
              </div>
            ))}
          </nav>
          <div className="border-t border-slate-100 p-3">
            <div className="flex items-center gap-2 rounded-lg px-1.5 py-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-[9px] font-bold text-white">JD</div>
              <div className="min-w-0">
                <div className="truncate text-[10px] font-semibold text-[#10294b]">John Doe</div>
                <div className="text-[9px] text-slate-400">Admin · Apex</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col bg-white">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-100 px-4 py-2.5">
            <div>
              <div className="text-sm font-bold text-[#10294b]">Projects</div>
              <div className="text-[10px] text-slate-400">24 active · 3 at risk · Q4 2024</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-400">
                <Icon d={ICONS.search} className="h-3 w-3" />Search
              </div>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-400">
                <Icon d={ICONS.bell} className="h-3.5 w-3.5" />
              </button>
              <button className="flex h-7 items-center gap-1 rounded-lg bg-gradient-to-r from-[#1f70c7] to-[#0d9488] px-2.5 text-[10px] font-bold text-white shadow-sm">
                <Icon d={ICONS.plus} className="h-3 w-3" />New
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden p-2.5">
            <div className="mb-2.5 grid grid-cols-4 gap-1.5">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-lg border border-slate-100 bg-white p-2 shadow-[0_1px_4px_rgba(15,23,42,0.05)]">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-slate-400 leading-tight">{k.label}</span>
                    <Icon d={k.icon} className="h-2.5 w-2.5 text-slate-300" />
                  </div>
                  <div className="text-sm font-bold text-[#10294b]">{k.value}</div>
                  <div className={`mt-1 inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${k.dc}`}>{k.delta}</div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <div className="grid items-center border-b border-slate-100 bg-slate-50 px-3 py-2" style={{ gridTemplateColumns: "1.6fr 0.9fr 0.9fr 0.65fr 0.65fr 0.7fr" }}>
                {["Project", "Client", "Stage", "Budget", "Margin", "Status"].map((h) => (
                  <span key={h} className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{h}</span>
                ))}
              </div>
              {projects.map((p, i) => (
                <div key={p.name} className={`grid items-center px-3 py-2 text-[11px] ${i < projects.length - 1 ? "border-b border-slate-50" : ""} hover:bg-slate-50/70`} style={{ gridTemplateColumns: "1.6fr 0.9fr 0.9fr 0.65fr 0.65fr 0.7fr" }}>
                  <div>
                    <div className="font-semibold text-[#10294b]">{p.name}</div>
                    <div className="text-[9px] text-slate-400">{p.spent} of {p.budget} spent</div>
                  </div>
                  <div className="text-slate-500">{p.client}</div>
                  <div><span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">{p.stage}</span></div>
                  <div className="font-medium text-[#10294b]">{p.budget}</div>
                  <div className="font-semibold text-[#0d9488]">{p.margin}</div>
                  <div><span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${p.sc}`}>{p.status}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const outcomes = [
  "Protect your margins on every project",
  "Stop giving away work for free",
  "Align sales promises with delivery reality",
  "Automate change order billing",
  "Track profitability in real time",
];

export default function Home() {
  return (
    <Layout>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#030711] px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 60% 75% at 85% 40%, rgba(47,142,232,0.18) 0%, transparent 60%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 50% at 15% 60%, rgba(20,184,166,0.07) 0%, transparent 55%)"
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 85% 75% at 80% 25%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 80% 25%, black, transparent)",
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Badge — centered above split */}
          <motion.div
            className="flex justify-center pt-10 lg:pt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2f8ee8]/35 bg-gradient-to-r from-[#2f8ee8]/25 to-[#14b8a6]/20 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a7f3e1] shadow-[0_0_24px_rgba(47,142,232,0.22)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14b8a6]" />
              All-in-One CRM Tool for Software Agencies
            </span>
          </motion.div>

          <div className="grid min-h-[600px] items-center gap-10 pt-1 pb-20 lg:grid-cols-[5fr_4fr] lg:gap-8 lg:pb-24">

            {/* ── Left: Text content ── */}
            <div className="flex flex-col items-start">
              <motion.h1
                className="text-5xl font-display font-bold leading-[1.08] tracking-tight text-white sm:text-[3.5rem] lg:text-6xl"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              >
                The CRM that doesn't{" "}
                <span className="bg-gradient-to-r from-[#57aef7] via-[#38b2fa] to-[#2dd4b8] bg-clip-text text-transparent">
                  stop at the contract.
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg leading-8 text-white/50"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              >
                The only CRM that connects proposals, scope, delivery, and billing in one place — so software agencies stop leaking margin and start scaling profitably.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#030711] shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition hover:bg-white/92">
                  Get early access
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-7 py-3.5 text-sm font-semibold text-white/65 transition hover:border-white/25 hover:text-white">
                  See the platform
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 flex items-center gap-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  { n: 50, s: "+", l: "Agencies onboarded" },
                  { n: 7,  s: "",  l: "Core modules"       },
                  { n: 100,s: "%", l: "Project visibility"  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`text-left ${i > 0 ? "border-l border-white/10 pl-7 ml-7" : ""}`}
                  >
                    <div className="text-xl font-bold text-white tabular-nums">
                      <AnimatedCounter to={stat.n} suffix={stat.s} />
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/35">{stat.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Dashboard ── */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 48, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {/* Ambient glow behind the card */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse 75% 65% at 55% 45%, rgba(47,142,232,0.22) 0%, transparent 70%)",
                }}
              />
              <DashboardMockup />
              {/* Fade bottom edge into hero bg */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-xl bg-gradient-to-t from-[#030711]/90 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══ PLATFORM BENTO ═══ */}
      <Section className="bg-white" animate={false}>
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0d9488]">Platform</p>
          <h2 className="text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
            One system for every stage{" "}
            <span className="bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6] bg-clip-text text-transparent">
              of the project.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500">
            From first proposal to final invoice — PairScale connects every part of how software agencies work.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">

          {/* ── Card 1: Deal & Scope (large, col-span-2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6]" />
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2f8ee8]">01 · Scope</span>
                <h3 className="mt-1 text-lg font-display font-bold text-[#10294b]">Deal & Scope Capture</h3>
                <p className="mt-0.5 text-sm text-slate-500">Turn proposals into locked, structured scope before any work begins.</p>
              </div>
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2f8ee8] to-[#14b8a6] text-white shadow-md">
                <Icon d={ICONS.projects} className="h-4 w-4" />
              </div>
            </div>
            {/* Mini scope table */}
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-[#f8fafc]">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scope of Work — Apex Corp</span>
                <span className="text-[10px] font-semibold text-[#10294b]">$85,000 · 16 wks</span>
              </div>
              <div>
                {[
                  { feature: "User Authentication",  hrs: "40h", cost: "$4,000", done: true  },
                  { feature: "Admin Dashboard",       hrs: "80h", cost: "$8,000", done: true  },
                  { feature: "Payment Integration",   hrs: "60h", cost: "$6,000", done: false },
                  { feature: "Mobile API Layer",      hrs: "40h", cost: "$4,000", done: false },
                ].map((row, idx) => (
                  <div key={row.feature} className={`flex items-center gap-3 px-4 py-2 ${idx < 3 ? "border-b border-slate-50" : ""}`}>
                    <div className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${row.done ? "border-[#14b8a6] bg-[#14b8a6]" : "border-slate-300 bg-white"}`}>
                      {row.done && <Icon d={ICONS.check} className="h-2.5 w-2.5 text-white" />}
                    </div>
                    <span className={`flex-1 text-[11px] font-medium ${row.done ? "text-slate-400 line-through" : "text-[#10294b]"}`}>{row.feature}</span>
                    <span className="text-[10px] text-slate-400">{row.hrs}</span>
                    <span className="w-14 text-right text-[11px] font-semibold text-[#10294b]">{row.cost}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-2">
                <span className="text-[10px] text-slate-400">2 of 4 items complete · $12,000 delivered</span>
                <span className="text-[11px] font-bold text-[#10294b]">Total: $22,000</span>
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Delivery Tracking (small) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#14b8a6] to-[#0d9488]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#14b8a6]">02 · Delivery</span>
            <h3 className="mb-1 mt-1 text-lg font-display font-bold text-[#10294b]">Delivery Tracking</h3>
            <p className="mb-5 text-sm text-slate-500">Track milestones vs plan in real time.</p>
            <div className="space-y-3">
              {[
                { label: "Discovery & Design",   wk: "Wk 2",  done: true,  warn: false, prog: 0  },
                { label: "Backend Development",  wk: "Wk 5",  done: true,  warn: false, prog: 0  },
                { label: "Frontend Integration", wk: "Wk 7 — 68%", done: false, warn: false, prog: 68 },
                { label: "QA & Testing",         wk: "At Risk", done: false, warn: true,  prog: 0  },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                    m.done ? "border-[#14b8a6] bg-[#14b8a6]" : m.warn ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
                  }`}>
                    {m.done  && <Icon d={ICONS.check} className="h-3 w-3 text-white" />}
                    {m.warn  && <span className="text-[8px] font-bold text-amber-500">!</span>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-[11px] font-medium ${m.done ? "text-slate-400" : "text-[#10294b]"}`}>{m.label}</div>
                    {m.prog > 0 && (
                      <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#2f8ee8] to-[#14b8a6]" style={{ width: `${m.prog}%` }} />
                      </div>
                    )}
                  </div>
                  <span className={`flex-shrink-0 text-[9px] font-semibold ${m.done ? "text-slate-300" : m.warn ? "text-amber-500" : "text-[#0d9488]"}`}>{m.wk}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 3: Change Management (small) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0d9488] to-[#2f8ee8]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0d9488]">03 · Changes</span>
            <h3 className="mb-1 mt-1 text-lg font-display font-bold text-[#10294b]">Change Management</h3>
            <p className="mb-4 text-sm text-slate-500">Log scope changes and bill for every one.</p>
            <div className="space-y-2.5">
              {/* Pending change */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3.5">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-amber-600">Pending Approval · CR #04</span>
                </div>
                <div className="mb-2 text-[11px] font-semibold text-[#10294b]">"Add Stripe payment gateway"</div>
                <div className="mb-3 flex gap-4 text-[10px]">
                  <span className="text-slate-500">+32 hrs</span>
                  <span className="font-bold text-amber-600">+$3,200</span>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-md bg-[#14b8a6] px-2.5 py-1 text-[9px] font-bold text-white">Approve</span>
                  <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-bold text-slate-500">Decline</span>
                </div>
              </div>
              {/* Approved change */}
              <div className="rounded-xl border border-[#d1fae5] bg-[#f0fdf9] p-3">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-[#0d9488]">Approved · CR #03</span>
                </div>
                <div className="text-[11px] font-semibold text-[#10294b]">"OAuth2 SSO integration"</div>
                <div className="mt-1 text-[10px] text-slate-500">+24 hrs · <span className="font-semibold text-[#0d9488]">+$2,400 billed</span></div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 4: Project Financials (large, col-span-2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#e89b0c] to-[#0d9488]" />
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e89b0c]">04 · Financials</span>
                <h3 className="mt-1 text-lg font-display font-bold text-[#10294b]">Project Financials</h3>
                <p className="mt-0.5 text-sm text-slate-500">Live P&L, billed vs unbilled, and margin per project — updated in real time.</p>
              </div>
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e89b0c] to-[#0d9488] text-white shadow-md">
                <Icon d={ICONS.financials} className="h-4 w-4" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* P&L card */}
              <div className="overflow-hidden rounded-xl border border-slate-100 bg-[#f8fafc]">
                <div className="border-b border-slate-100 px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Fintech Dashboard · Apex Corp</span>
                </div>
                <div className="divide-y divide-slate-50 px-4">
                  {[
                    { label: "Contract Value",  value: "$85,000", sub: "",               col: "text-[#10294b]"  },
                    { label: "Cost to Date",    value: "$39,200", sub: "46% of budget",   col: "text-slate-600"  },
                    { label: "Gross Margin",    value: "34.2%",   sub: "↑ target 30%",    col: "text-[#0d9488]" },
                    { label: "Unbilled Work",   value: "$23,000", sub: "Needs invoicing",  col: "text-amber-600" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between py-2">
                      <span className="text-[10px] text-slate-500">{r.label}</span>
                      <div className="text-right">
                        <div className={`text-[12px] font-bold ${r.col}`}>{r.value}</div>
                        {r.sub && <div className="text-[9px] text-slate-400">{r.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Billing card */}
              <div className="overflow-hidden rounded-xl border border-slate-100 bg-[#f8fafc]">
                <div className="border-b border-slate-100 px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Billing Summary</span>
                </div>
                <div className="space-y-4 p-4">
                  {[
                    { label: "Billed",   value: "$62,000", w: "73%", col: "from-[#2f8ee8] to-[#14b8a6]" },
                    { label: "Unbilled", value: "$23,000", w: "27%", col: "from-amber-400 to-amber-300"  },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-slate-500">{b.label}</span>
                        <span className="font-semibold text-[#10294b]">{b.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full rounded-full bg-gradient-to-r ${b.col}`} style={{ width: b.w }} />
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[10px] text-slate-500">Revenue recognized</span>
                    <span className="rounded-full bg-[#ecfdf9] px-2 py-0.5 text-[9px] font-bold text-[#0d9488]">On Track ↑</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>


      {/* ═══ VALUE PROP ═══ */}
      <Section className="overflow-hidden bg-[#f6f9fc]" animate={false}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0d9488]">Why PairScale</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-[#10294b] sm:text-4xl">
              Stop leaving money on the table.
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              Most software agencies lose 20–30% of project value to untracked scope, unbilled changes, and misaligned expectations. PairScale closes that gap for good.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#10294b] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(16,41,75,0.22)] transition hover:bg-[#1b5aa2] hover:shadow-[0_12px_32px_rgba(16,41,75,0.32)]">
              Book a demo
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
          <div className="flex flex-col gap-2.5">
            {outcomes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all duration-200 hover:border-[#14b8a6]/35 hover:shadow-[0_8px_24px_rgba(20,184,166,0.08)]"
              >
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#ecfdf9]">
                  <Icon d={ICONS.check} className="h-4 w-4 text-[#0d9488]" />
                </div>
                <span className="font-medium text-[#10294b]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>


      {/* ═══ CTA ═══ */}
      <Section className="bg-[#030711] text-white" animate={false}>
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/8 p-14 text-center"
          style={{ background: "linear-gradient(135deg, rgba(12,28,54,0.95) 0%, rgba(3,7,17,0.98) 100%)" }}
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(47,142,232,0.13) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold sm:text-4xl">
              Ready to protect your{" "}
              <span className="bg-gradient-to-r from-[#57aef7] to-[#2dd4b8] bg-clip-text text-transparent">margins?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/50">
              Join software agencies using PairScale to align sales, delivery, and billing — and turn every project into profitable work.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#030711] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_rgba(0,0,0,0.5)] transition hover:bg-white/92">
                Get started free
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 text-sm font-semibold text-white/65 transition hover:border-white/25 hover:text-white">
                Explore the platform
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>

    </Layout>
  );
}
