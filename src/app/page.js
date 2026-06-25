'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Cpu,
  Zap,
  Terminal,
  Lock,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Layers,
  Users,
  Award,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

// --- ANIMATION CONFIGS ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// --- MOCK DATA ---
const logos = ['Vercel', 'Linear', 'Stripe', 'Trellix', 'Arc', 'Datadog'];

const statistics = [
  { value: '99.99%', label: 'Anomalies Detected' },
  { value: '10x', label: 'Faster Deployment' },
  { value: '24/7', label: 'Autonomous SecOps' },
  { value: '< 12ms', label: 'Global Edge Latency' },
];

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: 'Autonomous LLM Core',
    description:
      'Self-optimizing neural networks tailored specifically for enterprise infrastructure mapping.',
  },
  {
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    title: 'Zero-Trust Architecture',
    description:
      'Cryptographically secured data pipelines ensuring your private data never trains public models.',
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: 'Real-time Vector Analysis',
    description:
      'Sub-millisecond processing speeds for infinite token telemetry pipelines at scale.',
  },
];

const testimonials = [
  {
    quote:
      "This platform single-handedly transformed our cybersecurity operations. The predictive AI engine identified vulnerabilities we hadn't even categorized yet.",
    author: 'Sarah Jenkins',
    role: 'Chief Information Security Officer',
    company: 'Acme Enterprise',
  },
  {
    quote:
      "The interface feels like it's from 5 years in the future. Clean architecture, incredible API execution speeds, and absolute data compliance guarantees.",
    author: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'Synthetix Global',
  },
];

export default function LandingPage() {
  return (
    <div className="bg-[#020204] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      {/* --- AURORA GLOW EFFECTS --- */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[50%] left-[15%] w-[700px] h-[700px] rounded-full bg-purple-500/5 blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none mix-blend-screen" />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020204]/60 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-4 h-4 text-black font-bold" />
            </div>
            <span className="font-bold tracking-tight text-lg bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              AURA.AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#showcase" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a
              href="#testimonials"
              className="hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
              Sign In
            </button>
            <button className="bg-white text-black font-semibold text-sm px-4 py-2 rounded-full hover:bg-slate-200 transition shadow-md shadow-white/10 flex items-center gap-1">
              Deploy Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center z-10">
        <motion.div
          {...fadeIn}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-lg"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            Introducing Aura V2.6 Enterprise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-8 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Next-Generation AI Infrastructure <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Secured for Enterprise Scale.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Automate security compliance, compute hyper-dimensional telemetry, and
          unify distributed intelligence layers under a localized zero-trust
          ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center"
        >
          <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-black font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all duration-300 group flex items-center justify-center gap-2">
            Request Core Access
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition backdrop-blur-lg">
            Read Security Protocol
          </button>
        </motion.div>
      </section>

      {/* --- TRUSTED BY LOGOS --- */}
      <section className="border-y border-white/5 bg-white/[0.01] backdrop-blur-md py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">
            Powering Mission-Critical Teams Globally
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale contrast-200">
            {logos.map((logo, idx) => (
              <span
                key={idx}
                className="text-xl font-bold tracking-tight text-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS GRID --- */}
      <section
        id="features"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Engineered for Hyper-Compliance
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No telemetry data leakage. Localized clusters. Unlimited
            scalability.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feat.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- AI SHOWCASE BANNER --- */}
      <section id="showcase" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 md:p-14 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent border border-white/5 relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-300 tracking-wider uppercase">
                  Isolated Sandboxing
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Military-Grade Data Decentralization
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Deploy Aura on-premise or within isolated sovereign cloud
                systems. Leverage real-time neural pruning techniques to protect
                high-value intellectual assets instantly.
              </p>
              <ul className="space-y-3 font-medium text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> SOC2
                  Type II, ISO 27001, HIPAA Certified Compliance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{' '}
                  End-to-End Quantum Resistant Hardware Enclaves
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{' '}
                  Automated Smart Contract Execution & Audits
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 font-mono text-xs text-slate-400 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600">
                  Aura-Core terminal
                </span>
              </div>
              <p className="text-cyan-400 mb-2">
                $ aura core initiate --secure-sandbox
              </p>
              <p className="text-slate-500 mb-2">
                [INFO] Mapping distributed local network endpoints...
              </p>
              <p className="text-emerald-400 mb-2">
                [OK] Local isolation pipeline configured securely.
              </p>
              <p className="text-slate-500 mb-2">
                [INFO] Bootstrapping custom encrypted LLM weight cluster...
              </p>
              <p className="text-purple-400 font-semibold">
                $ Node telemetry running at 99.98% efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section
        id="testimonials"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Vouched by Security Leaders
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            See how international organizations deploy Aura safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative flex flex-col justify-between backdrop-blur-xl"
            >
              <p className="text-slate-300 italic text-base leading-relaxed mb-8">
                “{test.quote}”
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold text-sm">
                  {test.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {test.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {test.role},{' '}
                    <span className="text-slate-400">{test.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- AWARDS SECTION --- */}
      <section className="py-16 border-t border-white/5 bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <Award className="w-8 h-8 text-yellow-500/80" />
            <span className="text-sm font-semibold text-white">
              #1 AI Security Tool 2026
            </span>
            <span className="text-xs text-slate-500">
              Cybersecurity Excellence
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-60">
            <Globe className="w-8 h-8 text-cyan-500/80" />
            <span className="text-sm font-semibold text-white">
              Top Enterprise Tech Stack
            </span>
            <span className="text-xs text-slate-500">
              Gartner Core Insights
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-60">
            <Layers className="w-8 h-8 text-purple-500/80" />
            <span className="text-sm font-semibold text-white">
              Best Developer UX
            </span>
            <span className="text-xs text-slate-500">Webby Tech Awards</span>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Accelerate Security Intellect.
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-base md:text-lg">
          Onboard your core technical squads into the Aura ecosystem today. Set
          up takes less than ten business minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <button className="w-full sm:w-auto bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-slate-200 transition shadow-lg shadow-white/5">
            Deploy Now
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition">
            Contact Architecture Team
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
              <Terminal className="w-3 h-3 text-white" />
            </div>
            <span className="text-white font-bold tracking-tight">AURA.AI</span>
            <span className="ml-2 text-xs">
              © 2026 Core Infrastructure Corp.
            </span>
          </div>

          <div className="flex gap-8 text-xs">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              System Status
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security Disclosures
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
