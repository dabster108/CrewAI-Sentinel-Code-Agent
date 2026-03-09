"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  Platform: ["Dashboard", "Reports", "API Docs", "Integrations"],
  Company: ["About", "Blog", "GitHub", "Contact"],
};

export default function Footer() {
  return (
    <footer
      className="relative bg-[#020208]"
      style={{ borderTop: "1px solid rgba(0,245,255,0.06)" }}
    >
      {/* Neon line top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background:
            "linear-gradient(to right, transparent, #00f5ff 30%, #ff00a8 70%, transparent)",
          transformOrigin: "left",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div
              className="font-cyber text-2xl font-bold mb-4"
              style={{
                color: "#00f5ff",
                textShadow:
                  "0 0 12px rgba(0,245,255,0.7), 0 0 30px rgba(0,245,255,0.3)",
              }}
            >
              SENTINEL
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered code security analysis platform. Detect
              vulnerabilities, harden your codebase, and ship with confidence.
            </p>
            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(57,255,20,0.05)",
                border: "1px solid rgba(57,255,20,0.2)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse-neon"
                style={{ background: "#39ff14", boxShadow: "0 0 6px #39ff14" }}
              />
              <span
                className="font-cyber text-[10px] tracking-widest"
                style={{ color: "#39ff14" }}
              >
                SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                className="font-cyber text-[10px] tracking-[0.3em] mb-5"
                style={{ color: "rgba(148,163,184,0.4)" }}
              >
                {section.toUpperCase()}
              </div>
              <div className="space-y-2.5">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="block text-gray-600 text-sm transition-all duration-200 hover:text-[#00f5ff]"
                    style={{ fontFamily: "var(--font-roboto, sans-serif)" }}
                    onMouseEnter={(e) => {
                      e.target.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(0,245,255,0.05)" }}
        >
          <span className="font-cyber text-[10px] tracking-widest text-gray-700">
            © 2026 SENTINEL AGENT — ALL RIGHTS RESERVED
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((l) => (
              <Link
                key={l}
                href="#"
                className="font-cyber text-[10px] tracking-widest text-gray-700 hover:text-[#00f5ff] transition-colors"
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
