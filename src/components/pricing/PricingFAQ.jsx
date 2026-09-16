import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { faqs } from "@/data/pricing";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function PricingFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* ─── Premium Unsplash Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, light colorful gradient from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2529&auto=format&fit=crop"
          alt="Abstract background gradient"
          className="w-full h-full object-cover opacity-[0.15]"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white" />
      </div>

      <div className="site-container max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
        >
          {/* ── LEFT: Sticky Editorial Section ── */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-40 shrink-0">
            <motion.div variants={fadeUp}>
              <h2 className="text-[36px] sm:text-[44px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Common <br className="hidden lg:block" />
                questions.
              </h2>

              <p className="text-[17px] text-slate-600 leading-[1.6] mb-8 font-normal">
                Everything you need to know about the platform, our billing
                infrastructure, data residency, and procurement processes.
              </p>

              {/* Support CTA (Soften borders & rounded corners to match Stripe style) */}
              <div className="p-8 bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-[24px] shadow-sm">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-[14px] text-slate-500 mb-6 leading-[1.5]">
                  Our enterprise team is available to help architect the right
                  plan for your institution.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Contact our sales team
                  <RiArrowRightUpLine className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: FAQ Accordion ── */}
          <motion.div variants={fadeUp} className="w-full lg:w-[65%]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  // Adding top border to the first item so the list looks perfectly framed
                  className={`border-b border-slate-200 ${index === 0 ? "border-t" : ""}`}
                >
                  <AccordionTrigger className="text-left px-2 sm:px-4 py-6 hover:no-underline group hover:bg-slate-50/50 rounded-lg transition-colors mt-1">
                    <h3 className="text-[16px] sm:text-[17px] font-medium text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors pr-6">
                      {faq.q}
                    </h3>
                  </AccordionTrigger>

                  <AccordionContent className="px-2 sm:px-4 pb-8 pt-2">
                    <p className="text-[15px] text-slate-600 leading-[1.7] max-w-2xl">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
