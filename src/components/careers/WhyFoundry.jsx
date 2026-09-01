import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const reasons = [
  {
    id: "01",
    title: "Impact at scale.",
    desc: "Foundry powers some of the largest enterprises in Africa and beyond. Your work will be used by millions of users every day, across multiple continents.",
  },
  {
    id: "02",
    title: "A startup mindset, with enterprise resources.",
    desc: "We combine the agility and innovation of a startup with the stability and resources of an enterprise. This allows us to move fast while maintaining the highest standards.",
  },
  {
    id: "03",
    title: "Obsessive attention to detail.",
    desc: "We care deeply about craftsmanship and quality. From our code to our customer support, we strive for excellence in everything we do.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function WhyFoundry() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-20 lg:py-32 font-sans"
      aria-label="Why Foundry"
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
            How we operate.
          </h2>
        </motion.div>

        {/* ─── Grid ─── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={fadeUp}
              className="flex flex-col border-t border-slate-200 pt-8"
            >
              {/* Massive Editorial Number */}
              <span className="text-[40px] lg:text-[48px] font-light text-slate-300 leading-none mb-6 font-mono tracking-tighter">
                {reason.id}
              </span>

              {/* Title */}
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-slate-900 tracking-tight mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-[1.6] font-normal">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
