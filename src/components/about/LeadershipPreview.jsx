import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

// ─── Image Imports (Using your specified .webp assets) ───────────────────────
import tundeImg from "@/assets/images/tunde.webp";
import aaravImg from "@/assets/images/aarav.webp";
import felixImg from "@/assets/images/felix.webp";

// ─── Executive Cabinet Data ───────────────────────────────────────────────────
const executives = [
  {
    name: "Tunde Adesanya",
    title: "Chief Executive Officer",
    image: tundeImg,
  },
  {
    name: "Aarav Kumar Sharma",
    title: "Chief Operating Officer",
    image: aaravImg,
  },
  {
    name: "Felix Onwudiwe",
    title: "Chief Technology Officer",
    image: felixImg,
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeadershipPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 border-b w-fit border-rule font-sans"
      aria-label="Leadership Preview"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
        >
          {/* ── Section Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A2540]">
                  Our Leadership
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[36px] sm:text-[44px] font-medium text-[#0A2540] leading-[1.1] tracking-tight"
              >
                Guided by decades of <br className="hidden sm:block" />
                institutional experience.
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 pb-2">
              <Link
                to="/leadership"
                className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#0A2540] hover:text-accent transition-colors"
              >
                View full Board & Leadership
                <RiArrowRightLine className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* ── Executive Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group flex flex-col"
              >
                {/* Image Container with Editorial Interaction */}
                <div className="relative w-80 aspect-[4/5] rounded-none overflow-hidden mb-6 bg-mist border border-rule">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out saturate-[0.2] group-hover:saturate-100 group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner shadow for a premium embedded look */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-[22px] font-bold text-[#0A2540] tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">
                    {exec.name}
                  </h3>
                  <div className="text-[14px] font-bold text-subtle uppercase tracking-widest mb-4">
                    {exec.title}
                  </div>
                  <p className="text-[15px] text-[#425466] leading-[1.6]">
                    {exec.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
