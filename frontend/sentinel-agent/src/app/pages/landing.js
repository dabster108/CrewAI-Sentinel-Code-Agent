"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AnimatedCard from "../components/AnimatedCard";

const features = [
  {
    icon: "🔍",
    title: "VULNERABILITY SCAN",
    description:
      "Deep static analysis using AI agents to detect OWASP Top 10 vulnerabilities, SQL injection, XSS, command injection, and security misconfigurations in your codebase.",
    color: "cyan",
    tag: "DETECTION ENGINE",
  },
  {
    icon: "🤖",
    title: "CREWAI AGENTS",
    description:
      "Multi-agent orchestration with specialized Scanner, Analyzer, and Reporter agents working in parallel for comprehensive, contextual security coverage.",
    color: "pink",
    tag: "AI POWERED",
  },
  {
    icon: "📊",
    title: "DETAILED REPORTS",
    description:
      "Generate professional security reports with severity ratings, exact code locations, and actionable remediation recommendations ready to share with your team.",
    color: "green",
    tag: "REPORTING",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "SUBMIT CODE",
    desc: "Upload Python files or connect your GitHub repository. Supports single files or entire codebases.",
  },
  {
    step: "02",
    title: "AI ANALYSIS",
    desc: "CrewAI agents scan, analyze, and cross-reference against known vulnerability patterns and CVE databases.",
  },
  {
    step: "03",
    title: "GET REPORT",
    desc: "Receive a detailed security report with fixes, severity scores, and line-by-line recommendations.",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-[#020208] min-h-screen">
      <Header />

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Features ── */}
      <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="font-cyber text-[10px] tracking-[0.4em] mb-3"
            style={{ color: "rgba(0,245,255,0.7)" }}
          >
            CAPABILITIES
          </div>
          <h2 className="font-cyber text-3xl md:text-4xl font-bold text-white">
            WHAT SENTINEL DOES
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 mx-auto mt-5 origin-left"
            style={{
              background:
                "linear-gradient(to right, transparent, #00f5ff, transparent)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedCard
              key={f.title}
              title={f.title}
              icon={f.icon}
              color={f.color}
              description={f.description}
              tag={f.tag}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        className="py-28 px-4 sm:px-6"
        style={{
          background: "rgba(0,245,255,0.01)",
          borderTop: "1px solid rgba(0,245,255,0.05)",
          borderBottom: "1px solid rgba(0,245,255,0.05)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="font-cyber text-[10px] tracking-[0.4em] mb-3"
              style={{ color: "rgba(255,0,168,0.7)" }}
            >
              WORKFLOW
            </div>
            <h2 className="font-cyber text-3xl md:text-4xl font-bold text-white">
              HOW IT WORKS
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-24 mx-auto mt-5 origin-left"
              style={{
                background:
                  "linear-gradient(to right, transparent, #ff00a8, transparent)",
              }}
            />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {howItWorks.map((s, i) => (
              <div
                key={s.step}
                className="flex-1 flex flex-col md:flex-row items-center gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex-1 text-center p-8 rounded-xl w-full"
                  style={{
                    background: "rgba(5,5,16,0.8)",
                    border: "1px solid rgba(255,0,168,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 font-cyber text-xl font-bold"
                    style={{
                      border: "1px solid rgba(255,0,168,0.35)",
                      color: "#ff00a8",
                      background: "rgba(255,0,168,0.05)",
                      boxShadow: "0 0 20px rgba(255,0,168,0.12)",
                    }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-cyber text-xs tracking-widest text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
                {i < howItWorks.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="hidden md:block text-2xl flex-shrink-0"
                    style={{ color: "rgba(255,0,168,0.3)" }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack callout ── */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="font-cyber text-[10px] tracking-[0.4em] mb-3"
            style={{ color: "rgba(57,255,20,0.7)" }}
          >
            BUILT WITH
          </div>
          <h2 className="font-cyber text-2xl font-bold text-white">
            ENTERPRISE-GRADE TECHNOLOGY
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "CrewAI", role: "Agent orchestration", color: "cyan" },
            { name: "Python", role: "Analysis engine", color: "green" },
            { name: "Next.js", role: "Frontend platform", color: "pink" },
            { name: "OpenAI", role: "LLM backbone", color: "purple" },
          ].map((tech, i) => (
            <AnimatedCard
              key={tech.name}
              title={tech.role.toUpperCase()}
              value={tech.name}
              color={tech.color}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-36 px-4 text-center relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,245,255,0.1) 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div
            className="font-cyber text-[10px] tracking-[0.4em] mb-4"
            style={{ color: "rgba(0,245,255,0.6)" }}
          >
            GET STARTED TODAY
          </div>
          <h2
            className="font-cyber text-4xl md:text-5xl font-black mb-6"
            style={{
              color: "#00f5ff",
              textShadow:
                "0 0 20px rgba(0,245,255,0.8), 0 0 60px rgba(0,245,255,0.3)",
            }}
          >
            READY TO SECURE YOUR CODE?
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Start scanning your codebase today with our AI-powered security
            platform. Free tier available. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(0,245,255,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                className="font-cyber text-xs tracking-widest px-12 py-5 rounded-lg font-bold"
                style={{
                  background: "#00f5ff",
                  color: "#020208",
                  boxShadow: "0 0 25px rgba(0,245,255,0.4)",
                }}
              >
                ▷ LAUNCH DASHBOARD
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: "#00f5ff" }}
              whileTap={{ scale: 0.97 }}
              className="font-cyber text-xs tracking-widest px-12 py-5 rounded-lg transition-all duration-200"
              style={{
                border: "1px solid rgba(0,245,255,0.25)",
                color: "rgba(0,245,255,0.6)",
              }}
            >
              VIEW GITHUB
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
