import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiPulseLine, RiArrowRightUpLine, RiGlobeLine } from "react-icons/ri";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function InvestorsHero() {
  return (
    <section
      className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden font-sans border-b border-rule"
      aria-label="Investor Relations"
    >
      {/* ─── Faint Tech Grid Background (Clean & Subtle) ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F0F4F8 1px, transparent 1px), linear-gradient(to bottom, #F0F4F8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* ── LEFT: Clean, High-Contrast Typography ── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Monospace System Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[#0A2540]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540] flex items-center gap-2">
                Investor Relations
              </span>
            </motion.div>

            {/* Institutional Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[48px] sm:text-[64px] lg:text-[72px] font-medium text-[#0A2540] leading-[1.05] tracking-tight mb-6"
            >
              Institutional Access to Africa's Enterprise Data Economy
            </motion.h1>

            {/* Crisp Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-[18px] sm:text-[20px] text-[#425466] leading-[1.6] max-w-lg font-medium"
            >
              We are building a global network of institutional investors and
              partners to accelerate the growth of Africa's enterprise data
              economy.
            </motion.p>
          </motion.div>

          {/* ── RIGHT: Pristine Overlapping UI Cards ── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="lg:col-span-6 relative h-[320px] sm:h-[380px] lg:h-[400px] w-full"
          >
            {/* Background Geometric Accent (Ties into Leadership page style) */}
            <div className="absolute top-4 right-0 w-[80%] h-full bg-[#F6F9FC] rounded-[2rem] border border-rule transform rotate-2 z-0" />

            {/* Primary Listing Node (NGX) - Foreground */}
            <motion.div
              variants={fadeUp}
              className={cn(
                "absolute top-8 right-4 sm:right-8 lg:right-12 w-[85%] sm:w-[340px] z-20",
                "bg-white border border-rule rounded-2xl p-6 sm:p-8",
                "shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-transform hover:-translate-y-1 duration-300",
              )}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="text-[20px] leading-none" aria-hidden="true">
                    🇳🇬
                  </span>
                  <span className="font-mono text-[11px] font-bold text-subtle uppercase tracking-widest">
                    Primary Listing
                  </span>
                </div>
                {/* Live Status Ping */}
                <span className="relative flex h-2 w-2 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-800"></span>
                </span>
              </div>

              <div className="font-mono text-[32px] sm:text-[36px] font-bold text-[#0A2540] leading-none tracking-tight mb-2">
                NGX: FDRY
              </div>
              <div className="text-[13px] text-emerald-800 font-bold flex items-center gap-1.5">
                <RiArrowRightUpLine className="w-4 h-4" />
                Live on the Exchange
              </div>
            </motion.div>

            {/* Secondary Listing Node (LSE) - Background Overlap */}
            <motion.div
              variants={fadeUp}
              className={cn(
                "absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 sm:left-4 lg:-left-4 w-[85%] sm:w-[300px] z-10",
                "bg-white/80 backdrop-blur-sm border border-rule rounded-2xl p-6 sm:p-8",
                "shadow-[0_10px_30px_rgba(10,37,64,0.04)] transition-transform hover:-translate-y-1 duration-300",
              )}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[20px] leading-none" aria-hidden="true">
                    🇬🇧
                  </span>
                  <span className="font-mono text-[11px] font-bold text-subtle uppercase tracking-widest">
                    Standard Listing
                  </span>
                </div>
              </div>

              <div className="font-mono text-[24px] sm:text-[28px] font-bold text-[#425466] leading-none tracking-tight mb-2">
                LSE: FDRY
              </div>
              <div className="text-[13px] text-subtle font-medium flex items-center gap-1.5">
                <RiGlobeLine className="w-4 h-4" />
                Global Depositary
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
