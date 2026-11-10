import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const products = [
  {
    id: "cloud",
    title: "Foundry Cloud",
    desc: "Powerful cloud hosting on our own data centres. Your data stays local, safe, and entirely under our control with massive scalability.",
    link: "/products/cloud",
    btnLabel: "Explore Cloud",
    image:
      "https://media.istockphoto.com/id/2245861123/photo/aerial-view-data-center.webp?s=612x612&w=0&k=20&c=rLNMn9kyObNZExi07J7I67yd94o8z-AK0k_pfnW8V4M=",
  },
  {
    id: "data",
    title: "Foundry Data",
    desc: "Transform raw data into actionable insights with our advanced analytics and reporting tools, designed to help you make informed decisions. ",
    link: "/products/data",
    btnLabel: "Explore Data",
    image:
      "https://media.istockphoto.com/id/2166973319/photo/aerial-view-of-luandas-coastline-and-urban-landscape-in-angola.webp?s=612x612&w=0&k=20&c=Rkc9jq9q1l-YcPJLGc3fqhmAUuSTbG2-9EnEeB4e69Q=",
  },
  {
    id: "ai",
    title: "BridgeIntelligence",
    desc: "Harness the power of artificial intelligence with our cutting-edge AI solutions, enabling businesses to automate processes, gain predictive insights, and drive innovation.  ",
    link: "/bridge-intelligence",
    btnLabel: "Explore AI",
    image:
      "https://media.istockphoto.com/id/2050780380/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?s=612x612&w=0&k=20&c=NjcxyCS1vjVqqLl6yv6GyPveBGTTUMR5MRN799x7kVs=",
  },
  {
    id: "enterprise",
    title: "Foundry Enterprise",
    tags: ["ERP", "OPERATIONS", "SCALE"],
    desc: "A comprehensive suite of enterprise solutions designed to streamline complex operations, enhance collaboration, and drive growth for large organizations.",
    link: "/products/enterprise",
    btnLabel: "Explore Enterprise",
    image:
      "https://media.istockphoto.com/id/1321495390/photo/onne-estate-camp-nigeria-orlean-invest-intels.webp?s=612x612&w=0&k=20&c=dWkjiDCTSoFYnJ2DiVcwBzINewHeGFgRLCEurn6B2Fc=",
  },
  {
    id: "security",
    title: "Foundry Protector",
    desc: "Protect your digital assets with our advanced security solutions, offering robust protection against cyber threats and ensuring the integrity of your data and systems.  ",
    link: "/products/security",
    btnLabel: "Explore Security",
    image:
      "https://media.istockphoto.com/id/1187179311/photo/overhead-view-of-modern-office.webp?s=612x612&w=0&k=20&c=8eNP7IDSagdU0_rvGQtjf_irMmhItt5OLedz6tEoAKA=",
  },
];

export default function ProductsGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#FAFAFA] py-12 sm:py-20 lg:py-24"
      aria-labelledby="home-products-title"
      ref={ref}
    >
      <div className="site-container relative z-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="site-eyebrow mb-2">Platform</p>
            <h2 id="home-products-title" className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Explore our products</h2>
          </div>
          <Link className="site-button site-button-outline" to="/products">View all products</Link>
        </div>
        {/* Carousel Container */}
        <div className="relative w-full max-w-[1200px] mx-auto">
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
              {products.map((product, index) => (
                <div
                  key={product.id}
                  aria-hidden={index !== currentIndex}
                  className="w-full flex-shrink-0 px-2 lg:px-4"
                >
                  <div className="group w-full bg-white rounded-[20px] lg:rounded-[32px] border border-rule/40 overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 lg:min-h-[430px]">
                    {/* ── Left Content (Wink Digital Style) ── */}
                    <div className="lg:w-[50%] p-5 sm:p-10 lg:p-14 flex flex-col justify-center">

                      <h3 className="text-[32px] md:text-[44px] font-medium text-slate-900 mb-6 tracking-tight leading-[1.1] uppercase">
                        {product.title}
                      </h3>

                      <p className="text-[17px] leading-[1.6] text-slate-600 mb-10 max-w-[90%]">
                        {product.desc}
                      </p>

                      <div className="mt-auto">
                        <Link
                          to={product.link}
                          tabIndex={index === currentIndex ? undefined : -1}
                          className="inline-flex items-center justify-center gap-2 bg-[#004ADD] text-white px-8 py-4 font-bold text-[14px] hover:bg-[#003399] transition-colors rounded-sm w-fit group-hover:-translate-y-1 group-hover:shadow-lg duration-300"
                        >
                          {product.btnLabel}
                          <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* ── Right Image (Edge to Edge) ── */}
                    <div className="lg:w-[50%] h-48 sm:h-64 lg:h-auto overflow-hidden relative bg-slate-100">
                      <img
                        src={product.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Subtle inner shadow for depth */}
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
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
              aria-label="Previous product"
            >
              <RiArrowLeftLine className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-1.5">
              {products.map((_, idx) => (
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
              aria-label="Next product"
            >
              <RiArrowRightLine className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
