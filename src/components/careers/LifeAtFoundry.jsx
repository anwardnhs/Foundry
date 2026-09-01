import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data & Images ────────────────────────────────────────────────────────────
// Using the exact Unsplash links you provided
const lifeImages = [
  {
    id: "collab",
    src: "https://images.unsplash.com/photo-1683107983270-38225df18859?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Radical Collaboration",
    subtitle: "Building together",
  },
  {
    id: "focus",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    title: "Deep Focus",
    subtitle: "Solving hard problems",
  },
  {
    id: "wins",
    src: "https://images.unsplash.com/photo-1632923945736-f8d20278a302?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Shared Milestones",
    subtitle: "Celebrating our wins",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function LifeAtFoundry() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans overflow-hidden"
      aria-label="Life at Foundry"
    >
      <div className="site-container max-w-[1400px]">
        {/* ─── Editorial Header ─── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24 px-4"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[48px] md:text-[64px] lg:text-[80px] font-medium text-slate-900 leading-[0.95] tracking-tighter"
          >
            More than just <br className="hidden md:block" /> a workplace.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[18px] lg:text-[20px] text-slate-500 max-w-sm leading-[1.6]"
          >
            We foster an environment where exceptional talent thrives. Dive into
            the culture that drives our innovation.
          </motion.p>
        </motion.div>

        {/* ─── Interactive Expansion Gallery (Awwwards Style) ─── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col md:flex-row h-[800px] md:h-[650px] lg:h-[750px] w-full gap-4 lg:gap-6 px-4"
        >
          {lifeImages.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              // The magic happens here: flex-1 transitions to flex-[3] on hover
              className="group relative flex-1 md:hover:flex-[3] min-w-0 min-h-[200px] rounded-[32px] overflow-hidden cursor-pointer transition-all duration-&lsqb;800ms&rsqb; ease-&lsqb;cubic-bezier(0.16,1,0.3,1)&rsqb; shadow-sm hover:shadow-xl"
            >
              {/* Image Layer */}
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-&lsqb;1000ms&rsqb; ease-&lsqb;cubic-bezier(0.16,1,0.3,1)&rsqb; group-hover:scale-105"
              />

              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 opacity-70 md:opacity-40 group-hover:opacity-90 transition-opacity duration-700 ease-in-out" />

              {/* Text Content Overlay */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                <div className="md:opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-&lsqb;800ms&rsqb; ease-&lsqb;cubic-bezier(0.16,1,0.3,1)&rsqb; delay-100">
                  <span className="inline-block px-3 py-1 mb-4 text-[12px] font-bold tracking-widest uppercase text-white bg-white/20 backdrop-blur-md rounded-full">
                    {item.subtitle}
                  </span>
                  {/* whitespace-nowrap prevents the title from stacking awkwardly while the flex container is animating */}
                  <h3 className="text-[28px] lg:text-[40px] font-semibold text-white tracking-tight leading-[1.1] whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
