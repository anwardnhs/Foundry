import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const marqueeVariants = {
  hidden: { x: 0 },
  show: {
    x: ["0%", "-50%"],
    transition: {
      duration: 24,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export default function TrustStrip({ headline, proofPoints = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const items = [...proofPoints, ...proofPoints];

  return (
    <section className="border-y border-[#E6ECF5] bg-white py-8 lg:py-10">
      <div className="site-container" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[#0A2540]">
            {headline}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm  font-bold leading-6 text-[#425466] sm:text-base">
            Proven by the world’s leading organizations, Foundry is trusted
            to deliver secure, reliable, and scalable solutions that help teams
            work better together.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={marqueeVariants}
            className="flex w-max items-center py-2"
            style={{ willChange: "transform" }}
          >
            {items.map((point, index) => (
              <div
                key={`${point}-${index}`}
                className="flex shrink-0 items-center px-6 sm:px-8 lg:px-10"
                aria-hidden={index >= proofPoints.length}
              >
                <span className="select-none whitespace-nowrap text-[18px] font-semibold tracking-tight text-[#0A2540] sm:text-[22px] lg:text-[24px]">
                  {point}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
