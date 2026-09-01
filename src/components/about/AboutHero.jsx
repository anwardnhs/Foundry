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

export default function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAFAFA] border-b border-slate-200 overflow-hidden font-sans"
      aria-label="About Foundry"
    >
      {/* ─── Premium Unsplash Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, modern abstract liquid/gradient from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract soft background"
          className="w-full h-full object-cover opacity-[0.15]"
        />
        {/* Gradient overlay to ensure text readability and seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#FAFAFA]" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Soft Eyebrow Pill */}
          <motion.div variants={fadeUp} className="mb-6"></motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[56px] sm:text-[72px] lg:text-[88px] font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Built to last.
          </motion.h1>

          {/* Institutional Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-slate-600 leading-[1.6] max-w-3xl mx-auto font-normal"
          >
            At Foundry, we design and build software solutions that empower
            global institutions to achieve their goals. Our commitment to
            excellence, innovation, and integrity drives us to deliver products
            that stand the test of time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
