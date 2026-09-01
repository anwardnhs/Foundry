import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiServerLine,
  RiShieldKeyholeLine,
  RiFlashlightLine,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

// ─── Data Center Specs (From Corporate Profile) ───────────────────────────────
const facilities = [
  {
    city: "Lagos",
    region: "West Africa",
    capacity: "22MW",
    focus: "Government & Public Sector",
    desc: "The flagship facility anchoring West African government enterprise clouds and sovereign data, designed for maximum resilience and security.",
  },
  {
    city: "Nairobi",
    region: "East Africa",
    capacity: "16MW",
    focus: "Enterprise & Cloud Services",
    desc: "A high-performance data center supporting East African enterprises and cloud service providers, optimized for low-latency and high-throughput workloads.",
  },
  {
    city: "Johannesburg",
    region: "Southern Africa",
    capacity: "14MW",
    focus: "Financial Services",
    desc: "A secure, Tier-III certified facility catering to the financial services sector, ensuring compliance with regional regulations and industry standards.",
  },
  {
    city: "Cairo",
    region: "North Africa",
    capacity: "11MW",
    focus: "Enterprise Pipelines",
    desc: "A state-of-the-art data center serving North African enterprises, providing robust infrastructure for mission-critical applications and data pipelines.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FoundryWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 border-b border-rule font-sans"
      aria-label="Foundry Works Infrastructure"
    >
      <div className="site-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
        >
          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
            <div className="max-w-3xl">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F6F9FC] border border-rule text-[12px] font-bold uppercase tracking-widest text-subtle">
                  <RiServerLine className="w-4 h-4" />
                  Foundry Works
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[36px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6"
              >
                The "cloud" is a physical place.{" "}
                <br className="hidden sm:block" />
                We built ours from the ground up.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[18px] text-[#425466] leading-[1.6]"
              >
                Foundry operates a proprietary network of data centers across
                Africa, providing a secure and resilient foundation for
                enterprise operations. Our facilities are designed to meet the
                most demanding requirements for uptime, security, and
                performance.
              </motion.p>
            </div>

            {/* Global Specs Block */}
            <motion.div
              variants={fadeUp}
              className="shrink-0 flex gap-8 lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-accent pl-6 lg:pl-0 lg:pr-6"
            >
              <div>
                <div className="text-[32px] font-medium text-[#0A2540] tracking-tight">
                  63<span className="text-accent">MW</span>
                </div>
                <div className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Total Capacity
                </div>
              </div>
              <div>
                <div className="text-[32px] font-medium text-[#0A2540] tracking-tight">
                  Tier-III
                </div>
                <div className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Certification
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── 4-Column Technical Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl border border-rule overflow-hidden hover:shadow-[0_20px_40px_rgba(10,37,64,0.06)] transition-all duration-300 flex flex-col"
              >
                {/* Simulated Server Rack Header */}
                <div className="h-12 bg-[#F6F9FC] border-b border-rule flex items-center px-5 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-subtle">
                      {facility.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Location Meta */}
                  <div className="mb-8">
                    <span className="font-mono text-[12px] text-[#0A2540] tracking-widest uppercase block mb-2">
                      {facility.region}
                    </span>
                    <h3 className="text-[24px] font-medium text-[#0A2540] tracking-tight">
                      {facility.city}
                    </h3>
                  </div>

                  {/* MegaWatt Capacity Display */}
                  <div className="mb-6 flex items-center gap-3 border-b border-rule pb-6">
                    <div>
                      <div className="text-[24px] font-medium text-[#0A2540] leading-none">
                        {facility.capacity}
                      </div>
                    </div>
                  </div>

                  {/* Description & Role */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <RiShieldKeyholeLine className="w-4 h-4 text-subtle" />
                      <span className="text-[13px] font-bold text-[#0A2540]">
                        {facility.focus}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#425466] leading-[1.6]">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
