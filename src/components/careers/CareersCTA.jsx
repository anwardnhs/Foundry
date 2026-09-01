import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiArrowRightUpLine, RiMailLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

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
  show: { transition: { staggerChildren: 0.15 } },
};

export default function CareerCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 font-sans overflow-hidden">
      {/* ─── Moody, Structural Abstract Background ─── */}
      <div className="absolute inset-0 z-0 bg-[#0A2540]">
        <img
          // Using a dark, sleek, wavy texture instead of glowing liquid
          src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2670&auto=format&fit=crop"
          alt="Dark textured background"
          className="w-full h-full object-cover scale-105 grayscale opacity-40"
        />
        {/* Heavy, flat dark navy overlay to completely kill any glow */}
        <div className="absolute inset-0 bg-[#0A2540]/80" />
        {/* Deep vignette to ground the edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182c] via-transparent to-[#06182c]/50" />
      </div>

      <div className="site-container relative z-10 max-w-4xl text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col items-center"
        >
          {/* ─── Massive Centered Headline ─── */}
          <motion.h2
            variants={fadeUp}
            className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-10"
          >
            Let's build the future of public sector infrastructure together.
          </motion.h2>

          {/* ─── Action Links ─── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary Action */}
            <Button
              asChild
              className="h-14 px-8 rounded-none bg-white hover:bg-slate-100 text-[#0A2540] font-bold text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href="#open-roles" className="flex items-center gap-2">
                See all open roles
                <RiArrowRightUpLine className="w-5 h-5" />
              </a>
            </Button>

            {/* Secondary Action */}
            <a
              href="mailto:careers@foundry.com"
              className="group flex items-center gap-2 text-[15px] font-semibold text-white hover:text-white transition-colors px-4 py-2"
            >
              <RiMailLine className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              careers@foundry.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
