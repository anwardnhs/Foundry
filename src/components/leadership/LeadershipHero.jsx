import { motion } from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeadershipHero() {
  return (
    <section
      className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-[#F6F9FC] border-b border-rule overflow-hidden font-sans"
      aria-label="Bridgesoft Leadership"
    >
      {/* ─── Minimalist CSS Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft atmospheric glows to match the enterprise feel without being distracting */}
        <div className="absolute top-0 right-[15%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[120px]" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-accent">
              Corporate Governance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[56px] sm:text-[72px] lg:text-[88px] font-medium text-[#0A2540] leading-[1.05] tracking-tight mb-8"
          >
            The people responsible.
          </motion.h1>

          {/* Institutional Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-[#425466] leading-[1.6] max-w-2xl mx-auto font-medium"
          >
            At Bridgesoft, our leadership team is the cornerstone of our
            success. With a blend of visionary thinking and operational
            expertise, they steer the company towards its mission of delivering
            innovative solutions that drive value for our clients and
            stakeholders.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
