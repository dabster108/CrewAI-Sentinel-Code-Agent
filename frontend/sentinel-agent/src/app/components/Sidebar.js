"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { icon: "◈", label: "Overview", href: "/dashboard" },
  { icon: "◈", label: "Scans", href: "#" },
  { icon: "◈", label: "Reports", href: "#" },
  { icon: "◈", label: "Agents", href: "#" },
  { icon: "◈", label: "Settings", href: "#" },
];

const agents = [
  { name: "Scanner", status: "active", color: "#39ff14" },
  { name: "Analyzer", status: "idle", color: "#00f5ff" },
  { name: "Reporter", status: "active", color: "#39ff14" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Overview");

  return (
    <motion.aside
      initial={{ x: -280, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-16 bottom-0 w-64 z-40 flex flex-col"
      style={{
        background: "rgba(3, 3, 11, 0.96)",
        backdropFilter: "blur(24px)",
        borderRight: "1px solid rgba(0,245,255,0.08)",
      }}
    >
      {/* System status */}
      <div
        className="flex items-center gap-2 px-5 py-3"
        style={{ borderBottom: "1px solid rgba(0,245,255,0.06)" }}
      >
        <div
          className="w-2 h-2 rounded-full animate-pulse-neon"
          style={{ background: "#39ff14", boxShadow: "0 0 8px #39ff14" }}
        />
        <span className="font-cyber text-[10px] tracking-[0.2em] text-gray-600">
          SYSTEM ONLINE
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        {navItems.map((item, i) => {
          const isActive = active === item.label;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * i + 0.3, duration: 0.4 }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  onClick={() => setActive(item.label)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150 relative overflow-hidden"
                  style={
                    isActive
                      ? {
                          background: "rgba(0,245,255,0.07)",
                          borderLeft: "2px solid #00f5ff",
                        }
                      : {
                          borderLeft: "2px solid transparent",
                        }
                  }
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBg"
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{ background: "rgba(0,245,255,0.04)" }}
                    />
                  )}
                  <span
                    className="font-cyber text-xs relative z-10"
                    style={{
                      color: isActive ? "#00f5ff" : "rgba(148,163,184,0.4)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="font-cyber text-xs tracking-widest relative z-10 transition-colors duration-150"
                    style={{ color: isActive ? "#00f5ff" : "#64748b" }}
                  >
                    {item.label.toUpperCase()}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="ml-auto w-1.5 h-1.5 rounded-full relative z-10"
                      style={{
                        background: "#00f5ff",
                        boxShadow: "0 0 8px #00f5ff",
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Agent status panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mx-3 mb-4 p-4 rounded-xl"
        style={{
          background: "rgba(0,245,255,0.02)",
          border: "1px solid rgba(0,245,255,0.08)",
        }}
      >
        <div className="font-cyber text-[10px] tracking-[0.25em] text-gray-600 mb-3">
          AGENT STATUS
        </div>
        <div className="space-y-2">
          {agents.map((agent) => (
            <div key={agent.name} className="flex items-center justify-between">
              <span className="text-[11px] text-gray-600">{agent.name}</span>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse-neon"
                  style={{
                    background: agent.color,
                    boxShadow: `0 0 5px ${agent.color}`,
                  }}
                />
                <span
                  className="font-cyber text-[10px] tracking-wide"
                  style={{ color: agent.color }}
                >
                  {agent.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
}
