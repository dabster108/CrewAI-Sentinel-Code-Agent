"use client";
import { motion } from "framer-motion";

const colorMap = {
  cyan: {
    text: "#60a5fa",
    glow: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.2)",
    badge: { color: "#93c5fd", bg: "rgba(59,130,246,0.12)" },
  },
  pink: {
    text: "#f472b6",
    glow: "rgba(236,72,153,0.12)",
    border: "rgba(236,72,153,0.2)",
    badge: { color: "#f9a8d4", bg: "rgba(236,72,153,0.12)" },
  },
  green: {
    text: "#34d399",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.2)",
    badge: { color: "#6ee7b7", bg: "rgba(16,185,129,0.12)" },
  },
  purple: {
    text: "#a78bfa",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.2)",
    badge: { color: "#c4b5fd", bg: "rgba(139,92,246,0.12)" },
  },
  orange: {
    text: "#fb923c",
    glow: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.2)",
    badge: { color: "#fdba74", bg: "rgba(249,115,22,0.12)" },
  },
};

export default function AnimatedCard({
  title,
  value,
  icon,
  color = "cyan",
  description,
  tag,
  index = 0,
  children,
}) {
  const c = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 0 0 1px ${c.border}, 0 16px 40px ${c.glow}, 0 4px 16px rgba(0,0,0,0.3)`,
      }}
      className="relative rounded-xl p-5 cursor-pointer overflow-hidden"
      style={{
        background: "#0c1526",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
    >
      {/* Subtle top glow accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${c.text}40, transparent)`,
        }}
      />

      <div className="flex items-start justify-between mb-3">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "#3d5278" }}
        >
          {title}
        </span>
        {icon && (
          <span
            className="text-lg leading-none p-1.5 rounded-lg"
            style={{ background: c.glow }}
          >
            {icon}
          </span>
        )}
      </div>

      {value && (
        <div className="font-bold text-3xl mb-1" style={{ color: c.text }}>
          {value}
        </div>
      )}

      {description && (
        <p
          className="text-sm mt-2 leading-relaxed"
          style={{ color: "#6882a8" }}
        >
          {description}
        </p>
      )}

      {tag && (
        <div
          className="mt-3 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{ color: c.badge.color, background: c.badge.bg }}
        >
          {tag}
        </div>
      )}

      {children}
    </motion.div>
  );
}
