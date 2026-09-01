import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiShieldCheckLine, RiArrowRightLine } from "react-icons/ri";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RegulatoryNote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-white py-24 font-sans border-b border-rule"
      aria-label="Regulatory Oversight"
    >
      <div className="site-container max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="w-8 h-px bg-[#0A2540]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540]">
              Compliance & Governance
            </span>
            <div className="w-8 h-px bg-[#0A2540]" />
          </div>

          <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-6 flex items-center gap-3 justify-center">
            <RiShieldCheckLine className="w-8 h-8 text-[#0A2540]" />
            Regulatory Oversight
          </h2>

          <p className="text-[16px] text-[#425466] leading-[1.6] mb-8 max-w-2xl mx-auto">
            Foundry Plc is strictly regulated by the{" "}
            <strong>Securities and Exchange Commission (SEC) Nigeria</strong>{" "}
            and the <strong>Financial Conduct Authority (FCA)</strong> in the
            United Kingdom. We adhere entirely to the corporate governance and
            continuous disclosure guidelines established by the Nigerian
            Exchange Group (NGX) and the UK Listing Authority.
          </p>

          <Link
            to="/newsroom"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#0A2540] uppercase tracking-widest hover:text-accent transition-colors"
          >
            Access the Newsroom for Announcements
            <RiArrowRightLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
