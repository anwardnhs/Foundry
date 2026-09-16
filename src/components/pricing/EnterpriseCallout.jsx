import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightUpLine, RiMailSendLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function EnterpriseCallout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-16 lg:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden font-sans"
      aria-label="Enterprise Contact"
    >
      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-[32px] sm:text-[44px] lg:text-[48px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Running a large institution? <br className="hidden sm:block" />
            Let's build something specific.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-slate-600 leading-[1.6] max-w-2xl font-normal mb-10"
          >
            Need sovereign data residency, custom LLM layers, or localized
            regulatory compliance? Skip the standard tiers and get an
            architecture tailored strictly to your mandate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <Button
              asChild
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-[15px] transition-all shadow-sm"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Talk to Sales
                <RiMailSendLine className="w-4 h-4" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-white hover:bg-slate-50 border-slate-200 text-slate-700 font-medium text-[15px] transition-all shadow-sm"
            >
              <Link to="/demo" className="flex items-center gap-2">
                Request a Demo
                <RiArrowRightUpLine className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
