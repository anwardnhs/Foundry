import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Timeline Data ────────────────────────────────────────────────────────────
const timeline = [
  {
    year: "1998",
    title: "The Foundation",
    desc: "Foundry is founded with a vision to provide robust, scalable software solutions for enterprises across Africa. The company quickly establishes itself as a trusted partner for mission-critical applications.",
  },
  {
    year: "2001",
    title: "Earning the Public Trust",
    desc: "Foundry secures its first major government contract, delivering a nationwide payroll system that serves millions of citizens. This milestone cements the company's reputation for reliability and excellence.",
  },
  {
    year: "2006",
    title: "Public Market Debut",
    desc: "Bridgsoft goes public on the Nigerian Stock Exchange (NSE: BSFT), raising $120 million to fuel expansion into new markets and invest in cutting-edge technology.",
  },
  {
    year: "2009",
    title: "The Cloud Era",
    desc: "Foundry launches its first cloud-based enterprise platform, enabling clients to access critical applications and data from anywhere. This innovation positions the company as a leader in cloud computing across Africa.",
  },
  {
    year: "2015",
    title: "Global Dual-Listing",
    desc: "Foundry achieves a dual-listing on the London Stock Exchange (LSE: BSFT), expanding its investor base and increasing international visibility. The company continues to grow its footprint across multiple continents.",
  },
  {
    year: "2025",
    title: "BridgeIntelligence",
    desc: "Foundry unveils BridgeIntelligence, an AI-driven analytics platform that empowers organizations to make data-driven decisions. This marks a new era of innovation and positions Foundry at the forefront of intelligent enterprise solutions.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OriginStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the line based on scroll progress
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Origin Story"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative items-start">
          {/* ── LEFT: Sticky Editorial Column ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 self-start">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="mb-6">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
                  Our Origin
                </span>
              </div>

              <h2 className="text-[36px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-8">
                From Humble Beginnings to Global Impact
              </h2>

              <div className="space-y-6 text-[17px] text-[#425466] leading-[1.6]">
                <p>
                  Foundry was founded in 1998 with a vision to provide
                  robust, scalable software solutions for enterprises across
                  Africa. Over the years, we have grown into a trusted partner
                  for mission-critical applications, serving banks, insurers,
                  governments, and healthcare institutions.
                </p>
                <p>
                  Our journey has been marked by innovation, integrity, and a
                  commitment to excellence. From securing our first major
                  government contract in 2001 to launching our AI-driven
                  analytics platform, BridgeIntelligence, in 2025, we have
                  consistently pushed the boundaries of technology to empower
                  organizations worldwide.
                </p>
                <p>
                  Today, Foundry stands as a testament to what can be
                  achieved with vision, dedication, and a relentless pursuit of
                  quality. We continue to build software solutions that not only
                  meet the needs of our clients but also drive meaningful impact
                  across industries.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Animated Scrolling Timeline ── */}
          <div className="lg:col-span-7 relative" ref={containerRef}>
            {/* The Background Line (Faded) */}
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-[#F6F9FC] md:left-6" />

            {/* The Animated Line (Accent Color) */}
            <motion.div
              className="absolute left-4 top-2 bottom-2 w-[2px] bg-accent md:left-6 origin-top"
              style={{ scaleY }}
            />

            {/* Timeline Items */}
            <div className="flex flex-col gap-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* The Timeline Dot */}
                  <motion.div
                    initial={{
                      scale: 0,
                      backgroundColor: "#ffffff",
                      borderColor: "#E2E8F0",
                    }}
                    whileInView={{
                      scale: 1,
                      backgroundColor: "#004ADD",
                      borderColor: "#004ADD",
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-[13px] md:left-[21px] top-1.5 w-[6px] h-[6px] rounded-full border-2 bg-white z-10"
                  />

                  {/* Year Tag */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-mono text-[13px] font-bold tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A2540] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#425466] leading-[1.6]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
