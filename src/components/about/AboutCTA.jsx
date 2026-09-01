import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine, RiMailSendLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-[#0A2540] py-20 lg:py-28 relative overflow-hidden font-sans"
      aria-label="Call to Action"
    >
      {/* Subtle Background Elements for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-medium text-white leading-[1.1] tracking-tight mb-6">
            Ready to see it in action?
          </h2>

          <p className="text-[18px] text-[#A3B8CC] leading-[1.6] mb-10 max-w-xl">
            Join the leading institutions across Africa that trust Foundry to
            power their critical operations. Our team is ready to help you
            achieve your goals with clarity, care, and purpose.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Action */}
            <Link
              to="/contact"
              className={cn(
                "group relative w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-4 bg-white text-[#0A2540] rounded-sm",
                "text-[14px] font-bold uppercase tracking-widest transition-all duration-200",
                "hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]",
              )}
            >
              Request a Demo
              <RiArrowRightLine className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action */}
            <Link
              to="/contact"
              className={cn(
                "group relative w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-8 py-4 bg-transparent text-white rounded-sm border border-white/20",
                "text-[14px] font-bold uppercase tracking-widest transition-all duration-200",
                "hover:bg-white/5 hover:border-white/40",
              )}
            >
              <RiMailSendLine className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
