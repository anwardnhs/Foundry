import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import careersIllustration from "@/assets/images/person3.svg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 pb-32 font-sans border-t border-rule"
      aria-label="Careers"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-rule shadow-[0_20px_40px_rgba(10,37,64,0.05)] bg-white"
        >
          {/* Main Card Wrapper: Ensure this splits into 2 columns on desktop */}
          <div className="relative w-full overflow-hidden rounded-[2rem] bg-white border border-rule shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-2">
            {/* === LEFT SIDE: Text Content === */}
            <div className="flex flex-col justify-center p-10 lg:p-16 z-10">
              <p className="text-[11px] font-bold tracking-[0.15em] text-[#0A2540] uppercase mb-4">
                Join Our Team
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#0A2540] leading-[1.1] tracking-tight mb-6">
                People are the heart of Foundry. We're building a culture
                where everyone can do their best work and grow with us.
              </h2>
              <p className="text-[15px] text-[#0A2540] leading-relaxed mb-8 max-w-lg">
                At Foundry, we believe that our people are our greatest
                asset. We are committed to creating a diverse and inclusive
                workplace where everyone can thrive. Join us and be part of a
                team that is making a real impact across Africa.
              </p>
              <div>
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2540] hover:text-accent transition-colors"
                >
                  Learn more about our culture
                  <RiArrowRightLine className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* === RIGHT SIDE: Illustration === */}
            {/* The container is relative, but the image flows naturally inside it */}
            <div className="relative flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-[#F6F9FC] to-white min-h-[400px] lg:min-h-full">
              <img
                src={careersIllustration}
                alt="Careers and teamwork illustration"
                className="w-full h-full max-h-[500px] object-contain object-center drop-shadow-xl"
              />

              {/* The Badge is positioned absolute *only* to this right container */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A2540] backdrop-blur-md shadow-sm">
                  Built to grow
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
