"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Icons = {
  overview: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  scans: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  reports: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  agents: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  ),
  settings: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

const navItems = [
  { label: "Overview", href: "/dashboard", icon: "overview" },
  { label: "Scans", href: "#", icon: "scans" },
  { label: "Reports", href: "#", icon: "reports" },
  { label: "Agents", href: "#", icon: "agents" },
  { label: "Settings", href: "#", icon: "settings" },
];

const agents = [
  { name: "Scanner", status: "Active", color: "#10b981" },
  { name: "Analyzer", status: "Idle", color: "#6366f1" },
  { name: "Reporter", status: "Active", color: "#10b981" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Overview");

  return (
    <motion.aside
      initial={{ x: -288, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-16 bottom-0 w-64 z-40 flex flex-col"
      style={{
        background: "linear-gradient(180deg, #070d1c 0%, #060b18 100%)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* System status pill */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="flex items-center gap-2.5 mx-3 mt-3 px-3.5 py-2.5 rounded-lg"
        style={{
          background: "rgba(16,185,129,0.07)",
          border: "1px solid rgba(16,185,129,0.18)",
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-neon"
          style={{ background: "#10b981", color: "#10b981" }}
        />
        <span className="text-xs font-medium" style={{ color: "#34d399" }}>
          System Online
        </span>
        <span
          className="ml-auto text-[9px] tracking-widest"
          style={{ color: "#065f46" }}
        >
          ● ● ●
        </span>
      </motion.div>

      {/* Section label */}
      <div className="px-5 pt-5 pb-1">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "#2e426a" }}
        >
          Navigation
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item, i) => {
          const isActive = active === item.label;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.06 * i + 0.3,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={item.href} style={{ textDecoration: "none" }}>
                <motion.div
                  onClick={() => setActive(item.label)}
                  whileHover={
                    !isActive
                      ? {
                          x: 3,
                          backgroundColor: "rgba(59,130,246,0.06)",
                          transition: { duration: 0.15 },
                        }
                      : {}
                  }
                  className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer"
                  style={
                    isActive
                      ? {
                          background: "rgba(59,130,246,0.13)",
                          boxShadow:
                            "inset 0 0 0 1px rgba(59,130,246,0.2), 0 0 20px rgba(59,130,246,0.06)",
                        }
                      : {}
                  }
                >
                  {/* Active left bar */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[22px] rounded-r-full"
                        style={{
                          background:
                            "linear-gradient(180deg, #60a5fa, #2563eb)",
                          boxShadow: "2px 0 12px rgba(59,130,246,0.5)",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <span
                    style={{
                      color: isActive ? "#60a5fa" : "#2e426a",
                      transition: "color 0.15s",
                    }}
                  >
                    {Icons[item.icon]}
                  </span>

                  {/* Label */}
                  <span
                    className="text-sm font-medium flex-1"
                    style={{
                      color: isActive ? "#93c5fd" : "#6882a8",
                      transition: "color 0.15s",
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Active glow badge */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 600,
                          damping: 30,
                        }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: "#3b82f6",
                          boxShadow: "0 0 10px #3b82f6",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Divider */}
      <div
        className="mx-4 my-1"
        style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
      />

      {/* Agents panel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="mx-3 mb-3 p-4 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#2e426a" }}
        >
          Active Agents
        </div>
        <div className="space-y-2.5">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + idx * 0.08 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: agent.color,
                    boxShadow: `0 0 6px ${agent.color}99`,
                  }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "#6882a8" }}
                >
                  {agent.name}
                </span>
              </div>
              <span
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                style={{
                  color: agent.color,
                  background: `${agent.color}18`,
                }}
              >
                {agent.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* User profile strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        className="mx-3 mb-3 p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors duration-150"
        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            boxShadow: "0 0 14px rgba(37,99,235,0.45)",
          }}
        >
          <span className="text-white text-xs font-bold">A</span>
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-xs font-semibold truncate"
            style={{ color: "#c7d8f0" }}
          >
            Admin
          </div>
          <div className="text-[10px] truncate" style={{ color: "#2e426a" }}>
            sentinel@system
          </div>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2e426a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.div>
    </motion.aside>
  );
}
