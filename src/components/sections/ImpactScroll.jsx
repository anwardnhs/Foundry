import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const stories = [
  {
    id: "finance",
    title: "Helping families build steadier futures.",
    text: "For many people, the difference between getting by and getting ahead is access to simple, trustworthy financial tools. We rebuilt the systems behind everyday banking so more families could save, borrow, and plan with confidence without being left behind.",
    linkText: "Explore financial services",
    link: "/solutions/financial",
  },
  {
    id: "talent",
    title: "Making work feel more human, more inclusive.",
    text: "People do their best work when they feel seen, supported, and valued. We’re creating teams where people can grow, learn, and bring their whole selves to work—because better careers begin with better culture and real opportunity.",
    linkText: "Explore our culture",
    link: "/careers#culture",
  },
  {
    id: "community",
    title: "Keeping essential services running where they matter most.",
    text: "Real impact shows up in the everyday moments that people rely on most: getting supplies on time, accessing public services, and staying connected when life is busy and unpredictable. We worked to make those systems more resilient for the communities that depend on them every day.",
    linkText: "Explore public sector solutions",
    link: "/solutions/public-sector",
  },
];

export default function ImpactScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-mono uppercase tracking-widest text-[#004ADD] border border-slate-200 mb-6 shadow-sm">
            Real Stories, Real Impact
          </span>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-medium text-[#0A0A0A] leading-[1.05] tracking-tight">
            The technology global
            <br className="hidden md:block" /> institutions rely on.
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          <div className="overflow-hidden w-full pb-8">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 40, x: "0%" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, x: `-${currentIndex * 100}%` }
                  : { opacity: 0, y: 40, x: "0%" }
              }
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  aria-hidden={index !== currentIndex}
                  className="w-full flex-shrink-0 px-2 lg:px-4"
                >
                  <div className="group w-full h-full bg-white rounded-[20px] lg:rounded-[32px] border border-rule/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 p-5 sm:p-10 lg:p-14 flex flex-col items-start justify-center">
                    <h3 className="text-[32px] md:text-[44px] font-medium text-slate-900 mb-6 tracking-tight leading-[1.1]">
                      {story.title}
                    </h3>

                    <p className="text-[17px] md:text-[19px] text-[#425466] leading-[1.6] mb-10 max-w-[90%]">
                      {story.text}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={story.link}
                          tabIndex={index === currentIndex ? undefined : -1}
                        className="inline-flex items-center justify-center gap-2 bg-[#004ADD] text-white px-8 py-4 font-bold text-[14px] hover:bg-[#003399] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
                      >
                        {story.linkText}
                        <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
          >
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#004ADD] hover:border-transparent hover:shadow-md transition-all duration-300"
              aria-label="Previous story"
            >
              <RiArrowLeftLine className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-1.5">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-rule text-sm font-semibold text-navy hover:bg-surface aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white"
                  aria-pressed={currentIndex === idx}
                  aria-label={"Go to slide " + (idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#004ADD] hover:border-transparent hover:shadow-md transition-all duration-300"
              aria-label="Next story"
            >
              <RiArrowRightLine className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
