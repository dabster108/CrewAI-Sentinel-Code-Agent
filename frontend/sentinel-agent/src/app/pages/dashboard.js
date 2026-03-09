"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AnimatedCard from "../components/AnimatedCard";

/* ─── Sample data ─────────────────────────────────────────── */
const recentScans = [
  {
    file: "auth.py",
    issues: 3,
    severity: "HIGH",
    status: "FLAGGED",
    time: "2m ago",
  },
  {
    file: "database.py",
    issues: 1,
    severity: "MEDIUM",
    status: "FLAGGED",
    time: "5m ago",
  },
  {
    file: "api_handler.py",
    issues: 0,
    severity: "CLEAN",
    status: "CLEAN",
    time: "8m ago",
  },
  {
    file: "utils.py",
    issues: 2,
    severity: "LOW",
    status: "FLAGGED",
    time: "12m ago",
  },
  {
    file: "models.py",
    issues: 0,
    severity: "CLEAN",
    status: "CLEAN",
    time: "15m ago",
  },
  {
    file: "main.py",
    issues: 5,
    severity: "CRITICAL",
    status: "CRITICAL",
    time: "20m ago",
  },
];

const vulnBreakdown = [
  { name: "SQL Injection", count: 12, max: 18, color: "#ff00a8" },
  { name: "XSS", count: 8, max: 18, color: "#00f5ff" },
  { name: "Auth Issues", count: 15, max: 18, color: "#ff6b35" },
  { name: "Path Traversal", count: 5, max: 18, color: "#39ff14" },
  { name: "Cmd Injection", count: 9, max: 18, color: "#bf00ff" },
];

const weeklyData = [
  { day: "Mon", scans: 45 },
  { day: "Tue", scans: 63 },
  { day: "Wed", scans: 38 },
  { day: "Thu", scans: 71 },
  { day: "Fri", scans: 55 },
  { day: "Sat", scans: 28 },
  { day: "Sun", scans: 82 },
];

const agentLogs = [
  {
    agent: "Scanner",
    msg: "Completed analysis of auth.py — 3 HIGH issues found",
    time: "02:14",
    color: "#ff00a8",
  },
  {
    agent: "Analyzer",
    msg: "Cross-referenced database.py against OWASP Top 10",
    time: "02:10",
    color: "#00f5ff",
  },
  {
    agent: "Reporter",
    msg: "Generated summary report for last 24h session",
    time: "01:58",
    color: "#39ff14",
  },
  {
    agent: "Scanner",
    msg: "Scanning models.py — no vulnerabilities detected",
    time: "01:45",
    color: "#39ff14",
  },
];

/* ─── Sub-components ──────────────────────────────────────── */

function StatusBadge({ status }) {
  const styles = {
    CLEAN: {
      color: "#39ff14",
      border: "rgba(57,255,20,0.3)",
      bg: "rgba(57,255,20,0.06)",
    },
    CRITICAL: {
      color: "#bf00ff",
      border: "rgba(191,0,255,0.3)",
      bg: "rgba(191,0,255,0.06)",
    },
    FLAGGED: {
      color: "#ff00a8",
      border: "rgba(255,0,168,0.3)",
      bg: "rgba(255,0,168,0.06)",
    },
  };
  const s = styles[status] || styles.FLAGGED;
  return (
    <span
      className="font-cyber text-[9px] tracking-widest px-2 py-1 rounded"
      style={{
        color: s.color,
        border: `1px solid ${s.border}`,
        background: s.bg,
      }}
    >
      {status}
    </span>
  );
}

