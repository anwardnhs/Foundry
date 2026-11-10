import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

// Import the SVG asset
import personSvg from "@/assets/images/person.svg";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

// ─── Main Hero Component ──────────────────────────────────────────────────────
export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax scroll effect
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 250]); // Moves down slower than scroll

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh w-full items-center overflow-hidden bg-ink pb-12 pt-28 sm:pb-16 lg:pt-24"
    >
      {/* ─── Background Subtle Glow ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-overlay" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[200px]" />
      </div>

      <div className="site-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* ─── Left Column (Text & Button) ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          {/* Massive, elegant typography with word-stagger animation */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            className="site-page-title mb-6 flex flex-wrap gap-x-3 text-white"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              Bridging
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-blue-400"
            >
              Innovation
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              and
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-blue-400"
            >
              Intelligence.
            </motion.span>
          </motion.h1>

          {/* Clean, minimalist subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[22px] text-white/70 leading-[1.6] max-w-[480px] mb-10 font-light tracking-wide"
          >
            Cloud infrastructure, enterprise software, and AI for organizations across Africa.
          </motion.p>

          {/* Stark, high-contrast button */}
          <motion.div variants={fadeUp}>
            <Link
              to="/products"
              className="site-button site-button-light group"
            >
              <span className="text-[13px] font-bold uppercase tracking-widest">
                Explore our platform
              </span>
              <RiArrowRightSLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ─── Right Column (Parallax SVG Image) ─── */}
        <div className="lg:col-span-7 min-h-0 relative flex items-center justify-center">
          <motion.div
            style={{ y: reduceMotion ? 0 : yImage }}
            className="relative w-full h-full flex items-center justify-center pt-10 lg:pt-0"
          >
            {/* The SVG Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              src={personSvg}
              alt="Bridge Intelligence Platform"
              className="w-full h-full object-contain max-h-[48vh] lg:max-h-[72vh] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
