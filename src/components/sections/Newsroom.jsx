import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

const featuredStory = {
  tag: "Corporate",
  date: "Jun 10, 2026",
  title: "Bridgesoft Cloud Launches New Cloud Platform for SMEs in Nigeria",
  desc: "The platform aims to provide affordable, scalable, and secure cloud services to help SMEs accelerate their digital transformation.",
  image:
    "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  href: "/news/cloud-mandate",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Newsroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 border-t border-rule font-sans"
      aria-label="Newsroom"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.span
                variants={fadeUp}
                className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent block mb-4"
              >
                Newsroom
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[36px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight"
              >
                Latest from Bridgesoft
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/newsroom"
                className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#0A2540] hover:text-accent transition-colors"
              >
                View all announcements
                <RiArrowRightSLine className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              to={featuredStory.href}
              className="group relative block w-full h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(10,37,64,0.1)]"
            >
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent lg:hidden" />

              <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-end lg:justify-center w-full lg:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest">
                    {featuredStory.tag}
                  </span>
                  <span className="text-white/70 font-mono text-[13px]">
                    {featuredStory.date}
                  </span>
                </div>

                <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] font-medium text-white leading-[1.1] tracking-tight mb-6">
                  {featuredStory.title}
                </h3>

                <p className="text-[16px] sm:text-[18px] text-white/80 leading-[1.5] max-w-lg mb-8 hidden sm:block">
                  {featuredStory.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-accent transition-colors">
                  Read the story
                  <RiArrowRightSLine className="ml-1 w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
