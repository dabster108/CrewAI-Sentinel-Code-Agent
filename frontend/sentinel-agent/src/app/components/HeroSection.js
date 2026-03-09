"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const WORDS = ["SENTINEL", "AGENT"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid bg-[#020208]">
      {/* Animated ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.18, 0.1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,168,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ x: [0, 40, 0], opacity: [0.06, 0.14, 0.06] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Scanline sweep */}
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 4,
        }}
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,245,255,0.4) 40%, rgba(0,245,255,0.4) 60%, transparent)",
        }}
      />

      {/* Corner decorations */}
      {[
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none`}>
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{ background: "rgba(0,245,255,0.3)" }}
          />
          <div
            className="absolute top-0 left-0 h-full w-px"
            style={{ background: "rgba(0,245,255,0.3)" }}
          />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div
            className="h-px w-10"
            style={{ background: "rgba(0,245,255,0.5)" }}
          />
          <span
            className="font-cyber text-[10px] tracking-[0.4em]"
            style={{ color: "rgba(0,245,255,0.7)" }}
          >
            AI POWERED SECURITY PLATFORM
          </span>
          <div
            className="h-px w-10"
            style={{ background: "rgba(0,245,255,0.5)" }}
          />
        </motion.div>

        {/* Title — character-by-character animation */}
        <h1 className="font-cyber font-black leading-none mb-6 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {WORDS.map((word, wi) => (
              <span key={wi} className="flex">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 60, rotateX: -80 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.5 + (wi * 8 + ci) * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                    style={
                      wi === 0
                        ? {
                            color: "#00f5ff",
                            textShadow:
                              "0 0 20px rgba(0,245,255,0.9), 0 0 60px rgba(0,245,255,0.4)",
                          }
                        : { color: "white" }
                    }
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Advanced multi-agent AI system for real-time code vulnerability
          detection. Powered by CrewAI — scan, analyze, and harden your codebase
          instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/dashboard">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0,245,255,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              className="font-cyber text-xs tracking-widest px-10 py-4 rounded font-bold w-52"
              style={{
                background: "#00f5ff",
                color: "#020208",
                boxShadow: "0 0 20px rgba(0,245,255,0.4)",
              }}
            >
              ▷ LAUNCH APP
            </motion.button>
          </Link>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,0,168,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="font-cyber text-xs tracking-widest px-10 py-4 rounded w-52 transition-all duration-200"
            style={{
              border: "1px solid #ff00a8",
              color: "#ff00a8",
              background: "rgba(255,0,168,0.04)",
            }}
          >
            VIEW DOCS
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex justify-center gap-10 sm:gap-16 mt-20"
        >
          {[
            { val: "10K+", label: "FILES SCANNED" },
            { val: "99.7%", label: "DETECTION RATE" },
            { val: "50+", label: "VULN TYPES" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 + i * 0.15 }}
              className="text-center"
            >
              <div
                className="font-cyber text-2xl sm:text-3xl font-bold"
                style={{
                  color: "#00f5ff",
                  textShadow: "0 0 15px rgba(0,245,255,0.8)",
                }}
              >
                {stat.val}
              </div>
              <div className="font-cyber text-[9px] tracking-[0.25em] text-gray-600 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-cyber text-[9px] tracking-[0.3em] text-gray-700">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #00f5ff, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
