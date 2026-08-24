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
      className="bg-[#F6F9FC] py-24 lg:py-32 border-b border-rule font-sans"
      aria-label="A Note from the CEO"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="bg-white rounded-none w-fit p-8 sm:p-12 lg:p-16 border border-rule shadow-[0_20px_40px_rgba(10,37,64,0.05)] relative overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-50 h-50 bg-accent/5 rounded-none blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
            {/* ── LEFT: CEO Portrait ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 flex flex-col"
            >
              <div className="relative w-80 aspect-[4/5] rounded-none overflow-hidden mb-6 bg-mist border border-rule">
                <img
                  src={tundeImg}
                  alt="Tunde Adesanya"
                  className="w-full h-full object-cover saturate-[0.85]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#0A2540] tracking-tight">
                  Tunde Adesanya
                </h3>
                <div className="text-[13px] font-bold text-[#0A2540] uppercase tracking-widest mt-1">
                  Chief Executive Officer
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Editorial Note ── */}
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <div className="mb-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-subtle">
                  A Note from the CEO
                </span>
              </div>

              <div className="relative">
                <RiDoubleQuotesL
                  className="absolute -left-2 -top-7 text-[52px] text-[#0A2540]/10"
                  aria-hidden="true"
                />
                <h2 className="text-[28px] sm:text-[36px] font-medium text-[#0A2540] leading-[1.2] tracking-tight mb-6 max-w-[18ch]">
                  Building lasting value through smart technology and trusted
                  partnerships.
                </h2>
                <p className="text-[16px] sm:text-[18px] leading-8 text-[#334155] max-w-[60ch]">
                  At BridgeSoft, we are committed to delivering innovative
                  software solutions that empower businesses to thrive in a
                  rapidly evolving digital landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
