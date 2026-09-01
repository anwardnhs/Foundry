import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

// ─── The Institutional Statement ──────────────────────────────────────────────
const statementLines = [
  "We are building a company people can trust to help institutions move faster, work smarter, and serve communities with clarity, care, and purpose.",
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 20, rotateX: 10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Custom crisp easing
    },
  },
};

const fadeVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
};

export default function MissionStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="relative py-16 lg:py-24 bg-white overflow-hidden font-sans perspective-[1000px] border-b border-slate-200"
      aria-label="Mission Statement"
    >
      {/* ─── Soft Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Very subtle, light abstract art from Unsplash */}
        <img
          src="https://source.unsplash.com/2564x1440/?abstract,art,gradient"
          alt="Abstract background art"
          className="w-full h-full object-cover opacity-[0.15] grayscale-[30%]"
          role="img"
          aria-hidden="true"
        />
        {/* Heavy white gradient overlay to keep it feeling clean and SaaS-like */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Faded Quote Icon */}
          <motion.div variants={fadeVariant} className="mb-6">
            <RiDoubleQuotesL className="w-10 h-10 text-slate-200" />
          </motion.div>

          {/* Line-by-Line Staggered Text (Scaled down for tighter layout) */}
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-slate-900 leading-[1.3] tracking-tight mb-10 flex flex-col items-center">
            {statementLines.map((line, index) => (
              <span key={index} className="overflow-hidden block py-0.5">
                <motion.span
                  variants={lineVariant}
                  className="block origin-bottom"
                >
                  {/* Subtle indigo highlight on the key phrase */}
                  {line.includes("scalable foundation") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line.replace(
                          "scalable foundation",
                          '<span class="text-indigo-600">scalable foundation</span>',
                        ),
                      }}
                    />
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Attribution to both Founders */}
          <motion.div
            variants={fadeVariant}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-px h-8 bg-slate-300 mb-3" />
            <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
              Anwar Alhassan & David Saro
            </span>
            <span className="text-[13px] font-medium text-slate-500">
              Co-Founders, Foundry Plc
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
