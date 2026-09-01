import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

// ─── Asset Import ─────────────────────────────────────────────────────────────
import tundeImg from "@/assets/images/tunde.png";

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

export default function FoundersNote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-20 lg:py-28 border-b border-rule font-sans"
      aria-label="A Note from the CEO"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="w-full max-w-6xl mx-auto border-t border-b border-rule py-10 sm:py-14 lg:py-16 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* ── LEFT: CEO Portrait ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 flex flex-col"
            >
              <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden mb-5 bg-mist">
                <img
                  src={tundeImg}
                  alt="Tunde Adesanya"
                  className="w-full h-full object-cover grayscale-[0.15]"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A2540] tracking-tight">
                  Tunde Adesanya
                </h3>
                <div className="text-sm text-subtle mt-1">
                  Chief Executive Officer
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Editorial Note ── */}
            <motion.div variants={fadeUp} className="lg:col-span-8 lg:pt-2">
              <div className="mb-7 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  A Note from the CEO
                </span>
                <span className="h-px w-12 bg-rule" aria-hidden="true" />
              </div>

              <div className="relative">
                <RiDoubleQuotesL
                  className="mb-4 text-3xl text-[#0A2540]/25"
                  aria-hidden="true"
                />
                <h2 className="text-[30px] sm:text-[42px] font-medium text-[#0A2540] leading-[1.12] tracking-[-0.02em] mb-7 max-w-[20ch]">
                  Good software should make difficult work feel simpler.
                </h2>
                <p className="text-base sm:text-lg leading-8 text-[#334155] max-w-[58ch]">
                  Foundry was founded on the belief that enterprise software
                  should empower organizations to achieve more with less
                  friction. Our mission is to deliver innovative solutions that
                  streamline complex processes, enhance collaboration, and drive
                  measurable results for our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
