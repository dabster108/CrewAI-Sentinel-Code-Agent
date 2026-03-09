"use client";
import { motion } from "framer-motion";

const colorMap = {
  cyan: {
    text: "#00f5ff",
    border: "rgba(0,245,255,0.18)",
    glow: "rgba(0,245,255,0.28)",
    bg: "rgba(0,245,255,0.04)",
    highlight: "rgba(0,245,255,0.07)",
  },
  pink: {
    text: "#ff00a8",
    border: "rgba(255,0,168,0.18)",
    glow: "rgba(255,0,168,0.28)",
    bg: "rgba(255,0,168,0.04)",
    highlight: "rgba(255,0,168,0.07)",
  },
  green: {
    text: "#39ff14",
    border: "rgba(57,255,20,0.18)",
    glow: "rgba(57,255,20,0.28)",
    bg: "rgba(57,255,20,0.04)",
    highlight: "rgba(57,255,20,0.07)",
  },
  purple: {
    text: "#bf00ff",
    border: "rgba(191,0,255,0.18)",
    glow: "rgba(191,0,255,0.28)",
    bg: "rgba(191,0,255,0.04)",
    highlight: "rgba(191,0,255,0.07)",
  },
  orange: {
    text: "#ff6b35",
    border: "rgba(255,107,53,0.18)",
    glow: "rgba(255,107,53,0.28)",
    bg: "rgba(255,107,53,0.04)",
    highlight: "rgba(255,107,53,0.07)",
  },
};

/**
 * AnimatedCard — reusable animated stat/feature card
 *
 * Props:
 *   title       - Card label (string)
 *   value       - Big number/text to display (string)
 *   icon        - Emoji or icon character (string)
 *   color       - "cyan" | "pink" | "green" | "purple" | "orange"
 *   description - Body text (string)
 *   tag         - Small badge text (string)
 *   index       - Stagger delay multiplier (number, default 0)
 *   children    - Optional extra content
 */
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.025,
        boxShadow: `0 0 32px ${c.glow}, 0 8px 32px rgba(0,0,0,0.4)`,
        y: -2,
      }}
      className="relative rounded-xl p-6 cursor-pointer overflow-hidden"
      style={{
        background: "rgba(5, 5, 16, 0.85)",
        border: `1px solid ${c.border}`,
        backdropFilter: "blur(12px)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Top-right corner accent lines */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl pointer-events-none">
        <div
          className="absolute top-0 right-0 w-px h-12"
          style={{
            background: `linear-gradient(to bottom, ${c.text}, transparent)`,
            opacity: 0.6,
          }}
        />
        <div
          className="absolute top-0 right-0 h-px w-12"
          style={{
            background: `linear-gradient(to left, ${c.text}, transparent)`,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Hover inner glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${c.highlight} 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <span
            className="font-cyber text-[10px] tracking-[0.2em]"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            {title}
          </span>
          {icon && (
            <span
              className="text-xl leading-none"
              style={{ filter: `drop-shadow(0 0 6px ${c.text})` }}
            >
              {icon}
            </span>
          )}
        </div>

        {/* Big value */}
        {value && (
          <div
            className="font-cyber text-3xl font-bold mb-1"
            style={{
              color: c.text,
              textShadow: `0 0 20px ${c.glow}`,
            }}
          >
            {value}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Tag badge */}
        {tag && (
          <div
            className="mt-3 inline-block font-cyber text-[9px] tracking-[0.2em] px-2.5 py-1 rounded"
            style={{
              color: c.text,
              border: `1px solid ${c.border}`,
              background: c.bg,
            }}
          >
            {tag}
          </div>
        )}

        {children}
      </div>
    </motion.div>
  );
}
