import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiCheckLine, RiSubtractLine } from "react-icons/ri";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { featureCategories } from "@/data/pricing";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function FeatureComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Helper to render cell content (handles booleans vs strings)
  const renderCell = (value, isGrowth) => {
    if (value === true) {
      return <RiCheckLine className="w-5 h-5 text-indigo-600 mx-auto" />;
    }
    if (value === false) {
      return (
        <RiSubtractLine className="w-5 h-5 text-slate-300 mx-auto opacity-70" />
      );
    }
    return (
      <span
        className={cn(
          "text-[14px] font-medium text-center block",
          isGrowth ? "text-indigo-950 font-semibold" : "text-slate-600",
        )}
      >
        {value}
      </span>
    );
  };

  // Open all accordion categories by default for easy scanning
  const defaultCategories = featureCategories.map((c) => c.category);

  return (
    <section
      className="bg-[#FAFAFA] py-24 lg:py-32 font-sans relative overflow-hidden"
      aria-label="Feature Comparison"
    >
      {/* ─── Premium Unsplash Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, light purple/blue abstract from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2529&auto=format&fit=crop"
          alt="Abstract background gradient"
          className="w-full h-full object-cover opacity-[0.12]"
        />
        {/* Gradient overlay to ensure the table pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#FAFAFA]/90 to-[#FAFAFA]" />
      </div>

      <div className="site-container max-w-5xl relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-slate-900 tracking-tight mb-4">
              Compare plans in detail.
            </h2>
            <p className="text-[18px] text-slate-600 max-w-2xl font-normal">
              A comprehensive breakdown of infrastructure allocation, modules,
              support tiers, and compliance standards across the unified
              platform.
            </p>
          </motion.div>
        </div>

        {/* ── Feature Accordion & Tables ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="bg-white border border-slate-200/60 rounded-[24px] shadow-sm overflow-hidden"
        >
          {/* Global Sticky Table Header (Visible on Desktop) */}
          <div className="hidden sm:flex border-b border-slate-200 bg-slate-900">
            <div className="w-[40%] px-6 py-5" />
            <div className="w-[20%] px-6 py-5 text-center border-l border-white/10 font-semibold text-[13px] text-white tracking-wide">
              Starter
            </div>
            {/* Growth Column Highlight */}
            <div className="w-[20%] px-6 py-5 text-center bg-indigo-600 border-l border-r border-indigo-500 font-semibold text-[13px] text-white tracking-wide relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400" />
              Growth
            </div>
            <div className="w-[20%] px-6 py-5 text-center font-semibold text-[13px] text-white tracking-wide">
              Enterprise
            </div>
          </div>

          <Accordion
            type="multiple"
            defaultValue={defaultCategories}
            className="w-full"
          >
            {featureCategories.map((category, idx) => (
              <AccordionItem
                key={idx}
                value={category.category}
                className="border-b border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-colors data-[state=open]:bg-slate-50/50">
                  <h3 className="text-[16px] font-semibold text-slate-900 tracking-tight">
                    {category.category}
                  </h3>
                </AccordionTrigger>

                <AccordionContent className="pb-0 pt-0">
                  <div className="flex flex-col">
                    {category.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex flex-col sm:flex-row border-t border-slate-200 group relative"
                      >
                        {/* Feature Name */}
                        <div className="w-full sm:w-[40%] px-6 py-4 flex items-center">
                          <span className="text-[15px] font-medium text-slate-700">
                            {feature.name}
                          </span>
                        </div>

                        {/* Mobile View: Shows labels inline */}
                        <div className="sm:hidden w-full flex flex-col gap-2 px-6 pb-4 pt-0">
                          <div className="flex justify-between items-center py-2 border-b border-slate-100">
                            <span className="text-[12px] font-medium text-slate-500">
                              Starter
                            </span>
                            {renderCell(feature.starter, false)}
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-slate-100 bg-indigo-50/30 px-2 rounded-md -mx-2">
                            <span className="text-[12px] font-semibold text-indigo-700">
                              Growth
                            </span>
                            {renderCell(feature.growth, true)}
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-[12px] font-medium text-slate-500">
                              Enterprise
                            </span>
                            {renderCell(feature.enterprise, false)}
                          </div>
                        </div>

                        {/* Desktop View: Proper Grid Alignment */}
                        <div className="hidden sm:flex w-[20%] px-6 py-4 items-center justify-center border-l border-slate-200">
                          {renderCell(feature.starter, false)}
                        </div>

                        {/* Growth Column Highlight */}
                        <div className="hidden sm:flex w-[20%] px-6 py-4 items-center justify-center border-l border-r border-slate-200 bg-indigo-50/40 group-hover:bg-indigo-50/70 transition-colors">
                          {renderCell(feature.growth, true)}
                        </div>

                        <div className="hidden sm:flex w-[20%] px-6 py-4 items-center justify-center">
                          {renderCell(feature.enterprise, false)}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
