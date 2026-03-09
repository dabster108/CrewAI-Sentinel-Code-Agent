"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Reports", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ borderBottom: "1px solid rgba(0,245,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <div
                  className="absolute inset-0 rounded"
                  style={{
                    background: "rgba(0,245,255,0.15)",
                    filter: "blur(4px)",
                  }}
                />
                <div
                  className="relative w-8 h-8 rounded flex items-center justify-center"
                  style={{ border: "1px solid rgba(0,245,255,0.5)" }}
                >
                  <span
                    className="font-cyber text-xs font-bold"
                    style={{ color: "#00f5ff" }}
                  >
                    S
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span
                  className="font-cyber text-base font-bold tracking-widest"
                  style={{
                    color: "#00f5ff",
                    textShadow:
                      "0 0 12px rgba(0,245,255,0.7), 0 0 30px rgba(0,245,255,0.3)",
                  }}
                >
                  SENTINEL
                </span>
                <span className="font-cyber text-[9px] text-gray-500 tracking-widest mb-0.5">
                  AGENT
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="font-cyber text-[11px] tracking-widest text-gray-400 transition-all duration-200"
                  style={{ letterSpacing: "0.15em" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#00f5ff";
                    e.target.style.textShadow = "0 0 10px rgba(0,245,255,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "";
                    e.target.style.textShadow = "";
                  }}
                >
                  {item.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <Link href="/dashboard">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 20px rgba(0,245,255,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="font-cyber text-[11px] tracking-widest px-5 py-2 rounded transition-all duration-200"
                style={{
                  border: "1px solid #00f5ff",
                  color: "#00f5ff",
                  background: "rgba(0,245,255,0.05)",
                  boxShadow: "0 0 8px rgba(0,245,255,0.2)",
                }}
              >
                LAUNCH APP
              </motion.button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 flex flex-col justify-center gap-1.5"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5"
              style={{ background: "#00f5ff" }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              className="block h-px w-4"
              style={{ background: "#00f5ff" }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5"
              style={{ background: "#00f5ff" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}
          >
            <div className="px-4 py-4 space-y-3 bg-[rgba(4,4,14,0.98)]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-cyber text-[11px] tracking-widest text-gray-400 hover:text-[#00f5ff] py-1.5 transition-colors"
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <div
                  className="mt-2 font-cyber text-[11px] tracking-widest text-center py-2.5 rounded"
                  style={{ border: "1px solid #00f5ff", color: "#00f5ff" }}
                >
                  LAUNCH APP
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