function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.scans));
  return (
    <div className="flex items-end gap-2 h-28">
      {data.map((d, i) => (
        <div
          key={d.day}
          className="flex-1 flex flex-col items-center gap-1 group"
        >
          <div
            className="relative w-full flex items-end"
            style={{ height: "100px" }}
          >
            <div
              className="w-full flex flex-col justify-end"
              style={{ height: "100%" }}
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(d.scans / max) * 100}%` }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full rounded-t-sm cursor-pointer relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to top, #00f5ff 0%, rgba(0,245,255,0.25) 100%)",
                  boxShadow: "0 0 8px rgba(0,245,255,0.2)",
                }}
              >
                {/* Hover tooltip */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-cyber text-[#00f5ff] text-[9px]">
                  {d.scans}
                </div>
              </motion.div>
            </div>
          </div>
          <span className="font-cyber text-[9px] text-gray-700">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ value = 87 }) {
  const r = 38;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="96" height="96" className="-rotate-90">
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="rgba(0,245,255,0.08)"
          strokeWidth="7"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#00f5ff"
          strokeWidth="7"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 6px rgba(0,245,255,0.8))" }}
        />
      </svg>
      <div className="absolute text-center">
        <div
          className="font-cyber text-xl font-bold"
          style={{
            color: "#00f5ff",
            textShadow: "0 0 12px rgba(0,245,255,0.8)",
          }}
        >
          {value}%
        </div>
        <div className="font-cyber text-[8px] text-gray-600 tracking-wide">
          SECURE
        </div>
      </div>
    </div>
  );
}

/* ─── Card wrapper shared style ───────────────────────────── */
const cardStyle = {
  background: "rgba(5,5,16,0.85)",
  border: "1px solid rgba(0,245,255,0.08)",
  backdropFilter: "blur(12px)",
};

/* ─── Main Dashboard Page ─────────────────────────────────── */
export default function DashboardPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="bg-[#020208] min-h-screen">
      <Header />

      <div className="flex">
        <Sidebar />

        {/* Main content — offset by sidebar width */}
        <motion.main
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 pt-16 min-h-screen"
          style={{ marginLeft: "256px" }}
        >
          <div className="p-5 lg:p-8 max-w-[1400px]">
            {/* ── Page header ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="font-cyber text-xl sm:text-2xl font-bold text-white">
                  SECURITY{" "}
                  <span
                    style={{
                      color: "#00f5ff",
                      textShadow: "0 0 12px rgba(0,245,255,0.7)",
                    }}
                  >
                    DASHBOARD
                  </span>
                </h1>
                <p className="font-cyber text-[10px] tracking-widest text-gray-600 mt-1">
                  LAST SCAN: 2 MINUTES AGO &nbsp;|&nbsp; SESSION: ACTIVE
                </p>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 25px rgba(0,245,255,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="font-cyber text-[11px] tracking-widest px-6 py-2.5 rounded font-bold self-start sm:self-auto"
                style={{
                  background: "#00f5ff",
                  color: "#020208",
                  boxShadow: "0 0 14px rgba(0,245,255,0.35)",
                }}
              >
                ▷ NEW SCAN
              </motion.button>
            </div>

            {/* ── Stats row ── */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              <AnimatedCard
                title="FILES SCANNED"
                value="247"
                icon="📁"
                color="cyan"
                tag="THIS WEEK"
                index={0}
              />
              <AnimatedCard
                title="ISSUES FOUND"
                value="38"
                icon="⚠️"
                color="pink"
                tag="TOTAL DETECTED"
                index={1}
              />
              <AnimatedCard
                title="CRITICAL"
                value="6"
                icon="🔴"
                color="purple"
                tag="HIGH PRIORITY"
                index={2}
              />
              <AnimatedCard
                title="CLEAN FILES"
                value="203"
                icon="✓"
                color="green"
                tag="82.2% CLEAN"
                index={3}
              />
            </div>

            {/* ── Charts row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Bar chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="lg:col-span-2 rounded-xl p-6"
                style={cardStyle}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-cyber text-[11px] tracking-widest text-gray-400">
                      SCAN ACTIVITY
                    </div>
                    <div className="font-cyber text-[9px] text-gray-700 mt-0.5">
                      7-DAY OVERVIEW
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-2 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(to top, #00f5ff, rgba(0,245,255,0.3))",
                      }}
                    />
                    <span className="font-cyber text-[9px] text-gray-600 tracking-wide">
                      SCANS
                    </span>
                  </div>
                </div>
                <BarChart data={weeklyData} />
              </motion.div>

              {/* Donut + score breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="rounded-xl p-6 flex flex-col"
                style={cardStyle}
              >
                <div className="font-cyber text-[11px] tracking-widest text-gray-400 mb-4">
                  SECURITY SCORE
                </div>
                <div className="flex flex-col items-center flex-1 justify-center">
                  <DonutChart value={87} />
                  <div className="mt-5 w-full space-y-2">
                    {[
                      { label: "Critical", count: 6, color: "#bf00ff" },
                      { label: "Medium", count: 18, color: "#ff00a8" },
                      { label: "Low", count: 14, color: "#00f5ff" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: s.color }}
                          />
                          <span className="text-gray-600 text-xs">
                            {s.label}
                          </span>
                        </div>
                        <span
                          className="font-cyber text-xs"
                          style={{ color: s.color }}
                        >
                          {s.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Vuln breakdown + Recent scans ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Vuln breakdown bars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-xl p-6"
                style={cardStyle}
              >
                <div className="font-cyber text-[11px] tracking-widest text-gray-400 mb-5">
                  VULN BREAKDOWN
                </div>
                <div className="space-y-4">
                  {vulnBreakdown.map((v, i) => (
                    <motion.div
                      key={v.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-600 text-[11px]">
                          {v.name}
                        </span>
                        <span
                          className="font-cyber text-[11px]"
                          style={{ color: v.color }}
                        >
                          {v.count}
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(v.count / v.max) * 100}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.8 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: v.color,
                            boxShadow: `0 0 6px ${v.color}`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recent scans table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="lg:col-span-2 rounded-xl overflow-hidden"
                style={cardStyle}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(0,245,255,0.06)" }}
                >
                  <div className="font-cyber text-[11px] tracking-widest text-gray-400">
                    RECENT SCANS
                  </div>
                  <motion.span
                    whileHover={{ color: "#00f5ff", x: 2 }}
                    className="font-cyber text-[10px] tracking-widest text-gray-600 cursor-pointer transition-all"
                  >
                    VIEW ALL →
                  </motion.span>
                </div>
                <div>
                  {recentScans.map((scan, i) => (
                    <motion.div
                      key={scan.file}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.07 }}
                      whileHover={{
                        backgroundColor: "rgba(0,245,255,0.025)",
                        x: 2,
                      }}
                      onClick={() =>
                        setSelectedFile(
                          selectedFile === scan.file ? null : scan.file,
                        )
                      }
                      className="flex items-center gap-4 px-6 py-3 cursor-pointer transition-all duration-150"
                      style={{
                        borderBottom:
                          i < recentScans.length - 1
                            ? "1px solid rgba(0,245,255,0.04)"
                            : "none",
                        background:
                          selectedFile === scan.file
                            ? "rgba(0,245,255,0.04)"
                            : "transparent",
                      }}
                    >
                      {/* File icon */}
                      <div
                        className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            scan.status === "CLEAN"
                              ? "rgba(57,255,20,0.08)"
                              : scan.status === "CRITICAL"
                                ? "rgba(191,0,255,0.08)"
                                : "rgba(255,0,168,0.08)",
                          border:
                            scan.status === "CLEAN"
                              ? "1px solid rgba(57,255,20,0.2)"
                              : scan.status === "CRITICAL"
                                ? "1px solid rgba(191,0,255,0.2)"
                                : "1px solid rgba(255,0,168,0.2)",
                        }}
                      >
                        <span className="text-xs">
                          {scan.status === "CLEAN"
                            ? "✓"
                            : scan.status === "CRITICAL"
                              ? "!"
                              : "⚠"}
                        </span>
                      </div>

                      {/* File name + time */}
                      <div className="flex-1 min-w-0">
                        <div className="font-cyber text-xs text-gray-300 truncate">
                          {scan.file}
                        </div>
                        <div className="text-gray-700 text-[10px] mt-0.5">
                          {scan.time}
                        </div>
                      </div>

                      {/* Status badge */}
                      <StatusBadge status={scan.status} />

                      {/* Issue count */}
                      <div className="text-right min-w-[52px]">
                        <span
                          className="font-cyber text-[10px]"
                          style={{
                            color: scan.issues === 0 ? "#39ff14" : "#94a3b8",
                          }}
                        >
                          {scan.issues} {scan.issues === 1 ? "issue" : "issues"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Agent activity log ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="rounded-xl overflow-hidden"
              style={cardStyle}
            >
              <div
                className="px-6 py-4"
                style={{ borderBottom: "1px solid rgba(0,245,255,0.06)" }}
              >
                <div className="font-cyber text-[11px] tracking-widest text-gray-400">
                  AGENT ACTIVITY LOG
                </div>
              </div>
              <div className="p-4 space-y-2 font-mono text-xs">
                {agentLogs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.85 + i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.015)" }}
                  >
                    <span
                      className="font-cyber text-[9px] tracking-wide flex-shrink-0 mt-0.5"
                      style={{ color: "rgba(148,163,184,0.3)" }}
                    >
                      {log.time}
                    </span>
                    <span
                      className="font-cyber text-[9px] tracking-widest flex-shrink-0 mt-0.5"
                      style={{ color: log.color }}
                    >
                      [{log.agent.toUpperCase()}]
                    </span>
                    <span className="text-gray-600 text-[11px]">{log.msg}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
