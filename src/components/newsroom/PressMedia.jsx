import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiMailSendLine, RiDownloadCloud2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PressMedia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-white py-12 lg:py-16 font-sans"
      aria-label="Press and Media"
    >
      <div className="site-container max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
        >
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-50 via-slate-50 to-indigo-50/40 border border-slate-200 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
            {/* ── Text Content ── */}
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <RiMailSendLine className="w-5 h-5" />
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-slate-900 tracking-tight">
                  For press enquiries.
                </h2>
              </div>

              <p className="text-[16px] text-slate-600 leading-[1.6]">
                Members of the media can reach our corporate communications team
                directly at{" "}
                <a
                  href="mailto:press@foundry.com"
                  className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  press@foundry.com
                </a>
                .
              </p>
              <p className="text-[14px] text-slate-500 font-medium">
                Standard response time is within 4 hours during business days.
              </p>
            </div>

            {/* ── CTA Button ── */}
            <div className="shrink-0 w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full md:w-auto h-12 px-6 rounded-full border-slate-200 bg-white hover:bg-slate-50 hover:text-indigo-600 text-slate-700 font-medium shadow-sm transition-all duration-300"
              >
                <RiDownloadCloud2Line className="w-5 h-5 mr-2" />
                Download Press Kit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
