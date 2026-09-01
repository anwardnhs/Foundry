import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Submit a simple application. We only ask for the basics to get a sense of your background and interests.",
  },
  {
    num: "02",
    title: "Screening",
    desc: "We review your application and, if it’s a match, we’ll reach out within a few days to schedule a quick 15-minute chat with our talent team.",
  },
  {
    num: "03",
    title: "Interview",
    desc: "this is where we get to know each other. You’ll meet with the hiring manager and potential teammates to discuss your experience, the role, and answer any questions you have.",
  },
  {
    num: "04",
    title: "Offer",
    desc: "Everyone loves a happy ending. If we both feel it’s a great fit, we’ll extend an offer and hopefully welcome you to the team soon after!",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

// Line drawing animation
const drawLine = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  show: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function HiringProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-20 lg:py-32 font-sans border-t border-slate-200 overflow-hidden"
      aria-label="Hiring Process"
    >
      <div className="site-container max-w-7xl">
        {/* ─── Section Header ─── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-slate-900 tracking-tight">
            Our hiring process.
          </h2>
          <p className="text-[18px] text-slate-600 mt-4 max-w-2xl">
            We’ve designed our hiring process to be as straightforward and
            transparent as possible. Here’s what you can expect when you apply
            to join the Foundry team:
          </p>
        </motion.div>

        {/* ─── Steps Grid ─── */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[11px] left-0 right-0 h-[1px] bg-slate-100 z-0" />

          {/* Animated Connecting Line (Desktop) */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={drawLine}
            className="hidden md:block absolute top-[11px] left-0 right-0 h-[1px] bg-indigo-600 z-0"
          />

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="relative flex flex-col items-start"
              >
                {/* ─── The Node & Number ─── */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-4 md:mb-6">
                  {/* Node Dot */}
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-indigo-600 shadow-sm md:mb-6 shrink-0 relative z-10" />

                  {/* Mobile connecting line (shows only on small screens) */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-6 left-[11px] bottom-[-40px] w-[2px] bg-slate-100 z-0" />
                  )}

                  {/* Number */}
                  <span className="text-[14px] font-mono font-semibold text-indigo-600 tracking-widest">
                    STEP {step.num}
                  </span>
                </div>

                {/* ─── Text Content ─── */}
                <div>
                  <h3 className="text-[20px] font-semibold text-slate-900 tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-[1.6] pr-4">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
